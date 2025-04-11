SHELL := /bin/bash
.DEFAULT_GOAL := all

DOCKER_CADDY_IMAGE_NAME=blog-piprime-fr_caddy
DOCKER_CADDY_DOCKER_PROXY_IMAGE_NAME=blog-piprime-fr_caddy-docker-proxy

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
	docker compose up hexo

.PHONY: deploy
deploy: generate
	make serve

.PHONY: deploy-caddy-docker-proxy
deploy-caddy-docker-proxy: generate
	make serve

.PHONY: serve
serve:
	@docker ps --filter name=$(DOCKER_CADDY_IMAGE_NAME) | grep -q $(DOCKER_CADDY_IMAGE_NAME) || docker compose up caddy -d

.PHONY: serve-caddy-docker-proxy
serve-caddy-docker-proxy:
	@docker ps --filter name=$(DOCKER_CADDY_DOCKER_PROXY_IMAGE_NAME) | grep -q $(DOCKER_CADDY_DOCKER_PROXY_IMAGE_NAME) || docker compose up caddy-4-caddy-docker-proxy -d

.PHONY: dev
dev: docker
	docker compose run dev

.PHONY: clean
clean: docker
	docker compose run clean

.PHONY: update
update: docker
	docker compose run update
