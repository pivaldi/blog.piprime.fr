# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual (English/French) blog built with Hexo static site generator, using the NexT theme. The blog is deployed using Docker with Caddy as the web server.

## Architecture

### Directory Structure

- `hexo/` - Main Hexo blog directory
  - `source/_posts/` - Blog posts organized by language (`en/`, `fr/`)
  - `source/media/` - Media assets for posts
  - `scripts/` - Hexo hooks and custom scripts
  - `themes/next/` - NexT theme (git submodule)
  - `_config.yml` - Main Hexo configuration
  - `_config.next.yml` - NexT theme configuration
- `caddy/` - Caddy web server configuration
- `bin/` - Utility scripts
- `compose.yaml` - Docker Compose services configuration

### Content Organization

- Posts are organized by language in `hexo/source/_posts/{lang}/`
- Each post uses front matter with language-specific metadata
- Media files are stored in `hexo/source/media/` and organized by post topic
- Permalinks follow the pattern `/:lang/:id/`

### Key Hexo Configuration

- **Markdown renderer**: `hexo-renderer-markdown-it-plus` with plugins:
  - markdown-it-abbr, footnote, ins, sub, sup, katex
  - Supports math rendering via KaTeX
- **Generators**: archive, category, index, searchdb, sitemap, tag
- **Server**: hexo-server for development
- **Theme**: NexT with custom configuration in `_config.next.yml`

## Common Development Commands

### Using Docker (Recommended)

From the root directory:

```bash
# Install dependencies and initialize git submodules
make install

# Development server with drafts (runs on port $SERVER_PORT from .envrc)
make dev

# Build and serve production site (no drafts)
make deploy

# Clean generated files
make clean

# Update npm dependencies to latest versions
make update
```

### Without Docker

From the `hexo/` directory:

```bash
# Install dependencies
make install  # or: npm install

# Development server with drafts
make dev  # Uses $SERVER_PORT from environment

# Generate static site
make deploy

# Clean build artifacts
make clean
```

### Hexo Commands

The project uses a custom Hexo invocation defined in `hexo/Makefile`:

```bash
HEXO = node --trace-deprecation node_modules/hexo-cli/bin/hexo
```

Common Hexo operations (from `hexo/` directory):

```bash
# Generate static files
node --trace-deprecation node_modules/hexo-cli/bin/hexo generate

# Start development server
node --trace-deprecation node_modules/hexo-cli/bin/hexo serve --draft --debug -p 4000

# Clean generated files and cache
node --trace-deprecation node_modules/hexo-cli/bin/hexo clean

# Create new post (requires language)
node --trace-deprecation node_modules/hexo-cli/bin/hexo new post "title" --lang en
```

## Docker Services

The `compose.yaml` defines multiple services:

- **hexo**: Builds static site
- **caddy**: Serves production build on `127.0.0.1:$SERVER_PORT`
- **caddy-4-caddy-docker-proxy**: Production deployment with Caddy Docker Proxy
- **dev**: Development server with live reload
- **clean**: Runs hexo clean command
- **update**: Updates npm dependencies

## Environment Variables

The `.envrc` file (symlinked to `.env`) should define:

- `SERVER_PORT`: Port for the web server (default varies by environment)

## Content Creation

### Post Scaffolds

Located in `hexo/scaffolds/`:
- `post.md` - Standard blog post template
- `draft.md` - Draft post template
- `page.md` - Static page template

### Front Matter

Posts use YAML front matter with fields like:
- `title`: Post title
- `lang`: Language code (en/fr)
- `id`: Unique identifier for permalink
- `date`: Publication date
- `tags`: Array of tags
- `categories`: Array of categories

### Media Files

- Store post-specific media in `hexo/source/media/{post-slug}/`
- Reference in markdown using `/media/{post-slug}/{filename}`
- Images support lazy loading via lozad.js

## Important Notes

- The NexT theme is a git submodule - use `git submodule update --init` to initialize
- Configuration is split between `_config.yml` (Hexo) and `_config.next.yml` (theme)
- The site supports bilingual content with language switcher
- Math rendering is enabled via markdown-it-katex
- Custom hooks can be added in `hexo/scripts/hooks.js` (currently commented out)
