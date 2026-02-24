---
title: "NFT : Les Fondamentaux et les Applications"
date: 2025-12-14
id: nft-les-fondamentaux-et-les-applications
tree_view: true
lang: fr
description: "Découvrez les NFT et les standards Ethereum, les caractéristiques de la blockchain, les places de marché, l'impact sur l'art et les mécanismes de création."
categories:
- [FR, Tech, Blockchain]
- [FR, Tech, NFT]
- [FR, Tech, Art]
tags:
- blockchain
- nft
- art
---

This article is also available in [English](/en/nft-fundamentals-and-applications/).

{% note %}
Ceci est le résumé d'un cours MOOC
[Mastering Web3](https://www.unic.ac.cy/mastering-web3-unic-s-brand-new-free-mooc-offering-a-blockchain-verifiable-certificate/)
fourni par l'[Université de Nicosie](https://www.unic.ac.cy/).
{% endnote %}

## Les NFT et les Standards Ethereum

### Ethereum est un Réseau Multi-jetons

Comme Bitcoin, Ethereum possède sa propre monnaie/jeton natif, appelé **Ether**. L'Ether est aujourd'hui la deuxième plus grande cryptomonnaie par capitalisation boursière.

Cependant, Ethereum peut également prendre en charge la création de jetons supplémentaires :
* Certains de ces jetons supplémentaires sont **fongibles**, tandis que d'autres ne le sont pas (**jetons non fongibles – NFT**)
* Les jetons fongibles (du même type) sont interchangeables. En d'autres termes, une unité d'un jeton fongible a une valeur égale à tout autre jeton du même type
* Les jetons non fongibles (NFT) ne sont généralement pas interchangeables à la même valeur. En d'autres termes, un Cryptopunk peut avoir une valeur marchande significativement différente des autres jetons de la même collection (c'est-à-dire, d'autres Cryptopunks)

### Les jetons Ethereum sont régis par les [standards ERC](https://ethereum.org/developers/docs/standards/tokens/)

* ERC-20 : **Standard de Jeton Fongible (2015)**
  Le standard le plus largement utilisé pour les jetons fongibles sur la blockchain Ethereum.
* ERC-721 : **Standard de Jeton Non Fongible (2018)**
  Le standard le plus largement utilisé pour les NFT sur la blockchain Ethereum.
* ERC-1155 : **Standard Multi-Jetons (2018)**
  Une interface standard pour les contrats intelligents qui gèrent plusieurs types de jetons. Un seul contrat intelligent peut inclure n'importe quelle combinaison de jetons fongibles, de jetons non fongibles ou d'autres configurations (par exemple, des jetons semi-fongibles).
* ERC-6551 : **Comptes Liés aux Jetons (2023)**
  Un nouveau standard qui permet aux NFT d'avoir leurs propres portefeuilles.

### [ERC-721](https://ethereum.org/developers/docs/standards/tokens/erc-721/) est le standard NFT le plus populaire d'Ethereum

ERC-721 permet l'implémentation d'une [API](https://fr.wikipedia.org/wiki/Interface_de_programmation) standard pour les NFT au sein des contrats intelligents Ethereum. Le standard fournit des fonctionnalités de base pour suivre et transférer les NFT.
Les jetons ERC-721 sont créés en écrivant du code dans un langage de programmation de contrat intelligent, comme
[Solidity](https://www.soliditylang.org/).
En pratique, la plupart des collections NFT d'aujourd'hui seront créées via des fournisseurs de services et nécessiteront peu, voire aucune programmation pour créer le jeton.

### [ERC-1155](https://ethereum.org/developers/docs/standards/tokens/erc-1155/) est le standard multi-jetons d'Ethereum

ERC-1155 implémente une interface standard pour les contrats qui gèrent plusieurs types de jetons :
* [ERC-20](https://ethereum.org/developers/docs/standards/tokens/erc-20/) nécessite le déploiement de contrats séparés par type de jeton.
* [ERC-721](https://ethereum.org/developers/docs/standards/tokens/erc-721/) regroupe une collection de jetons non fongibles dans un seul contrat, avec des paramètres pour l'ensemble de la collection.
* [ERC-1155](https://ethereum.org/developers/docs/standards/tokens/erc-1155/) permet à chaque ID de jeton au sein d'une collection de représenter un nouveau type de jeton configurable, qui peut avoir ses propres métadonnées, son approvisionnement et d'autres attributs.

L'innovation d'ERC-1155 est que **plusieurs jetons peuvent coexister dans le même contrat intelligent**.
De nouvelles fonctionnalités sont possibles, comme le transfert de plusieurs types de jetons à la fois, économisant ainsi les coûts de transaction.
Une telle fonctionnalité est particulièrement utile, par exemple, dans les applications de jeux, qui peuvent combiner
des objets fongibles et non fongibles (par exemple, de la monnaie et des épées)

Malgré sa flexibilité, **ERC-1155 est actuellement moins populaire qu'ERC-721**. Cela est probablement dû à la complexité accrue de la mise en œuvre et de la maintenance d'un contrat ERC-1155 par rapport à un contrat ERC-721. **Cependant, ERC-1155 gagne en popularité à mesure que de plus en plus de développeurs et de projets l'adoptent pour ses fonctionnalités avancées et ses cas d'utilisation potentiels.**

### [ERC-6551](https://ethereum.org/developers/docs/standards/tokens/erc-6551/)

ERC-6551 fournira la capacité pour les NFT d'avoir leur propre portefeuille.
* Cela permettra aux NFT d'avoir un historique de trading, une collection et une identité.
* Il peut être considéré comme l'inverse des [jetons liés à l'âme (SBT)](https://www.binance.com/fr/academy/articles/what-are-soulbound-tokens-sbt), où le NFT est définitivement lié à un compte/portefeuille.
* En pratique, ERC-6551 donne à chaque jeton ERC-721 un compte de contrat intelligent.
* Applications possibles basées sur ERC-6551 :
  * Combinaison avec l'Intelligence Artificielle (IA) : Un portefeuille d'investissement automatisé composé de plusieurs actifs non fongibles.
  * Facilitation des [airdrops]() directement aux NFT : Les personnages de jeu pourront posséder leurs propres objets.
  * Facilitation des paiements directs aux NFT : Les utilisateurs peuvent payer directement à un NFT, qui peut ensuite être utilisé pour acheter d'autres NFT ou services.

Sources : [https://eips.ethereum.org/EIPS/eip-6551], [https://cointelegraph.com/explained/the-erc-6551-token-standard-explained].

Différents standards pour différentes applications :

| |ERC-721 |ERC-1155 |ERC-6551
|---|---|---|---
| Portée | Tokeniser des actifs individuels uniques. | Combiner plusieurs types de jetons. | Activer des portefeuilles/comptes pour les NFT.
| Fongibilité | NFT uniquement. | FT & NFT. | NFT avec capacités de contrat intelligent.
| Orientation d'application | Objets de collection, art, actifs numériques, actifs du monde réel tokenisés. | Jeux, autres applications impliquant plusieurs actifs. | Composabilité, identité, provenance, dépendance.
| Avantages | Standardise la façon dont les actifs uniques sont stockés et gérés en toute sécurité sur la blockchain. | Économise la charge de calcul en réduisant les étapes d'approbation nécessaires pour transférer plusieurs jetons en une seule transaction. | Améliore la fonctionnalité et la valeur des NFT. Compatible avec les jetons ERC-721 existants.
| Inconvénients | Les jetons sont indivisibles. Les NFT ne peuvent pas être combinés avec des jetons fongibles. | Le standard n'est pas rétrocompatible, il ne peut donc pas gérer les implémentations ERC-20 ou ERC-721. | Nécessite un registre sans permission pour créer et gérer des comptes liés aux jetons
| Consommation de gaz | Légèrement inférieure à ERC-20. | Inférieure pour les transactions impliquant plusieurs types de jetons dans un transfert par lot. | Modérée. Le déploiement d'un contrat proxy nécessite des frais minimes.

Source :
* Adapté de [Security Tokens — An ERC-Standards Comparison](https://micobo.medium.com/security-tokens-an-erc-standards-comparison-919e7c379f37).
* [What Is ERC-6551? Explaining the New NFT Token Standard](https://coinmarketcap.com/alexandria/article/what-is-erc-6551).

## L'Anatomie d'un NFT

### Qu'est-ce qu'un NFT ?

Un NFT est un actif numérique unique qui est stocké sur une blockchain. Il représente la propriété d'un objet numérique, tel qu'une œuvre d'art, un objet de collection ou un objet virtuel dans un jeu. Chaque NFT est unique et possède son propre identifiant unique, qui est stocké sur la blockchain. Cet identifiant est utilisé pour vérifier la propriété du NFT et pour suivre son historique.

### Le parcours d'adoption des NFT

<figure>
<a data-fancybox data-src="/media/nft-fundamentals-and-applications/adoption-of-nft.webp" data-caption="Le parcours d'adoption des NFT">
<img src="/media/nft-fundamentals-and-applications/adoption-of-nft_thumb.webp" alt="Parcours d'adoption des NFT" />
</a>
<figcaption style="margin-top: 0px">
<span>Parcours d'adoption des NFT. © <a href="https://unic.ac.cy">University of Nicosia, Institute for the Future</a> unic.ac.cy/blockchain.</span>
</figcaption>
</figure>

* Plus de 75 000 milliards de dollars de stock d'actifs incorporels existants.
* La seule base de données ouverte "bien commun public" pour le métavers.
* Actifs et services du monde physique.
* Nécessite des ponts réglementaires, cela prendra donc du temps.

### Un modèle mental

<figure>
<a data-fancybox data-src="/media/nft-fundamentals-and-applications/mental-model-of-nft.webp" data-caption="Un modèle mental des NFT">
<img src="/media/nft-fundamentals-and-applications/mental-model-of-nft_thumb.webp" alt="Modèle mental des NFT" />
</a>
<figcaption style="margin-top: 0px">
<span>Un modèle mental des NFT. © <a href="https://unic.ac.cy">University of Nicosia, Institute for the Future</a> unic.ac.cy/blockchain.</span>
</figcaption>
</figure>

### Décomposition des composants

Dans la plupart des cas, en raison du coût élevé du stockage de données sur une blockchain, l'image du NFT n'est pas
stockée sur la blockchain. Au lieu de cela, seul un "pointeur" vers l'image est stocké sur la blockchain.
L'image est stockée dans un stockage centralisé ou dans un stockage décentralisé.

### Exemples de réseaux de stockage décentralisés

[IPFS](https://ipfs.tech/) et [Arweave](https://www.arweave.org/) sont des exemples de réseaux de stockage décentralisés.

* **IPFS (InterPlanetary File System)**
  * Protocole de stockage distribué qui permet le stockage et la distribution de fichiers identifiables de manière unique dans le cadre d'un réseau pair-à-pair mondial.
  * Chaque ordinateur dans le monde peut choisir d'"épingler" (héberger) et de distribuer tous les fichiers qu'il choisit en téléchargeant le logiciel IPFS.
* **Arweave**
  * Un protocole de stockage distribué avec une philosophie de conception différente.
  * Les hébergeurs sont payés à l'avance pour un stockage permanent selon la théorie que le coût du stockage baissera suffisamment rapidement au fil du temps pour permettre au paiement initial de couvrir les coûts de stockage pour toujours.

Dans le domaine des NFT, IPFS et Arweave sont considérés comme des solutions adéquates pour le stockage décentralisé par rapport aux serveurs centralisés.

### Exemples de réseaux de stockage centralisés

[Amazon S3](https://aws.amazon.com/s3/) et [Google Cloud Storage](https://cloud.google.com/storage) sont des exemples de réseaux de stockage centralisés.

### Stockage on-chain : Nativement on-chain

Le stockage on-chain fait référence à la **sauvegarde effective de l'actif sur la blockchain elle-même**. Les projets qui stockent tous les fichiers d'actifs on-chain sont appelés **nativement on-chain**, car toutes les informations associées à un NFT sont stockées sur la blockchain (métadonnées et actif réel).
La sauvegarde de l'actif on-chain préserve toutes les caractéristiques de premier ordre de la blockchain :
* Immuable
* Décentralisé
* **Pas de point de défaillance unique**, etc.

**Cela n'est réalisable / rentable que pour les œuvres d'art qui peuvent être décrites en code**.
En d'autres termes, cela pourrait être un choix de conception dans l'art génératif, mais cela pourrait être économiquement/techniquement infaisable pour la photographie ou la vidéographie

Voici quelques exemples de projets nativement on-chain :
* [Web3.storage Bounty](http://web3.storage/)
* [Filecoin](https://filecoin.io/)

| Solution          | Entièrement On-Chain | Permanent | Coût   | Utilisation Courante        |
| ----------------- | -------------- | --------- | ------ | ----------------- |
| [Stockage Ethereum](https://www.geeksforgeeks.org/computer-networks/how-to-store-data-on-ethereum-blockchain/)  | ✅              | ✅         | 🔥🔥🔥 | Petites données        |
| [Bitcoin OP_RETURN](https://www.researchgate.net/publication/313365747_An_analysis_of_Bitcoin_OP_RETURN_metadata) | ✅              | ✅         | 🔥     | Données minuscules         |
| [Arweave](https://arweave.org/)           | ⚠️ (propre chaîne) | ✅         | 💰     | NFT, médias       |
| [IPFS](https://ipfs.tech/)              | ❌              | ❌         | 💸     | Pointeurs NFT      |
| [Filecoin](https://filecoin.io/)          | ❌              | Dépend   | 💸     | Stockage à long terme |
| [Celestia](https://celestia.org/)          | ❌              | ❌         | 💸     | Rollups           |
| [Ordinals](https://docs.ordinals.com/)          | ✅              | ✅         | 🔥🔥🔥 | NFT              |

## Les NFT dans l'Art

Les NFT dans l'art sont un type de NFT utilisé pour représenter une œuvre d'art. Ces projets sont souvent créés par des artistes et des collectionneurs, et ils peuvent être achetés et vendus sur des marchés secondaires. Les NFT dans l'art sont souvent utilisés comme un moyen de présenter le travail d'un artiste et de construire une communauté autour de leur marque.

#### Projets de Photos de Profil (PFP)

Les Projets de Photos de Profil (PFP) sont un type de NFT utilisé comme photo de profil sur les plateformes de médias sociaux. Ces projets sont souvent créés par des artistes et des collectionneurs, et ils peuvent être achetés et vendus sur des marchés secondaires. Les PFP sont souvent utilisés comme un moyen de présenter le travail d'un artiste et de construire une communauté autour de leur marque.

#### NFT d'Art

Les NFT d'Art sont un type de NFT utilisé pour représenter une œuvre d'art. Ces projets sont souvent créés par des artistes et des collectionneurs, et ils peuvent être achetés et vendus sur des marchés secondaires. Les NFT d'Art sont souvent utilisés comme un moyen de présenter le travail d'un artiste et de construire une communauté autour de leur marque.


### Les Projets de Photos de Profil (PFP) et les NFT d'Art Dominent le Marché

Les collections PFP dominent toujours la capitalisation boursière, suivies par l'Art :
* PFP ~71,43% de dominance (Ξ2M)
* Art ~20,48% (Ξ573,3K)
* Catégories restantes : ~7,94% (Ξ222,4K)

Les PFP et les NFT d'Art sont les types de NFT les plus populaires sur le marché, avec une capitalisation boursière combinée de ~91,91% (Ξ2,77M). Les catégories restantes, telles que la musique, le sport et les jeux, ont une capitalisation boursière combinée de ~8,09% (Ξ249,6K).

L'application web [NFT Valuations](https://nftvaluations.com/) permet d'estimer la valeur d'un NFT en fonction de sa rareté et de sa popularité.

### La Nature Multifacette des Photos de Profil (PFP)

#### Variabilité dans l'Utilisation des PFP

Les recherches indiquent que les individus utilisent 3 à 5 PFP distincts sur diverses plateformes et réseaux.

#### Perception de la Plateforme et Projection d'Identité

Les représentations en ligne des utilisateurs sont influencées par leur compréhension de l'éthique d'une plateforme et de son public perçu.

#### Curation d'Identité Orientée Public

Les utilisateurs organisent stratégiquement leurs représentations en ligne en fonction de leurs perceptions des préférences et des attentes du public prédominant.

#### PFP comme Marqueur d'Identité Symbolique

Chaque PFP agit comme un emblème visuel, reflétant la facette spécifique de l'identité en ligne qu'il incarne.

#### Types d'Identités en Ligne Reflétées dans les PFP

* **Identité Communautaire** : Les PFP résonnent avec l'éthique et les valeurs collectives d'une communauté
* **Identité Avocationnelle** : Les PFP reflètent les passions, les hobbies et les intérêts individuels
* **Identité Professionnelle** : Sur les plateformes orientées carrière, les PFP représentent souvent les individus de manière professionnelle qui met l'accent sur le professionnalisme et la fiabilité

#### Les PFP Concernent l'Identité

Les PFP concernent l'identité, reflétant la nature multifacette de la représentation de soi en ligne. Ils servent d'emblèmes visuels qui encapsulent divers aspects de la personnalité en ligne d'un individu, y compris l'affiliation communautaire, les intérêts avocatifs et les aspirations professionnelles. En organisant stratégiquement leurs PFP, les utilisateurs projettent une image organisée qui s'aligne avec leurs perceptions des préférences et des attentes du public prédominant.

#### Les Effets Avatar/PFP Sont Probablement Bilatéraux

Des recherches menées à l'Université de Nicosie ont révélé des découvertes intrigantes sur l'impact des avatars virtuels sur les attributs physiques des utilisateurs.
Il a été découvert que les individus **dont les avatars incarnaient des caractéristiques "plus fortes" ont démontré des améliorations mesurables de la force physique lors de divers tests**. Cela suggère que la perception et la représentation de son avatar peuvent influencer leurs capacités physiques dans le monde réel.
De plus, les chercheurs ont constaté que **les éléments visuels seuls se sont révélés plus efficaces pour prédire les traits de personnalité par rapport aux caractéristiques textuelles ou à une combinaison des deux**.
Une seule photo de profil est apparue comme un indicateur fiable pour prédire la personnalité d'un utilisateur, la représentation dans la formation des impressions en ligne que les gens se font des autres dans les environnements en ligne, et l'impact potentiel des PFP sur le comportement et l'engagement des utilisateurs.

<figure>
<img src="/media/nft-fundamentals-and-applications/3d-characters.webp" alt="Personnages 3D" />
</a>
<figcaption style="margin-top: 0px">
<span>Personnages 3D tirés d'une étude montrant que les performances des joueurs sont affectées par les caractéristiques perçues de leurs avatars.</span>
</figcaption>
</figure>

Sources :
* [Aliens versus humans: Do avatars make a difference in how we play the game?](https://ieeexplore.ieee.org/abstract/document/7012029/)
* [Automatic personality prediction using deep learning based on social media profile pictures and posts](https://ieeexplore.ieee.org/abstract/document/9702873).


### Les CryptoPunks ont émergé comme des objets de collection génératifs

[CryptoPunks](https://www.larvalabs.com/cryptopunks) représente une collection de 10 000 NFT de personnages de collection générés aléatoirement basés sur des traits distincts. Leur propriété est stockée en toute sécurité sur la Blockchain Ethereum.
Ils ont été initialement offerts gratuitement à récupérer en juin 2017. Aujourd'hui, ils sont devenus des actifs numériques très
recherchés avec des prix allant de milliers de dollars américains à des millions pour les plus rares.
Larva Labs, le créateur de CryptoPunks, a introduit un concept révolutionnaire en intégrant la
première collection avec un marché décentralisé intégré, qui incluait le trading sans redevance.
Larva Labs a conservé 10 % de l'offre ainsi que la propriété intellectuelle et les droits d'auteur de toute la collection.

> Lancé en juin 2017, CryptoPunks est un projet d'art interactif pionnier sur la blockchain Ethereum : 10 000 personnages uniques de 24×24 pixels - humains, singes, zombies et extraterrestres - générés algorithmiquement et inscrits de façon permanente sur la blockchain. Ce qui a commencé comme une expérience de propriété numérique est devenu le catalyseur d'un mouvement d'art moderne, le prototype des NFT tels que nous les connaissons, et un phénomène culturel qui continue de se propager.
> -- [Matt Hall et John Watkinson](https://www.larvalabs.com/cryptopunks)

En 2022, la propriété intellectuelle du projet a été acquise par [Yuga Labs](https://yuga.com/about), et en 2025, elle est passée à l'organisation à but non lucratif d'art numérique [Infinite Node Foundation](https://nodefoundation.com/), assurant la continuité et la préservation à long terme de la collection et de la communauté. Les Punks eux-mêmes restent à jamais inchangés : 10 000 portraits vivant en permanence sur la blockchain, perdurant comme art, code et culture.

<figure>
<a data-fancybox data-src="/media/nft-fundamentals-and-applications/cryptopunks.webp" data-caption="Chaque Punk est généré algorithmiquement à partir de 87 attributs distincts">
<img src="/media/nft-fundamentals-and-applications/cryptopunks_thumb.webp" alt="Chaque Punk est généré algorithmiquement à partir de 87 attributs distincts" />
</a>
<figcaption style="margin-top: 0px">
<span>Chaque Punk est généré algorithmiquement à partir de 87 attributs distincts.<br/>Source : <a href="https://www.cryptopunks.app/">CryptoPunks</a></span>
</figcaption>
</figure>

### Et Ont Évolué pour Devenir Bien Plus…

Les CryptoPunks incarnent une combinaison de différents éléments :
* **Art Numérique**
  Ce sont des œuvres d'art numériques avec des designs pixel art distincts et créatifs, chacun avec ses propres caractéristiques uniques.
* **Objets de Collection**
  Ils fonctionnent comme un marché intégré et sont devenus des objets de collection très recherchés dans le monde de la crypto.
* **PFP/ Communauté**
  De nombreux utilisateurs adoptent les CryptoPunks comme avatars en ligne, établissant un sentiment d'identité et d'appartenance au sein de la communauté.
* **Médias Sociaux**
  Les CryptoPunks sont devenus un sujet populaire pour les publications sur les médias sociaux, les utilisateurs partageant leurs Punks préférés et interagissant avec la communauté sur des plateformes comme Twitter et Instagram.

### [Bored Ape Yacht Club](https://boredapeyachtclub.com/)

Lancé en avril 2021 sur la blockchain Ethereum, [Bored Ape Yacht Club (BAYC)](https://boredapeyachtclub.com/) est une collection de 10 000 NFT uniques représentant des personnages de collection générés aléatoirement. Créé par Yuga Labs, BAYC a introduit l'utilité aux NFT en offrant des avantages exclusifs à ses membres, tels que l'accès à des événements exclusifs, des marchandises et des partenariats avec des marques et des créateurs. La collection est devenue un symbole de l'espace NFT, l'élevant en ajoutant une applicabilité dans le monde réel et en établissant une nouvelle norme pour les NFT en tant que "cartes de membre" exclusives accordant des avantages dans le monde réel.

<figure>
<a data-fancybox data-src="/media/nft-fundamentals-and-applications/bayc.webp" data-caption="Les OG. 10 000 singes, chacun unique et généré programmatiquement à partir de plus de 160 traits possibles">
<img src="/media/nft-fundamentals-and-applications/bayc_thumb.webp" alt="Les OG. 10 000 singes, chacun unique et généré programmatiquement à partir de plus de 160 traits possibles" />
</a>
<figcaption style="margin-top: 0px">
<span>Les OG. 10 000 singes, chacun unique et généré programmatiquement à partir de plus de 160 traits possibles.<br/>Source : <a href="https://boredapeyachtclub.com/collections/bayc">boredapeyachtclub.com</a></span>
</figcaption>
</figure>

#### Introduction de l'Utilité aux NFT

Yuga Labs a fortement mis l'accent sur la fourniture d'utilité aux NFT, améliorant leur valeur et leur utilité au-delà du simple fait d'être des objets de collection numériques :

* L'adhésion comprend l'entrée dans un espace de réunion virtuel, favorisant le réseautage et l'engagement communautaire ;
* La propriété de jetons accorde certains droits commerciaux, permettant des opportunités de monétisation ;
* Accès à des rassemblements en personne, tels que des soirées VIP ;
* Des airdrops périodiques offrent une valeur et des récompenses supplémentaires, améliorant les avantages des détenteurs de jetons à long terme ;
* L'inclusion dans [Otherside](https://otherside.xyz/), un univers numérique, offre un engagement utilisateur interactif et immersif ;
* Accès exclusif à des événements exclusifs, des marchandises et des partenariats avec des marques et des créateurs.

<figure>
<a data-fancybox data-src="/media/nft-fundamentals-and-applications/otherside.webp" data-caption="Otherside mélange les mécaniques des jeux de rôle en ligne massivement multijoueurs et des mondes virtuels activés par le web3 dans un nouveau format">
<img src="/media/nft-fundamentals-and-applications/otherside_thumb.webp" alt="Otherside mélange les mécaniques des jeux de rôle en ligne massivement multijoueurs et des mondes virtuels activés par le web3 dans un nouveau format" />
</a>
<figcaption style="margin-top: 0px">
<span>Otherside mélange les mécaniques des jeux de rôle en ligne massivement multijoueurs et des mondes virtuels activés par le web3 dans un nouveau format.<br/>Source : <a href="https://otherside.xyz/">OTHERSIDE</a></span>
</figcaption>
</figure>

## Mécanismes de Création de NFT

### Le processus de création d'un nouveau NFT

1. Conception de l'idée ;
2. Création et conception numériques ;
3. Tokenisation ;
4. Création de métadonnées et d'attributs ;
5. Configuration du contrat intelligent ;
6. Inscription sur une place de marché ;
7. Vente et transfert.

### Étape 1 - Conception de l'Idée

* **Identifier l'Actif**
  Déterminez le type d'objet numérique que vous souhaitez créer, qu'il s'agisse d'une œuvre d'art, d'une composition musicale, d'un clip vidéo ou de quelque chose d'entièrement différent
* **Déterminer sa Proposition de Valeur**
  * Évaluez ce qui rend votre actif spécial
    * S'agit-il d'une pièce unique en son genre ?
    * Appartient-il à une édition limitée ?
    * Quelle est sa valeur intrinsèque ou perçue ?
  * CryptoPunks offre 10 000 avatars en édition limitée, générés algorithmiquement, stockés sur la blockchain Ethereum, offrant une propriété et une rareté vérifiables

### Étape 2 - Création Numérique

* **Concevoir l'Actif**
  Maintenant que vous savez ce que vous créez et pourquoi c'est précieux, procédez à la conception ou à la création de votre pièce numérique qui sera finalement créée en tant que NFT.
* **Assurer son Originalité et sa Conformité**
  Assurez-vous que votre création est unique pour éviter les problèmes de droits d'auteur. Assurez-vous également que vous avez le droit légal de créer l'actif.

### Étape 3 - Tokenisation

* **Choisir une Blockchain**
  Les blockchains populaires pour créer des NFT incluent Ethereum, Binance Smart Chain et Polygon. Votre choix peut dépendre de divers facteurs tels que les frais de réseau, la popularité et les standards pris en charge.
* **Utiliser les Standards NFT**
  Sélectionnez un standard NFT qui correspond à vos besoins. ERC-721 est couramment utilisé pour les actifs uniques, tandis qu'ERC-1155 permet des jetons fongibles et non fongibles dans un seul contrat.
* **Créer le NFT**
  Finalisez le processus de création en "créant" ou en convertissant votre actif numérique en jeton non fongible.
  Cette action est généralement effectuée via une interface de plateforme et engage votre actif et ses métadonnées sur la blockchain.

### Étape 4 - Métadonnées et Attributs

* **Définir les Métadonnées du NFT**
  Saisissez les informations clés pour identifier et décrire votre NFT
  Cela inclut le titre pour une reconnaissance facile, un résumé descriptif pour capturer son essence,
  le nom du créateur pour l'attribution, et divers attributs (comme la couleur, le numéro d'édition ou le genre) qui fournissent plus de contexte.
* **Intégrer des Propriétés Spéciales**
  Allez au-delà des informations de base en ajoutant des caractéristiques ou des traits uniques
  Cela pourrait être du contenu déverrouillable, des étiquettes d'édition limitée, ou même des éléments interactifs qui approfondissent l'engagement et ajoutent potentiellement de la valeur au NFT.
* **Améliorer l'Interactivité**
  Rendez votre NFT plus engageant en incorporant des éléments interactifs.
  Par exemple, vous pourriez créer un NFT qui change d'apparence en fonction de l'interaction de l'utilisateur ou déclenche une action spécifique lorsqu'il est scanné.

### Étape 5 - Configuration des Contrats Intelligents

* **Configurer un Contrat Intelligent**
  Créez un contrat intelligent basé sur la blockchain qui agit comme l'épine dorsale juridique et fonctionnelle de
  votre NFT. Ce contrat impose la façon dont le NFT peut être utilisé, vendu ou transféré.
* **Définir vos Règles**
  Au sein du contrat intelligent, décrivez les dispositions spécifiques sur la façon dont la propriété est gérée, le
  pourcentage de redevances qui revient au créateur original lors de la revente, et les conditions dans
  lesquelles le NFT peut être transféré ou interagi.

### Étape 6 - Inscription sur une Place de Marché

* **Sélectionner une Place de Marché**
  Choisissez où lister le NFT (par exemple, [Blur](https://blur.io/), [OpenSea](https://opensea.io/), [Rarible](https://rarible.com/), [SuperRare](https://superrare.com/), etc.)
* **Télécharger et Définir les Métadonnées**
  Vérifiez les métadonnées définies (titre, description, créateur, attributs)
* **Définir les Paramètres de Prix**
  Fixez un prix spécifique pour le NFT
* **Réviser et Confirmer**
  Avant de publier, vérifiez tous les détails pour garantir l'exactitude et l'exhaustivité
* **Publier le NFT**
  Une fois satisfait, publiez votre NFT sur la place de marché, le rendant disponible aux acheteurs potentiels

### Étape 7 - Vente et Transfert

* **Surveiller les Enchères**
  Vérifiez régulièrement l'activité d'enchères sur votre NFT. Soyez à l'affût des offres entrantes et évaluez-les en fonction de vos critères définis pour vendre l'actif.
* **Finaliser la Vente du NFT**
  Acceptez une enchère ou atteignez la date limite de l'enchère, puis transférez la propriété du NFT à l'acheteur. Collectez vos fonds dans la cryptomonnaie choisie.
* **Surveiller les Ventes et les Performances**
  Suivez les données de vente et les mesures de performance pour comprendre la popularité et la valeur de votre NFT au fil du temps.


### Création en Lot de NFT

Voici des méthodes solides et largement utilisées pour **créer (minter) des NFT en lot via des API**, regroupées par ce que vous cherchez à optimiser :

#### Fournisseurs d'API de "Minting" clés en main (le plus rapide à déployer)

* **NFTPort (mint en lot ERC-1155 via API)** – dispose d'un point de terminaison dédié pour le **minting en lot personnalisable** pour les contrats "produit" ERC-1155, vous permettant de minter plusieurs jetons en un seul appel (et plusieurs copies par jeton). ([docs.nftport.xyz][1])
* **Crossmint Mint API (options de garde / sans portefeuille)** – mintez et livrez des NFT à un portefeuille **ou même à une adresse e-mail** (ils peuvent créer un portefeuille pour l'utilisateur). Disponible en tant qu'API REST et également via une intégration QuickNode Marketplace. ([docs.crossmint.com][2])
* **Venly NFT API (distribution en lot à de nombreux destinataires)** – conçu pour **minter en lot + envoyer** à plusieurs adresses de portefeuille (éventuellement des montants différents par destination). ([Venly][3])
* **Immutable Minting API (lot + traitement asynchrone)** – prend en charge le **minting en lot** et traite les demandes de manière asynchrone ; les lots peuvent être optimisés pour partager des hachages de transaction afin de réduire les coûts. ([docs.immutable.com][4])

#### Plateformes pour développeurs (vous possédez toujours le contrat, mais les SDK aident beaucoup)

* **thirdweb (métadonnées en lot / modèles de mint en lot)** – fournit des extensions de contrat comme **BatchMintMetadata** (utile pour les drops de style "lot" où les métadonnées sont organisées sous un modèle baseURI/tokenId). Idéal si vous voulez un SDK + des contrats + des tableaux de bord. ([thirdweb docs][5])

#### Stockage + "construisez votre propre API de minting" (contrôle maximal, courant en production)

Ceux-ci ne mintent pas les NFT eux-mêmes, mais ils font généralement partie de tout pipeline de mint en lot :

* **Pinata (téléchargements IPFS via API/SDK)** – méthode fiable pour télécharger en lot des images + métadonnées vers IPFS, puis votre backend minte en lots en utilisant votre contrat. ([docs.pinata.cloud][6])
* **OpenZeppelin contracts (construisez vos propres fonctions de mint en lot)** – contrats de base standard, audités ; vous implémentez des modèles de minting en lot (souvent ERC-1155 pour un vrai batch, ou des approches ERC-721 optimisées en gaz). ([OpenZeppelin Docs][7])

#### Minting en lot spécifique à la chaîne

* **XRPL (exemple de mint en lot)** – si vous êtes sur XRP Ledger, il existe un flux JS documenté pour le minting en lot de plusieurs NFT. ([xrpl.org][8])

#### Note sur les "API NFT" qui sont principalement pour les données (pas le minting)

* **Alchemy NFT API** et **Moralis NFT API** sont excellentes pour **l'indexation, les requêtes, les métadonnées, la propriété**, etc., mais elles ne sont pas principalement des API de mint en lot "minting-as-a-service" de la même manière que NFTPort/Crossmint/Venly/Immutable. ([Alchemy][9])

#### Top 3 des solutions d'API de minting de NFT en lot sur Ethereum (EVM)

1. **NFTPort (mint en lot ERC-1155 via API REST)**
  * Meilleur lorsque vous voulez un vrai "batching" (plusieurs jetons / quantités en un seul appel) en utilisant **ERC-1155**.
  * Dispose d'un point de terminaison dédié **Batch customizable minting (ERC1155)** : "créer plusieurs NFT avec un seul appel API" et "plus d'un du même jeton." ([docs.nftport.xyz][1])
2. **Venly NFT API (mint en lot + distribution à plusieurs portefeuilles)**
  Meilleur pour les **lots de style airdrop** où vous mintez et envoyez à **plusieurs adresses de destination** (même des montants différents par portefeuille) en une seule requête. ([Venly][3])
3. **Crossmint Minting API (mint + livraison, y compris destinataires sans portefeuille/e-mail)**
    Meilleur lorsque vous avez besoin de **minting + livraison faciles** avec moins de difficultés UX web3 (par exemple, destinataires via adresse de portefeuille ou e-mail, création de portefeuille via API). ([docs.crossmint.com][2])

[1]: https://docs.nftport.xyz/reference/batch-customizable-minting?utm_source=chatgpt.com "Batch customizable minting (ERC1155) - NFTPort Developer Documentation ..."
[2]: https://docs.crossmint.com/minting/quicknode/api-reference?utm_source=chatgpt.com "QuickNode RPC API Reference - Crossmint Docs"
[3]: https://docs.venly.io/docs/how-to-batch-mint-nfts-to-multiple-destinations?utm_source=chatgpt.com "Batch Mint NFTs - docs.venly.io"
[4]: https://docs.immutable.com/build/typescript/usage/minting/minting-api/?utm_source=chatgpt.com "Minting API | Immutable Documentation"
[5]: https://portal.thirdweb.com/tokens/build/extensions/general/BatchMintMetadata?utm_source=chatgpt.com "BatchMintMetadata | thirdweb contract"
[6]: https://docs.pinata.cloud/files/uploading-files?utm_source=chatgpt.com "Uploading Files - Pinata Docs"
[7]: https://docs.openzeppelin.com/contracts/5.x/api/token/erc721?utm_source=chatgpt.com "ERC721 | OpenZeppelin Docs"
[8]: https://xrpl.org/docs/tutorials/javascript/nfts/batch-mint-nfts?utm_source=chatgpt.com "Batch Mint NFTs Using JavaScript - xrpl.org"
[9]: https://www.alchemy.com/docs/reference/nft-api-quickstart?utm_source=chatgpt.com "NFT API Quickstart | Alchemy Docs"

## Conclusion

* Les NFT représentent des actifs numériques uniques sur les blockchains, permettant la propriété d'actifs numériques et physiques.
* Ethereum sert de plateforme fondamentale pour les NFT, prenant en charge des standards comme ERC-721, avec d'autres blockchains telles que Binance Smart Chain et Solana qui contribuent également.
* Les PFP servent d'identités virtuelles au sein des communautés en ligne, où leur impact est façonné par la qualité, l'innovation et l'engagement communautaire.
* Le succès futur des NFT dépend de l'originalité, de l'utilité et de l'intégration transparente dans diverses industries.

## Pour aller plus loin

* [Exploring The Blur Marketplace + Minting an NFT Collection on OpenSea](https://youtu.be/CkLwtLvYvx4?si=piprime)
* [How Non-Fungible Tokens Work](https://www.investopedia.com/non-fungible-tokens-nft-5115211)
* [What are NFT profile pictures and why do people use them?](https://cointelegraph.com/learn/what-are-nft-profile-pictures)
* [What Is Tokenized Real Estate?](https://chain.link/education-hub/tokenized-real-estate)
* [PFP NFTs: A Beginner's Guide](https://builtin.com/blockchain/nft-pfp)
* [NFT PFPs: The Rise of NFT Profile Pictures on Social Media](https://learn.bybit.com/nft/nft-pfps-profile-pictures/)
