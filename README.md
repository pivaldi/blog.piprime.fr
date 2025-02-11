# Work in progress !

**DO NOT USE THIS REPOSITORY, IT WILL BE COMPLETELY REBASED.**

# Usage

## With Docker

If you have [https://www.docker.com/](Docker) installed on your computer/server, it's the simpler
method to run this blog.

1. Build the Docker image and install dependencies with the command `make install`.
1. Launch :
   - `make dev` : serves with the drafts **or**
   - `make production` : serves without the drafts **or**
   - `make deploy` : generates the static web site in `./hexo/public`

## Without Docker

1. [Install Node.js](https://nodejs.org/en/download) yourself
1. [Install Hexo](https://hexo.io/docs/#Install-Hexo) yourself executing for example `npm install -g hexo-cli`.
1. Goto the directory `hexo` with `cd hexo` and install the dependencies with `make install`.
2. You can run **in the directory `hexo`** :
   - `make dev` : serves with the drafts **or**
   - `make production` : serves without the drafts **or**
   - `make deploy` : generates the static web site in `./hexo/public`

# NGinx

To use NGinx, insall the Ngnix docker image with `docker pull nginx` then
1. 

# License

The scripts & files' configuration are MIT licensed.  
The Markdown files & website content are NOT and the copyright belongs
to Philippe IVALDI.  
This means normal copyright law applies to that I.e. **don't republish my website without my permission**.
