SHELL := /bin/bash
.DEFAULT_GOAL := all

# SERVER_PORT=4280 # See .envrc
DOCKER_NAME=$(COMPOSE_PROJECT_NAME):latest
DOCKER_RUN=docker run -p 127.0.0.1:$(SERVER_PORT):$(SERVER_PORT) -v $(shell pwd)/hexo:/hexo -t $(DOCKER_NAME)

.PHONY: all
all: install clean deploy

.PHONY: docker
docker:
	docker-compose build hexo && docker-compose build caddy

.PHONY: docker-no-cache
docker-no-cache:
	docker-compose build --no-cache hexo

.PHONY: deploy
deploy: clean
	docker-compose run --service-port deploy

.PHONY: dev
dev: docker
	docker-compose run --service-port dev

.PHONY: clean
clean:
	docker-compose run clean

.PHONY: install
install:
	git submodule update --init && \
	$(DOCKER_RUN) make install

.PHONY: update
update: docker
	$(DOCKER_RUN) make update
