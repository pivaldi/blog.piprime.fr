SHELL := /bin/bash
.DEFAULT_GOAL := all

# SERVER_PORT=4280 # See .envrc
# DOCKER_NAME=$(COMPOSE_PROJECT_NAME):latest
# DOCKER_HEXO_RUN=docker run -p 127.0.0.1:$(SERVER_PORT):$(SERVER_PORT) -v $(shell pwd)/hexo:/hexo -t $(DOCKER_NAME)

.PHONY: all
all: install clean deploy

.PHONY: docker
docker:
	docker-compose down --remove-orphans
	docker compose build

.PHONY: docker-no-cache
docker-no-cache:
	docker compose build --no-cache

.PHONY: deploy
deploy:
	docker compose up hexo caddy

.PHONY: serve
serve:
	docker compose up caddy

.PHONY: dev
dev: docker
	docker compose run dev

.PHONY: clean
clean: docker
	docker compose run clean

.PHONY: install
install:
	git submodule update --init

# .PHONY: update
# update: docker
# 	$(DOCKER_HEXO_RUN) make update
