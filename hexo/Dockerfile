FROM node:bookworm AS builder

SHELL ["/bin/bash", "-c"]

## Default value for SERVER_PORT
ARG SERVER_PORT=4000
## Use environment variable value if set.
EXPOSE ${SERVER_PORT}

RUN DEBIAN_FRONTEND=noninteractive apt-get update && \
    apt-get install --no-install-recommends git -y && \
    rm -rf /var/lib/apt/lists/*
RUN npm install -g npm@latest
RUN npm install -g hexo-cli

WORKDIR /hexo
USER 1000:1000

CMD ["hexo generate --deploy"]
