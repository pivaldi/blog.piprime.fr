SHELL := /bin/bash
.DEFAULT_GOAL := all

# SERVER_PORT=4280 # See .envrc
DOCKER_NAME=hexo-blog_hexo
DOCKER_RUN=docker run -p 127.0.0.1:$(SERVER_PORT):$(SERVER_PORT) -v $(shell pwd)/hexo:/root -t $(DOCKER_NAME)

.PHONY: all
all: install clean deploy

.PHONY: docker
docker:
	docker-compose build hexo
# docker build hexo --no-cache -t $(DOCKER_NAME)

.PHONY: docker-no-cache
docker-no-cache:
	docker-compose build --no-cache hexo

.PHONY: production
production: clean
	$(DOCKER_RUN) make production

.PHONY: deploy
deploy: clean
	$(DOCKER_RUN) make deploy

.PHONY: dev
dev:
	docker-compose run --service-port dev
# $(DOCKER_RUN) make dev

.PHONY: asy
asy:
	bin/asy2hexo-md.sh

.PHONY: clean
clean:
	$(DOCKER_RUN) make clean

.PHONY: install
install: docker
	$(DOCKER_RUN) make install

.PHONY: update
update: docker
	$(DOCKER_RUN) make update
