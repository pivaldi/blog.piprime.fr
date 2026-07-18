SHELL := /bin/bash
.DEFAULT_GOAL := all
HEXO = node --trace-deprecation node_modules/hexo-cli/bin/hexo

.PHONY: all
all: deploy

.PHONY: deploy
deploy: install
	$(HEXO) clean
	$(HEXO) generate --deploy

.PHONY: dev
dev: clean
	$(HEXO) serve --draft --debug -p $(SERVER_PORT)

.PHONY: clean
clean:
	$(HEXO) clean

.PHONY: install
install: node_modules/.package-lock.json

node_modules/.package-lock.json: package-lock.json
	npm ci

.PHONY: update
update:
	npx npm-check-updates -u && npm install
