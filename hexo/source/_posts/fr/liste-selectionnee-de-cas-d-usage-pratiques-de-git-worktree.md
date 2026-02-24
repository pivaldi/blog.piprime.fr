---
tree_view: true
title: "Une liste de cas d’usage pratiques de Git Worktree"
date: 2026-01-21 20:52:24
id: liste-selectionnee-de-cas-d-usage-pratiques-de-git-worktree
lang: fr
description: "A curated list of practical git worktree use cases with real workflows."
categories:
- [FR, Tech, Git]
tags:
- git
- workflows
---

[This article is available in english](/en/curated-list-of-practical-git-worktree-use-cases).

Les worktrees Git font partie de ces fonctionnalités Git qui semblent optionnelles — jusqu’au jour où elles éliminent discrètement la moitié des frictions de votre workflow.

Si vous avez déjà :

* cloné plusieurs fois le même dépôt ;
* stashé des changements juste pour changer de contexte ;
* effectué des revues de code récurrentes ;
* ou retardé un hotfix parce que votre branche était « trop en désordre »…

…alors les worktrees Git sont faits pour vous.

Cet article présente des **cas d’usage réels et sélectionnés** des worktrees Git, chacun accompagné de **snippets de commandes minimales** qui montrent *à quoi ressemble réellement le workflow* — sans transformer l’article en manuel.

## Un modèle mental rapide

Un worktree Git permet de checkout **plusieurs branches du même dépôt en même temps**, chacune dans son propre répertoire, tout en partageant une seule base de données `.git`.

> Un dépôt → plusieurs répertoires de travail → zéro stash.

Tout au long de cet article, nous supposerons une convention simple :

* votre dépôt principal se trouve dans `my-repo/`
* les worktrees se trouvent à côté, dans `../wt/`

## Développement parallèle de fonctionnalités sans changement de contexte

**Le problème** : vous êtes plongé dans la *Fonctionnalité A* lorsque la *Fonctionnalité B* devient soudain urgente. Stasher semble risqué. Commiter semble prématuré.
**L’approche worktree** : donner à chaque fonctionnalité son propre répertoire de travail.

```bash
git worktree add -b feature/audit-logs ../wt/audit-logs origin/master
```

Cette commande unique fait trois choses à la fois :

1. créer une nouvelle branche appelée feature/audit-logs
2. à partir de origin/master
3. la checkout dans le répertoire ../wt/audit-logs.

Désormais :

* `my-repo/` → Fonctionnalité A
* `../wt/audit-logs/` → Fonctionnalité B

Vous ne « changez plus de contexte » — vous vous déplacez *physiquement* entre les contextes. Les éditeurs, terminaux et l’état mental restent propres.

Une fois la *Fonctionnalité B* commitée/pushée, vous pouvez supprimer le worktree avec la commande `git worktree remove ../wt/audit-logs/` depuis le répertoire `/my-repo`.

## Hotfixes sans interrompre le travail en cours

**Le problème** : la production est cassée, mais votre branche actuelle est à moitié refactorisée et dangereuse à commiter.
**L’approche worktree** : créer un hotfix directement depuis `master`.

```bash
git fetch origin
git worktree add -b hotfix/critical-bug ../wt/hotfix-critical origin/master
```

Corrigez, committez, pushez — sans toucher à votre travail en cours.

Les hotfixes restent propres. Pas de rebase, pas de cherry-pick depuis une branche sale.
Quand la production est en jeu, cela justifie à lui seul les worktrees.

## Revue de Pull Requests sans perturber votre propre branche

**Le problème** : vous voulez exécuter localement la PR d’un collègue, mais vous êtes en plein développement d’une fonctionnalité.
**L’approche worktree** : checkout la PR dans son propre répertoire.

```bash
git fetch origin pull/123/head:pr-123
git worktree add ../wt/pr-123 pr-123
```

Lancez l’application, les tests, les migrations — puis supprimez le répertoire une fois terminé.

La revue de code devient une *activité isolée*, et non quelque chose qui perturbe votre journée.

{% note %}
`git fetch origin pull/123/head:pr-123` signifie récupérer depuis `origin` la PR `pull/123/head`
(le commit de tête de la branche de la PR sur Github) et l’écrire localement dans la branche pr-123.
{% endnote %}

## Expérimentations et spikes de longue durée

**Le problème**
Vous voulez explorer une idée risquée qui pourrait ne pas survivre, et vous ne voulez pas qu’elle déborde sur les branches « réelles ».

**L’approche worktree**
Créer une branche de spike avec son propre worktree.

```bash
git worktree add -b spike/new-cache-strategy ../wt/spike-cache origin/master
```

**Pourquoi cela fonctionne**
Les expérimentations deviennent peu coûteuses et jetables. Si cela échoue, vous supprimez un dossier — pas un historique de branche à démêler.

## Préparation de release pendant que le développement continue

**Le problème**
Vous devez stabiliser une branche de release pendant que de nouvelles fonctionnalités avancent.

**L’approche worktree**
Un worktree par release.

```bash
git worktree add ../wt/release-1.8 release/1.8
```

Les corrections de bugs, les montées de version et les tags vivent là — pendant que votre dépôt principal continue sur `develop` ou `master`.

**Pourquoi cela fonctionne**
Le travail de release reste conservateur. Le développement reste rapide. Pas de contamination accidentelle.

## Exécuter plusieurs versions de l’application côte à côte

**Le problème** : vous devez comparer le comportement entre `master` et une branche de refactorisation.
**L’approche worktree** : exécuter les deux versions simultanément.

```bash
git worktree add ../wt/run-master origin/master
git worktree add ../wt/run-refactor feature/big-refactor
```

Chaque répertoire exécute sa propre instance.
Parfait pour les régressions, les migrations, les comparaisons de performance et les investigations « qu’est-ce qui a réellement changé ? ».

## Enseignement, démos et documentation

**Le problème** : les démos en direct et les tutoriels souffrent des changements de branche et des temps d’attente.
**L’approche worktree** : préparer un worktree par étape de démo.

```bash
git worktree add ../wt/demo-step-1 demo/step-1
git worktree add ../wt/demo-step-2 demo/step-2
```

Vous passez instantanément entre des états validés. C’est idéal pour les ateliers, conférences et captures d’écran de blog.

## Débogage des échecs CI à travers les commits

**Le problème** : la CI échoue sur une branche, passe sur une autre, et vous devez comparer localement.
**L’approche worktree** : fixer les worktrees sur les états en échec.

```bash
git worktree add ../wt/ci-fail origin/failing-branch
git worktree add --detach ../wt/ci-commit abcdef1234
```

Vous pouvez conserver plusieurs états en échec simultanément — sans recloner, sans deviner.

{% note %}
`git worktree add --detach ../wt/ci-commit abcdef1234` crée un worktree checkouté sur un commit
spécifique, sans l’attacher à une branche ; c’est un instantané, pas une ligne d’historique mobile.

Il est utilisé pour :

* inspecter le dépôt exactement tel que la CI l’a vu
* exécuter des tests ou des builds
* comparer avec un autre commit ou une autre branche
  {% endnote %}

## Apprivoiser les grands dépôts et les monorepos

**Le problème** : changer de branche dans un monorepo est lent, risqué et mentalement éprouvant.
**L’approche worktree** : assigner des worktrees par domaine ou initiative.

```bash
git worktree add ../wt/frontend feature/frontend-redesign
git worktree add ../wt/backend feature/backend-perf
```

Chaque worktree devient un « espace de travail » stable. Les outils, caches et la concentration restent localisés.

## Séparation propre des IDE, outils et conteneurs

**Le problème** : les IDE, serveurs de langage et conteneurs n’aiment pas les changements de branche fréquents.
**L’approche worktree** : un worktree par contexte d’outillage.

```bash
git worktree add ../wt/go feature/go-migration
git worktree add ../wt/js feature/ui-overhaul
```

Chaque fenêtre d’IDE a un système de fichiers et une branche stables. Pas de réindexation. Pas de configurations de debug cassées.

## Gestion des worktrees (les seules commandes dont vous avez vraiment besoin)

Lister les worktrees actifs :

```bash
git worktree list
```

Supprimer proprement un worktree :

```bash
git worktree remove ../wt/pr-123
```

Nettoyer les métadonnées obsolètes :

```bash
git worktree prune
```

Supprimer la branche associée (optionnel) :

```bash
git branch -d pr-123
```

## Réflexions finales

Les worktrees Git ne remplacent pas les branches — ils **déverrouillent tout leur potentiel**.

Ils récompensent les ingénieurs qui :

* travaillent en parallèle ;
* maintiennent des systèmes en production ;
* font des revues de code sérieusement ;
* et valorisent des workflows à faible friction.

Si vous avez déjà cloné un dépôt « juste pour garder les choses propres », vous utilisiez déjà les worktrees — manuellement.
Une fois adoptés intentionnellement, revenir en arrière paraît inutile.
