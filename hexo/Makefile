SHELL := /bin/bash
.DEFAULT_GOAL := all
HEXO = node --trace-deprecation node_modules/hexo-cli/bin/hexo

.PHONY: all
all: install clean deploy

.PHONY: deploy
deploy: clean
	$(HEXO) generate --deploy

.PHONY: dev
dev: clean
	$(HEXO) serve --draft --debug -p $(SERVER_PORT)

.PHONY: clean
clean:
	$(HEXO) clean

.PHONY: install
install:
	npm install

.PHONY: update
update:
	npx npm-check-updates -u && npm install
