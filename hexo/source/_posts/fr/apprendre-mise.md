---
title: "Apprendre à utiliser Mise"
date: 2026-02-03 19:04:22
id: apprendre-a-utiliser-mise
lang: fr
description: "Tutoriel pour apprendre à utiliser Mise, un outil de configuration d'environnement de développement super puissant."
categories:
- [FR, Tech, Développement]
- [FR, Tech, Tuto]
tags:
- développement
- dev
- tuto
---

Ce tutoriel se propose de présenter [mise](https://mise.jdx.dev/), un outil de
configuration d'environnement de développement, et d'en survoler les principales capacités et
usages.

## Objectif de `mise`

**Unifier, accélérer et fiabiliser** la gestion des versions et des outils
sans scripts maison à-lac, sans forcément passer par Docker et limiter les « ça marche chez moi ».

## Les problèmes qu’on rencontre tous

* « Tu es en quelle version de Go/PHP/Node etc ? »
* `.nvmrc`, `.tool-versions` ([asdf](https://asdf-vm.com/manage/configuration.html)), `brew install`, scripts bash maison…
* Ça marche en local mais pas en prod ou encore CI ≠ local
* Le onboarding prend 2h sur un README obsolète

Trop d’outils, trop d’états globaux, pas assez de reproductibilité.

## Mise en 3 phrases

**mise** c'est :

* un **gestionnaire de versions multi-langages**.
* un **runner de tâches** comme `make` mis en mieux.
* un **orchestrateur d’environnement** comme `direnv` mais en mieux.

**1 seul outil, 1 seul fichier** par projet : `mise.toml`

## Installation & prise en main

```bash
curl https://mise.jdx.dev/install.sh | sh
```

Ou, sur Debian :

```bash
sudo install -dm 755 /etc/apt/keyrings &&
  curl -fsSL https://mise.jdx.dev/gpg-key.pub | tee /etc/apt/keyrings/mise-archive-keyring.asc >/dev/null &&
  echo "deb [signed-by=/etc/apt/keyrings/mise-archive-keyring.asc] https://mise.jdx.dev/deb stable main" | tee /etc/apt/sources.list.d/mise.list &&
  apt-get update && apt-get install -y mise
```

Activation du shell :

```bash
mise activate bash # ou zsh ou fish
```

On teste :

```bash
mise --version
```

[Voir la doc pour activer `mise` en permanence dans son shell](https://mise.jdx.dev/cli/activate.html) `bash` ou `zsh`.  
J'ai créé [un petit script bash](https://gist.github.com/pivaldi/8c23c383d86469fae9077f82f8aced21) qui permet d'activer `mise` dans un shell `bash` ou `zsh`
et d'avoir l'auto-complétion de `mise` dans le terminal…

## Cas d'usage rapide

```txt
>  node --version
v20.11.1

>  mise use node@lts
mise ~/.config/mise/config.toml tools: node@24.13.0

>  node --version
v24.13.0

> cd ..
>  node --version
v20.11.1

mise use --global node@lts
```

Dans n'importe quel répertoire, dans n'importe quel terminal :

```txt
>  node --version
v24.13.0
```

Plus d'info dans la [démo officiel de mise](https://mise.jdx.dev/demo.html).

## Cas d’usage général

### Le fichier `mise.toml`

Dans le fichier `mise.toml` du répertoire `XXX` :

```toml
[tools]
node = "20"
go = "1.22"
```

* `cd XXX && mise install && node -v` => `v20.11.1`
* `go version`, `node -v` cohérents pour toute l’équipe qui travail dans le répo.

### Comparaison rapide

| Avant             | Avec mise        |
| ----------------- | ---------------- |
| nvm + asdf + brew | 1 seul outil     |
| README à rallonge | `mise.toml`     |
| Versions globales | Versions locales |

## Tâches & scripts

### Remplacer Makefile

```toml
[tasks]
build = "go build ./..."
test = "go test ./..."
lint = "golangci-lint run"

front = "cd web && npm run build"
```

```bash
mise run build
mise run test
mise run lint
```

**Avantages**

* Auto-doc (`mise tasks`)
* Shell indépendant
* Versionné avec le code

On peut aussi appeler un script depuis `mise` comme on le ferait dans un `Makefile` :

```toml
[tasks.go-tools]
description = "Install/update Go developer tools (latest)"
run = "./script/go-tools.sh"
```

### Configuration par répertoire

`mise` prend en charge les fichiers de configuration imbriqués qui passent des paramètres généraux aux paramètres spécifiques:
1. `~/.config/mise/config.toml` : config globale pour tous les projets.
2. `~/work/mise.toml`: config spécifiques au répertoire `work`, l'espace de travail qui contient tous les projets.
3. `~/work/project/mise.toml`: config spécifique au répertoire `project` et à tous ses enfants.
4. `~/work/project/mise.local.toml` - config spécifique au répertoire `project` et à tous ses enfants mais qui ne doit pas être partagé (config perso de l'utilisateur sur son poste de dev).

`mise` utilisera tous les répertoires parents ensemble pour déterminer l'ensemble des outils, en
remplaçant la configuration à mesure qu'elle descend dans la hiérarchie.  

{% note %}
Utilisez `mise config ls` pour voir les fichiers de configuration actuellement utilisés par mise.
{% endnote %}

### Configuration par environnement

Il est possible d'avoir des fichiers `mise.toml` distincts dans le même répertoire pour différents environnements comme le `development` et la `production`.  
Pour l'activer, il faut définir la variable d'environnements `MISE_ENV` sur un environnement tel que `development` ou `production` à l'aide de l'une de ces méthodes :
* CLI flag: `-E development` ou `--env development`
* Variable d'environnement: `MISE_ENV=development`
* Le fichier `.miserc.toml` qui contient `env = ["development"]`

`mise` cherchera alors un fichier `mise.{MISE_ENV}.toml` dans le répertoire courant, les répertoires parents et le répertoire `MISE_CONFIG_DIR`.

Plus d'information sur la [configuration de mise suivant l'environnement](https://mise.jdx.dev/configuration/environments.html).

### Les hooks

Un exemple d'utilisation du "hook" `postinstall` qui s'exécute après l'installation des outils : 

```toml
# mise.toml
[tools.go]
version = "latest"
postinstall = """
# LSP
go install golang.org/x/tools/gopls@latest

# Formatting
go install golang.org/x/tools/cmd/goimports@latest

## etc…
"""

[tools.golangci-lint]
version = "latest"
```

`mise install` installera **localement** la dernière version de Go puis les outils `gopls`, `goimports` etc… puis
`golangci-lint` qui ne peut pas être installé directement via `go install`.  

{% note %}
Par défaut `go install` se base sur `GOBIN` et `GOPATH` pour l'installation donc pour rendre les
installations `go install` vraiment locales au repo il faut fixer `GOBIN` (ex. `./.bin/`) dans
l'entrée `[env]` de `mise.toml`.
{% endnote %}

En savoir plus sur [les hooks dans `mise`](https://mise.jdx.dev/hooks.html).

### Lancer des taches en parallèle

On peut exécuter des tâches indépendantes en parallèle avec bash :

```bash
# Cela exécutera `api:dev` et `web:dev` en parallèle après que la base de données soit prête.
mise run db:up && mise run db:wait && mise run api:dev & mise run web:dev & wait
```

Mais ce n'est pas souhaitable car le shell lance 3 processus:
* sans aucune coordination
* sans aucun contrôle structuré
* avec des logs mélangés
* une gestion des erreurs primitive
* sans notion de « tâche »

La bonne façon de procéder avec `mise` est de créer une tache de cette façon:

```toml
[tasks.dev]
depends = ["db:up", "db:wait"]
run = [
  { tasks = ["api:dev", "web:dev"] }
]
```

Ce que fait alors `mise run dev` :
* lance d'abord la bdd et attend qu'elle soit prête
* puis lance les tâches `api:dev` et `web:dev` dans son propre job qui les démarre en parallèle.
* préserve les dépendances
* préfixe les logs par tâche
* gère l’arrêt propre (Ctrl+C)
* remonte correctement les erreurs
* fonctionne pareil en CI

C'est un peu plus long à mettre en place mais c'est beaucoup plus robuste.

{% note warning %}
Les dépendances de taches `depends` sont exécutées séquentiellement dans l'ordre de façon synchrone alors que les
tableaux `tasks` sont exécutées en parallèle.

```toml
[tasks.dev]
depends = ["db:up", "db:wait"] # exécuté séquentiellement et dans l'ordre
run = [
  { tasks = ["api:dev", "web:dev"] } # exécuté en parallèle
]
```
{% endnote %}

Exemple:

```bash
cat <<'EOF' > /tmp/mise-demo.toml
[tasks.sleep1]
run = "sleep 2; echo done 1"

[tasks.sleep2]
run = "sleep 2; echo done 2"

[tasks.sleep3]
run = "sleep 2; echo done 3"

[tasks.parallel]
run = [
  { tasks = ["sleep1", "sleep2", "sleep3"] }
]
EOF

time MISE_CONFIG_FILE=/tmp/mise-demo.toml mise run parallel
```

donnera :
```txt
[sleep1] $ sleep 2; echo done 1
[sleep2] $ sleep 2; echo done 2
[sleep3] $ sleep 2; echo done 3
done 1
done 2
done 3

real	0m2.024s
user	0m0.016s
sys	0m0.015s
```

{% note warning %}
```toml
[tasks.sleep]
run = "sleep 2; echo done"

[tasks.parallel]
run = [
  { tasks = ["sleep", "sleep", "sleep"] }
]
```

`mise run parallel` n'exécutera la tache `sleep` qu'une seule fois, et on ne verra qu'un seul « done » dans le terminal !  

**`mise` parallélise les taches, pas les occurrences.**  
Même nom de tache = une seule exécution.

Si on veut exécuter N fois la même chose on peut créer `sleep1`/`sleep2`/`sleep3` identiques ou
utiliser un script shell.
{% endnote %}

### PostgreSQL + mise + Docker

#### Le problème classique

* `psql` / `pg_dump` différents selon les machines
* erreurs de compatibilité de dump
* scripts DB qui marchent en local mais pas en CI
* dépendance à `/usr/bin/psql`

#### La bonne séparation des rôles

```mermaid
flowchart LR
    subgraph M["mise"]
        direction TB
        M1["psql 16"] --> M2["pg_dump 16"] --> M3["tasks DB"]
    end

    subgraph D["Docker"]
        direction TB
        D1["postgres:16"] --> D2["DB server"] --> D3["données"]
    end

    M --> D
```

* **Docker** exécute le service PostgreSQL
* **mise** fournit les bons outils et les commandes compatibles avec le service

Voici un exemple complet :

```toml
# mise.toml
[tools]
postgres = "16" # (petit doublon inévitable aujourd'hui)

[env]
POSTGRES_VERSION = "16"
POSTGRES_USER = "app"
POSTGRES_PASSWORD = "app"
POSTGRES_DB = "app"
POSTGRES_PORT = "5432"
POSTGRES_CONTAINER = "mise-pg{{env.POSTGRES_VERSION}}"
POSTGRES_IMAGE = "postgres:{{env.POSTGRES_VERSION}}"

DATABASE_URL = "postgres://{{env.POSTGRES_USER}}:{{env.POSTGRES_PASSWORD}}@localhost:{{env.POSTGRES_PORT}}/{{env.POSTGRES_DB}}?sslmode=disable"

[tasks.db:up]
description = "Démarre PostgreSQL via Docker (version centralisée)"
run = '''
docker rm -f "$POSTGRES_CONTAINER" >/dev/null 2>&1 || true
docker run -d \
  --name "$POSTGRES_CONTAINER" \
  -e POSTGRES_USER="$POSTGRES_USER" \
  -e POSTGRES_PASSWORD="$POSTGRES_PASSWORD" \
  -e POSTGRES_DB="$POSTGRES_DB" \
  -p "$POSTGRES_PORT:5432" \
  "$POSTGRES_IMAGE"
'''

[tasks.db:wait]
description = "Attend que Postgres soit prêt"
run = '''
until docker exec "$POSTGRES_CONTAINER" pg_isready -U "$POSTGRES_USER" -d "$POSTGRES_DB" >/dev/null 2>&1; do
  sleep 1
done
'''

[tasks.db:psql]
depends = ["db:up", "db:wait"]
run = "psql $DATABASE_URL"

[tasks.db:dump]
depends = ["db:up", "db:wait"]
run = "pg_dump $DATABASE_URL > dump.sql"
```

```bash
mise run db:up
mise run db:psql ## Pour se connecter
```

* même version, même commandes, local = CI
* pas de dépendance système
* pas de conflit de versions
* pas de “ça marche chez moi”
* onboarding en une seule commande

#### Exemple concret prêt à l'emploi

L'IA a fait à ma demande [une petite démo de l'utilisation de `mise` dans un projet basique](https://github.com/pivaldi/mise-demo).

```bash
git clone https://github.com/pivaldi/mise-demo && cd mise-demo || exit 1
mise install
mise run db:init ## Populate the database
mise run dev ## Run everything at once: the database in Docker, the Go API, the PHP server, and the Angular web app
```

Check the url [http://localhost:5173](http://localhost:5173).

En allant voir le fichier `mise.toml` du projet, on verra que, une fois le Docker Postgresql prêt,
tous les autres services sont lancés en parallèle sans aucun effaot, aucune magie et les logs apparaissent dans des flux séparés.


## Environnements & secrets

### Variables d’environnement

```toml
[env]
APP_ENV = "dev"
DATABASE_URL = "postgres://localhost/app"

# Load .env if present (mise will ignore if missing)
_.file = '.env'
```

Chargées automatiquement à l’entrée du projet.  
Mise charge les variables d'environnement dans cette ordre:

1. Environnement système
2. Fichier `.env` s'il est présent
3. Variables définies dans `mise.toml`

### Gestion des Secrets

```bash
mise env set DATABASE_URL=...
```

ou via `.env.local` ignoré par git.

### Alias shell

L'ajout de cette entrée dans le fichier `mise.toml`, définit automatiquement des alias sur le répertoire courant :

```toml
[shell_alias]
dev = "mise run run"
build = "mise run build"
deploy = "mise run deploy"
mr = "mise run"
mt = "mise tasks"
```

On peut ainsi taper `mr xxx` au lieu de `mise run xxx`.

## Mise + Docker + CI

### Dockerfile simplifié

```dockerfile
RUN curl https://mise.jdx.dev/install.sh | sh
RUN mise install
```

### CI

```bash
mise install
mise run test
```

**Même tooling en local et Prod**

## Démo réelle

“mise est génial pour les stacks compilées ou self-contained
Pour PHP, Ruby, etc., Docker reste souvent la meilleure option sur Debian.”

## Ressources

* [mise doctor](https://mise.jdx.dev/cli/doctor.html)
* [mise hook-env](https://mise.jdx.dev/tasks/task-configuration.html#hook_env)
* [aliases shell auto](https://mise.jdx.dev/shell-aliases.html)
* [compatibilité .tool-versions](https://mise.jdx.dev/configuration.html#tool-versions)
* [plugins custom internes](https://mise.jdx.dev/plugins.html)
