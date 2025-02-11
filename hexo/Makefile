SHELL := /bin/bash
.DEFAULT_GOAL := all

# SERVER_PORT=4280 #See ../.envrc

.PHONY: all
all: install clean deploy

.PHONY: production
production: clean
	hexo generate && hexo serve --static --debug -p $(SERVER_PORT)

.PHONY: deploy
deploy: clean
	hexo generate --deploy

.PHONY: dev
dev: clean
	hexo serve --draft --debug -p $(SERVER_PORT)

.PHONY: asy
asy: clean
	bin/asy2hexo-md.sh

.PHONY: clean
clean:
	hexo clean

.PHONY: install
install:
	git submodule update --init && \
	npm install

.PHONY: update
update: docker
	npx npm-check-updates -u && npm install
