SHELL := /bin/bash
.DEFAULT_GOAL := all

DOCKER_CADDY_IMAGE_NAME := blog-piprime-fr_caddy
DOCKER_CADDY_DOCKER_PROXY_IMAGE_NAME := blog-piprime-fr_caddy-docker-proxy
CURRENT_DIR := $(dir $(realpath $(lastword $(MAKEFILE_LIST))))
DOCKER_COMPOSE := docker compose --env-file=.envrc

.PHONY: all
all: install clean deploy

.PHONY: install
install:
	git submodule update --init

.PHONY: docker
docker:
	$(DOCKER_COMPOSE) down --remove-orphans
	$(DOCKER_COMPOSE) build

.PHONY: docker-no-cache
docker-no-cache:
	$(DOCKER_COMPOSE) build --no-cache

.PHONY: generate
generate:
	$(DOCKER_COMPOSE) up hexo --build

.PHONY: deploy
deploy: generate
	make serve

.PHONY: deploy-caddy-docker-proxy
deploy-caddy-docker-proxy: generate
	make serve-caddy-docker-proxy

.PHONY: serve
serve:
	@docker ps --filter name=$(DOCKER_CADDY_IMAGE_NAME) | \
	grep -q $(DOCKER_CADDY_IMAGE_NAME) && \
	$(DOCKER_COMPOSE) restart caddy || \
	$(DOCKER_COMPOSE) up caddy -d --build

.PHONY: serve-caddy-docker-proxy
serve-caddy-docker-proxy:
	@docker ps --filter name=$(DOCKER_CADDY_DOCKER_PROXY_IMAGE_NAME) | \
		grep -q $(DOCKER_CADDY_DOCKER_PROXY_IMAGE_NAME) && \
		$(DOCKER_COMPOSE) restart caddy-4-caddy-docker-proxy || \
		$(DOCKER_COMPOSE) up caddy-4-caddy-docker-proxy -d --build

.PHONY: dev
dev: docker
	$(DOCKER_COMPOSE) run dev

.PHONY: clean
clean: docker
	$(DOCKER_COMPOSE) run clean

.PHONY: update
update: docker
	$(DOCKER_COMPOSE) run update

asy-local-sync:
	bin/asy-sync.sh $(CURRENT_DIR)../asymptote/asymptote-exemples-builder/build/md/hexo/ $(CURRENT_DIR)hexo/source/

asy-remote-sync:
	bin/asy-sync.sh $(CURRENT_DIR)../asymptote/asymptote-exemples-builder/build/md/hexo/ piprime:src/blog.piprime.fr/hexo/source/
