---
title: "Un consensus de blockchain polymorphe évolutif"
date: 2025-12-19 20:40:04
id: consensus-de-blockchain-polymorphe-evolutive
lang: fr
description: "Une étude sur un système de consensus blockchain capable de modifier son comportement au fil du temps."
categories:
- [FR, Tech, Blockchain]
- [FR, Tech, Cryptographie]
tags:
- blockchain
- cryptography
---

This article is available in [english](/en/evolving-polymorphic-blockchain-consensus).

Le consensus de blockchain polymorphe évolutif désigne un **système de consensus capable de
*modifier son comportement au fil du temps*** soit en **basculant entre plusieurs modes de
consensus** soit en **ajustant dynamiquement les paramètres** (taille du comité, délais d'attente,
seuils de quorum, ensemble de validateurs, etc.) en réponse aux conditions du réseau et au
comportement contradictoire.

Commençons par les principales façons dont cela apparaît dans la littérature et les conceptions.

## Consensus à changement de mode (vrai "polymorphisme")

Ces protocoles **basculent** explicitement entre des styles de consensus pour échanger latence
contre robustesse selon les conditions (délai réseau, turbulence, pannes suspectées).

* Exemple : travaux proposant un **basculement automatique** entre *consensus avec leader* et
  *consensus sans leader* dans des environnements de consortium (ATBFT). ([ScienceDirect][1])

**Pourquoi faire cela ?**
Le BFT basé sur un leader est rapide lorsque le leader est honnête et le réseau stable ; sans leader
peut être plus lent mais plus résilient aux attaques du leader et à certaines pathologies du réseau.

## Adhésion dynamique / reconfiguration du comité

Au lieu d'un ensemble fixe de validateurs, le protocole inclut une **méthode sûre pour faire
tourner/redimensionner les comités** (souvent inspiré de BFT/HotStuff), de sorte que le système
puisse évoluer lorsque les participants rejoignent/partent.

Des articles récents présentent ceci comme "BFT dynamique" / "consensus à comité dynamique", en se
concentrant sur la sécurité et la disponibilité de la reconfiguration. ([Springer Link][2])

**Pourquoi faire cela ?**
Les chaînes à longue durée de vie doivent gérer la turbulence, la mise à l'échelle et l'évolution
des hypothèses de confiance sans hard forks à chaque fois.

## Paramètres de consensus adaptatifs / optimisés par IA

Certaines approches ne changent pas de protocoles, mais **ajustent continuellement** les paramètres
(délais d'attente, taille des blocs, règles de rotation du leader, seuils de pénalisation) en
fonction des conditions observées—parfois en utilisant ML/RL.

Exemple : "optimisation de consensus adaptatif" utilisant des techniques d'IA pour ajuster les
paramètres de validation et détecter les comportements malveillants. ([Frontiers][3])

**Mise en garde :** si la logique d'adaptation est erronée ou manipulable, elle devient une nouvelle surface d'attaque.

## Consensus hybride (combiner PoS/BFT/PoW)

Une sensation "polymorphe" peut aussi signifier des **architectures hybrides** qui mélangent les
propriétés (par ex., finalité BFT au-dessus de PoS ; sharding avec approches hybrides).

Certaines propositions récentes décrivent explicitement des conceptions **hybrides + adaptatives**
(en particulier autour du sharding). ([arXiv][4])

## Évoluer sans compromettre la sécurité

Faire évoluer le consensus en toute sécurité tend à nécessiter :
* **Un mécanisme de mise à niveau/reconfiguration formellement défini** (pour que les nœuds ne se
  divisent pas en différents ensembles de règles).
* **Des invariants clairs** : sécurité (pas de double-finalité), vivacité (continue de progresser),
  responsabilité (punir les mauvais comportements).
* **Règles de gouvernance et d'activation** : comment un changement/mise à niveau est proposé,
  validé et activé (vote on-chain, consensus social, clés admin—chacun a des compromis).

Les enquêtes sur le consensus moderne soulignent constamment que les nouveaux mécanismes jonglent
essentiellement avec les mêmes compromis du trilemme, et que "la mise à l'échelle flexible / les
conceptions évolutives" sont un axe de recherche actif. ([ScienceDirect][5])

[1]: https://www.sciencedirect.com/science/article/pii/S209672092400068X "ATBFT-automatically switch consensus protocol - ScienceDirect"
[2]: https://link.springer.com/article/10.1007/s12083-025-01934-9 "Efficient dynamic-committee BFT consensus based on HotStuff"
[3]: https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1672273/full "Adaptive consensus optimization in blockchain using reinforcement ..."
[4]: https://arxiv.org/pdf/2411.06895 "DYNASHARD: Secure and Adaptive Blockchain Sharding Protocol with Hybrid ..."
[5]: https://www.sciencedirect.com/science/article/pii/S1389128625006280 "Comprehensive survey of blockchain consensus mechanisms: Analysis ..."

---

Voici une conception concrète de **L1 sans permission** qui est **polymorphe (multi-mode)** et
**évolutive (auto-ajustable + mise à niveau sécurisée)**, inspirée de Bitcoin/Ethereum mais
explicitement construite pour *changer* son comportement de consensus lorsque les conditions
changent.

## MorphL1 : un consensus sans permission polymorphe

### Idée centrale

Exécuter une **chaîne de style Nakamoto pour la disponibilité** + une **superposition de finalité de style BFT pour une finalité rapide**, avec un **mode de repli automatique** lorsque le réseau est stressé ou adversarial. Pensez à "la direction Gasper d'Ethereum" (choix de fork + gadget de finalité) mais rendue explicitement multi-mode et auto-ajustable. ([ethereum.org][1])

## Mode 0 — Mode normal (rapide, faible latence)

**Production de blocs :** PoS basé sur des créneaux (ou PoW si vous voulez), avec un choix de fork de chaîne la plus longue/lourde.

**Superposition de finalité (gadget BFT de comité) :**
* À chaque époque, échantillonner un **comité aléatoire** à partir du stake (basé sur VRF).
* Le comité exécute un vote BFT en 2–3 étapes pour **finaliser les points de contrôle** (style "gadget de finalité"). Ceci est conceptuellement aligné avec Gasper (Casper-FFG + LMD-GHOST). ([ethereum.org][1])
* Les votes de finalité sont *légers* et agrégables (style BLS), donc le débit normal reste de type chaîne.

**Pourquoi cela fonctionne :** vous obtenez un flux de blocs continu de type Bitcoin + une finalité "plus forte" de type Ethereum lorsque les conditions du réseau sont décentes.

## Mode 1 — Mode turbulence (robuste sous retard/forks)

Déclenché lorsque la chaîne montre des symptômes d'instabilité, par ex. :
* taux de fork au-dessus du seuil ;
* pics de blocs tardifs / créneaux manqués ;
* votes de finalité bloqués pendant >K époques ;
* preuve de perturbation ciblée du leader.

**Changements dans ce mode :**
* **Augmenter la profondeur de confirmation** pour les applications (marge de sécurité recommandée au niveau du protocole).
* **Ajuster la pondération du choix de fork** pour pénaliser plus agressivement les branches "récemment invisibles".
* **Augmenter la taille du comité** (plus de messages, mais meilleure résilience).
* **Délais d'attente plus longs** pour le vote de finalité afin de retrouver la vivacité sous latence plus élevée.

Ce type d'ajustement est motivé par des analyses montrant que les compromis sécurité/latence dépendent fortement des contraintes réseau/traitement. ([arXiv][2])

## Mode 2 — Mode adversarial (confinement d'attaque)

Si le réseau semble sous pression adversariale active (par ex., censure corrélée, ruptures de finalité répétées, rafales d'équivocation), basculer vers un **sous-protocole de finalité sans leader / moins dépendant du leader** pour le comité.

Deux façons pratiques de faire cela :

### A. Le comité passe de BFT basé sur un leader à BFT sans leader

* En mode normal, utiliser un BFT pipeline/avec leader pour la vitesse.
* En mode adversarial, revenir à un protocole sans leader ou à leader minimisé pour réduire l'effet de levier "attaquer le leader".
  C'est le même *modèle de conception* que les protocoles de basculement automatique explicites dans la littérature
  (même si de nombreux articles ciblent des environnements de consortium). ([ScienceDirect][3])

### B. Règles de finalité "sécurité d'abord"

* Si des points de contrôle finalisés conflictuels sont possibles dans des conditions extrêmes, imposer une pénalisation dure
  et une règle de récupération (finalité économique).
* Pendant la récupération, permettre la croissance de la chaîne (disponibilité) mais traiter la finalité comme suspendue jusqu'à ce qu'une
  époque propre se produise.

## La partie "évolutive" : reconfiguration sûre sans forks

Pour être sans permission, l'évolution doit être **prévisible, vérifiable et difficile à manipuler**.

### A. Évolution de paramètres on-chain bornée

Certains paramètres peuvent se déplacer dans des plages prédéfinies *sans* hard fork :

* plage de taille du comité,
* calendrier de délai d'attente,
* paramètres de départage du choix de fork,
* recommandations de profondeur de confirmation.

Les mises à jour de paramètres sont calculées à partir de **télémétrie publique** (créneaux manqués, proxies de délai de propagation,
participation au vote), et appliquées avec :

* **hystérésis** (pas de basculement),
* **verrouillages temporels** (par ex., activer après N époques),
* **plafonds** (ne peut pas dépasser les limites sûres prouvées/analysées).

C'est exactement le genre d'"analyse d'ajustement" que les chercheurs font sur les systèmes de type Gasper. ([ScienceDirect][4])

### B. Reconfiguration dynamique du validateur/comité

Les comités tournent à chaque époque de toute façon, mais le protocole doit assurer des changements d'adhésion sûrs pour la
*superposition de finalité*.
Utiliser une méthode de reconfiguration avec preuves de sécurité explicites (la recherche BFT à comité dynamique se concentre sur
ceci). ([Springer Link][5])

### C. Minimisation des hard forks via des "profils de consensus"

Au lieu d'une spécification monolithique, définir des **profils** (Mode 0/1/2) comme de première classe, et mettre à niveau en :
* livrant de nouvelles règles de profil,
* activant via signalisation pondérée par stake + délai temporel,
* nécessitant une supermajorité pour activer de nouveaux profils (mais jamais pour *continuer à produire des blocs*).

Ainsi la gouvernance peut faire évoluer les *capacités*, pendant que la chaîne reste vivante sous les règles de base.

## Notes de sécurité et d'incitation (ce qui peut mal tourner)

* **Manipuler le déclencheur :** les attaquants pourraient essayer de forcer le Mode 2 pour ralentir la chaîne.
  Atténuation : déclencheurs multi-métriques + hystérésis + nécessiter des preuves cryptographiques (équivocations)
  pour les changements les plus forts.
* **Capture du comité :** se défendre avec un fort aléatoire (VRF) et des comités suffisamment grands ; pénaliser
  l'équivocation.
* **Risque de complexité :** le polymorphisme ajoute de la complexité—donc chaque mode doit être formellement spécifié, et
  le changement doit préserver les invariants de sécurité (pas "la moitié du réseau pense que nous sommes en Mode 0").
  Le travail sur "BFT flexible" est un bon rappel que différents modèles/croyances de panne peuvent coexister, mais cela
  doit être soigneusement conçu. ([arXiv][6])

[1]: https://ethereum.org/developers/docs/consensus-mechanisms/pos/gasper/ "Gasper - ethereum.org"
[2]: https://arxiv.org/abs/2303.09113v4 "Nakamoto Consensus under Bounded Processing Capacity"
[3]: https://www.sciencedirect.com/science/article/pii/S209672092400068X "ATBFT-automatically switch consensus protocol - ScienceDirect"
[4]: https://www.sciencedirect.com/science/article/pii/S0140366425000805 "A stochastic analysis of the Gasper protocol - ScienceDirect"
[5]: https://link.springer.com/article/10.1007/s12083-025-01934-9 "Efficient dynamic-committee BFT consensus based on HotStuff"
[6]: https://arxiv.org/pdf/1904.10067 "arXiv:1904.10067v2 [cs.CR] 30 May 2019"

## MorphPoW-L1 : une L1 PoW sans permission avec *finalité instantanée optimiste*

L'objectif :
* **Cas normal :** les transactions deviennent *finales en quelques secondes* (quelques allers-retours réseau).
* **Pire cas :** si le chemin rapide est attaqué ou le réseau est désordonné, la chaîne **se replie** sur la sécurité PoW classique (finalité probabiliste), puis récupère automatiquement.

C'est essentiellement le **paradigme Thunderella** (chemin optimiste rapide + repli PoW lent) rendu
sans permission, avec **adhésion ouverte de style ByzCoin** pour le comité du chemin rapide. ([Springer Link][7])

## Structures de données : deux couches

### A. Chaîne lente (PoW "keyblocks")

* Une chaîne PoW normale (comme Bitcoin) dont les blocs ("**keyblocks**") n'ont *pas* besoin de
  porter toutes les transactions.
* Les keyblocks ancrent le temps, l'aléatoire et l'adhésion.

Découpler l'élection du leader de la sérialisation des transactions est une astuce bien connue (par
ex., Bitcoin-NG). ([USENIX][8])

### B. Flux rapide (microblocs / confirmations rapides)

* Entre les keyblocks, les transactions circulent sous forme de **microblocs** (haute fréquence).
* Les microblocs sont **finalisés instantanément** lorsque le comité rapide les signe (ci-dessous).

Encore une fois, le modèle "keyblocks + microblocs" est utilisé dans les conceptions
Bitcoin-NG/ByzCoin. ([USENIX][8])

## Formation de comité sans permission (pas de stake requis)

Pour faire fonctionner la "finalité instantanée" sans PoS, nous avons besoin d'un comité qui :
* est à **adhésion ouverte**,
* est **résistant aux Sybil**,
* suit approximativement le **hashpower**.

Utiliser les **gagnants PoW récents comme parts de comité** :
* Maintenir une fenêtre glissante des derniers **W keyblocks**.
* Chaque keyblock donne à son mineur **une (ou plusieurs) part(s) de comité**.
* Le comité pour l'époque *e* est ces parts ; le pouvoir de vote est proportionnel aux parts.

C'est essentiellement ce que [ByzCoin](https://github.com/dedis/cothority/blob/main/byzcoin/README.md)
propose : adhésion ouverte, groupes de consensus proportionnels au hashpower
formés à partir de mineurs récemment réussis, permettant des commits irréversibles en quelques secondes (lorsque le
comité est honnête). ([USENIX][9])

## Modes de consensus polymorphes (le "polymorphe")

### Mode 0 — **Finalité instantanée optimiste** (par défaut)

* Un **accélérateur/leader** désigné propose des microblocs.
* Le comité exécute une étape BFT/signature collective très courte (par ex., 2–3 tours) pour **finaliser** le microbloc.
* Preuve de finalité = signature agrégée + référence de liste de comité (depuis la fenêtre de keyblock).

C'est le chemin de "confirmation instantanée" optimiste décrit par Thunderella. ([Springer Link][7])

### Mode 1 — **Mode réseau dégradé** (auto-ajustable)

Déclenché par des métriques comme : taux d'orphelins en hausse, participation aux signatures en baisse, pics de délai de propagation.
Actions :
* Augmenter les délais d'attente / taille du comité dans des plages bornées.
* Ralentir la cadence des microblocs.
* Nécessiter des seuils "vu-par" plus élevés avant de proposer le prochain microbloc.

Pourquoi : la sécurité/latence réelle dépend fortement des conditions du réseau ; l'ajustement fait partie de l'enveloppe de performance.) ([tselab.stanford.edu][10]

### Mode 2 — **Mode PoW de repli** (attaque / partition / mauvais comportement du leader)

Si le chemin rapide se bloque ou équivoque :
* Les nœuds **ignorent la finalité rapide** et n'acceptent que ce que la **chaîne lente PoW** finit par confirmer.
* Une fois les conditions stabilisées, retour automatique au Mode 0.

Ce "chemin rapide + repli et récupération via chaîne lente" est le paradigme Thunderella. ([Springer Link][7])

## Consensus "évolutif" : adaptation bornée sûre + mises à niveau

### A. Évolution de paramètres on-chain bornée (pas de fork)

Les paramètres évoluent automatiquement dans des plafonds sûrs :
* taille de fenêtre de comité **W**
* taux de microbloc
* délais d'attente BFT / marges de quorum
* seuils de déclenchement pour le changement de Mode

**Anti-manipulation :** hystérésis + déclencheurs multi-métriques + verrouillages temporels (les changements s'appliquent après N keyblocks).

### B. Mises à niveau de capacités (rares, explicites)

Pour des changements plus profonds (nouveau schéma de signature, nouvel échantillonnage d'adhésion, etc.) :
* déployer comme **nouvelle version de "profil"**
* activer par signalisation de hashpower sur une longue fenêtre + hauteur de démarrage retardée
* les anciens clients peuvent toujours suivre la sécurité de la chaîne lente, même s'ils ne comprennent pas le profil rapide le plus récent (ils ne traiteront simplement pas les preuves rapides comme finales)

## Ce que vous obtenez (et ce que vous payez)

### Avantages

* **Finalité en quelques secondes** dans le cas optimiste (Mode 0). ([Springer Link][7])
* Toujours **adhésion PoW sans permission** (pas de staking requis). ([arXiv][11])
* **Repli robuste** vers le consensus Nakamoto lorsque le chemin rapide est attaqué ou le réseau est instable. ([Springer Link][7])

### Compromis / risques

* **Risque de capture du comité** si un attaquant a un hashpower élevé soutenu sur la fenêtre de comité W (vous choisissez W pour équilibrer réactivité vs résistance à la capture).
* **Complexité** : le changement de mode doit être *formellement spécifié* pour éviter les divisions "la moitié du réseau pense être en Mode 0".
* **DoS du leader/accélérateur** : atténué par des règles de remplacement rapide et le repli Mode 2.

[7]: https://link.springer.com/content/pdf/10.1007/978-3-319-78375-8_1.pdf?pdf=inline+link&utm_source=chatgpt.com "Thunderella: Blockchains with Optimistic Instant Confirmation"
[8]: https://www.usenix.org/system/files/conference/nsdi16/nsdi16-paper-eyal.pdf "Bitcoin-NG: A Scalable Blockchain Protocol - USENIX"
[9]: https://www.usenix.org/system/files/conference/usenixsecurity16/sec16_paper_kokoris-kogias.pdf "Enhancing Bitcoin Security and Performance with Strong ... - USENIX"
[10]: https://tselab.stanford.edu/research/blockchains-decentralized-systems/achieving-physical-limits/ "Consensus layer protocols to achieve physical limits"
[11]: https://arxiv.org/abs/1602.06997 "[1602.06997] Enhancing Bitcoin Security and Performance with Strong ..."

---

Ci-dessous se trouve un **ensemble de paramètres réalisable** pour un déploiement à l'échelle européenne de la conception **MorphPoW-L1**
(keyblocks PoW + chemin rapide BFT/signature collective "finalité instantanée" + repli PoW), avec des nombres
choisis pour que la finalité "instantanée" soit réalistement **~2 secondes** dans le cas optimiste.

### Hypothèse réseau (à l'échelle européenne)

Pour atteindre une finalité sous 5s, vous avez besoin d'un régime de latence bornée *la plupart du temps*. Un objectif d'ingénierie raisonnable est :
* **RTT p50 :** 25–50 ms
* **RTT p95 :** 120–180 ms
* **RTT p99 :** 250–400 ms
  (réalisable à travers l'UE avec un bon peering ; le protocole *fonctionne toujours* en dehors de cela, mais "instantané" devient "instantané plus lent", et peut se replier.)

Cela compte car la finalité de style BFT veut quelques allers-retours.

## Paramètres concrets

### Keyblocks PoW (adhésion + ancrage d'aléatoire)

* **Intervalle de keyblock :** **60 secondes**
  Justification : assez rapide pour rafraîchir le comité et récupérer rapidement ; assez lent pour limiter les blocs périmés
  vs. PoW très court.
* **Charge utile de keyblock :** minimale (en-tête + refs), pas l'ensemble complet des tx.
* **Ajustement de difficulté :** recalibrer tous les **N=720 keyblocks (~12h)** (ou votre algo de lissage favori).

> Ce modèle "blocs d'élection de leader séparés vs flux de transactions" est exactement la direction de Bitcoin-NG.
> ([USENIX][12])

### Sélection de comité (sans permission, proportionnelle au hashpower)

**Fenêtre glissante W :** **1440 keyblocks (~24h)**

* Chaque keyblock miné accorde **1 part de comité** (ou plus si vous voulez pondérer par contributions de difficulté,
  mais commencez simple).
* Pouvoir de vote du comité = parts dans la fenêtre.
  **Cible de taille de comité effective (pour la messagerie) :** **n ≈ 200–400** *membres représentatifs*
* Vous pouvez garder **toutes les parts** pour la pondération, mais pour la messagerie du chemin rapide, échantillonner/agréger en
  ~200–400 "signataires actifs" chaque époque en utilisant une VRF ensemencée par la chaîne de keyblock (l'adhésion reste
  proportionnelle au PoW ; le coût de messagerie reste borné).

> L'idée centrale de ByzCoin est *exactement* l'adhésion ouverte avec des groupes de consensus proportionnels au hashpower
> formés à partir de mineurs récemment réussis, permettant des commits irréversibles en quelques secondes en utilisant
> la signature collective. ([USENIX][13])

### Chemin rapide (microblocs + finalité instantanée)

* **Taux de microbloc :** **2 microblocs/sec** (tous les **500 ms**)
  Chaque microbloc contient des transactions + données de transition d'état (ou blobs de style rollup si vous
  préférez).
* **Quorum de finalité :** **≥ 2/3 des parts de comité** (pondéré)
* Microbloc "final" = a un certificat de quorum (QC) qui référence :
  1. hash de liste (dérivé de la fenêtre de keyblock),
  2. hash de microbloc,
  3. id de vue/époque,
  4. signatures agrégées (signature collective).
* **Nombre d'étapes de consensus :** **2 tours** dans le cas optimiste
  * Tour A : vote de pré-commit
  * Tour B : vote de commit (QC)
* **Délais d'attente (Mode 0) :**
  * `Tvote = max(350 ms, 2 * RTT_p95)` → choisir **400 ms**
  * `Tcommit = max(350 ms, 2 * RTT_p95)` → choisir **400 ms**
  * Temps optimiste total ≈ proposition + 2 tours de vote + agrégation

  * Dissémination de proposition : ~RTT_p95/2 à RTT_p95 ≈ 120–180 ms
  * Votes/agrégation (arbre) : ~1 RTT_p95 par tour (environ)
  * **Cible "finalité instantanée" ≈ 1,2–2,5 secondes**

Cela correspond à l'intention de ByzCoin (commit irréversible en quelques secondes via signature collective) et
au chemin rapide optimiste de Thunderella. ([USENIX][13])

## Seuils de changement de mode (comportement polymorphe)

### Mode 0 (par défaut) : finalité instantanée optimiste

Rester ici si tout est vrai sur les derniers **M=60 secondes** :
* taux de succès de finalité de microbloc ≥ **98%**
* temps médian de finalité ≤ **2,5s**
* équivocations détectées = **0**

### Mode 1 (turbulence) : auto-ajustable mais toujours "rapide"

Entrer si une condition est vraie pendant **>30s** :
* taux de succès de finalité < **98%**
* temps médian de finalité > **2,5s**
* orphelins/périmés parmi les keyblocks > **3%**

Actions en Mode 1 :
* taux de microbloc → **1/sec** (1000 ms)
* délais d'attente : `Tvote=Tcommit=800 ms`
* taille d'échantillon de signataires actifs ↑ (par ex., 300 → 400)

### Mode 2 (repli PoW) : abandonner temporairement la finalité instantanée

Entrer immédiatement si :
* QCs conflictuels pour la même hauteur (équivocation) OU
* pas de QC pendant **>10 secondes** OU
* signaux de partition réseau (par ex., deux hash de liste incompatibles apparaissent)

Actions en Mode 2 :
* traiter le chemin rapide comme "consultatif"
* confirmer via keyblocks PoW uniquement (probabiliste)
* récupérer vers Mode 1 après **K=30** secondes "propres" consécutives (pas d'équivocation + QC restauré), puis vers Mode 0 après stabilité.

> Thunderella cadre explicitement ceci comme "chemin asynchrone rapide + repli synchrone lent exécuté
> seulement si quelque chose va mal", donnant une confirmation instantanée optimiste tout en préservant la robustesse.
> ([Springer Link][14])

## Sémantique de "finalité d'application" recommandée

* **Finalité instantanée (Mode 0/1) :** 1 QC = final
* **Finalité de repli (Mode 2) :** nécessiter **k=6 keyblocks (~6 minutes)** pour les transferts de grande valeur, ou ajuster en fonction du modèle de menace

Donc les applications obtiennent une seule API : "final" est QC-final en temps normal, et final par profondeur PoW pendant les attaques.

## Vérification rapide de cohérence (pourquoi ces nombres sont plausibles)

* **Keyblocks de 60s** gardent le PoW stable et l'adhésion fraîche.
* **Fenêtre de comité de 24h** rend difficile "l'attaque flash" du comité à moins que l'attaquant
  maintienne un hashpower important assez longtemps.
* **QC en 2 tours avec ~400 ms de délais d'attente** est cohérent avec le RTT p95 européen et un schéma de signature
  d'agrégation en arbre (l'approche utilisée dans la ligne de signature collective de ByzCoin). ([USENIX][13])

[12]: https://www.usenix.org/system/files/conference/nsdi16/nsdi16-paper-eyal.pdf "Bitcoin-NG: A Scalable Blockchain Protocol - USENIX"
[13]: https://www.usenix.org/system/files/conference/usenixsecurity16/sec16_paper_kokoris-kogias.pdf "Enhancing Bitcoin Security and Performance with Strong ... - USENIX"
[14]: https://link.springer.com/content/pdf/10.1007/978-3-319-78375-8_1.pdf?pdf=inline+link&utm_source=chatgpt.com "Thunderella: Blockchains with Optimistic Instant Confirmation"

---

Voici une **spécification à deux profils** concrète (optimisée UE + optimisée globale) et une **formule de déclenchement purement on-chain** pour basculer Mode 0/1/2, pour une **L1 PoW avec finalité instantanée optimiste** (keyblocks PoW + microblocs + QC de comité).

## Profil A : Optimisé UE

Objectif : ~1,2–2,5s de finalité la plupart du temps.

### Couche PoW (keyblocks)

* **Intervalle de keyblock :** 60 s
* **Recalibrage :** 720 keyblocks (~12h)
* **Fenêtre de comité W :** 1440 keyblocks (~24h)

### Comité et chemin rapide

* **Échantillon de signataires actifs :** 256 (dérivé de la liste de parts PoW via VRF chaque époque)
* **Cadence de microbloc :** 2 / sec (tous les 500 ms)
* **Règle QC :** quorum pondéré **≥ 2/3** des parts de comité
* **Étapes BFT :** 2 tours (PRECOMMIT, COMMIT)

### Délais d'attente

* `Tvote = 400 ms`, `Tcommit = 400 ms`
* **Délai QC par microbloc :** `Dqc = 1200 ms`
  (si le QC n'apparaît pas d'ici là, ne pas finaliser "instantanément")

### Confirmations de repli lorsque le chemin rapide est désactivé

**Suggestion de profondeur PoW :** 6 keyblocks (~6 min) pour les transferts de grande valeur.

## Profil B : Optimisé global (objectif : ~3–7s de finalité, moins de replis)

### Couche PoW (keyblocks)

* **Intervalle de keyblock :** 90 s
* **Recalibrage :** 480 keyblocks (~12h)
* **Fenêtre de comité W :** 960 keyblocks (~24h)

### Comité et chemin rapide

* **Échantillon de signataires actifs :** 384 (plus de redondance pour latence plus élevée)
* **Cadence de microbloc :** 1 / sec (tous les 1000 ms)
* **Règle QC :** quorum pondéré **≥ 2/3**
* **Étapes BFT :** 2 tours (même protocole)

### Délais d'attente

* `Tvote = 900 ms`, `Tcommit = 900 ms`
* **Délai QC par microbloc :** `Dqc = 3500 ms`

### Confirmations de repli

**Suggestion de profondeur PoW :** 8 keyblocks (~12 min) pour les transferts de grande valeur (plus conservateur globalement).

## Signaux observables on-chain (pas de télémétrie externe)

Tout ce qui suit peut être calculé à partir des en-têtes de blocs + messages de comité inclus on-chain.

### Entrées (mesurées sur une fenêtre glissante)

Soit la chaîne définie :
* `MB(t)` : microblocs proposés dans les dernières `t` secondes
* `QC(t)` : microblocs qui ont obtenu un QC dans le délai (`Dqc`) dans les dernières `t` secondes
* `EQ(t)` : nombre de *preuves d'équivocation* incluses on-chain dans les dernières `t` secondes
  (même clé de leader/comité signe deux microblocs conflictuels pour la même hauteur/vue)
* `STALE(k)` : taux de péremption des keyblocks PoW sur les derniers `k` keyblocks
  (périmé = keyblock pas sur la meilleure chaîne mais vu et référencé)

Définir :
* **Taux de succès QC :** `q = QC(60s) / max(1, MB(60s))`
* **Latence médiane QC :** `L50 = médiane(temps(QC) - temps(proposition))` sur les derniers 60s
* **Compte d'équivocation :** `e = EQ(300s)` (5 minutes)
* **Taux de péremption PoW :** `s = STALE(120)` (derniers ~2h profil UE, ~3h profil global ; ajuster comme vous voulez)

## Règles de changement de mode (déterministe, hystérésis, verrouillé temporellement)

### Déclencheur de sécurité immédiat → Mode 2 (repli PoW)

Entrer en **Mode 2** instantanément si l'un de ces éléments est vrai :
1. `e > 0` (toute preuve d'équivocation dans les 5 dernières minutes), **ou**
2. **QCs conflictuels** observés pour la même hauteur/vue, **ou**
3. `q < 0,80` pour **deux** sous-fenêtres consécutives de 30s, **ou**
4. "Blackout QC" : **aucun QC** n'apparaît pendant `Tblackout`
   * UE : `Tblackout = 10s`
   * Global : `Tblackout = 20s`

**Comportement Mode 2**

* Les microblocs peuvent toujours se propager, mais **les nœuds ne les traitent pas comme finaux**.
* Finalité de chaîne = confirmations PoW uniquement.
* Collecter des preuves (preuves d'équivocation), pénaliser si votre conception le supporte.

### Déclencheur de performance/stabilité → Mode 1 (ajustement de turbulence)

Entrer en **Mode 1** si (et seulement si les déclencheurs Mode 2 sont faux) et l'un est vrai pendant **>30s** :
* UE : `q < 0,98` **ou** `L50 > 2,5s` **ou** `s > 0,03`
* Global : `q < 0,95` **ou** `L50 > 6s` **ou** `s > 0,04`

**Actions Mode 1 (adaptation bornée)**

* UE : taux de microbloc 2/s → 1/s, délais d'attente 400ms → 800ms, échantillon de signataires +25%
* Global : taux de microbloc reste 1/s, délais d'attente 900ms → 1400ms, échantillon de signataires +25%
* Augmenter le délai QC `Dqc` proportionnellement.

### Récupération vers Mode 0 (hystérésis)

Retourner au **Mode 0** seulement après **Nclean** secondes consécutives :
* Pas de preuves d'équivocation (`e == 0` dans la fenêtre roulante),
* Taux de succès QC au-dessus du seuil,
* Latence médiane en dessous du seuil.

Suggéré :
* UE : `Nclean = 120s` avec `q ≥ 0,985` et `L50 ≤ 2,2s`
* Global : `Nclean = 180s` avec `q ≥ 0,97` et `L50 ≤ 5,0s`

### Récupération de Mode 2 → Mode 1 (d'abord), puis Mode 0

* Sortir du Mode 2 vers Mode 1 après `Nclear` secondes sans équivocations fraîches et QC reprend :
  * UE : `Nclear = 60s`, nécessiter au moins 30 QCs observés
  * Global : `Nclear = 90s`, nécessiter au moins 30 QCs observés
* Puis suivre la règle Mode 1 → Mode 0 ci-dessus.

## Pourquoi c'est implémentable

* **Tous les déclencheurs sont dérivés de données déjà dans le protocole** : QCs,
  horodatages/numéros de séquence de microblocs, preuves d'équivocation, et taux de péremption PoW.
* **Pas de confiance dans les estimations de ping/latence** : vous déduisez la santé de "avons-nous
  réellement finalisé rapidement et de manière cohérente ?"
