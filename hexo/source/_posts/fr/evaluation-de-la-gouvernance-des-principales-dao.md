---
title: "Analyse de la gouvernance des différentes DAO."
date: 2025-12-07 16:54:00
id: evaluation-de-la-gouvernance-des-principales-dao
lang: fr
description: "Explorez les mécanismes de gouvernance des différentes DAO."
categories:
- [FR, Tech, Cryptographie, DAO]
- [FR, Tech, Cryptographie, WEB3]
tags:
- cryptographie
- décentralisé
- "identité numérique"
---

<picture>
<img alt="DAO" src="/media/evaluation-of-the-governance-mechanism-of-dao/dao.webp">
</picture>

{%note%}
This article is available in English [here](/en/evaluation-of-the-governance-mechanism-of-dao/).
{%endnote%}

## Uniswap DAO

La gouvernance d'Uniswap est basée sur les tokens : les détenteurs d'UNI (souvent via des délégués) discutent des propositions sur le forum, effectuent des "vérifications de température" hors chaîne (Snapshot), puis soumettent des propositions exécutables sur la chaîne. Les votes sur la chaîne passent si les votes "pour" dépassent les votes "contre" et atteignent le quorum (communément cité à **40M UNI** en faveur), suivis d'un verrouillage temporel avant l'exécution. ([Uniswap Docs][uniswap-1])

Sur la décentralisation : l'allocation initiale d'UNI a donné **60% à la communauté** mais **~40% aux initiés** (équipe/investisseurs/conseillers), ce qui peut concentrer le pouvoir de vote. ([Uniswap Labs][uniswap-2]) Des programmes comme la délégation de trésorerie peuvent centraliser davantage l'influence en amplifiant certains délégués sélectionnés. ([The Block][uniswap-3])

Une limitation plus large : de nombreuses DAO gouvernent les *paramètres et les trésoreries*, mais dépendent d'équipes hors chaîne, d'entités juridiques et d'acteurs privilégiés (interfaces, feuilles de route de développement, "classes de délégués"), limitant la véritable autonomie même lorsque le vote est sur la chaîne.

[uniswap-1]: https://docs.uniswap.org/concepts/governance/process "Process - Uniswap"
[uniswap-2]: https://blog.uniswap.org/uni "Introducing UNI - Uniswap Protocol"
[uniswap-3]: https://www.theblock.co/post/349149/uniswap-dao-passes-preliminary-vote-115-million-treasury-delegation-program "Uniswap DAO backs $113 million 'Treasury Delegation' program to boost ..."

## Aave DAO

La gouvernance d'Aave se déroule en étapes : les idées commencent sur le Forum de Gouvernance Aave, passent à une **Vérification de Température** sur Snapshot (non contraignante), puis à un **ARFC** (commentaires finaux) avec un autre vote Snapshot, et enfin à un vote **AIP** sur la chaîne qui—s'il est adopté—s'exécute après un verrouillage temporel (généralement via le "Short Executor" ; les changements de gouvernance utilisent un "Long Executor" plus lent). ([aave.com][aave-1])

Sur la décentralisation : bien que le vote soit ouvert aux détenteurs/délégués d'AAVE, le pouvoir de vote est significativement concentré—les **100 premiers détenteurs contrôlent ~12,45M AAVE sur 16M d'approvisionnement (~78%)**, suggérant des risques d'influence oligarchique. ([Ethereum (ETH) Blockchain Explorer][aave-2])

Une limitation plus large : de nombreuses DAO s'appuient encore sur **l'infrastructure de gouvernance hors chaîne** (forums, politique de délégation et rôles d'urgence/gardien), de sorte que les protocoles "autonomes" peuvent revenir à des acteurs de confiance lors de crises. ([vote.onaave.com][aave-3])

[aave-1]: https://aave.com/docs/ecosystem/governance "Governance | Aave Protocol Documentation"
[aave-2]: https://etherscan.io/token/tokenholderchart/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9 "Aave Token Token Contract and Distribution Chart - Etherscan"
[aave-3]: https://vote.onaave.com/proposal/?proposalId=402&utm_source=chatgpt.com "Aave Governance - vote.onaave.com"

## Yearn Finance DAO

La gouvernance de Yearn est largement **hors chaîne, pondérée par les tokens** : les propositions (YIP) sont discutées sur le forum, puis **les détenteurs de veYFI votent sur Snapshot** ; les propositions adoptées avec **>50% de soutien** sont exécutées en pratique par un **multisig à 9 signataires (seuil 6/9)**. ([Yearn Docs][yearn-1])

Sur la décentralisation : le lancement de Yearn était inhabituellement "équitable" (pas de prémine/VC/allocation d'équipe ; l'approvisionnement initial distribué via le minage de liquidité). ([Yearn Docs][yearn-2]) Néanmoins, la propriété actuelle est concentrée : un instantané récent de la liste des plus riches montre que les **10 premières adresses détiennent ~38%** et les **100 premières ~84%** de YFI. ([CoinLore][yearn-3]) Cette concentration plus l'exécution multisig signifie qu'elle est **partiellement décentralisée**, mais pas complètement.

Une limitation plus large : de nombreuses DAO peuvent voter, mais **l'exécution et les opérations** dépendent toujours de multisigs, de détenteurs de clés et de coordination hors chaîne—donc l'autonomie est sociale/institutionnelle, pas purement sur la chaîne. ([Yearn Docs][yearn-1])

[yearn-1]: https://docs.yearn.fi/contributing/governance/proposal-process "Proposal Process | Yearn Docs"
[yearn-2]: https://docs.yearn.fi/contributing/governance/yfi "YFI | Yearn Docs"
[yearn-3]: https://www.coinlore.com/coin/yearn-finance/richlist "Yearn.finance Rich List - Top 100 Addresses | CoinLore"

## MakerDAO

La gouvernance de MakerDAO mélange la délibération hors chaîne avec le contrôle sur la chaîne. Les détenteurs de MKR votent sur les **Sondages de Gouvernance** (signalement/préférences de paramètres) et les **Votes Exécutifs** contraignants qui, lorsqu'ils sont adoptés, promulguent des "sorts" pour modifier les paramètres du protocole (par exemple, règles de collatéral, taux) via le Portail de Gouvernance Maker. ([community-portal-staging.makerfoundation.com][maker-1])

Sur la décentralisation : le pouvoir de décision est significativement concentré—un instantané récent de la liste des plus riches montre que les **10 premières adresses MKR détiennent ~33,66%** et les **100 premières ~83,43%** de l'approvisionnement, impliquant un risque de domination des baleines/délégués malgré une participation ouverte. ([CoinLore][maker-2])

Une limitation des frameworks DAO : même avec des votes sur la chaîne, **la définition de l'ordre du jour, la délégation et l'exécution opérationnelle** se centralisent souvent autour d'un petit ensemble d'acteurs, de sorte que l'autonomie reste en partie sociale plutôt que purement programmatique.

[maker-1]: https://community-portal-staging.makerfoundation.com/en/learn/governance/governance-faq/ "Governance | MakerDAO Community Portal"
[maker-2]: https://www.coinlore.com/coin/maker/richlist "Maker Rich List - Top 100 Addresses | CoinLore"

## SushiSwap DAO

La gouvernance de SushiSwap est **pondérée par les tokens** : les propositions sont discutées par la communauté, puis votées via **Snapshot** en utilisant SUSHI. Les documents de Sushi notent que seules les propositions publiées sur Snapshot par l'**équipe CORE** sont considérées comme contraignantes si elles atteignent le quorum, et les votes couvrent généralement la tokenomique, les changements structurels majeurs et l'utilisation des portefeuilles DAO/dev-fund. ([docs.sushi.com][sushi-1])

Sur la décentralisation : ce processus présente des **points d'étranglement de centralisation** clairs (proposition "gatée" par l'équipe principale, plus la dépendance à l'exécution de type multisig en pratique). Les rapports récents autour des propositions de contrôle de la trésorerie et des controverses de gouvernance renforcent le fait que le pouvoir peut se concentrer autour d'un petit groupe opérationnel. ([The Block][sushi-2])

Une limitation plus large : de nombreuses DAO peuvent *voter*, mais **l'exécution crédible et autonome** dépend toujours d'opérateurs de confiance (multisigs/équipes) et de coordination hors chaîne—donc "l'autonomie" reste en partie sociale, pas purement programmatique.

[sushi-1]: https://docs.sushi.com/dao/governance "️ Governance · Sushi"
[sushi-2]: https://www.theblock.co/post/287588/sushi-dao-treasury-proposal-passes-signal-vote "Controversial Sushi DAO treasury proposal passes signal vote"


## Aragon DAO

La gouvernance d'Aragon a historiquement été **pondérée par le token ANT** : les propositions (AGP) étaient soumises aux détenteurs d'ANT, avec **1 ANT = 1 vote** (souvent via des outils DAO communs tels que des modules de vote sur chaîne / signalement de type Snapshot, selon l'ère et la pile de produits). ([Aragon Legacy Documentation][aragon-1])

Sur la décentralisation : Aragon est un exemple de mise en garde. En **novembre 2023**, l'**Association Aragon** a annoncé qu'elle se **dissoudrait** et rendrait **~86 343 ETH (~155M$ à l'époque)** échangeables par les détenteurs d'ANT—après des tensions de gouvernance incluant une tentative décrite d'"attaque à 51%" pour capturer la trésorerie. Cet épisode suggère que des **points de contrôle centraux** significatifs sont restés autour de l'Association et de la garde de la trésorerie, malgré le vote par token. ([Blockworks][aragon-2])

Une limitation plus large : de nombreuses DAO peuvent voter, mais **les enveloppes juridiques, les trésoreries et les pouvoirs d'urgence** se trouvent souvent hors chaîne (ou dans des multisigs), de sorte que "l'autonomie" se brise exactement lorsque des décisions à enjeux élevés surviennent.

[aragon-1]: https://legacy-docs.aragon.org/the-ant-token/about-the-token/about-ant "About ANT | Aragon User Documentation"
[aragon-2]: https://blockworks.co/news/aragon-dao-dissolves-ether "Aragon Association to dissolve, make 86K ETH redeemable"

## Decentraland DAO

La gouvernance de Decentraland est **hybride** : les propositions sont créées et votées **hors chaîne** dans l'espace Snapshot de Decentraland (accessible via governance.decentraland.org), en utilisant le **Pouvoir de Vote (VP)** dérivé des possessions de **MANA, NAMES et LAND** (par exemple, **1 MANA = 1 VP ; 1 NAME = 100 VP ; 1 LAND = 2000 VP**). Les votes *contraignants* adoptés sont ensuite promulgués **sur la chaîne** via Aragon par un **multisig du Comité DAO**, avec supervision d'un **Conseil Consultatif de Sécurité** et délais/verrouillages temporels. ([Decentraland Documentation][decentraland-1])

Sur la décentralisation : le VP pondéré par token/actif plus la garde/exécution par des comités signifie que la décentralisation est **partielle**. La concentration des détenteurs est élevée—un instantané récent de la liste des plus riches montre que les **10 premières adresses MANA détiennent ~43,66%** et les **100 premières ~73,17%** de l'approvisionnement—donc un petit ensemble peut dominer les résultats. ([CoinLore][decentraland-2])

Une limitation plus large : de nombreuses DAO s'appuient encore sur **des multisigs/conseils et des processus hors chaîne** pour l'exécution et la sécurité, de sorte que "l'autonomie" se décompose en gouvernance de confiance lorsque les enjeux sont élevés. ([Decentraland Documentation][decentraland-1])

[decentraland-1]: https://docs.decentraland.org/decentraland/how-does-the-dao-work/ "How the DAO works | Decentraland Documentation"
[decentraland-2]: https://www.coinlore.com/coin/decentraland/richlist "Decentraland Rich List - Top 100 Addresses | CoinLore"


## Compound DAO

La gouvernance de Compound est **sur la chaîne et pondérée par les tokens** : les détenteurs de COMP (ou les délégués) créent des propositions via **Governor Bravo**, votent pendant une période de vote définie, et les propositions réussies sont **mises en file d'attente dans un Timelock** puis exécutées sur la chaîne (n'importe qui peut exécuter après le délai). Les propositions peuvent modifier les paramètres de risque, ajouter des marchés ou mettre à niveau les contrats. ([Compound][compound-1])

Sur la décentralisation : bien qu'ouvert en théorie, la propriété de COMP est concentrée. Un instantané récent de la liste des plus riches montre que les **10 premières adresses détiennent ~36,53%** et les **100 premières ~77,41%** de COMP. ([CoinLore][compound-2]) La tokenomique a également alloué de grandes parts aux initiés (environ **~24% actionnaires/investisseurs** et **~22% fondateurs & équipe**, aux côtés de **~42% aux utilisateurs du protocole**). ([Tokenomist][compound-3])

Une limitation plus large : de nombreuses DAO ont des votes sur la chaîne mais **l'influence hors chaîne et la plutocratie** (baleines, délégués, initiés) signifient que "l'autonomie" reflète souvent la concentration du capital plutôt que l'autogestion collective.

[compound-1]: https://compound.finance/docs/governance "Compound v2 Docs | Governance"
[compound-2]: https://www.coinlore.com/coin/compound/richlist "Compound Rich List - Top 100 Addresses | CoinLore"
[compound-3]: https://tokenomist.ai/compound-governance-token "Compound (COMP) | Tokenomics, Supply & Release Schedule"

## Curve DAO (CRV / veCRV)

La gouvernance de Curve est **vote-escrowed** : les utilisateurs verrouillent CRV pour recevoir **veCRV**, et le pouvoir de vote évolue avec à la fois **le montant verrouillé et la durée de verrouillage**. Les détenteurs de veCRV votent sur les propositions DAO sur la chaîne et, surtout, sur les **poids de jauge** qui dirigent où vont les émissions CRV (un levier économique majeur). ([docs.tally.xyz][curve-1])

Sur la décentralisation : l'allocation est "lourde en communauté" à long terme (**57% émissions + 5% premiers utilisateurs + 5% réserve ≈ 67% communauté**), mais les initiés sont toujours importants (**~26,43% équipe principale + 3,57% investisseurs**). ([resources.curve.finance][curve-2]) Les récentes mesures visant à ajouter des **pouvoirs multisig d'urgence** montrent également la dépendance à l'égard d'acteurs de confiance en pratique. ([Outposts][curve-3])

Une limitation des frameworks DAO : **la sécurité nécessite des échappatoires** (multisigs/gardiens), ce qui sape la "vraie" autonomie exactement lors de crises.

[curve-1]: https://docs.tally.xyz/education/governance-frameworks/curve-voting-escrow "Curve Voting Escrow | Tally Docs"
[curve-2]: https://resources.curve.finance/crv-token/supply-distribution/ "Supply & Distribution - Curve Resources"
[curve-3]: https://outposts.io/article/curve-proposes-emergency-dao-powers-d37346eb-c2fc-4df1-9dfe-570caccfe22f "Curve Proposes Emergency DAO Powers - outposts.io"


## Lido DAO (écosystème LDO / stETH)

La gouvernance de Lido est basée sur les tokens : les **détenteurs de LDO** proposent et votent via un flux régulier qui utilise des outils établis (recherche/forum → signalement hors chaîne → actions sur la chaîne), avec des conceptions plus récentes ajoutant des garanties de **Gouvernance Duale** liées aux **détenteurs de stETH**. ([Lido][lido-1])

Sur la décentralisation : le vote est ouvert, mais la propriété est concentrée. Le graphique des détenteurs d'Etherscan montre que les **100 premiers détenteurs de LDO contrôlent ~84,05%** de l'approvisionnement, et plusieurs grands détenteurs sont de grandes entités/exchanges ou des adresses de vesting liées à Lido—suggérant un risque de centralisation significatif en pratique. ([Ethereum (ETH) Blockchain Explorer][lido-2]) Lido formalise également les politiques de "multisigs ops", soulignant la dépendance à l'égard des comités pour l'exécution/la sécurité. ([Lido Governance][lido-3])

Une limitation des frameworks DAO : même avec le vote sur la chaîne, **l'exécution et la réponse de crise** dépendent souvent de multisigs/comités, de sorte que l'autonomie se dégrade en gouvernance de confiance lorsque les enjeux sont élevés.

[lido-1]: https://lido.fi/governance "Lido DAO Governance"
[lido-2]: https://etherscan.io/token/tokenholderchart/0x5a98fcbea516cf06857215779fd812ca3bef1b32 "Lido DAO Token Token Contract and Distribution Chart - Etherscan"
[lido-3]: https://research.lido.fi/t/lido-dao-ops-multisigs-policy-2-0/9574 "Lido DAO Ops Multisigs Policy (2.0) - Proposals - Lido Governance"


## ENS DAO (Ethereum Name Service)

La gouvernance d'ENS est basée sur les tokens et fortement déléguée. Les propositions sont développées sur le forum ENS, affinées en propositions de gouvernance, puis—lorsqu'elles sont prêtes—soumises en tant que **Propositions Exécutables** pour un **vote sur la chaîne** en utilisant des interfaces de gouvernance communes (par exemple, Agora/Tally). Si elles sont adoptées, l'exécution se fait via le système de gouvernance sur la chaîne de la DAO (généralement via une exécution de type timelock). ([docs.ens.domains][ens-1])

Sur la décentralisation : la distribution initiale mettait l'accent sur la communauté/airdrop et une trésorerie DAO, mais **les détentions actuelles semblent très concentrées** ; un instantané récent de la liste des plus riches estime que les **10 premières adresses détiennent ~84,72%** d'ENS. ([ens.mirror.xyz][ens-2])

Une limitation des frameworks DAO : même avec le vote sur la chaîne, **la délégation + la concentration des baleines** peut centraliser la définition de l'ordre du jour et les résultats, affaiblissant la "vraie autonomie".

[ens-1]: https://docs.ens.domains/dao/governance/process/ "Governance Process | ENS Docs"
[ens-2]: https://ens.mirror.xyz/-eaqMv7XPikvXhvjbjzzPNLS4wzcQ8vdOgi9eNXeUuY "$ENS Token Allocation (Claiming Opens Nov 8) — ENS"


## 10 autres DAO bien connues par taille de trésorerie

1. **Optimism Collective** — Classement des trésoreries DeepDAO (classement AUM) ([DeepDAO][other-daos-1])
2. **Arbitrum DAO** — Classement des trésoreries DeepDAO (classement AUM) ([DeepDAO][other-daos-1])
3. **Mantle DAO (ex-BitDAO)** — Classement des trésoreries DeepDAO (classement AUM) ([DeepDAO][other-daos-1])
4. **GnosisDAO** — Classement des trésoreries DeepDAO (classement AUM) ([DeepDAO][other-daos-1])
5. **ENS DAO** — Classement des trésoreries DeepDAO (classement AUM) ([DeepDAO][other-daos-1])
6. **The Graph DAO** — Classement des trésoreries DeepDAO (classement AUM) ([DeepDAO][other-daos-1])
7. **MakerDAO (Maker Protocol)** — Classement des trésoreries DeepDAO (classement AUM) ([DeepDAO][other-daos-1])
8. **Lido DAO** — Classement des trésoreries DeepDAO (classement AUM) ([DeepDAO][other-daos-1])
9. **dYdX DAO** — Classement des trésoreries DeepDAO (classement AUM) ([DeepDAO][other-daos-1])
10. **Polygon (gouvernance du protocole / trésorerie communautaire)** — Classement des trésoreries DeepDAO (classement AUM) ([DeepDAO][other-daos-1])

La page du classement DeepDAO est l'endroit canonique pour cliquer (elle se met à jour en continu). ([DeepDAO][other-daos-2])

[other-daos-1]: https://deep-dao-deepdao.com/ "DeepDAO - Comprehensive Analytics for Decentralized Autonomous"
[other-daos-2]: https://deepdao.io/ "DeepDAO – Discovery Engine for DAO Ecosystem"
