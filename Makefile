SHELL := /bin/bash
.DEFAULT_GOAL := all

DOCKER_CADDY_IMAGE_NAME=blog-piprime-fr_caddy

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

.PHONY: deploy
deploy:
	docker compose up hexo && make serve

.PHONY: serve
serve:
	@docker ps --filter name=$(DOCKER_CADDY_IMAGE_NAME) | grep -q $(DOCKER_CADDY_IMAGE_NAME) || docker compose up caddy -d

.PHONY: dev
dev: docker
	docker compose run dev

.PHONY: clean
clean: docker
	docker compose run clean

.PHONY: update
update: docker
	docker compose run update
