---
title: "PIMacs : une couche Doom Emacs modulaire, documentée et reproductible"
date: 2026-02-08 12:24:53
id: pimacs-modular-documented-reproducible-doom-emacs-layer
tree_view: true
description: "PIMacs est une couche modulaire, documentée et reproductible au-dessus de Doom Emacs, conçue pour fournir un écosystème de développement prêt à l’emploi avec installation automatique des outils."
lang: fr
tags:
  - emacs
  - doom-emacs
  - open-source
categories:
- [FR, Tech, Ingénierie]
- [FR, Tech, Emacs]
---

This article is available in [English](/en/pimacs-modular-documented-reproducible-doom-emacs-layer).

[PIMacs](https://github.com/pivaldi/pimacs) est un ensemble de **modules [Doom Emacs](https://github.com/doomemacs/doomemacs), documentés et reproductibles**, conçue pour fournir un *écosystème de développement prêt à l’emploi* comparable aux IDE modernes tout en préservant la flexibilité d’Emacs.

PIMacs repose sur quatre idées fondamentales :

- **Des modules [Doom](https://github.com/doomemacs/doomemacs) composables plutôt qu’une configuration monolithique**
- **Des workflows auto-documentés via des refcards générées automatiquement**
- **L’installation à la demande des outils de développement via [Mise](https://mise.jdx.dev/)**
- **Des environnements portables et reproductibles, incluant Docker avec support X**

## Conçu de manière modulaire

PIMacs est organisé comme un ensemble de **modules indépendants basés sur Doom** :

```text
modules/pimacs/
├── default/
├── keys/
├── avy/
├── session/
├── ui/
├── lang-go/
├── lang-php/
├── lang-c/
├── docker/
├── refcards/
└── …
```

Chaque module a un périmètre clair, peut être activé ou désactivé indépendamment, et déclare à la fois le **comportement de l’éditeur** et les **exigences en matière d’outil** grâce à [Mise](https://mise.jdx.dev/).

Vous pouvez tout activer :

```elisp
(load! "modules/pimacs/init")
```

Ou composer volontairement votre configuration :

```elisp
(load! "modules/pimacs/default")
(load! "modules/pimacs/lang-go")
(load! "modules/pimacs/refcards")
```

## Outils à la demande avec Mise

L’une des fonctionnalités les plus intéressantes de PIMacs est son **intégration étroite avec Mise** pour la gestion des outils de développement.
Plutôt que de supposer que les outils sont déjà installés sur le système, PIMacs peut **installer automatiquement et gérer les dépendances logiciels à la demande**, module par module.

### Chaînes d’outils déclaratives par langage

Chaque module peut fournir son propre fichier `mise.toml` déclarant les outils requis.  
Par exemple, le [module Go](https://github.com/pivaldi/pimacs/tree/master/lang-go) définit sa chaîne d’outils [ici](https://github.com/pivaldi/pimacs/blob/master/lang-go/mise.toml).
Cela peut inclure :

* Go lui-même
* Des LSP
* Des formateurs de code
* Des linters
* Des outils CLI auxiliaires

Lorsque l'on charge le module `lang-go` avec l’option `+tool`, l’outillage requis est détecté, installé automatiquement s’il est manquant et activé automatiquement pour l’utilisateur courant.

Comme *Mise* installe des outils **par utilisateur, versionnés et gérés**, et non de manière globale au système, PIMacs est immédiatement utilisable sans configuration manuelle.  
Contrairement à la plupart des configurations Emacs, PIMacs considère l’outillage externe comme faisant partie du contrat de l’éditeur, et non comme un prérequis.

### Intégration CLI au sein d’Emacs

La [CLI PIMacs](https://github.com/pivaldi/pimacs/blob/master/default/cli.el) intègre directement Mise dans les workflows Emacs :

* Garantit que les bonnes versions des outils sont disponibles
* Aligne l’outillage Emacs avec les attentes du projet
* Maintient la synchronisation entre la CLI et l’éditeur

Du point de vue de l’utilisateur, l’expérience est similaire à celle des IDE modernes comme [Zed](https://zed.dev/) : **cloner → ouvrir → coder**.

## Refcards auto-générées

PIMacs inclut un **[système de refcards](https://github.com/pivaldi/pimacs/blob/master/doc/README.org)** qui génère automatiquement la documentation à partir de la configuration active.
Il fournit également des **refcards par module**, extraites directement du code lui-même. Par exemple :

* [Raccourcis clavier par défaut de PIMacs/keys avec l’option de clavier « azerty »](https://github.com/pivaldi/pimacs/blob/master/keys/keys-key-bindings-refcard.org)
* [Raccourcis clavier de PIMacs/lang-go avec l’option de clavier « azerty »](https://github.com/pivaldi/pimacs/blob/master/lang-go/lang-go-key-bindings-refcard.org).
* [Raccourcis clavier de PIMacs/lang-php avec l’option de clavier « azerty »](https://github.com/pivaldi/pimacs/blob/master/lang-php/lang-php-key-bindings-refcard.org).
* etc…

**En pratique, chaque module qui définit des raccourcis clavier fournit également ses propres refcards détaillées.**

Au lieu de documents écrits à la main qui dérivent avec le temps, PIMacs extrait les raccourcis et les commandes depuis les modules, génère des refcards structurées et maintient la documentation alignée avec la réalité.  
Cela rend la configuration auto-explicative, auditable et partageable.

## Des keymaps qui respectent votre clavier

La navigation et l’ergonomie sont des préoccupations de premier ordre.  
Les modules `pimacs/keys` et `pimacs/avy` définissent une couche de navigation plus cohérente pour les utilisateurs de claviers AZERTY, avec le sélecteur explicite `+azerty`.

## Emacs dans Docker, avec support X

PIMacs peut fonctionner de manière entièrement opérationnelle **à l’intérieur de conteneurs Docker avec support graphique complet**.  
Avec le forwarding X, vous obtenez un véritable Emacs graphique avec thèmes, polices, Tree-sitter, le tout entièrement encapsulé.

## Conclusion

PIMacs répond à une question pratique :

> *Emacs peut-il offrir une expérience de niveau IDE sans devenir opaque ?*

La réponse est **oui**, PIMacs fournit un écosystème de développement prêt à l’emploi comparable à Zed ou à [JetBrains](https://www.jetbrains.com/) tout en restant indéniablement Emacs.

**Dépôt :** [https://github.com/pivaldi/pimacs](https://github.com/pivaldi/pimacs)
