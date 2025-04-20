SHELL := /bin/bash
.DEFAULT_GOAL := all

DOCKER_CADDY_IMAGE_NAME=blog-piprime-fr_caddy
DOCKER_CADDY_DOCKER_PROXY_IMAGE_NAME=blog-piprime-fr_caddy-docker-proxy
CURRENT_DIR := $(dir $(realpath $(lastword $(MAKEFILE_LIST))))

.PHONY: all
all: install clean deploy

.PHONY: install
install:
	git submodule update --init

.PHONY: docker
docker:
	docker-compose down --remove-orphans
	docker compose build

.PHONY: docker-no-cache
docker-no-cache:
	docker compose build --no-cache

.PHONY: generate
generate:
	docker compose up hexo --build

.PHONY: deploy
deploy: generate
	make serve

.PHONY: deploy-caddy-docker-proxy
deploy-caddy-docker-proxy: generate
	make serve

.PHONY: serve
serve:
	@docker ps --filter name=$(DOCKER_CADDY_IMAGE_NAME) | \
	grep -q $(DOCKER_CADDY_IMAGE_NAME) && \
	docker compose restart caddy -d --build || \
	docker compose up caddy -d --build

.PHONY: serve-caddy-docker-proxy
serve-caddy-docker-proxy:
	@docker ps --filter name=$(DOCKER_CADDY_DOCKER_PROXY_IMAGE_NAME) | \
		grep -q $(DOCKER_CADDY_DOCKER_PROXY_IMAGE_NAME) && \
		docker compose restart caddy-4-caddy-docker-proxy -d --build || \
		docker compose up caddy-4-caddy-docker-proxy -d --build

.PHONY: dev
dev: docker
	docker compose run dev

.PHONY: clean
clean: docker
	docker compose run clean

.PHONY: update
update: docker
	docker compose run update

asy-local-sync:
	bin/asy-sync.sh $(CURRENT_DIR)../asymptote/asymptote-exemples-builder/build/md/hexo/ $(CURRENT_DIR)hexo/source/

asy-remote-sync:
	bin/asy-sync.sh $(CURRENT_DIR)../asymptote/asymptote-exemples-builder/build/md/hexo/ piprime:src/blog.piprime.fr/hexo/source/
