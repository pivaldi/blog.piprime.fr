---
title: Les bases pour comprendre Bitcoin
date: 2025-07-09 00:23:25
id: les-bases-pour-comprendre-bitcoin
lang: fr
description: "Progressivement, puis soudainement : un cadre pour comprendre le bitcoin comme argent."
categories:
- [FR, Non Tech, Bitcoin]
tags:
- bitcoin
---

{% note %}
[This article is available in English](/en/the-basics-for-understanding-bitcoin/)
{% endnote %}

Quand on parle de Bitcoin cela peut signifier trois choses :

1. **un protocole informatique** ;
1. **un moyen de payement** ;
1. **une unité de compte** en cours d'adoption.

## Le protocole bitcoin

À l'instar de `http/https` pour le web, **le protocole `bitcoin` (sans majuscule)
est l'ensemble des règles qui régissent le fonctionnement du réseau Bitcoin**.  
Il permet la création, la validation et la sécurisation des transactions sur **une** blockchain, qui est
sorte de une base de données distribuée et décentralisée.

Ce protocole a été initialement conçu par Satoshi Nakamoto, qui a publié un livre blanc intitulé
« [Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf) » en 2008.  
Ce document a défini les bases du système, permettant à Bitcoin de devenir la première monnaie
numérique décentralisée.

**Le protocole Bitcoin repose sur des principes tels que la cryptographie, la validation des
transactions par des nœuds du réseau et le minage**, qui est un processus calculatoire intensif
~~permettant d'ajouter des blocs à la blockchain~~ permettant d'assurer la décentralisation du
protocole en faisant émerger le hasard du réseau lui-même.  
Les nœuds du réseau maintiennent une copie indépendante de la blockchain, ce qui assure la
transparence et la sécurité des transactions.

## Bitcoin est un moyen de payement

Bitcoin est un système de payement abouti car il permet des transactions directes, sécurisées,
sans frontières, sans intermédiaires et incensurables.  
Il a cependant deux limites mineures actuellement :
- le temps de confirmation d'une transaction est en moyenne de 10 minutes.  
  Cependant le réseau [Lightning résoud le problème de scalabilité de Bitcoin](https://fr.wikipedia.org/wiki/Lightning_(r%C3%A9seau))[^1].
- les frais de transaction sont variables et peuvent parfois être élevés selon la congestion du réseau.

## Bitcoin en passe de devenir une unité de compte ?

### Caractéristique d'une unité de compte

Les caractéristiques essentielles pour qu’une chose soit considérée comme une unité de compte sont :
- **Universalité dans la zone d’usage**  
  Elle doit être largement reconnue et acceptée dans la communauté ou l’économie concernée afin que
  chacun l’utilise pour exprimer la valeur des biens et services.
- **Stabilité relative de la valeur**  
  Sa valeur doit être suffisamment stable dans le temps pour permettre des comparaisons fiables. Une
  unité de compte trop volatile rend la fixation des prix et les contrats difficiles.
- **Divisibilité**  
  Elle doit pouvoir être divisée en unités plus petites pour exprimer la valeur de biens ou services
  de faible valeur, mais aussi être agrégée pour les transactions de grande valeur.
- **Fongibilité**  
  La fongibilité est la capacité d’une chose à être remplacée par une autre de même nature. La
  monnaie est fongible car un billet de 10 euros en vaut un autre quels que soient son histoire et
  ses propriétaires successifs.
- **Mesurabilité et simplicité**  
  Elle doit permettre d’exprimer les prix, les dettes, les salaires, les profits, etc., de manière
  claire, compréhensible et sans ambiguïté.
- **Portabilité linguistique et comptable**  
  Elle doit pouvoir être utilisée facilement dans les écritures comptables, les contrats et la
  communication économique.

### Bitcoin a-t-il les caractéristiques d'une unité de compte planétaire ?

- **Universalité dans la zone d’usage**  
  [Bitcoin est de plus en plus reconnue et utilisé dans le monde](/fr/reconnaissance-et-acceptation-croissantes-de-bitcoin-dans-le-monde/).
- **Stabilité relative de la valeur**  
  Pour l'instant Bitcoin n'est pas un actif assez stable si on le converti en Dollar.  
  Bitcoin est historiquement 5 à 8 fois plus volatil que l’or ; sa volatilité, bien que toujours
  élevée (60‑80 %), tend à diminuer à mesure que les marchés mûrissent.  
  Voici un graphique comparant la volatilité[^2] annualisée de Bitcoin depuis sa création à celle de
  l’or, rééchelonnée depuis 1944 pour correspondre à la même chronologie :
  <figure>
  <img src="/media/les-bases-pour-comprendre-bitcoin/volatilite_bitcoin_vs_or.webp" alt="Volatilité annualisée de Bitcoin à celle de l’or, rééchelonnée depuis 1944" />
  <figcaption style="margin-top: 0px">
  <span>Volatilité annualisée de Bitcoin depuis 2009 à celle de l’or, rééchelonnée depuis 1944 pour correspondre à la même chronologie</span>
  </figcaption>
  </figure>

- **Divisibilité**
  Bitcoin l'actif le plus divisilbe au monde, la plus petite unité de Bitcoin s'appelle le Satoshi (du nom de l'inventeur du Bitcoin) et vaut 0,00000001 BTC (10^-7 BTC)
- **Fongibilité**
  Le tribunal de commerce de Nanterre a déclaré que le Bitcoin est un « actif incorporel fongible », similaire à la monnaie fiduciaire.[^3]  
  De plus, les Bitcoins sont également désignés comme des actifs fongibles car ils sont apolitiques,
  sans frontières et leur fonctionnalité sont similaires, chaque unité de Bitcoin ayant la même
  valeur.  
  Il faut toutefois noter que, comme le Bitcoin est traçable, **certains prestataires** de services
  peuvent bloquer des Bitcoins ayant été obtenus de façon illégale.[^4]
- **Mesurabilité et simplicité**
  Le Bitcoin est d'autant plus mesurable que ça production est limité, il n'y aurra jamais plus de
  21 millions de Bitcoin en circulation, c'est une limite qui est inscrite dans le protocole de bitcoin.
- **Portabilité linguistique et comptable**
  - Le symbole **₿** (comme le \$ ou €) est reconnu internationalement.
  - Les adresses Bitcoin (`bc1q...`) et les unités (`satoshi`, `BTC`) sont **indépendantes du langage** humain.
  - Les transactions utilisent des formats techniques universels (hash, JSON, hexadécimal) ne nécessitant **aucune traduction**.
  - Les interfaces, portefeuilles et documentations sont traduits en **dizaines de langues**, favorisant une adoption globale.
  - Bitcoin garde son **identité constante** à travers les pays : même nom, même unités, pas de conversion culturelle.
  - 1 BTC = 100 000 000 satoshis → grande **précision comptable** adaptée aux micro et macro-transactions.
  - La blockchain Bitcoin agit comme un **registre comptable universel**, traçable et transparent, accessible partout.
  - Compatible avec les formats d’export standard (CSV, JSON, API) → **intégration facile** dans les logiciels comptables (ERP, CRM...).
  - Bitcoin n’est soumis à **aucune norme comptable nationale** (IFRS, GAAP…) mais peut y être intégré selon les besoins réglementaires.
  - Chaque transaction est identifiable par un **hash unique**, facilitant l’**audit** et la **vérification des écritures**.

[^1]: Voir aussi l'[entretien avec Thaddeus Dryja, co-inventeur du Lightning Network](https://bitcoin.fr/entretien-avec-thaddeus-dryja-co-inventeur-du-lightning-network/)
[^2]: {% katex %} \sigma = \sqrt{\frac{1}{N - 1} \sum_{i=1}^{N} (r_i - \mu)^2} {% endkatex %} où : {% katex %} \sigma {% endkatex %} est volatilité de l’actif, {% katex %} r_i {% endkatex %} est le rendement de l’actif au jour {% katex %} i {% endkatex %}, {% katex %} \mu {% endkatex %} est la moyenne des rendements, {% katex %} N {% endkatex %} est le nombre total d’observations. Par exemple, si un actif a une volatilité de 20 % annualisée, cela signifie que ses rendements journaliers varient en moyenne de manière à générer une fluctuation de ±20 % sur un an.
[^3]: [France : la justice considère le Bitcoin comme un actif incorporel fongible, au même titre que l’euro](https://cryptoast.fr/france-la-justice-considere-le-bitcoin-comme-un-actif-incorporel-fongible-au-meme-titre-que-leuro/)
[^4]: [Le FBI tente d'empêcher la vente de 40 millions de dollars de bitcoins par les hackers nord-coréens Lazarus](https://www.usine-digitale.fr/article/le-fbi-tente-d-empecher-la-vente-de-40-millions-de-dollars-de-bitcoins-par-les-hackers-nord-coreens-lazarus.N2162692)
