---
title: "Comprendre la Finance Décentralisée (DeFi)"
date: 2025-12-07 17:00:00
id: defi-comprendre
lang: fr
description: "La Finance Décentralisée (DeFi) est un ensemble de services financiers décentralisés, open-source, pair-à-pair construits sur la technologie blockchain."
categories:
- [FR, Tech, Blockchain]
- [FR, Tech, DeFi]
- [FR, Tech, Cryptographie]
tags:
- blockchain
- defi
- bookmark
- cryptographie
---

[This article is available in English](/en/defi-understand/).

{% note %}
Ceci est le résumé du MOOC [Mastering Web3](https://www.unic.ac.cy/mastering-web3-unic-s-brand-new-free-mooc-offering-a-blockchain-verifiable-certificate/) suivi à l'[Université de Nicosia](https://www.unic.ac.cy/).
{% endnote %}

## Définir la DeFi

### Finance Traditionnelle (TradFi)

Nous utiliserons le terme TradFi pour désigner l'industrie des services financiers, englobant la gestion de l'argent, du crédit, des services bancaires, des investissements, des actifs et passifs, etc.
* Au centre des services et activités de TradFi se trouvent des institutions centralisées qui agissent comme intermédiaires. Ainsi, le terme CeFi, abréviation de Finance Centralisée, peut être utilisé comme synonyme de TradFi.
* Les institutions CeFi incluent les banques centrales, les banques commerciales et tous types de prestataires de services financiers.
* TradFi repose sur deux piliers principaux :
* Approche de garde : les actifs sont confiés à des entités CeFi pour la conservation et la gestion
* Nature permissionnée : seuls les individus et organisations vérifiés peuvent participer au système financier ; l'activité des utilisateurs est étroitement liée à l'identité.

La capacité de commercer avec des entités non fiables par l'intermédiaire d'un intermédiaire de confiance a sans doute été un moteur de la croissance économique pendant des siècles.

### Inconvénients de TradFi

* Exclusion financière : Affecte 1,4 à 1,5 milliard de personnes dans le monde (24-25%), avec des portions plus petites de la population en Europe (3,6%) et aux États-Unis (4-5%) restant non bancarisées et manquant d'accès aux services financiers traditionnels.
* Coûts élevés et vitesses lentes : Les envois de fonds comportent des frais élevés, en moyenne 7%, et peuvent atteindre 10,53% lors de l'utilisation de banques. Les transferts sont souvent artificiellement retardés, augmentant l'inefficacité.
* Politisation de l'argent : Les banques centrales et les gouvernements peuvent manipuler les devises, imprimer de l'argent et imposer des contrôles de capitaux, entraînant des distorsions du marché et une instabilité économique.
* Manque de transparence et risques systémiques : La finance traditionnelle est opaque, conduisant à des asymétries d'information, des risques systémiques et des scandales comme la manipulation du Libor.
* Crises et retraits bancaires : Les systèmes financiers traditionnels sont vulnérables aux crises économiques et aux retraits soudains, déstabilisant le système et créant des risques supplémentaires pour les individus.

### DeFi Définie

La Finance Décentralisée (DeFi) est un ensemble de services financiers décentralisés, open-source, pair-à-pair construits sur la technologie blockchain, minimisant la dépendance à des tiers comme les banques.
* Contrairement aux fintech, qui améliorent la finance traditionnelle, la DeFi permet des activités financières telles que le prêt, l'emprunt et le trading sans institutions centralisées, en utilisant des contrats intelligents pour gérer les transactions.
* La DeFi révolutionne les services traditionnels en supprimant les intermédiaires, permettant aux utilisateurs d'interagir directement dans un environnement sans confiance, réduisant les coûts et augmentant l'efficacité.
* La DeFi ne réplique pas seulement les fonctions financières traditionnelles mais permet également de nouveaux services et modèles commerciaux innovants qui ne sont pas réalisables dans les systèmes financiers conventionnels.
* Les utilisateurs conservent le contrôle total de leurs actifs, éliminant le besoin de services de garde.
* La DeFi fonctionne 24h/24 et 7j/7 sans besoin d'heures bancaires ou de retards de traitement, offrant une accessibilité mondiale.

### Caractéristiques de la DeFi

Caractéristiques qui différencient les blockchains publiques (sur lesquelles fonctionne la DeFi) des réseaux privés utilisés dans TradFi :
* Ouvert/Sans Permission & Résistant à la Censure : Les blockchains publiques permettent un accès illimité à la DeFi, sans besoin de preuve d'identité ou d'autorisation, et aucune entité unique ne peut bloquer des transactions valides.
* Transactions Pair-à-Pair : Les transactions se produisent directement entre utilisateurs, éliminant le besoin d'intermédiaires.
* Validation Décentralisée : La validation des transactions est distribuée parmi des participants indépendants du réseau, garantissant qu'aucune autorité centrale ne contrôle le processus.
* Transparence Publique : Toutes les transactions et changements d'état sont publiquement accessibles et vérifiables par quiconque.
* Enregistrements Immuables : Une fois enregistrées, les transactions ne peuvent être modifiées, garantissant des enregistrements inviolables.
* Opérations Sans Frontières : La DeFi fonctionne mondialement sans restrictions géographiques, permettant à quiconque ayant accès à Internet de participer.

### La DeFi est en croissance constante

<picture>
<img alt="La DeFi est en croissance constante" src="/media/defi-understand/defi-growing.webp">
<figcaption>
<span><a href="https://a16zcrypto.com/posts/article/state-of-crypto-report-2025/">Source</a>.</span>
</figcaption>
</picture>


● Depuis la création de la DeFi, les DEX ont atteint 10% du trading spot de crypto, contre 0% il y a quatre ans.
● Plus de 150 milliards de dollars sont bloqués dans des milliers de protocoles DeFi.

## La pile DeFi

Les applications DeFi peuvent être considérées à différents niveaux d'abstraction

<picture>
<img alt="niveaux d'abstraction defi" src="/media/defi-understand/defi-layers-abstraction.webp">
<figcaption>
<span><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3571335">Source</a>.</span>
</figcaption>
</picture>

### La Couche de Règlement

**La Couche de Règlement est là où les transactions sont finalement réglées**.

La couche de règlement est le fondement de toutes les activités dans un écosystème décentralisé.
* **Elle se compose de la blockchain sous-jacente, ainsi que de son actif natif**.
* Par exemple, dans le cas des applications DeFi sur Ethereum, la couche de règlement inclut la blockchain Ethereum et l'Ether (l'actif natif d'Ethereum).

Les couches de règlement :
* **Stockent les informations, la valeur et la propriété de manière sécurisée**
* **Garantissent que les changements d'état (soldes, propriété, etc.) suivent les règles de la blockchain**
* **Permettent une exécution sans confiance**

Comme le règlement est la première couche de la pile, les blockchains sont appelées blockchains Layer 1 (L1).

### La Couche des Actifs

**La Couche des Actifs inclut tous les tokens utilisés dans les applications DeFi**.

La couche des Actifs fait référence à la fois aux actifs natifs (L1) et non natifs, elle se compose de **tous les actifs** qui sont émis au-dessus de la couche de règlement.
Cela inclut l'actif natif du réseau (par exemple, dans le cas d'Ethereum, l'Ether) mais aussi d'autres tokens qui sont émis selon les règles de L1.

Chaque blockchain L1 a ses propres règles pour l'émission de tokens, encapsulées dans des standards.
* Par exemple, **ERC20** est le standard d'Ethereum pour les tokens fongibles, **ERC721** est le standard d'Ethereum pour les tokens non fongibles, **ERC1155** est le standard d'Ethereum pour les tokens semi-fongibles, **ERC1400** est le standard d'Ethereum pour les tokens de sécurité, etc.
* De même, **SPL** est le standard de tokens fongibles de Solana, **BEP20** est celui de BSC, **BEP721** est le standard de BSC pour les tokens non fongibles, **BEP1155** est le standard de BSC pour les tokens semi-fongibles, **BEP1400** est le standard de BSC pour les tokens de sécurité, etc.

#### Les tokens natifs vs non natifs remplissent différentes fonctions

**Tokens natifs**
* Ils sont la sève vitale de la blockchain L1, soutenant ses fonctions de base et alimentant toutes les applications construites dessus.
* Exemples : ETH (Ethereum), BNB (BSC), AVAX (Avalanche), SOL (Solana), etc.

**Tokens non natifs**
* Tous les autres tokens utilisés dans des applications spécifiques, remplissant différentes fonctions.
* Exemples : UNI (Uniswap, un échange décentralisé), AAVE (Aave, une plateforme de prêt), MKR/DAI (Maker), etc.

On peut trouver une [liste exhaustive de tous les standards liés aux tokens proposés pour le réseau Ethereum](https://github.com/PhABC/ethereum-token-standards-list)

### La Couche Protocole

La Couche Protocole est là où se trouvent la plupart des applications DeFi, elle **inclut la fonctionnalité principale des dApps**, telles que les échanges décentralisés, les plateformes de prêt et les stablecoins.

**La Couche Protocole est le cœur des Applications Décentralisées (dApps)** :
* Héberge les fonctionnalités essentielles des dApps, en particulier dans le secteur DeFi.
* Les dApps sont exécutées via des contrats intelligents sur cette couche.

**Implémentation et Interaction** :
* Les contrats intelligents forment l'épine dorsale des dApps.
* Les utilisateurs s'engagent généralement avec ces contrats via des interfaces Web2 familières, se liant à la Couche Application

**Fonctionnalités Diverses au sein de la Couche Protocole** :
* Facilite les échanges décentralisés (DEX) pour le trading d'actifs pair-à-pair direct.
* Permet les plateformes de prêt et d'emprunt pour les transactions de finance décentralisée.
* Prend en charge les instruments financiers complexes comme les dérivés.
* Inclut un large éventail d'autres applications : stablecoins, protocoles de yield farming, pools de liquidité, marchés de prédiction, assurance et outils de gestion d'actifs.

### La Couche Application

**La Couche Application permet à la plupart des utilisateurs d'accéder aux applications DeFi, c'est une Passerelle vers la DeFi pour les Utilisateurs**.
Conçue pour les utilisateurs qui ne s'engagent pas directement avec la Couche Protocole ou les contrats intelligents, elle fournit une interface conviviale, rendant la DeFi accessible à un public plus large.

**Simplification des Interactions DeFi** :
* Les applications DeFi offrent des Interfaces Utilisateur (IU) intuitives pour faciliter l'utilisation.
* Ces interfaces s'adressent aux non-experts, simplifiant les interactions financières complexes.

**Rôle et Importance** :
* Agit comme la couche front-end, reliant les utilisateurs aux contrats intelligents DeFi sous-jacents.
* Essentielle pour rationaliser et démystifier l'expérience utilisateur dans la finance décentralisée.

Bien que les front-ends web soient cruciaux pour accéder aux applications DeFi, ils ne sont pas les applications elles-mêmes. Ces interfaces servent de couche visible, permettant une interaction efficace et conviviale avec des protocoles blockchain complexes.

### Couche d'Agrégation

**La Couche d'Agrégation consolide divers services DeFi en une seule plateforme**.
Elle agrège plusieurs applications décentralisées (dApps) et protocoles, fournissant aux utilisateurs une interface unifiée pour accéder à un large éventail de services financiers.

**Caractéristiques Clés** :
* **Interface Unifiée** : Offre un point d'entrée unique pour accéder à plusieurs services DeFi.
* **Efficacité** : Réduit le besoin pour les utilisateurs de naviguer sur plusieurs plateformes, économisant du temps et des efforts.
* **Accessibilité** : Rend les services financiers complexes plus accessibles à un public plus large.

**Rôle et Importance** :
* Agit comme la couche intermédiaire, connectant les utilisateurs à la Couche Application et à la Couche Protocole.
* Facilite l'interaction transparente entre les utilisateurs et l'écosystème DeFi sous-jacent.

**La Couche d'Agrégation consolide divers services DeFi en une seule plateforme**.
Elle agrège plusieurs applications décentralisées (dApps) et protocoles, fournissant aux utilisateurs une interface unifiée pour accéder à un large éventail de services financiers.

**Exemples d'agrégateurs** :
* [DeBank](https://debank.com/) : Offre une vue holistique des actifs et passifs DeFi des utilisateurs, supportant de nombreux protocoles et facilitant le suivi et la gestion faciles du portefeuille.
* [Yearn Finance](https://yearn.fi/) : Automatise le processus de yield farming, déplaçant les fonds à travers différents protocoles de prêt pour maximiser les gains d'intérêt pour les utilisateurs.

## Prêt Décentralisé

**Le Prêt Décentralisé est un service financier autonome décentralisé qui gouverne algorithmiquement les prêts via des contrats intelligents**.

**Caractéristiques Clés** :
* **Gouvernance par Contrat Intelligent** : Utilise des contrats intelligents pour automatiser et gouverner les processus de prêt.
* **Prise de Décision Décentralisée** : Permet aux utilisateurs de participer aux processus de prise de décision via des mécanismes de gouvernance décentralisés.
* **Gestion des Risques** : Met en œuvre des protocoles de gestion des risques pour assurer la sécurité et la stabilité des prêts.


**Avantages de la Finance Décentralisée**
* Vise à améliorer l'efficacité de la distribution du capital et à réduire les coûts associés.
* S'efforce de supprimer les barrières à l'inclusion financière, promouvant la confidentialité et la liberté économiques.
* Bien que ces objectifs soient communs, différentes plateformes varient dans leur efficacité et leur approche pour les atteindre.

**Accès Ouvert et Processus Simplifiés**

* Aucune contrepartie centrale ne supervise ou n'établit les conditions pour les dépôts et les prêts.
* Élimine le besoin d'historiques de crédit ou de dossiers financiers étendus, démocratisant l'accès aux services financiers.
* Permet à quiconque de prêter ses actifs et de gagner des intérêts, ou d'emprunter de la crypto en fournissant une garantie.

| Collatéral | Les prêts sont généralement surcollatéralisés | Les prêts sont généralement sous-collatéralisés ou non garantis |
| Maturité | Fixe ou Perpétuelle | Généralement fixe |
| Risques pour le prêteur | Risque de plateforme, risque de protocole, volatilité, risque de gouvernance, rug pulls, etc. | Risque de défaut, risque systémique |
| Risques pour l'emprunteur | Liquidation forcée | Perte de garantie, conséquences juridiques |

| Liquidité | Élevée | Faible |
| --- | --- | --- |
| Contrôle utilisateur | Élevé | Faible |
| Taux d'intérêt | Variable | Fixe |
| Collatéral | Requis | Optionnel |
| Maturité | Flexible | Fixe |
| Risques pour le prêteur | Risque de plateforme, risque de protocole, volatilité, risque de gouvernance, rug pulls, etc. | Risque de défaut, risque systémique |
| Risques pour l'emprunteur | Liquidation forcée | Perte de garantie, conséquences juridiques |

| Contrôle utilisateur | Élevé | Faible |
| --- | --- | --- |
| Taux d'intérêt | Variable | Fixe |
| Collatéral | Requis | Optionnel |
| Maturité | Flexible | Fixe |
| Risques pour le prêteur | Risque de plateforme, risque de protocole, volatilité, risque de gouvernance, rug pulls, etc. | Risque de défaut, risque systémique |
| Risques pour l'emprunteur | Liquidation forcée | Perte de garantie, conséquences juridiques |

### Les prêts TradFi peuvent être sous-collatéralisés – mais à un coût

En échange de la fourniture de prêts, les prêteurs TradFi exigent généralement :
* **Une certaine récompense**, généralement sous forme de taux d'intérêt (qui, à son tour, reflète la solvabilité de l'emprunteur).
* **Une certaine assurance** que l'argent sera remboursé, généralement sous forme de garantie, de vérifications d'historique de crédit et de KYC. Les prêteurs TradFi peuvent également obliger les emprunteurs à rembourser par la loi.

Pour ces raisons, les prêteurs peuvent fournir des **prêts sous-collatéralisés ou même non garantis** : **des prêts où la valeur de la garantie est inférieure à la valeur du prêt (ou même nulle)**.
C'est parce que les risques/coûts supplémentaires pour les prêteurs sont couverts par les taux d'intérêt qu'ils facturent.
Pour couvrir les risques/coûts supplémentaires pour les prêteurs, les taux d'intérêt dans TradFi sont généralement élevés.

Mais qu'en est-il des prêts DeFi, où aucun processus juridique, d'historique de crédit ou de KYC n'est généralement appliqué ?

### Les prêts DeFi doivent être surcollatéralisés

Dans la finance pseudonyme, sans permission et ouverte, il serait raisonnable de supposer que si la valeur de la garantie tombait en dessous de la valeur du prêt, il n'y aurait aucune incitation à rembourser la dette.
**C'est ce qu'on appelle l'aléa moral**

Pour atténuer cela, les prêts DeFi sont généralement **surcollatéralisés** :
* En d'autres termes, un emprunteur ne peut emprunter **moins** d'argent que la valeur de sa garantie.
* **Si la valeur de la garantie tombe plus tard en dessous de la valeur en cours du prêt, la garantie sera (partiellement ou totalement) liquidée**, c'est-à-dire vendue sur le marché ouvert pour rembourser le prêteur.
* Pas d'aléa moral ; pas besoin de KYC, de vérifications d'historique de crédit ou d'appel aux autorités.

### Plateformes de prêt DeFi populaires

* [Aave](https://aave.com/) : Offre une plateforme de prêt décentralisée avec un accent sur la liquidité et le contrôle utilisateur.
* [Compound](https://compound.finance/) : Fournit une plateforme de prêt décentralisée avec un accent sur les taux d'intérêt et le contrôle utilisateur.
* [MakerDAO](https://makerdao.com/) : Connu pour son stablecoin DAI, MakerDAO permet aux utilisateurs d'emprunter contre leur cryptomonnaie en créant des Positions de Dette Collatéralisée (CDP).
* [DyDx](https://www.dydx.xyz/) : Un échange décentralisé non custodial et plateforme de prêt qui offre le trading sur marge ainsi que des capacités d'emprunt et de prêt

## Échanges décentralisés

Les échanges décentralisés sont des contrats intelligents qui imitent la fonctionnalité des CEX.

Les DEX sont des applications décentralisées (dApps) qui facilitent les échanges de tokens en utilisant des contrats intelligents, supprimant le besoin d'un intermédiaire central. Ils permettent aux utilisateurs d'acheter et de vendre des tokens en échange d'autres tokens de manière pair-à-pair.

**Caractéristiques Clés des DEX** :
* **Trading Pair-à-Pair** : Permet des échanges directs entre utilisateurs, éliminant les intermédiaires comme les courtiers, les market makers et les dépositaires.
* **Auto-Garde** : Les utilisateurs conservent le contrôle de leurs fonds, améliorant la sécurité et l'autonomie.

**Avantages et Intégration dans la DeFi** :
* **Composabilité** : Les DEX peuvent interagir de manière transparente avec d'autres applications DeFi, favorisant un écosystème financier plus intégré et polyvalent.
* **Interopérabilité** : Facilite l'interaction facile et la compatibilité avec une variété d'applications et protocoles DeFi.
* **Potentiel de Coûts de Transaction Plus Faibles** : Théoriquement, l'absence d'intermédiaires dans les DEX peut conduire à des frais de transaction réduits.
* **Sécurité Améliorée** : Les DEX fonctionnent sur un réseau décentralisé, réduisant le risque de points de défaillance uniques et améliorant la sécurité.
* **Contrôle Utilisateur** : Les utilisateurs ont un contrôle total sur leurs actifs, leur permettant de prendre des décisions éclairées et de gérer leurs finances plus efficacement.

### Contexte : Comprendre les carnets d'ordres

La notion de base sur laquelle fonctionne un CEX est celle d'un **carnet d'ordres**, qui collecte le volume de tous les ordres d'achat (bid) et de vente (ask) pour un actif. Inversement, un DEX s'appuiera généralement sur des **pools de liquidité et des market makers automatisés**.

Pour comprendre la différence, expliquons d'abord ce qu'est un carnet d'ordres.
* Un carnet d'ordres collecte le volume de tous les ordres d'achat (**bid**) et de vente (**ask**) pour un actif.
* Le prix actuel de l'actif est déterminé par l'endroit où les bids et les asks se rencontrent (sont **appariés**).

Les carnets d'ordres sont efficaces dans les **marchés liquides** car ils minimisent le **slippage** (la différence entre le prix attendu et réel d'un échange).

La liquidité CEX est fournie par des **market makers (MM)**, dont le travail est de maintenir un flux d'ordres bid et ask dans le carnet.


### Exemple d'instantané de carnet d'ordres

<picture>
<img alt="Exemple d'instantané de carnet d'ordres" src="/media/defi-understand/order-book.webp">
<figcaption>
<span>Exemple d'instantané de carnet d'ordres.</span>
</figcaption>
</picture>

**Il est cependant très difficile de construire un DEX en utilisant des carnets d'ordres**.
**Poster des ordres nécessiterait des transactions sur la chaîne, qui coûtent des frais de gas et il en serait de même pour l'annulation d'ordres.**

En conséquence, les ordres sur la chaîne deviendraient très coûteux, en particulier pour les market makers (MM) et les traders haute fréquence (HFT).

Étant donné que les MM/HFT sont importants pour des opérations de marché efficaces, un DEX basé sur un carnet d'ordres serait probablement **illiquide**.
L'illiquidité se traduit par un **slippage élevé, des échanges perdus et une découverte de prix inefficace**.
Ces problèmes seraient exacerbés par le **délai** introduit par les temps de confirmation de bloc ; les transactions doivent être confirmées sur la blockchain, ce qui, entre autres, ouvre la possibilité de frontrunning des échanges.

Une Solution est de **remplacer les carnets d'ordres par des pools de liquidité**.

**Un pool de liquidité est une réserve de fonds détenue dans un contrat intelligent.**
* Les LP sont l'un des **mécanismes fondamentaux** de la DeFi.
* Ils sont essentiels, non seulement dans les DEX, mais aussi dans le dLending/dBorrowing, les actifs synthétiques, l'assurance, etc.

Les LP visent à surmonter le piège de liquidité dans le trading décentralisé en **assurant toujours une liquidité suffisante**.

[Bancor](https://bancor.network/) a été le premier protocole qui a utilisé les LP, mais ils ont été popularisés par [Uniswap](https://uniswap.org/).
* D'autres DEX populaires qui utilisent des LP sont [Curve](https://curve.fi/) (multi-blockchain), [Pancakeswap](https://pancakeswap.finance/) (BSC), [Balancer](https://balancer.fi) (Ethereum), etc.

**Dans les DEX basés sur les LP, n'importe qui peut devenir un market maker en fournissant de la liquidité pour une paire de tokens**.
Cela signifie également qu'il n'y a **pas d'exigences de listing**, comme celles trouvées dans les CEX

### Échanges décentralisés populaires

* [Uniswap](https://uniswap.org/) : Le plus grand échange décentralisé par volume, opérant sur Ethereum.
* [SushiSwap](https://sushiswap.fi/) : Un échange décentralisé qui offre une interface conviviale et un accent sur la liquidité et le contrôle utilisateur.
* [Pancakeswap](https://pancakeswap.finance/) : Un DEX populaire sur Binance Smart Chain.
* [Balancer](https://balancer.finance/) : Se concentre sur la gestion de portefeuille automatisée avec des pools de liquidité qui s'ajustent aux mouvements du marché.
* [Curve](https://curve.fi/) : Se spécialise dans le trading de stablecoins avec un faible slippage et des frais.

## Conclusions

* La DeFi transforme le paysage financier en permettant aux utilisateurs d'accéder aux services financiers de manière décentralisée, pair-à-pair.
* Les caractéristiques clés de la DeFi incluent : accès ouvert/sans permission, transactions pair-à-pair, décentralisation, vérifiabilité publique, immuabilité et fonctionnalité sans frontières.
* La pile DeFi se compose de plusieurs couches : Couche de Règlement, Couche d'Actifs, Couche Protocole, Couche Application et Couche d'Agrégation.
* Les plateformes de prêt et d'emprunt décentralisées fonctionnent via des contrats intelligents, supprimant le besoin d'intermédiaires et de vérifications de crédit traditionnelles.
* Les prêts DeFi sont généralement surcollatéralisés, éliminant l'aléa moral et réduisant les risques pour les prêteurs.
* Les échanges décentralisés (DEX) permettent aux utilisateurs d'échanger des tokens sans intermédiaires en s'appuyant sur des pools de liquidité plutôt que sur des carnets d'ordres traditionnels.
* La DeFi présente des opportunités uniques d'innovation, mais comporte également des risques tels que le risque de plateforme, le risque de protocole et le risque de gouvernance.

## Lectures complémentaires
* [DeFi Pulse](https://defipulse.com/)
* [DeFi Llama](https://defillama.com/)
* [DeFi Pulse](https://defipulse.com/)
* [Navigating DEXs and Decentralized Lending/Borrowing Platforms](https://www.youtube.com/watch?v=qQO63t9oUBk)
