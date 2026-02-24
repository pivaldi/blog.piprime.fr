---
title: "Comment fonctionne Ethereum"
date: 2025-10-29 22:11:47
id: comment-fonctionne-ethereum
tree_view: true
lang: fr
description: "Des transactions simples aux applications décentralisées complexes, toutes les applications qui s'exécutent sur la blockchain Ethereum repose sur Ether (ETH). Voyons comment fonctionne Ethereum."
categories:
- [FR, Tech, Cryptographie, Ethereum]
tags:
- cryptographie
- hasard
- distribué
- décentralisé
- ethereum
---

<picture>
<img alt="Ethereum logo portrait noir" height="300" src="/media/comment-fonctionne-ethereum/ethereum-logo-portrait-black.svg">
</picture>


{% note %}
Ceci est le résumé d'un cours du MOOC
[Mastering Web3](https://www.unic.ac.cy/mastering-web3-unic-s-brand-new-free-mooc-offering-a-blockchain-verifiable-certificate/)
suivi à l'[Université de Nicosia](https://www.unic.ac.cy/).
{% endnote %}

{% note warning %}
Les cryptoactifs constituent une classe d’actifs très volatile. La valeur des crypto-actifs peut augmenter comme diminuer et **vous pouvez perdre tout votre investissement**. Lorsqu’ils sont détenus par des dépositaires, les crypto-actifs ne sont souvent pas assurés et ne sont généralement pas couverts par les régimes nationaux d’indemnisation.
{% endnote %}

## Présentation d'Ethereum

**Ethereum est une plate-forme blockchain décentralisée et open source qui permet réaliser des [contrats intelligents](/fr/comprendre-les-notions-de-smart-contracts-et-de-dapps) et des [applications décentralisées](/fr/comprendre-les-notions-de-smart-contracts-et-de-dapps) (DApps)**.

* Lancé en 2015, Ethereum a été conçu pour répondre aux limites de Bitcoin en fournissant des
  applications blockchain programmables.  
* Il peut être considéré comme un framework (un cadre) Internet fonctionnant sans intermédiaires centraux.  
* Il s'appuie sur un vaste réseau d'ordinateurs participants, qui effectuent collectivement des calculs et entretiennent le réseau.  
* Cette structure permet d'exécuter des applications Internet directement sur la blockchain,
  indépendamment des fournisseurs de services traditionnels comme Google ou Amazon.

## Principales limitations du Bitcoin qu'Ethereum vise à surmonter

* **Bitcoin n'est pas [Turing-complet](https://fr.wikipedia.org/wiki/Turing-complet)**, en effet le
  langage de script de Bitcoin est limité en puissance de calcul car il n'est pas conçu pour l'être dès le départ.
* **Cécité des valeurs** : dans Bitcoin, les transactions ne traitent que des montants fixes de
  BTC : elles ne sont pas conçues pour être exécutées de manière conditionnelle en fonction de
  valeurs externes.
* **Absence d'état** : la blockchain Bitcoin n'a pas été conçue pour stocker beaucoup de données en-dehors des transactions de base.
* **Cécité de la blockchain** : les scripts Bitcoin ne sont pas conçus pour interagir avec d'autres données
  de la blockchain ; ils ne peuvent pas lire l'historique d'autres transactions, interroger les
  états passés ou vérifier les conditions basées sur des données de blockchain plus larges.

Contrairement à l'approche conservatrice de Bitcoin, Ethereum poursuit activement le changement avec
des mises à niveau fréquentes même si elles provoquent des divisions au sein de la communauté.

## Propriétés principales d'Ethereum

Comme Bitcoin, mais contrairement à la finance traditionelle, Ethereum est :
* **Ouvert** : n'importe qui peut participer au réseau sans avoir à demander la permission.
* **Sans frontières** : les transactions et les [DApps](/fr/comprendre-les-notions-de-smart-contracts-et-de-dapps) fonctionnent à l’échelle mondiale sans intermédiaires.
* **Résistant à la censure** : aucune autorité centrale ne peut bloquer les transactions.
* **Immuable** : une fois validée les contrats ([smart contracts](/fr/comprendre-les-notions-de-smart-contracts-et-de-dapps)) et les transactions ne peuvent pas être altérées.
* **Transparent** : la blockchain est [publiquement vérifiable](https://etherscan.io/nodetracker).
* **Global & Decentralisé** : aucune entité ne contrôle le réseau.

## Ethereum n'est pas une monnaie

Ethereum a été conçu pour unifier toutes les applications blockchain possibles en une seule plateforme décentralisée. Ces principale fonctions sont :

* Permettre aux développeurs de créer des [DApps](/fr/comprendre-les-notions-de-smart-contracts-et-de-dapps) sans nécessiter une nouvelle blockchain.
* Introduire une forme d'argent programmable via des contrats intelligents ([smart contracts](/fr/comprendre-les-notions-de-smart-contracts-et-de-dapps)).
* Élargir les cas d'usage de la blockchain au-delà de la finance en créant une plate-forme informatique décentralisée à usage général.

Ether (ETH) est le jeton natif d’Ethereum, actuellement la deuxième plus grande crypto-monnaie en
termes de capitalisation boursière largement après Bitcoin.
Ainsi, des transactions simples aux applications décentralisées complexes, toutes les applications qui
s'exécutent **sur la blockchain Ethereum** repose sur Ether (ETH).  
Bien que **l’ETH n’ait pas été conçu pour remplir les fonctions de monnaie**,
il est souvent utilisé comme monnaie et comme instrument spéculatif en raison de sa grande utilité
**dans le réseau Ethereum**.

## Exemple d'applications d'Ethereum

* **Applications financiaires**
  * Ethereum prend en charge les transactions de crypto-monnaie et les services DeFi ([Finance Décentralisée](https://www.binance.com/fr/academy/glossary/defi)).
  * Il permet de prêter, d’emprunter et de gérer des actifs sans les banques traditionnelles.
  * Il permet également [la tokenisation des actifs](https://www.binance.com/fr/academy/glossary/tokenization),
    c'est à dire convertir des actifs du monde réel (des biens immobiliers par exemple) en jetons basés sur la blockchain.
* **Semi-Financial Applications**
  * Vérification d'identité basée sur des solutions d'identité numérique sécurisées par blockchain.
  * Intégrité des données permettant par exemple de garantir que des dossiers sont infalsifiables pour les soins de santé, le gouvernement, les banques etc.
* **Applications Non-Financiaires**
  * Des systèmes de vote décentralisés pour des élections sûres et transparentes.
  * Gestion de l'identité numérique sans recours à des bases de données centralisées.
  * Modèles de gouvernance décentralisés pour les DAO (Organisations Autonomes Décentralisées).

## Les Concepts clés d'Ethereum

### Comptes Ethereum

Ethereum fonctionne à l'aide de deux types de comptes :

1. **Comptes détenus en externe (CDE, en anglais EOA pour [Externally Owned Accounts](https://www.binance.com/fr/academy/glossary/externally-owned-account-eoa))**
* Contrôlé par des clefs privées détenues par l'utilisateur.
* Utilisé pour envoyer et recevoir de l'Ether (ETH) et interagir avec des [smart contracts](/fr/comprendre-les-notions-de-smart-contracts-et-de-dapps).
* Généralement accessible via des applications de portefeuille (par exemple, [MetaMask](https://metamask.io/), [Ledger](https://www.ledger.com/fr)).
2. **Comptes de contrats (Smart Contracts)**
* Contrôlé par le code du programme plutôt que par des clés privées.
* Ne peut pas initier des transactions : exécute uniquement les fonctions programmées lorsqu'elles sont appelées par un EOA.
* Fonctionne de manière autonome, stocke la logique et l'état sur la blockchain.

### La machine virtuelle Ethereum (EVM)

[La machine virtuelle Ethereum](https://www.binance.com/fr/academy/glossary/ethereum-virtual-machine-evm) est à la fois
un moteur informatique décentralisé mondial qui traite les transactions Ethereum et un environnement
d'exécution où s'exécute tous les smart contracts.

* Les smart contracts s'exécutent sur l'EVM et sont souvent écrits en [Solidity](https://www.soliditylang.org/) mais d'autres langages de programmation sont supportés.
* Chaque nœud Ethereum exécute l'EVM pour maintenir [le consensus du réseau](https://www.binance.com/fr/academy/glossary/consensus-algorithm).
* L'EVM est complètement isolé, ce qui signifie :
  * Il ne peut ni accéder aux réseaux externes ni lire les fichiers système ;
  * Il interagit seulement avec les données onchain assurant la sécurité.

###  Ether est le token natif d'Ethereum

ETH est la crypto-monnaie native d’Ethereum, utilisée pour alimenter les transactions et les
contrats intelligents. La plus petite unité d'ETH est le Wei (1 ETH = $10^{18}$ Wei) et le réseau
exécute toutes les transactions internes en Wei.  
Les principaux usage de l'Ether sont :
* **Frais de transaction** (Gas Fees)  
  Les utilisateurs paient du [gas](https://www.binance.com/fr/academy/glossary/gas)[^1] en ETH pour exécuter les opérations.
* **Exécution de smart contracts**  
  ETH est nécessaire pour exécuter des applications décentralisées.
* **[Staking](https://www.binance.com/fr/academy/articles/what-is-staking)[^2]
  dans [la preuve d'enjeu](https://www.binance.com/fr/academy/articles/proof-of-stake-explained) (Proof of Stake -- PoS -- )**  
  Les validateurs stakent (gagent/prêtent) de l’ETH pour sécuriser le réseau.

## Le méchanisme PoS d'Ethereum

Ethereum utilisait auparavant [la preuve de travail](https://www.binance.com/fr/academy/articles/proof-of-work-explained) (Proof of Work -- PoW -- ),
comme Bitcoin, mais a basculé sur la [PoS](https://www.binance.com/fr/academy/articles/proof-of-stake-explained) in 2022 (The Merge).  
**La PoS remplace les mineurs par des validateurs  qui sécurisent le réseaux en gageant de l'ETH.**

Comment fonctionne la preuve d'enjeu :
1. Les validateurs gagent un minimum de 32 ETH pour participer à la validation de bloc.
2. Un validateur est sélectionné au hasard (en réalité c'est un pseudo-hasard basé sur l'[algorithme RANDAO](https://github.com/randao/randao)) pour proposer le bloc suivant.
3. D'autres validateurs vérifient le block et doivent parvenir à un consensus (voir plus bas « Epochs & Checkpoints »).
4. Les validateurs honnêtes gagnent des récompenses en ETH, tandis que les malhonnêtes risquent de perdre tout ou partie de leur mise.

**La PoS réduit les exigences matérielles et réduit la consommation d’énergie**. Cependant, il est
critiqué pour **favoriser ceux qui détiennent plus de jetons ce qui le rend quelque peu ploutocratique**.

### Epochs & Checkpoints

Le processus de validation des blocks s'effectue dans des plages de temps spécifiques appelées "epocks".  
On peut consulter l'article [Epochs & Checkpoints dans Ethereum](/fr/epochs-et-checkpoints-dans-ethereum) dont voici un résumé très simplifié :
* Le PoS d’Ethereum est structuré en epochs, chaque epoch permet de valider 32 blocks et dure environ **6 minutes et 24 secondes**.
* Lors d'une epoch, des validateurs sont regroupés au hasard (algo de RANDAO) en comité chargé de voter sur la validité des blocs.
* Le dernier bloc de chaque époque est un point de contrôle (checkpoints) sur lequel les validateurs votent.
* La finalité est atteinte lorsque plus de 66 % des validateurs confirment un point de contrôle.

**Lorsqu'un point de contrôle est approuvé par la majorité, les transactions précédentes présentes
dans la même epoch sont figées, garantissant qu'elles ne peuvent plus être annulées.**

## Comprendre les frais de gas

### Pourquoi il y a des frais de gas ?

* Des frais de Gas **sont requis** pour exécuter des transactions et des "smart contracts" sur Ethereum.
* Les frais de Gas permettent aussi d'**éviter les attaques** de type spam en obligeant les utilisateurs à payer pour de la puissance de calcul.
* Les frais de Gas assurent également la sécurité du réseau en **rémunérant les validateurs** pour le traitement des transactions.

### Comment les frais de gas fonctionnent

Les utilisateurs fixent une limite de gas mesuré en Wei qui détermine la quantité de travail de calcul qu'ils
sont prêts à payer. Si la limite de gaz est trop basse, la transaction échoue mais consomme quand même du gas (le Gaspart - LOL).

### Facteurs affectant les frais de gas

* **Charge réseau**  
  Plus il y a de d'activité, de demande, plus les frais augmentent.
* **La complexité de la transaction**  
  Les smart contracts coûtent plus que simple transfert d'ETH.
* **Pourboire prioritaire**  
  Les utilisateurs peuvent payer plus de frais pour avoir une confirmation plus rapide de leur transaction.

On peut explorer l'évolution des frais de gas dans Ethereum sur la biennommée page [Ethereum Average Gas Limit Chart](https://etherscan.io/chart/gaslimit).

## Les Tokens Ethereum

Les jetons/tokens sont des actifs basés sur la blockchain qui peuvent représenter une monnaie, une propriété ou des droits d'accès.  
Contrairement à l'ETH, les tokens suivent des normes spécifiques qui définissent leurs propriétés et
leur comportement

### Les différents type de token dans Ethereum

* [ERC-20](https://ethereum.org/fr/developers/docs/standards/tokens/erc-20/)**  
  Correspond à des jetons [fongibles](https://www.dictionnaire-juridique.com/definition/fongible.php), ils sont utilisés
  pour les crypto-monnaies (par exemple, USDC, DAI) et les protocoles DeFi.  
  **Chaque unité est identique et interchangeable (1 DAI = 1 DAI)**.
* **[ERC-721](https://ethereum.org/fr/developers/docs/standards/tokens/erc-721/)**  
  Correspond à des tokens non fongible, il sont utilisés dans l'art numérique, les objets de collection et les actifs uniques (NFT).  
  **Chaque jeton est unique et non interchangeable**.
* **[ERC-1155](https://ethereum.org/fr/developers/docs/standards/tokens/erc-1155/)**  
  Ce sont des jetons multi-actifs ou multi-jetons, ils englobent les jetons fongibles et non
  fongibles dans un seul contrat et sont utilisés dans les actifs de jeu et dans le métaverse.

## Le rôle d'Ethereum dans la tokenization

Ethereum a été le premier réseau à permettre la [tokenisation des actifs](https://www.binance.com/fr/academy/glossary/tokenization),
fournissant ainsi la base des [DeFi](https://www.binance.com/fr/academy/glossary/defi),
des [NFT](https://www.binance.com/fr/academy/glossary/non-fungible-token-nft),
des jetons de [gouvernance DAO](https://www.binance.com/fr/academy/glossary/decentralized-autonomous-organization) et d'autres applications.

## Cas d'usage des token (Non monétaire)

* **Ressource**  
  Un token peut représenter une ressource gagnée ou produite dans une économie de partage ou un
  environnement de partage de ressources ; par exemple un jeton de stockage ou de CPU représentant
  des ressources pouvant être partagées sur un réseau.
* **Actif**  
  Un token peut représenter la propriété d’un actif intrinsèque ou extrinsèque[^3], corporel ou
  incorporel ; par exemple, de l'or, de l'immobilier, une voiture, du pétrole, de l'énergie, des
  [objets MMOG](https://www.mmosale-fr.com/), etc.
* **Droit**  
  Un jeton peut représenter des droits d'accès et donner accès à une propriété numérique ou
  physique, comme un forum de discussion, un site Web exclusif, une chambre d'hôtel ou une voiture
  de location.  
  Un jeton peut aussi représenter des droits de vote dans un système numérique ou juridique.
* **Fond**  
  Un jeton peut représenter les capitaux propres d'une organisation numérique (par exemple, une DAO)
  ou d'une entité juridique (par exemple, une société).
* **Collection** 
  Un token peut représenter un objet de collection numérique (par exemple, CryptoPunks) ou un objet
  de collection physique (par exemple, une peinture).
* **Identité**  
  Un jeton peut représenter une identité numérique (un avatar par exemple) ou une identité juridique (une carte d'identité nationale par exemple).
* **Attestation** 
  Un token peut représenter une certification ou une attestation de fait par une autorité ou par un
  système de réputation décentralisé (par exemple, acte de mariage, acte de naissance, diplôme
  universitaire).
* **Service**  
  Un jeton peut être utilisé pour accéder à un service ou le payer.

etc !

## Smart contracts & dApps

Se référer à l'article [Comprendre les notions de smart contracts et de Dapps](/fr/comprendre-les-notions-de-smart-contracts-et-de-dapps)
sur l'excellent blog piprime.fr.

## Conclusion

Ethereum est une plate-forme blockchain décentralisée conçue pour permettre des contrats intelligents programmables et des applications décentralisées.  
Contrairement au Bitcoin, qui sert principalement de réserve de valeur et de moyen d’échange,
Ethereum fonctionne comme un « ordinateur mondial » prenant en charge un large éventail de cas
d’utilisation au-delà des transactions financières.

Ethereum a introduit des innovations significatives, notamment les smart contracts. Ces contrats
s'exécutent sur la machine virtuelle Ethereum (EVM), garantissant la sécurité et la standardisation
sur l'ensemble du réseau.

L'Ether (ETH), la crypto-monnaie native, est utilisé pour les frais de transaction (gaz), le
staking dans le modèle Proof of Stake (PoS) d'Ethereum et comme garantie dans les
applications de finance décentralisée (DeFi). L'évolutivité a été l'un des principaux défis
d'Ethereum, entraînant des frais de gaz élevés et des congestions pendant les pics d'activité du
réseau. Les solutions de couche 2, telles que les rollups, les canaux d’état et le sharding, visent
en outre à améliorer le débit des transactions d’Ethereum.

L’essor d’Ethereum a alimenté le développement d’un vaste écosystème, comprenant la finance
décentralisée (DeFi), les jetons non fongibles (NFT) et les organisations autonomes décentralisées
(DAO). Ces applications exploitent l'infrastructure décentralisée et programmable d'Ethereum pour
créer des systèmes financiers ouverts, des mécanismes de propriété numérique et de nouveaux modèles
de gouvernance.

Il est à noté qu'à l'heure où est écrit cet article l'Union européenne envisage sérieusement de
lancer son [euro numérique sur une blockchain](https://cryptodnes.bg/fr/euro-numerique-ethereum/) publique comme Ethereum ou Solana, marquant un
changement stratégique par rapport à une infrastructure privée initialement prévue.  
Si cette velléité se confirme, Ethereum jouera un rôle majeure dans l'économie mondiale.

[^1]: Dans Ethereum le gas est une unité spéciale utilisée pour mesurer la quantité de « travail » (ressources informatiques) requise par certaines tâches.
[^2]: Le staking consiste à verrouiller, à gager, une cryptomonnaie pour prendre en charge la sécurité et les fonctionnalités d’une blockchain, en gagnant des récompenses en retour.
[^3]: La valeur intrinsèque d'un actif représente sa valeur fondamentale, inhérente à l'actif lui-même, indépendamment de son prix de marché actuel.  
    À l'inverse, la valeur extrinsèque dépend entièrement de facteurs externes, tels que les conditions du marché, la volatilité, la valeur temps ou la demande.
