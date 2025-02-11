SHELL := /bin/bash
.DEFAULT_GOAL := all
HEXO = node --trace-deprecation node_modules/hexo-cli/bin/hexo

# SERVER_PORT=4280 #See ../.envrc

.PHONY: all
all: install clean deploy

.PHONY: production
production: clean
	$(HEXO) generate && $(HEXO) serve --static --debug -p $(SERVER_PORT)

.PHONY: deploy
deploy: clean
	$(HEXO) generate --deploy

.PHONY: dev
dev: clean
	$(HEXO) serve --draft --debug -p $(SERVER_PORT)

.PHONY: asy
asy: clean
	bin/asy2hexo-md.sh

.PHONY: clean
clean:
	$(HEXO) clean

.PHONY: install
install:
	git submodule update --init && \
	npm install

.PHONY: update
update:
	npx npm-check-updates -u && npm install
