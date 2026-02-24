---
title: "Le rôle de l’aléa dans la cryptographie"
date: 2025-10-26 18:52:57
id: le-role-de-l-alea-dans-la-cryptographie
tree_view: true
lang: fr
description: "La génération de nombres ou de jetons aléatoires joue un rôle crucial dans plusieurs aspects des réseaux décentralisés, notamment dans la génération d’une clé privée/public."
mathjax: true
categories:
- [FR, Non Tech, Cryptographie]
tags:
- cryptographie
- hasard
- distribué
- décentralisé
---

## Le rôle de l’aléa dans la cryptographie

Dans un **réseau décentralisé**, chaque utilisateur possède :

* une **clé privée** (secrète),
* une **clé publique** (dérivée de la clé privée),
* et souvent une **adresse** (dérivée de la clé publique).

La **sécurité du système** repose entièrement sur le fait que personne ne puisse deviner ou reconstruire ta clé privée.

C’est là qu’intervient la **génération de nombres aléatoires**.


## Génération d’une clé privée à partir d’un nombre aléatoire

1. Un générateur de nombres aléatoires (appelé **RNG – Random Number Generator**) produit un
   **nombre aléatoire très grand**, souvent de **256 bits** (soit 2²⁵⁶ possibilités).

   * Exemple simplifié :

     ```
     0x7BDA34E2B9F84C3A7D9E... (256 bits)
     ```
2. Ce nombre devient **la clé privée**.

La probabilité qu’un autre utilisateur obtienne la même clé est pratiquement **nulle** (de l’ordre de 1 sur 10⁷⁷).  
C’est cet aléa qui garantit la **sécurité et l’unicité** de chaque clé privée.

## Dérivation de la clé publique

Une fois la clé privée générée :

* On applique une **fonction mathématique déterministe**, fondée sur la **cryptographie à courbe
  elliptique** (ECC, par ex. *secp256k1* dans Bitcoin).
* Cette opération consiste à multiplier un **point de base G** de la courbe elliptique par la clé
  privée (le grand nombre aléatoire).

Formule :

$$
\text{Clé publique} = \text{clé privée} \times G
$$

Cette multiplication est facile à faire dans un sens, mais **quasiment impossible à inverser** sans
connaître la clé privée, c’est le **principe de sécurité asymétrique**.

## Du point de vue du réseau décentralisé

Dans un réseau comme Bitcoin ou Ethereum :

* Le **RNG** est utilisé localement par le portefeuille pour générer ta clé privée.
* Le réseau **ne participe pas** à cette génération : cela reste **décentralisé et local**.
* La clé publique (et donc l'adresse) est utilisée pour recevoir des transactions, sans jamais exposer ta clé privée.

## Pourquoi la qualité de l’aléa est cruciale

Si le générateur de nombres aléatoires n’est **pas vraiment aléatoire**, par exemple biaisé,
prévisible, ou défectueux, un attaquant pourrait deviner certaines clés privées, et donc **voler des
fonds** ou **compromettre la sécurité** du réseau.  
C’est pourquoi les logiciels de portefeuille sérieux utilisent des **sources d’entropie multiples**
(mouvements de souris, bruit du processeur, etc.), ou des **générateurs certifiés
cryptographiquement sûrs (CSPRNG)** comme [drand](/fr/drand-un-protocole-distribue-de-jetons-aleatoires).
