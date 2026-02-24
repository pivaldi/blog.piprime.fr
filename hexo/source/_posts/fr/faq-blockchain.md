---
title: "FAQ blockchain de Cambridge Blockchain Network Sustainability Index"
date: 2025-12-16 22:39:34
id: faq-blockchain
tree_view: true
lang: FR
description: "La FAQ Blockchain de l'Université de Cambridge."
categories:
- [FR, Tech, Blockchain]
- [FR, Tech, Bitcoin]
tags:
- blockchain
- bitcoin
- nft
- defi
- dapps
---

This article is available in [English](/en/faq-blockchain).

{% note %}
Cette FAQ provient du [The Cambridge Blockchain Network Sustainability Index (CBNSI)](https://ccaf.io/cbnsi/about/faq).  
Ce travail est sous licence [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).
{% endnote %}

## Les base de la blockchain

### Qu'est-ce qu'une blockchain publique ?

Une blockchain publique est un registre distribué publiquement où l'information est immuable - comme
les transactions sur la blockchain Bitcoin - et tout le monde peut y accéder et y participer. Il
n'existe pas d'autorité centrale mais un réseau décentralisé composé d'acteurs indépendants et
pseudonymes. Pour maintenir le réseau, les validateurs sont incités ; ils gagnent une récompense en
cryptomonnaie pour chaque bloc découvert ou transaction validée, selon le protocole blockchain et
son mécanisme de consensus sous-jacent. Ces mécanismes, qu'ils nécessitent des ressources
financières sous forme de garantie ou la dépense d'énergie, incitent un comportement honnête tout en
punissant le comportement malhonnête.

Bien que leur nature décentralisée conduise à la redondance et à un haut niveau de sécurité, selon
le niveau de participation, et à la transparence, cela a aussi un coût. Les blockchains publiques
ont souvent des problèmes d'évolutivité et en raison de leur transparence sont mal adaptées aux
données sensibles. Pour cette raison, les entreprises intéressées par l'utilisation de la
technologie blockchain se concentrent souvent sur le développement de blockchains privées ou de
consortium plutôt que publiques.

### Qu'est-ce qu'une blockchain privée ?

Alors qu'une blockchain publique apporte transparence, décentralisation et sécurité, une blockchain
privée met en place des règles de gouvernance pour écrire, modifier ou même supprimer des entrées de
la blockchain. Distribuée exclusivement pour une ou plusieurs entités formant un "*consortium*", le
registre est maintenu par très peu de validateurs connus comme *intermédiaires de confiance*. Pour
devenir un *intermédiaire de confiance*, les acteurs doivent divulguer leur identité et recevoir
l'approbation du consortium. Ensuite, la validation des blocs est arbitrairement opérée par ces
validateurs s'appuyant par exemple sur la preuve d'autorité (PoA). Un mécanisme de consensus où les
blocs sont signés individuellement par des nœuds, ne dépendant pas du capital ou du principe
d'énergie mais de la confiance.

La preuve d'autorité permet un haut niveau d'évolutivité grâce au nombre limité de nœuds vérifiant
et ajoutant de nouveaux blocs. Cependant, les restrictions d'accès conduisent inévitablement à une
centralisation des opérateurs de nœuds et donc à une forte dépendance vis-à-vis d'un ou de quelques
acteurs, ainsi qu'à des problèmes de transparence, rendant les solutions privées inadaptées à de
nombreuses applications sur les blockchains publiques.

### Quels sont les défis du consensus distribué ?

Un problème clé dans les systèmes de paiement électronique est le **problème de double dépense**.
Étant donné que la valeur est représentée numériquement, qu'est-ce qui empêche les utilisateurs de
simplement copier-coller leurs fonds électroniques et de les dépenser plusieurs fois ? Les systèmes
de paiement traditionnels reposent sur une comptabilité centralisée et des règles strictes
appliquées par les opérateurs. Dans les systèmes distribués sans autorité centrale, cependant, les
désaccords potentiels sur les transactions valides mais conflictuelles doivent être résolus d'une
manière différente.

La recherche dans le domaine des systèmes distribués a produit un certain nombre d'**algorithmes de
consensus** qui permettent à un réseau de nœuds de parvenir collectivement à un accord sur l'état du
système. Cependant, ces mécanismes sont limités aux environnements avec permission caractérisés par
un petit nombre de parties identifiables qui doivent être en ligne en permanence. Si la
participation au processus de consensus devait être étendue à un plus grand nombre d'acteurs
inconnus, le réseau deviendrait vulnérable aux **attaques Sybil**. Un acteur malveillant pourrait
facilement mettre en place un nombre arbitraire de faux nœuds qui semblent être exploités par
différentes parties et détourner le processus de vote. C'est pourquoi un simple vote à la majorité
dans les systèmes ouverts avec adhésion dynamique (où les utilisateurs pseudonymes peuvent
rejoindre, quitter et rejoindre à volonté) ne fonctionne pas en pratique.

### Qu'est-ce que la preuve de travail ?

La preuve de travail est un mécanisme qui protège contre les attaques Sybil en attachant un coût
financier au vote dans une tentative de décourager les acteurs malveillants de participer – ou du
moins de le rendre significativement plus coûteux. Dans un réseau décentralisé avec de nombreux
acteurs qui se méfient les uns des autres, ce coût doit être objectivement mesurable, difficile
(c'est-à-dire coûteux) à générer, non falsifiable et facilement vérifiable par des tiers.

La preuve de travail se présente sous la forme d'une énigme cryptographique que les participants
doivent résoudre. Basée sur le concept de fonctions de hachage, l'énigme nécessite que les
participants trouvent une valeur de hachage qui doit être inférieure à une cible spécifique, qui est
déterminée par un niveau de difficulté défini. Puisqu'il n'y a pas de raccourci pour résoudre
l'énigme, le forçage brut par essais et erreurs est la seule option. Ce processus peut être comparé
à deviner un nombre aléatoire ou à lancer de nombreux dés pour arriver à une configuration
spécifique. Résoudre la preuve de travail est un processus informatiquement intensif qui impose un
coût financier réel au "résolveur" sous forme d'électricité.

### Qu'est-ce que la preuve d'enjeu ?

Un autre mécanisme de consensus commun est appelé preuve d'enjeu. Cette méthode utilisée pour
assurer un consensus sans confiance est fondamentalement différente de la preuve de travail.
Contrairement à son prédécesseur, la preuve d'enjeu substitue le coût des ressources associé au
processus informatiquement intensif de deviner des nombres aléatoires pour résoudre une énigme
cryptographique par une exigence de mettre en gage des ressources financières, sous forme de jetons
natifs de la blockchain, comme garantie (appelé "staking"). Pour participer à l'attestation ou à la
proposition de nouveaux blocs, les soi-disant validateurs doivent verrouiller ou "staker" un nombre
défini de jetons natifs, par exemple, de l'ether (ETH) dans le cas d'Ethereum. Selon la conception
du protocole, les validateurs sont (aléatoirement) sélectionnés pour effectuer certains services
pour lesquels ils sont ensuite récompensés. Cependant, en cas de mauvais comportement, une pénalité
financière (appelée "slashing") est imposée au nœud malveillant ou défaillant, réduisant
effectivement l'enjeu du validateur. Étant donné que cette méthode de sanction des comportements
indésirables remplace le processus énergivore de trouver une preuve de travail valide, elle est
souvent louée pour être l'alternative plus respectueuse de l'environnement pour parvenir à un
consensus distribué. Cependant, certains soutiennent que cette approche conduit à plusieurs
conséquences négatives involontaires.

### Qu'est-ce que le trilemme de la blockchain ?

Le trilemme de la blockchain décrit la difficulté d'atteindre simultanément les trois propriétés
suivantes : **évolutivité, décentralisation et sécurité**. Le trilemme décrit la situation
inévitable dans laquelle une blockchain ne peut exceller dans les trois propriétés. En général, on
peut dire que seulement deux des trois propriétés sont compatibles. Les développeurs acceptent
généralement d'optimiser une fonction au détriment d'une autre. Premièrement, l'**évolutivité**
implique la capacité d'un réseau à effectuer un débit transactionnel croissant. Deuxièmement, la
**décentralisation** fait référence au niveau de contrôle qu'un individu détient dans le réseau
global ou dans quelle mesure le réseau est distribué parmi les membres. Un réseau blockchain avec de
nombreux participants indépendants de validation de blocs sert généralement de référence pour un
réseau hautement décentralisé, tandis que la présence de seulement quelques-uns est un indicateur
d'un degré considérable de centralisation. Enfin, un haut niveau de **sécurité** est primordial pour
assurer l'intégrité du réseau ; il doit être prohibitivement difficile et coûteux pour un attaquant
d'exécuter une réorganisation de chaîne réussie ou de prendre le contrôle du réseau entièrement.

En réponse au trilemme, les développeurs de l'écosystème ont utilisé leur ingéniosité pour remédier
aux limitations connues des couches de base et ont introduit des solutions innovantes (c'est-à-dire,
sidechains, rollups optimistes et à connaissance nulle, sharding, etc.). Ceux qui ont développé de
nouvelles couches de base ont généralement continué à opter soit pour la décentralisation soit pour
l'évolutivité. L'avenir dira si un jour une panacée sera trouvée qui permettra à une couche de base
d'exceller dans toutes les propriétés.

## Bitcoin

### Les bases sur Bitcoin

#### Qu'est-ce que Bitcoin ?

**Bitcoin** (avec un **B** majuscule) est un protocole logiciel ouvert et un réseau pair-à-pair
(P2P) qui permet aux utilisateurs de faire des transactions en ligne sans s'appuyer sur des
intermédiaires de confiance. Le système est sans permission puisqu'il fonctionne sans autorité
centrale, permettant à quiconque dans le monde d'envoyer, stocker et recevoir des jetons numériques
de valeur sans approbation préalable.

Ces jetons numériques constituent la cryptomonnaie native de Bitcoin **bitcoin** (avec un **b**
minuscule). Comme d'autres cryptomonnaies, les bitcoins n'ont pas d'émetteur formel et ne sont donc
la responsabilité de personne. Cela les rend plus proches de marchandises numériques que de devises
numériques ou d'autres actifs financiers.

Toutes les transactions Bitcoin sont libellées dans l'unité de compte locale, qui est généralement
représentée par l'acronyme *BTC* (ou XBT dans les tickers d'échange). L'offre totale de bitcoin est
fixée à 21 millions de BTC, avec de nouvelles unités émises de manière transparente dans le cadre du
processus de minage selon un calendrier prédéterminé. Un bitcoin peut être subdivisé en unités plus
petites : la plus petite unité de base s'appelle *satoshi*, avec un bitcoin équivalent à 100
millions de satoshis.

#### En quoi Bitcoin est-il différent des systèmes de paiement électronique traditionnels ?

Les paiements électroniques sont généralement activés par des systèmes de comptabilité fermés où les
comptes clients sont maintenus de manière centralisée par des opérateurs tels que les banques
commerciales ou les sociétés de cartes de crédit. Ces institutions agissent comme des gardiens qui
exercent un contrôle discrétionnaire sur le réseau de paiement : cela inclut les politiques d'accès
(qui peut utiliser le service), les procédures de risque et de conformité (quelles actions peuvent
être faites), et la gestion des comptes (quels actifs et transactions sont autorisés). En
conséquence, les utilisateurs peuvent se voir refuser l'accès, avoir des comptes fermés ou voir des
transactions signalées et annulées.

En revanche, Bitcoin est un système sans permission qui fonctionne sans autorité centrale. Les
utilisateurs sont libres d'utiliser le réseau et de faire des transactions sans approbation
préalable par d'autres. Comme l'argent liquide physique, les utilisateurs peuvent faire des
transactions de manière pseudonyme et garder le contrôle total de leurs propres fonds
(*auto-garde*). Aucun acteur unique ne peut unilatéralement saisir des actifs, annuler des
transactions ou modifier l'ensemble de règles. Le réseau Bitcoin fonctionne également 24h/24 et 7j/7
et est de nature transjuridictionnelle. Ces propriétés ont cependant des coûts significatifs – un
grand réseau avec des redondances massives, des contraintes d'évolutivité et de performance, une
coordination et une prise de décision lentes, et surtout, un mécanisme de consensus coûteux et
énergivore.

#### Qu'est-ce que la blockchain Bitcoin ?

La blockchain Bitcoin est le registre public qui enregistre toutes les transactions Bitcoin.
Effectivement une base de données partagée, elle est collectivement maintenue par des dizaines de
milliers d'ordinateurs appelés **nœuds complets**. Le registre est organisé en utilisant une
structure de données particulière qui regroupe les transactions dans un bloc de données qui est
cryptographiquement lié au bloc précédent. Au fil du temps, ce processus résulte en une chaîne
croissante de blocs qui est étendue par des acteurs spéciaux appelés **mineurs**, qui ajoutent de
nouveaux blocs en anticipation de récompenses financières. L'utilisation de cette structure de
données spécifique garantit que la falsification de l'historique des transactions (par exemple, la
modification des transactions passées) sera détectée immédiatement par les autres participants du
réseau car les hachages de blocs liés ne correspondent pas.

#### Comment Bitcoin implémente-t-il la preuve de travail ?

Bitcoin utilise la preuve de travail pour établir une compétition mondiale parmi les participants au
consensus – dans ce cas les *mineurs* – où la partie gagnante reçoit le droit d'ajouter son bloc au
registre public. Pour compenser les mineurs des coûts encourus, le réseau Bitcoin offre une
récompense financière sous forme de bitcoin nouvellement créé et de frais de transaction
(*récompense de bloc*). Cependant, les récompenses ne sont distribuées qu'au mineur qui a trouvé une
solution en premier, transformant le minage en une **course hautement compétitive**.

Après que l'énigme a été résolue, le bloc correspondant est ajouté à la blockchain et la compétition
recommence. En raison des fluctuations du hashrate et de la nature aléatoire de l'énigme, le rythme
et le temps auxquels les blocs sont résolus n'est pas constant. Le réseau Bitcoin régule ces
fluctuations en ajustant périodiquement (après 2 016 blocs) la difficulté de l'énigme à un niveau
qui réinitialise le rythme de résolution des blocs à 10 minutes en moyenne.

Si une situation se produit où deux blocs valides sont proposés approximativement en même temps par
différents mineurs, la blockchain va *forker* – ce qui signifie se diviser en deux branches
distinctes. Dans une période relativement courte, les participants du réseau convergeront
naturellement vers la **chaîne 'la plus longue'**, qui est représentée par la branche qui a été la
plus difficile à produire. Le raisonnement est que les branches qui ont accumulé plus de puissance
de calcul étaient plus coûteuses à générer en premier lieu, suggérant que les mineurs ont dû
investir plus de capital au départ.

#### Quelle est la théorie des jeux derrière Bitcoin ?

Une **conception intelligente d'incitations économiques** qui favorise l'honnêteté plutôt que la
tricherie sous-tend le processus de consensus de Bitcoin. Les mineurs encourent volontairement des
coûts financiers *ex ante* dans l'attente d'une récompense future potentielle. La **menace de coûts
irrécupérables** (c'est-à-dire ne pas recevoir la récompense de bloc en raison d'un comportement
malhonnête mais avoir déjà payé pour le travail effectué) – crée l'incitation financière pour les
mineurs à jouer selon les règles. En supposant que les mineurs sont des agents économiques
maximisant les profits, l'honnêteté est la stratégie la plus rationnelle. En conséquence, Bitcoin
peut être considéré moins comme une innovation technique et plus comme un système socio-économique
soigneusement calibré qui repose sur une combinaison complexe d'incitations économiques, de théorie
des jeux et d'une base technique solide.

### Le minage Bitcoin

#### Comment les mineurs résolvent-ils l'énigme de la preuve de travail ?

Résoudre l'énigme de la preuve de travail nécessite que les mineurs épuisent toutes les options
possibles jusqu'à ce qu'un nombre aléatoire — appelé un **nonce** dans le jargon technique — soit
trouvé qui répond à la cible de difficulté du réseau. Plutôt que de deviner des nombres
manuellement, les mineurs utilisent un équipement matériel spécial pour générer rapidement des
solutions potentielles.

Au tout début, le minage pouvait être effectué avec les
[unités centrales de traitement (CPU)](https://en.wikipedia.org/wiki/Central_processing_unit)
des ordinateurs standards. Dans les années suivantes, les mineurs se sont tournés vers des
équipements plus performants sur le plan informatique – bien que toujours à usage général – tels que
les [unités de traitement graphique (GPU)](https://en.wikipedia.org/wiki/Graphics_processing_unit) et
les [réseaux de portes programmables (FPGA)](https://en.wikipedia.org/wiki/Field-programmable_gate_array).
Cependant, l'industrie minière a considérablement changé lorsqu'en 2013, la première génération de
[circuits intégrés spécifiques à l'application (ASIC)](https://en.wikipedia.org/wiki/Application-specific_integrated_circuit)
a commencé à émerger.  
Les ASIC sont du matériel spécialement conçu optimisé explicitement pour les algorithmes de preuve
de travail, ce qui les rend des ordres de grandeur plus efficaces pour le minage de Bitcoin que
l'équipement à usage général. En conséquence, il n'a pas fallu longtemps pour que les ASIC dominent
et finalement remplacent le minage CPU, GPU et FPGA dans Bitcoin.

Aujourd'hui, le minage de Bitcoin est exclusivement effectué avec des millions d'ASIC énergivores
qui ont peu ou pas de valeur d'utilisation en dehors du minage de cryptomonnaies.

#### Quels coûts les mineurs encourent-ils ?

Les mineurs encourent des coûts financiers sous forme de **dépenses en capital** (coûts fixes
uniques tels que l'achat de matériel spécialisé) et de **dépenses opérationnelles** (coûts variables
continus tels que l'électricité, le refroidissement, les salaires et autres). Les achats
d'équipement et les contrats d'électricité sont les plus grands facteurs de coût.

Les mineurs encourent volontairement ces coûts à l'avance dans l'attente d'une récompense future
potentielle (c'est-à-dire des bitcoins nouvellement créés et des frais de transaction de bloc). La
menace de coûts irrécupérables – les mineurs risquant de perdre leur investissement entier – est un
composant clé de la théorie des jeux et de la conception d'incitations économiques de Bitcoin.

#### Qu'est-ce que le hashrate ?

Le hashrate mesure la vitesse à laquelle une machine – ou un collectif de machines – peut traiter un
algorithme de preuve de travail. Il est exprimé en hachages par seconde, nommé d'après le code
alphanumérique aléatoire (hachages) généré par la fonction de hachage qui sous-tend l'algorithme de
preuve de travail. Le **hashrate total** fait généralement référence à la puissance de calcul
agrégée de tout le matériel de minage tentant de résoudre l'énigme à un moment donné. Au 13 juillet
2021, le hashrate total de Bitcoin est d'environ 100 Exahashes par seconde (Eh/s). Cela correspond à
cent quintillions (100 * 10^18) de 'suppositions' étant continuellement produites chaque seconde par
l'industrie minière Bitcoin.

#### Qu'est-ce qu'une installation de hachage ?

Une installation de hachage est un centre de données physique dédié aux activités de minage de
cryptomonnaies. Communément appelées **fermes de minage**, ces installations fonctionnent souvent à
une échelle industrielle et sont situées dans des régions ayant accès à des sources d'énergie
abondantes et des conditions climatiques favorables. Le matériel spécialisé employé nécessite de
grandes quantités d'énergie et certaines conditions environnementales pour fonctionner, rendant
économiquement attractif la construction d'installations à grande échelle qui permettent de tirer
parti des économies d'échelle.

Les installations de hachage sont souvent conçues pour héberger des milliers d'appareils matériels.
Elles peuvent être utilisées soit par des entités pour leurs propres activités de minage (hachage
propriétaire) soit permettre à des clients payants de louer de l'espace pour leur matériel (services
d'hébergement à distance en co-localisation). Ce dernier est un modèle commercial qui a gagné en
popularité car il permet aux mineurs du monde entier de tirer parti des avantages géographiques de
certaines régions.

#### Qu'est-ce que les pools de minage ?

Le minage est une industrie hautement compétitive puisque la récompense de bloc (c'est-à-dire les
bitcoins nouvellement créés et les frais de transaction) n'est distribuée qu'au mineur qui trouve la
solution à l'énigme de hachage en premier. Cette tâche est devenue de plus en plus difficile au fil
du temps car la complexité de l'énigme a augmenté, mettant la pression sur les mineurs individuels
dont la probabilité de résoudre l'énigme a considérablement diminué – et avec elle la régularité des
revenus.

Pour réduire le risque et couvrir les dépenses opérationnelles continues, les mineurs ont commencé à
coordonner leurs efforts en formant des collectifs appelés 'pools de minage' dès 2010. Ces services
permettent aux mineurs individuels et aux installations de hachage de mettre en commun la puissance
de calcul pour augmenter les chances de résoudre l'énigme. Les mineurs individuels connectent leur
équipement à un serveur de pool qui regroupe les efforts de minage de toutes les entités
participantes. L'opérateur du pool distribue ensuite les récompenses proportionnellement à la
contribution de chaque mineur, ce qui augmente la prévisibilité des revenus en réduisant la variance
des paiements.

#### Quelle est la mobilité des mineurs Bitcoin ?

En théorie, le minage ne nécessite que du matériel, de l'électricité et une connexion Internet
stable. À l'ère des satellites, cela met en lumière des régions éloignées, parfois sous-développées,
avec un surplus d'énergie. Contrairement à la plupart des industries énergivores, le minage de
Bitcoin n'est pas lié à un emplacement physique particulier et les mineurs peuvent se relocaliser
relativement rapidement. L'émergence de centres de données à échelle industrielle dédiés au minage
de cryptomonnaies dans le monde entier a permis à certains mineurs de profiter des différences
saisonnières des prix de l'énergie entre les régions en utilisant des services dits de
co-localisation, les rendant hautement mobiles.

La migration internationale s'accompagne de nombreux problèmes logistiques et coûts, tels que les
gains perdus, le transport, les différences dans les exigences standard de l'équipement et les
responsabilités fiscales potentielles, pour n'en nommer que quelques-uns. Pour les mineurs qui ont
l'intention de se relocaliser, le composant temps est d'une importance capitale car le matériel
déconnecté entraîne une perte de revenus. Ainsi, le transport est généralement effectué par fret
aérien qui est plus coûteux mais significativement plus rapide que d'autres moyens de transport.
Outre les revenus perdus, le transport comporte le risque que le matériel soit endommagé ou même
perdu pendant le voyage. Par conséquent, le nouveau niveau de rentabilité doit être suffisamment
durable pour compenser les risques encourus et les coûts d'opportunité pour rendre la relocalisation
valable. En conséquence, les migrations régulières, telles que celles enregistrées en Chine, ont été
observées principalement au niveau régional plutôt qu'international car le transport est moins
complexe et moins intensif en temps.

#### Le matériel peut-il être utilisé pour miner d'autres cryptomonnaies ?

De nos jours, le minage de Bitcoin est effectué exclusivement via un équipement ASIC à usage
spécial. Comme le nom le suggère, ces machines sont *spécifiques à l'application* : contrairement au
matériel à usage général, elles peuvent difficilement être utilisées pour autre chose que leur but
prévu. Les ASIC Bitcoin contiennent des puces qui sont spécifiquement optimisées pour l'**algorithme
de hachage SHA-256** qui sous-tend la preuve de travail de Bitcoin (une liste complète de
l'équipement compatible peut être trouvée [ici](http://sha256.cbeci.org/))
et [là](https://www.coinwarz.com/mining/hardware/sha-256).  
Plus d'une douzaine d'autres cryptomonnaies et réseaux blockchain, y compris Bitcoin Cash et Bitcoin
SV, utilisent aujourd'hui le même algorithme.

L'univers 'minable' d'un ASIC est donc toujours limité aux cryptomonnaies dont le mécanisme de
preuve de travail est basé sur le même algorithme de hachage pour lequel la machine a été optimisée.
Par conséquent, si un algorithme recule en importance, la valeur des ASIC optimisés pour cet
algorithme également. Ce mécanisme est une pierre angulaire importante de la conception des
incitations économiques et de la théorie des jeux des cryptomonnaies à preuve de travail car il
introduit la notion de coûts irrécupérables (d'équipement) comme dissuasion pour un comportement
malhonnête.

### Consommation d'énergie Bitcoin

#### Peut-on mesurer directement la consommation d'électricité de Bitcoin ?

La consommation réelle d'électricité de Bitcoin ne peut pas être mesurée directement pour plusieurs
raisons. Les mineurs peuvent opérer de manière pseudonyme sans avoir besoin de s'identifier. Les
mineurs utilisent également différents équipements matériels avec des efficacités énergétiques
variables pour lesquels il n'existe pas de chiffres de vente ou de distribution fiables. Les
équipements plus anciens peuvent rester inactifs dans des entrepôts pendant longtemps jusqu'à ce que
des revenus miniers en flèche justifient soudainement un redéploiement temporaire. Il existe des
différences significatives entre les installations de hachage en termes d'efficacité d'utilisation
de l'énergie (par exemple, quelle quantité d'électricité est utilisée pour le refroidissement par
opposition à simplement faire fonctionner les machines).

La consommation d'électricité de Bitcoin ne peut donc être qu'estimée. Ces approximations sont
basées sur des **modèles théoriques** qui s'appuient sur des hypothèses spécifiques. Le CBECI est un
modèle économique ascendant qui fournit une gamme d'estimations potentielles, délimitée par une
borne inférieure hypothétique représentant la consommation minimale absolue (plancher) et une borne
supérieure hypothétique correspondant à la consommation maximale absolue (plafond). Veuillez
consulter la section [Cambridge Bitcoin Electricity Consumption Index Methodology](https://ccaf.io/cbnsi/cbeci/methodology)
pour plus d'informations sur les hypothèses sous-jacentes.

#### Quels sont les moteurs de la consommation d'énergie de Bitcoin ?

La **rentabilité minière attendue** (c'est-à-dire les revenus prévus moins les coûts) détermine si
les machines fonctionnent ou restent inactives. Les revenus miniers sont très volatils par nature
étant donné leur dépendance au prix du bitcoin et à l'environnement concurrentiel dynamique (par
exemple, hashrate fluctuant, niveau de difficulté mobile et frais de transaction volatils). Les
coûts opérationnels sont plus prévisibles et principalement déterminés par les tarifs d'électricité.

Par conséquent, la consommation d'énergie de Bitcoin est étroitement liée aux coûts financiers
encourus dans le minage ainsi qu'à la **trajectoire de prix attendue du bitcoin** : la hausse des
prix du bitcoin et/ou la baisse des coûts d'électricité conduisent généralement à une augmentation
de la consommation d'électricité car le matériel moins efficace sera réinstallé (l'inverse est
également vrai). Ceci se reflète dans le modèle CBECI qui est très sensible aux changements du
paramètre de coût moyen de l'électricité et de la variable de prix quotidien du bitcoin.

#### La consommation d'énergie de Bitcoin augmente-t-elle proportionnellement avec le nombre de transactions ?

L'empreinte énergétique de Bitcoin est **liée à la production de blocs**, pas au traitement des
transactions. Cela signifie que le nombre de transactions dans un bloc n'a aucun impact sur sa
dépense énergétique : pour un niveau de difficulté donné, un bloc plein contenant des milliers de
transactions a la même empreinte électrique qu'un bloc vide sans transactions. L'idée fausse
répandue que la consommation d'énergie de Bitcoin augmente avec un nombre croissant de transactions
semble avoir ses origines dans la métrique populaire du **coût énergétique par transaction**.
Souvent utilisée pour comparer l'« efficacité énergétique » de différents systèmes de paiement,
c'est une mesure purement théorique qui a peu de pertinence pratique sans contexte supplémentaire.

Une comparaison significative nécessiterait d'abord une définition uniforme du terme
« transaction ». Les transactions Bitcoin peuvent contenir une sémantique cachée qui peut ne pas
être immédiatement apparente. Par exemple, une seule transaction dans Bitcoin peut regrouper des
centaines de paiements plus petits à des adresses individuelles. Elle peut également correspondre à
un règlement de milliers de transactions hors chaîne qui ont eu lieu sur des solutions de deuxième
couche (par exemple, ouverture et fermeture de canaux dans le Lightning Network). Elle pourrait
également potentiellement représenter des millions de points de données horodatés utilisant des
protocoles ouverts tels que [OpenTimestamps](https://opentimestamps.org/).

#### Quel est l'effet des changements dans les inventaires de matériel ?

Les augmentations de hashrate ne viennent pas nécessairement au prix d'une consommation
d'électricité plus élevée. Ces dernières années, des progrès technologiques étonnants ont été
réalisés dans le matériel dédié au minage de bitcoin, le rendant plus de 700 fois plus puissant et
près de 100 fois plus efficace énergétiquement au cours de la dernière décennie (2013 - 2023). Ce
progrès rapide a entraîné un cycle de vie de produit notamment court pour l'équipement de minage aux
premiers jours de Bitcoin, le matériel devenant rapidement obsolète en raison de son caractère non
rentable à exploiter à des tarifs d'électricité raisonnables. Cela a conduit à une augmentation du
hashrate total sans augmentation correspondante de la demande d'énergie. Cependant, il devient de
plus en plus évident que le rythme de l'avancement technologique a décéléré et s'est stabilisé. Les
bonds frénétiques initiaux en puissance de calcul et en efficacité ont fait place à des
améliorations plus incrémentales, signifiant la maturation de la technologie de minage de Bitcoin.

De plus, pendant les périodes où le minage de bitcoin est particulièrement lucratif, une hypothèse
initiale pourrait être que l'incitation accrue à miner équivaut à des pics significatifs de
consommation d'énergie, étant donné qu'une rentabilité plus élevée pourrait justifier l'exploitation
de matériel plus ancien, probablement moins efficace. Bien que cet argument ait un certain mérite et
se reflète quelque peu dans nos estimations, la situation exige une perspective plus nuancée. Par
exemple, l'interdiction de la Chine sur le minage de cryptomonnaies a conduit à une grave pénurie
d'espace d'hébergement pour le matériel de minage. Les preuves suggèrent que ce goulot
d'étranglement a entraîné même du matériel très rentable à être stocké dans des entrepôts et à ne
pas être utilisé en raison d'un manque d'espace dans les centres de données. Étant donné que même de
nouvelles machines étaient stockées, il est raisonnable de déduire que les opérateurs miniers
auraient déjà remplacé toutes les anciennes machines par de nouveaux modèles, exploitant tous les
moyens possibles pour améliorer l'efficacité globale de leurs opérations minières. Par conséquent,
bien que l'incitation à utiliser un équipement moins efficace devienne plus prononcée pendant les
périodes de minage de bitcoin exceptionnellement rentables et se matérialise probablement dans une
certaine mesure, une augmentation substantielle du nombre de tels appareils semble douteuse.

En fin de compte, la question se résume essentiellement à combien de nouveau matériel (en termes de
consommation) entre sur le marché par rapport à combien de l'ancien matériel est décommissionné.

Voir :
* [Kochkodin, B. (2021). Bitcoin Miners Thwarted by Data Center Crunch](https://www.bloomberg.com/news/articles/2021-07-07/bitcoin-miners-thwarted-by-data-center-crunch-amid-profit-boom#xj4y7vzkg).
* [Sigalos, M. (2022). Kazakhstan's deadly protests hit bitcoin, as the world's second-biggest mining hub shuts down](https://www.cnbc.com/2022/01/06/kazakhstan-bitcoin-mining-shuts-down-amid-fatal-protests.html).

#### Bitcoin peut-il fonctionner avec n'importe quel niveau d'électricité ?

En théorie, le réseau Bitcoin ne nécessite pas un niveau prédéterminé d'électricité pour
fonctionner. Le système est conçu pour s'ajuster dynamiquement aux circonstances externes
changeantes via le **mécanisme d'ajustement de difficulté**. Tous les 2016 blocs, ou en moyenne
environ deux semaines, le niveau cible de difficulté de l'énigme de hachage s'ajustera
automatiquement à la hausse ou à la baisse selon la façon dont le hashrate sous-jacent a changé. Ce
mécanisme régule le nombre de blocs de sorte qu'en moyenne, un nouveau bloc soit créé toutes les 10
minutes. Si, pendant cette période, des blocs ont été trouvés en moyenne en plus (ou moins) de 10
minutes, alors le niveau de difficulté diminue (ou augmente) proportionnellement pour ramener le
temps moyen entre les blocs à environ 10 minutes.

En pratique, cependant, l'utilisation d'électricité et les coûts associés sont un facteur important
pour la sécurité du réseau. Des dépenses d'électricité plus élevées tendent à augmenter la sécurité
du réseau car les attaques deviennent plus coûteuses (et donc moins probables). Des dépenses
d'électricité plus faibles peuvent exposer le réseau à des attaques à 51 pour cent, où les
attaquants tentent de construire une branche de chaîne alternative qui dépasse la chaîne honnête.
Cependant, il y a un débat en cours sur le fait que Bitcoin **surpaye** actuellement pour sa
sécurité, suggérant qu'un degré similaire de sécurité pourrait également être atteint et maintenu
avec des dépenses d'électricité plus faibles. Aucune réponse concluante à cette question de
**dépense de sécurité optimale** n'a encore été trouvée.

#### Existe-t-il une limite supérieure à la consommation d'électricité de Bitcoin ?

En théorie, la production totale d'électricité mondiale constitue le seul plafond naturel à
l'utilisation d'énergie de Bitcoin. En pratique, cependant, il existe plusieurs facteurs qui
limitent la croissance de la demande d'énergie de Bitcoin.

Premièrement, il pourrait ne pas y avoir suffisamment de matériel fonctionnel disponible sur le
marché pour soutenir une augmentation significative de la consommation d'électricité. Les
équipements plus anciens pourraient être défectueux ou non opérationnels, et la production de
nouveaux équipements pourrait faire face à des retards en raison de pénuries mondiales de puces dans
les fonderies de pointe. Deuxièmement, les mineurs ne sont pas seulement en concurrence entre eux
mais aussi avec d'autres utilisateurs industriels et résidentiels d'électricité. Cette concurrence
limite l'accès à des ressources énergétiques abondantes et à faible coût. De plus, il y a une
capacité d'hébergement limitée dans les régions riches en énergie, qui pourrait être rapidement
remplie. Enfin, à long terme, le minage de bitcoin est appelé à faire face à des défis découlant
d'un calendrier d'offre décroissant, notamment les « halvings », et d'une augmentation
historiquement observée de la difficulté de miner du bitcoin. Ces facteurs devraient accroître la
compétitivité au sein du paysage minier, conduisant probablement à une consolidation des activités
minières dans des régions spécifiques avec des tarifs d'électricité très compétitifs.

#### Est-il possible de projeter l'empreinte future de Bitcoin ?

Une prévision crédible de la demande d'énergie future de Bitcoin nécessiterait d'abord et avant tout
une prédiction précise de la trajectoire de prix future du bitcoin. De plus, l'incertitude autour
des développements du hashrate et d'autres facteurs du réseau compliquent davantage la projection.
Enfin, les avancées technologiques dans le matériel de minage peuvent affecter les cycles de
remplacement du matériel et causer des changements significatifs d'inventaire, avec de nouvelles
machines économes en énergie remplaçant le matériel plus ancien et moins efficace. La seule chose
qui peut être dite avec certitude est que les mineurs continueront à remplir leur rôle tant qu'il
existe une incitation économique à le faire – c'est-à-dire tant que cela reste rentable.

#### Bitcoin ne peut-il pas simplement passer à un mécanisme de consensus moins énergivore ?

Les réseaux de cryptomonnaies emploient des algorithmes de consensus distribués pour s'assurer que
les participants pseudonymes parviennent à un accord sur l'état du registre public – c'est-à-dire
qui possède quoi. Dans la **preuve de travail**, l'électricité sert de ressource de preuve qui
impose un coût financier irrévocable aux mineurs. Ces dernières années, des algorithmes alternatifs
ont été proposés qui promettent des fonctionnalités de sécurité et des propriétés de réseau
similaires avec une surcharge énergétique substantiellement moindre. Plus célèbrement, la preuve
d'enjeu est une alternative maintenant largement déployée qui réduit la demande d'énergie du réseau
de plus de 99 %. Dans la preuve d'enjeu, l'électricité est remplacée comme ressource de preuve par
du capital mis en jeu sous forme de cryptomonnaie verrouillée. Les *validateurs* – l'équivalent des
mineurs – peuvent voter proportionnellement au montant de garantie qu'ils ont fourni.

Cependant, il n'est pas clair à ce jour si des algorithmes de consensus alternatifs comme la preuve
d'enjeu peuvent reproduire les mêmes assurances de sécurité sans engager de **compromis
substantiels**. Par exemple, les cryptomonnaies à preuve d'enjeu nécessitent une coordination
sociale en dehors du système lorsque le réseau est partitionné (« forké ») : contrairement à la
preuve de travail, il n'y a pas de critère objectif (chaîne « la plus longue » en termes de
puissance de calcul) qui permet aux acteurs pseudonymes de converger naturellement vers une seule
chaîne. L'introduction de subjectivité dans ce processus supposément sans confiance crée un risque
de centralisation. Elle soulève également des questions éthiques car la richesse détermine
directement le pouvoir de vote. Les utilisateurs qui ne peuvent mettre en jeu que de petites
quantités de jetons natifs sont peu susceptibles d'être choisis comme nœuds validateurs, ne leur
laissant aucune autre option que de déléguer leurs jetons à un pool. Contrairement aux pools de
minage à preuve de travail, cependant, les utilisateurs ne peuvent pas rediriger leur mise vers un
fournisseur différent sans d'abord être « autorisés » à se retirer, introduisant le risque de
verrouillage de fournisseur. De plus, les réseaux deviennent plus vulnérables aux attaques
potentielles impliquant des clés privées volées ou « empruntées » qui contrôlent une mise
substantielle.

Bien que les disparités de richesse et la formation d'oligopoles soient certainement une
préoccupation dans la preuve de travail également, en particulier avec seulement quelques fabricants
de matériel, l'innovation technologique peut toujours rééquilibrer les dynamiques de pouvoir
prévalentes. La preuve de travail peut paraître énormément « gaspilleuse » au premier abord, mais
elle fournit un mécanisme uniquement sans confiance pour parvenir à un consensus décentralisé dans
un réseau ouvert et pseudonyme. D'autres mécanismes de consensus peuvent paraître moins
« gaspilleurs » à première vue mais ont leurs propres inconvénients qui peuvent ne pas toujours être
immédiatement apparents. En fin de compte, une comparaison entre différents mécanismes de consensus
est difficile à établir car elle nécessite une évaluation des propriétés du réseau dans le contexte
de l'utilité prévue, définie par la communauté et les utilisateurs respectifs de chaque réseau.

Il n'est pas inouï que des réseaux passent à un algorithme de consensus différent après le
lancement. Les complexités techniques et opérationnelles associées à une telle transition en font
cependant une entreprise difficile. Comment un réseau décentralisé peut-il coordonner une mise à
jour critique du système en l'absence d'une autorité centrale, mettant potentiellement en risque des
milliards de dollars de fonds d'utilisateurs ? Comment cette transition impacterait-elle les
incitations du réseau, et par conséquent affecterait la sécurité et les propriétés du réseau ? Ces
questions sont certainement parmi les raisons pour lesquelles il a fallu à Ethereum, le deuxième
plus grand réseau de cryptomonnaies et de blockchain publique, des années pour effectuer la
transition vers un mécanisme basé sur le consensus de preuve d'enjeu.

### Implications environnementales

#### Quel est le lien entre la consommation d'électricité et les émissions de carbone ?

Il est essentiel de distinguer entre la consommation d'électricité et l'empreinte environnementale.
Le premier concerne la quantité totale d'électricité utilisée par le processus de minage de Bitcoin.
Le dernier concerne les implications environnementales du minage de Bitcoin. Ce qui importe
finalement pour l'environnement n'est pas le niveau de consommation d'électricité en soi, mais
l'**intensité carbone des sources d'énergie** utilisées pour générer cette électricité.

Par exemple, un kilowatt-heure (kWh) d'électricité généré par une centrale au charbon a une
empreinte environnementale substantiellement pire qu'un kWh d'électricité produit par un parc
éolien. En conséquence, une demande d'énergie en hausse (ou en baisse) ne conduit pas
automatiquement à une augmentation (ou diminution) proportionnelle des émissions de dioxyde de
carbone et d'autres gaz à effet de serre.

#### Quelles sources d'énergie les mineurs Bitcoin utilisent-ils ?

Les mineurs Bitcoin se trouvent partout dans le monde, et utilisent par conséquent une **large
variété de sources d'énergie**. Notre enquête industrielle de 2020 a révélé que l'énergie
hydroélectrique, le charbon et le gaz naturel dominaient, mais que les mineurs utilisaient également
du pétrole, de l'énergie nucléaire et des énergies renouvelables (éolienne, solaire et géothermique)
dans leur mix énergétique.

Les mineurs peuvent recevoir de l'électricité du réseau local, qui est souvent alimenté par une
composition variable de sources d'énergie. Les mineurs peuvent également être directement connectés
à des centrales électriques locales (*minage hors réseau*), qui sont généralement alimentées par une
seule source d'énergie.

#### Quelle est la durabilité du mix énergétique de Bitcoin ?

Bien que les divulgations de sources d'énergie deviennent plus courantes parmi les installations de
hachage, le mix énergétique exact de l'industrie minière de Bitcoin reste inconnu. Plusieurs études
ont montré qu'une part croissante de la consommation totale d'électricité provient de sources
d'énergie renouvelables telles que l'hydroélectricité, le solaire ou l'éolien. Cependant, les
estimations divergent considérablement, allant d'environ 20 % à 30 % du mix énergétique total à plus
de 70 %.

Une explication possible de ces divergences – outre les différences méthodologiques – peut être
trouvée dans la nature dynamique du minage de Bitcoin, qui fait fluctuer le mix énergétique tout au
long de l'année. Grâce à la mobilité relative de l'équipement de minage, les installations de
hachage peuvent être installées en un temps comparativement court ailleurs. Cela a conduit certains
mineurs à favoriser des contrats d'électricité hors réseau avec des centrales électriques dans des
zones reculées pour lesquelles peu ou pas de données sont disponibles. De plus, des migrations
saisonnières entre régions avec des profils énergétiques différents ont été observées dans certains
pays ; notamment en Chine où les mineurs ont afflué de la province du Nord riche en charbon du
Xinjiang à la province du Sud-Ouest du Sichuan pour bénéficier d'une énergie hydroélectrique
excédentaire bon marché pendant la saison de la mousson.

Les estimations qui manquent d'une dimension temporelle sont incapables de capturer ces subtilités.
Tout ce qu'elles peuvent fournir est un aperçu partiel basé sur un seul instantané à un moment
spécifique. Puisque le mix énergétique de Bitcoin n'est pas statique, une évaluation
environnementale appropriée du minage de Bitcoin nécessite un suivi et une analyse continus. Alors
que le marché minier subit des changements significatifs suite à la répression du gouvernement
chinois en juin 2021, plus de recherche et de données sont nécessaires pour évaluer comment la
redistribution mondiale du hashrate affecte le mix énergétique et l'intensité carbone du réseau.
Notre équipe explore actuellement le développement d'un modèle d'émissions de carbone qui, basé sur
des données géolocalisées dynamiques de la carte minière, tente de suivre l'empreinte
environnementale de Bitcoin au fil du temps.

#### Le minage de Bitcoin est-il un désastre environnemental ?

Cette question a sans aucun doute suscité beaucoup de débats passionnés depuis que Bitcoin est passé
sous le scrutin public pour son énorme consommation d'énergie comparable à celle de nations
entières. Le mix énergétique joue un rôle vital pour trouver une réponse concluante à cette
question. Jusqu'à ce que des données supplémentaires et meilleures sur le mix énergétique du réseau
deviennent disponibles, les assertions fortes de part et d'autre du débat doivent être considérées
avec prudence.

Une **expérience de pensée radicale** peut fournir une perspective alternative sur cette question.
Quelle serait l'empreinte environnementale de Bitcoin en supposant le pire des cas absolu ? Pour
cette expérience, utilisons l'estimation de consommation d'énergie annualisée du CBECI au 13 juillet
2021, qui correspond à environ 70 TWh. Supposons également que toute cette énergie provient
exclusivement du charbon (le combustible fossile le plus polluant) et est générée dans l'une des
centrales au charbon les moins efficaces du monde (la centrale Hazelwood maintenant déclassée à
Victoria, Australie). Dans ce scénario du pire des cas, le réseau Bitcoin serait responsable
d'environ 111 Mt (millions de tonnes métriques) d'émissions de dioxyde de carbone, représentant
environ 0,35 % des émissions annuelles totales mondiales.

Il convient de noter que ce calcul n'inclut pas l'empreinte carbone de toute la chaîne
d'approvisionnement du matériel de la production à la livraison, ni les déchets électroniques
générés par l'élimination des anciens modèles.

#### Les mineurs Bitcoin recherchent-ils des sources d'énergie renouvelables ?

Les mineurs sont des acteurs économiques qui veulent maximiser leurs profits. En tant que « nomades
énergétiques », ils recherchent une **énergie bon marché et stable** indépendamment de l'emplacement
ou de la source d'énergie sous-jacente. Cela tend à se chevaucher dans certaines régions avec
certaines sources d'énergie renouvelables où la capacité excédentaire saisonnière ne peut être
absorbée, conduisant à des tarifs d'électricité attractifs non égalés ailleurs. Un exemple est la
migration enregistrée des mineurs chinois vers des provinces du Sud-Ouest où l'énergie
hydroélectrique est abondante – et donc très bon marché – en été. Cependant, lorsque les prix de
l'électricité augmentent en raison de la baisse des niveaux d'eau, ces mineurs se déplacent vers le
Nord vers des régions alimentées au charbon comme le Xinjiang qui offrent maintenant de meilleurs
tarifs.

Les discussions intensifiées autour de la durabilité de Bitcoin sont susceptibles de causer un
changement de mentalité, cependant. L'accent institutionnel croissant sur les considérations ESG
(*Environnementales, Sociales et de Gouvernance*) a déjà conduit certaines sociétés minières cotées
en bourse à incorporer activement des objectifs de durabilité dans leur modèle d'affaires. À
l'avenir, la poursuite d'une stratégie d'émissions « nettes zéro » pourrait bien se transformer en
avantage concurrentiel alors que le monde se dirige vers la décarbonisation. Dans tous les cas, les
opérations continueront d'être dictées par des principes économiques plutôt qu'idéologiques ou
environnementaux.

#### Le minage de Bitcoin incite-t-il le déploiement de production d'énergie renouvelable ?

Certains ont suggéré que les mineurs Bitcoin pourraient aider à stabiliser les réseaux électriques
qui luttent avec la nature intermittente des énergies renouvelables. Pendant les périodes de
génération abondante, les mineurs peuvent absorber la capacité excédentaire que le réseau ne
pourrait pas gérer autrement. À leur tour, ils arrêtent leurs opérations sur demande lorsque le
réseau manque. En conséquence, les réseaux pourraient gérer la charge plus efficacement, ce qui
devrait inciter le déploiement de capacité de production d'énergie supplémentaire basée sur les
énergies renouvelables.

Cependant, le même argument peut également être fait pour la génération basée sur le carbone : en
créant une nouvelle demande d'énergie stable et abondante – que les énergies renouvelables ne
peuvent pas facilement fournir seules, les mineurs prolongent la durée de vie économique des
anciennes centrales qui fonctionnent avec des combustibles fossiles tels que le charbon ou le gaz
naturel. Dans certaines régions, cela a déjà conduit à la réinstallation de centrales qui avaient
été déclassées par manque de rentabilité.

#### Existe-t-il des initiatives pour rendre Bitcoin plus vert ?

Plus récemment, un certain nombre d'initiatives formées privément ont émergé dans l'écosystème
Bitcoin pour répondre aux préoccupations croissantes en matière de durabilité. Certaines se
concentrent sur l'apport de plus de transparence à l'industrie minière grâce à de nouvelles données
et perspectives. D'autres introduisent des engagements pour que les membres miniers se décarbonisent
activement d'ici une date future. De nombreuses entreprises minières cotées en bourse ont déjà agi
en pionnières en divulguant des informations sur les installations, les mix énergétiques et les
efforts de durabilité. Certaines entreprises Bitcoin non minières telles que les gestionnaires
d'actifs et les plateformes d'échange ont déjà commencé à compenser leurs émissions via des crédits
carbone. Ces efforts combinés ont conduit à une conscience environnementale plus large au sein de
l'industrie, poussant les entreprises minières à examiner leurs stratégies d'approvisionnement
énergétique plus attentivement et à prendre des mesures pour réduire leur empreinte carbone.

La plus grande poussée pour la décarbonisation peut, cependant, finalement venir du côté des
investisseurs. Les investisseurs institutionnels et les fournisseurs de services sont de plus en
plus liés par des règles et exigences ESG strictes. Cela soulève des questions sur le fait de savoir
si Bitcoin peut être considéré comme un investissement conforme, ce qui détermine les flux futurs de
fonds dans l'écosystème. Certains ont suggéré que ces considérations représentent une menace
potentiellement existentielle pour les mineurs, créant ainsi une incitation financière naturelle
pour l'industrie à se décarboniser activement. D'autres doutent de l'efficacité d'une approche
purement axée sur le marché et appellent à des réponses politiques supplémentaires.

#### Notre travail sur les émissions de gaz à effet de serre a-t-il été examiné par des pairs ?

La méthodologie de notre recherche sur les émissions de gaz à effet de serre liées au Bitcoin a été
examinée par des experts en la matière. Nous aimerions profiter de cette occasion pour remercier
Ulrich Gallersdörfer (Université technique de Munich) et Lena Klaaßen (ETH Zurich) du Crypto Carbon
Ratings Institute, le professeur Andreas Park (Université de Toronto), Ingolf Anton Gunnar Pernice
(Institut Weizenbaum) et Michael Dowling (DCU Business School) d'avoir examiné notre travail et
fourni des commentaires vitaux. De plus, nous aimerions également remercier tous ceux qui ont fourni
des commentaires pendant le développement de notre travail et nous ont aidés à affiner notre
méthodologie. En particulier, Thomas Eisermann, Jonathan Koomey et George Kamiya, mais aussi tous
ceux qui ont partagé leurs réflexions sur notre travail lors d'innombrables conversations.

## Ethereum

### Les bases sur Ethereum

#### Qu'est-ce qu'Ethereum ?

**Ethereum** est un protocole logiciel ouvert et un réseau pair-à-pair (P2P) qui permet aux
utilisateurs de faire des transactions en ligne sans s'appuyer sur des intermédiaires de confiance.
Le système fonctionne sans autorité centrale, ce qui en fait une plateforme sans permission qui
permet à quiconque dans le monde d'envoyer, stocker et recevoir des jetons numériques de valeur sans
besoin d'approbation préalable.

Le jeton natif d'Ethereum s'appelle ether, ou ETH en abrégé, et est utilisé lors de l'interaction
avec le réseau. Ce qui distingue Ethereum des autres réseaux blockchain, tels que Bitcoin, est son
langage Turing-complet, qui permet des contrats intelligents complexes qui ont permis des cas
d'usage prometteurs, y compris les applications décentralisées (dApps), la finance décentralisée
(DeFi) et les organisations autonomes décentralisées (DAO).

Le 15 septembre 2022, Ethereum a subi un changement significatif en effectuant la transition d'un
mécanisme de consensus basé sur la preuve de travail à la preuve d'enjeu. Ce mouvement sans
précédent a drastiquement réduit la consommation d'énergie du réseau car le processus
informatiquement intensif de la preuve de travail a été remplacé par la fourniture de ressources
financières comme garantie (appelé staking). Cette transition a marqué la première étape du plan
ambitieux multi-étapes d'Ethereum pour améliorer progressivement les capacités du réseau.

#### Qu'est-ce que la blockchain Ethereum ?

La blockchain Ethereum est un registre public décentralisé qui enregistre toutes les transactions
sur le réseau Ethereum. Elle sert de base de données partagée, collectivement maintenue par des
milliers d'ordinateurs appelés nœuds. Cette technologie de registre distribué permet la
transparence, la sécurité et l'immuabilité dans l'enregistrement des transactions.

Au fil du temps, l'enregistrement des transactions résulte en une chaîne croissante de blocs qui est
étendue par des acteurs spéciaux appelés validateurs, qui ajoutent de nouveaux blocs en anticipation
de récompenses financières. L'utilisation de cette structure de données spécifique garantit que
toute tentative de falsifier l'historique des transactions est immédiatement détectée par les autres
participants du réseau, car toute modification d'une transaction précédente entraînerait une chaîne
de hachages de blocs non correspondants.

#### Qu'est-ce que les contrats intelligents ?

Les contrats intelligents sont des programmes auto-exécutants qui fonctionnent sur, par exemple, les
blockchains compatibles EVM. Ils sont écrits dans un langage de programmation de haut niveau appelé
Solidity, et sont utilisés pour automatiser l'exécution de transactions et l'échange d'actifs sur la
blockchain. Les contrats intelligents sont conçus pour être autonomes et auto-gouvernés, ce qui
signifie qu'une fois qu'ils sont déployés sur la blockchain, ils peuvent être exécutés
automatiquement sans besoin d'intermédiaires ou de validateurs tiers. Ils sont également
transparents et infalsifiables, ce qui signifie que leur code et leur historique d'exécution sont
publiquement visibles et immuables.

L'une des fonctionnalités clés des contrats intelligents Ethereum est leur capacité à faciliter la
création et l'échange de jetons personnalisés, ou « jetons ERC-20 », sur le réseau Ethereum. Ces
jetons peuvent représenter n'importe quel type d'actif ou de valeur, et peuvent être utilisés à
diverses fins, telles que la collecte de fonds, l'incitation des utilisateurs ou la fourniture
d'accès à des services. Les contrats intelligents peuvent également être utilisés pour créer des
applications plus complexes, telles que des protocoles de finance décentralisée (DeFi), qui
permettent le prêt, l'emprunt et le trading d'actifs numériques de pair à pair sans besoin
d'intermédiaires centralisés. D'autres exemples incluent les marchés de prédiction, les systèmes de
vote et les solutions de gestion de la chaîne d'approvisionnement.

Cependant, il est important de noter que bien qu'ils soient conçus pour être sécurisés et fiables,
ils ne sont pas infaillibles et peuvent encore être vulnérables aux bugs et aux exploits de sécurité
s'ils ne sont pas écrits et déployés correctement.

#### Qu'est-ce que la Machine Virtuelle Ethereum (EVM) ?

La Machine Virtuelle Ethereum (EVM) est un composant clé de la blockchain Ethereum. C'est une
plateforme logicielle qui exécute des contrats intelligents écrits dans le langage de programmation
Solidity. L'EVM est responsable de l'exécution du code, de la gestion de l'état et du traitement des
transactions sur la blockchain Ethereum.

L'EVM est une machine virtuelle Turing-complète, mais souvent appelée quasi-Turing-complète, car une
limite de gaz est utilisée pour restreindre la quantité de ressources de calcul qu'une seule
transaction peut consommer sur le réseau. Cela signifie que les contrats intelligents peuvent
effectuer n'importe quel calcul possible sur une machine de Turing universelle, mais qu'il y a une
limite à la quantité de calcul qu'un contrat peut effectuer dans une seule transaction. Le gaz est
l'unité de compte utilisée pour mesurer les ressources de calcul nécessaires pour exécuter un
contrat. Les utilisateurs doivent payer pour le gaz pour exécuter des contrats, et le coût du gaz
varie en fonction de la complexité du contrat et de la demande de ressources de calcul sur le
réseau.

L'EVM est un outil puissant pour développer des applications décentralisées et a permis la création
d'une large gamme de projets innovants sur la blockchain Ethereum, de la finance décentralisée
(DeFi) aux jetons non fongibles (NFT). Sa flexibilité et sa sécurité en font une plateforme
populaire pour les développeurs intéressés par la construction d'applications décentralisées qui
peuvent être exécutées sur un réseau mondial sans s'appuyer sur des intermédiaires centralisés.

#### Qu'est-ce que les frais de gaz dans Ethereum ?

Le gaz est un concept fondamental dans la blockchain Ethereum qui joue un rôle critique dans la
gestion de l'exécution des contrats intelligents et des transactions sur le réseau. Lorsqu'un
utilisateur soumet une transaction au réseau Ethereum, il doit payer des frais sous forme d'ether
(la cryptomonnaie utilisée dans Ethereum) pour inciter les validateurs à traiter la transaction. Ces
frais sont connus sous le nom de « frais de gaz » et sont calculés en multipliant le prix du gaz par
les unités de gaz nécessaires pour exécuter la transaction. Le prix du gaz est le montant d'ether
que l'utilisateur est prêt à payer pour chaque unité de gaz utilisée pendant l'exécution de la
transaction. La limite de gaz, d'autre part, spécifie le nombre maximum d'unités de gaz qu'un
utilisateur est prêt à payer pour la transaction. Si une transaction utilise toutes les unités de
gaz spécifiées dans la limite pendant l'exécution, elle sera automatiquement annulée, et tous les
changements apportés à l'état du système seront rejetés. Le but de la limite de gaz est d'empêcher
les contrats intelligents mal écrits ou malveillants de consommer trop de ressources sur le réseau,
ce qui pourrait conduire à une congestion du réseau et à des ralentissements.

L'EIP-1559, qui a été mis en œuvre en août 2021, a introduit un changement significatif dans la
façon dont les prix du gaz sont calculés sur le réseau Ethereum. Avant la mise à niveau, les
utilisateurs devaient définir manuellement le prix du gaz pour leurs transactions en fonction des
conditions du marché et de leur vitesse de transaction souhaitée. Cependant, la mise à niveau de
Londres a introduit un nouveau mécanisme de tarification connu sous le nom de « marché des frais
EIP-1559 » qui vise à simplifier et optimiser les calculs de prix du gaz. Ce nouveau mécanisme de
tarification introduit un nouveau modèle de frais de transaction qui comprend deux composants : des
frais de base et un pourboire. Les frais de base sont un prix calculé dynamiquement qui reflète le
niveau actuel de congestion du réseau. Les frais de base sont brûlés (c'est-à-dire détruits) lorsque
la transaction est traitée, réduisant effectivement l'offre d'Ethereum et créant une pression
déflationniste. Le pourboire, d'autre part, est un montant optionnel que l'expéditeur peut ajouter
aux frais de base pour inciter les validateurs à prioriser leur transaction. Le pourboire n'est pas
brûlé et est payé directement au validateur qui inclut la transaction dans un bloc.

#### Qu'est-ce qu'un jeton ERC-20 ?

Le standard ERC-20 est un ensemble de règles et d'exigences pour créer un jeton sur la blockchain
Ethereum. ERC signifie « Ethereum for Comment » et a été introduit en 2015 pour fournir un cadre
commun pour les jetons basés sur Ethereum afin d'assurer l'interopérabilité et la compatibilité avec
l'infrastructure Ethereum existante. ERC-20 définit un ensemble de fonctions qu'un contrat
intelligent doit implémenter pour être considéré comme un jeton ERC-20. Ces fonctions incluent le
transfert de jetons, l'interrogation du solde d'un compte spécifique et l'approbation du transfert
de jetons au nom d'un autre compte.

L'un des principaux avantages du standard ERC-20 est son interopérabilité avec d'autres contrats
intelligents et plateformes. Cela signifie que les jetons construits en utilisant le standard ERC-20
peuvent être utilisés et échangés sur une large gamme d'échanges décentralisés (DEX), de
portefeuilles et d'autres services basés sur la blockchain sans nécessiter de travail d'intégration
supplémentaire. Les jetons ERC-20 sont également entièrement compatibles avec les autres protocoles
standards d'Ethereum, tels qu'ERC-721 pour les jetons non fongibles (NFT), permettant aux
développeurs de créer facilement des actifs numériques uniques au-dessus de la blockchain Ethereum.

Dans l'ensemble, le standard ERC-20 a joué un rôle crucial dans la croissance de l'écosystème
Ethereum, permettant la création d'une gamme diversifiée de jetons et facilitant l'adoption de la
technologie blockchain dans diverses industries.

#### Qu'est-ce qu'un NFT ?

Un jeton non fongible (NFT) est un identifiant numérique unique qui ne peut être copié, substitué ou
subdivisé. Il est enregistré sur une blockchain et utilisé pour certifier la propriété et
l'authenticité. La propriété d'un NFT est documentée dans la blockchain, permettant la vente et
l'échange de NFT. Avec des compétences de codage minimales ou nulles requises, les NFT peuvent être
créés par n'importe qui et englobent généralement des références à des fichiers numériques tels que
des photographies, des vidéos et de l'audio. En tant qu'actifs uniquement identifiables, les NFT
diffèrent des cryptomonnaies, qui sont fongibles.

Les NFT ont gagné en popularité ces dernières années pour représenter une grande variété d'actifs
numériques, y compris l'art, la musique et les objets de collection. Ils ont également facilité le
développement de nouvelles formes de contenu numérique, telles que les mondes virtuels et les jeux.

Les aspects techniques des NFT sont soutenus par la technologie blockchain, une base de données
distribuée assurant des transactions sécurisées, transparentes et infalsifiables. Les NFT sont
générés en utilisant des contrats intelligents, qui sont des accords auto-exécutants stockés sur la
blockchain. Lors de la création d'un NFT, le contrat intelligent attribue un identifiant unique et
enregistre sa propriété dans la blockchain.

Les NFT ont de nombreuses applications bien connues, telles que la représentation d'art numérique,
de musique et d'objets de collection, ainsi que la facilitation du développement de nouvelles formes
de contenu numérique comme les mondes virtuels et les jeux. De plus, ils sont employés pour désigner
des actifs physiques, y compris l'immobilier et les automobiles.

En tant que technologie émergente, les NFT sont accompagnés de plusieurs défis juridiques
contemporains. Une préoccupation principale est la propriété ; bien que le contrat intelligent
attribue un identifiant unique et enregistre la propriété sur la blockchain, la propriété du droit
d'auteur de l'actif sous-jacent représenté par le NFT reste ambiguë. La propriété intellectuelle est
une autre question ; bien que le contrat intelligent accorde généralement une licence au créateur du
NFT, l'application de cette licence et son interaction avec d'autres lois sur la propriété
intellectuelle sont souvent peu claires.

Malgré ces défis, les NFT ont le potentiel de révolutionner la façon dont les actifs numériques sont
perçus et gérés. Ils peuvent faciliter un moyen plus sécurisé, transparent et efficace d'échanger et
de gérer des actifs numériques tout en favorisant la création de nouvelles formes de contenu
numérique et la représentation d'actifs physiques.

### Application décentralisées

#### Qu'est-ce que les applications décentralisées ?

Les applications décentralisées (dApps) sont des applications numériques qui sont déployées sur des
réseaux blockchain en utilisant des contrats intelligents. Elles sont open-source et fonctionnent
sans autorité centrale, ce qui signifie qu'aucun individu ou entreprise n'a de contrôle sur elles.
Au lieu de cela, les dApps sont contrôlées par la logique écrite dans le contrat. Pour utiliser une
dApp, les utilisateurs doivent interagir avec le contrat intelligent qui régit son comportement.
Cela permet une communication anonyme et l'exécution de transactions entre les utilisateurs. Les
principaux avantages de l'utilisation de dApps sont une sécurité accrue, la transparence et la
résistance à la censure. De plus, les dApps fournissent un meilleur contrôle sur les données et les
actifs des utilisateurs et permettent une gouvernance et une prise de décision décentralisées.

L'un des réseaux blockchain les plus populaires pour déployer des dApps est Ethereum. Des exemples
de dApps sur Ethereum incluent les échanges décentralisés (DEX), les organisations autonomes
décentralisées (DAO) et les marchés de jetons non fongibles (NFT). Les DEX permettent le trading de
cryptomonnaies de pair à pair sans intermédiaires. Les DAO permettent une prise de décision
décentralisée, et les marchés NFT facilitent l'échange d'actifs numériques uniques.

#### Qu'est-ce que la DeFi ?

La Finance Décentralisée (DeFi) est un système financier émergent construit sur Ethereum et des
blockchains similaires, permettant la création d'applications et de services financiers ouverts,
transparents et accessibles. La DeFi est alimentée par des contrats intelligents, qui sous-tendent
une gamme de nouveaux instruments financiers, y compris les prêts, les stablecoins, et plus encore.
Ces instruments sont construits et gérés sur des réseaux comme Ethereum, sans intermédiaires,
résultant en des services plus rapides, plus sûrs et plus accessibles par rapport aux services
financiers traditionnels. Les plateformes DeFi fournissent divers services financiers, tels que le
prêt, l'emprunt, le trading et l'assurance, à quiconque ayant une connexion Internet et sans
nécessiter d'informations personnelles.

L'écosystème DeFi connaît une croissance rapide, avec de nouvelles applications et services étant
développés et déployés régulièrement. Ces innovations repoussent les limites de la finance et
offrent des opportunités de participation au système financier mondial auparavant indisponibles.

Malgré son potentiel de révolutionner l'industrie financière en rendant les services plus
accessibles et abordables, la DeFi fait face à plusieurs défis, notamment la sécurité, la
réglementation et l'évolutivité. La sécurité reste une préoccupation importante, car les plateformes
DeFi sont fréquemment piratées, entraînant la perte de millions de dollars en cryptomonnaie pour les
utilisateurs.

La réglementation est un autre défi auquel fait face la DeFi. L'Autorité de conduite financière
(FCA) au Royaume-Uni a averti que la DeFi est un investissement à haut risque, et la Securities and
Exchange Commission (SEC) des États-Unis a indiqué que les règles de sécurité existantes pourraient
également s'appliquer à la DeFi. De plus, l'évolutivité est une préoccupation, car les plateformes
DeFi sont souvent lentes et inefficaces, rendant difficile la gestion de grands volumes de
transactions.

Néanmoins, la DeFi a le potentiel de révolutionner l'industrie financière. Des millions de personnes
dans le monde utilisent déjà des plateformes DeFi, et l'industrie continue de croître rapidement. À
mesure que ces plateformes deviennent plus sécurisées et réglementées, leur popularité devrait
encore augmenter.

Les applications DeFi notables incluent :

* Prêt : Les plateformes DeFi permettent aux utilisateurs de prêter et d'emprunter de l'argent sans
  banques ou autres institutions financières.
* Emprunt : Les plateformes DeFi facilitent l'emprunt d'argent sans impliquer les banques ou autres
  institutions financières.
* Trading : Les plateformes DeFi permettent aux utilisateurs d'échanger des cryptomonnaies et
  d'autres actifs.
* Assurance : Les plateformes DeFi permettent aux utilisateurs d'acheter une assurance contre les
  pertes.

Les défis juridiques contemporains auxquels fait face la DeFi sont :

* Réglementation : Les plateformes DeFi manquent souvent de réglementation, n'offrant aucune
  garantie de protection des utilisateurs en cas de problèmes.
* Sécurité : Les plateformes DeFi sont susceptibles d'être piratées, entraînant la perte de
  quantités importantes de cryptomonnaie pour les utilisateurs.
* Évolutivité : Les plateformes DeFi peuvent être lentes et inefficaces selon les capacités de
  traitement des transactions de la blockchain sous-jacente.

### The Merge

#### The Merge en bref

La communauté Ethereum a déjà discuté de la possibilité de passer à un mécanisme basé sur le
consensus PoS dès 2014. Pourtant, ce n'est que de nombreuses années plus tard, le 15 septembre 2022,
qu'Ethereum a réussi à subir cette transition – The Merge – qui a fondamentalement modifié
l'architecture du réseau. Avant que The Merge ne soit mis en œuvre avec succès, la couche de
consensus (Beacon Chain) et la couche d'exécution fonctionnaient en parallèle, avec la seule
communication entre ces deux chaînes concernant les entrées sur le contrat intelligent de staking
Ethereum sur la couche d'exécution afin que ces fonds puissent être répliqués sur la Beacon Chain,
mais les deux blockchains ayant toujours leur propre façon d'atteindre le consensus.

Alors que dans le réseau PoW les participants qui proposaient des blocs devaient démontrer une
preuve infalsifiable que des ressources de calcul avaient été dépensées, dans PoS une telle exigence
n'existe pas. Au lieu de cela, Ethereum exige que les participants du réseau qui s'engagent à
proposer de nouveaux blocs et à fournir des attestations (appelés validateurs) mettent en gage 32
ETH comme garantie. Si un validateur se comporte de manière négligente ou malveillante, sciemment ou
inconsciemment, il ne sera pas rémunéré par le réseau ou, dans les cas plus graves, une pénalité
financière (connue sous le nom de « slashing ») sera imposée sur eux, et leur mise (garantie mise en
gage) sera réduite en conséquence.

Après The Merge, la couche d'exécution est toujours responsable de l'exécution des transactions et
des contrats intelligents et du maintien de l'état actuel du réseau. Cela se fait via la Machine
Virtuelle Ethereum (EVM), un environnement sandbox qui exécute du code de manière décentralisée à
travers le réseau. D'autre part, la couche de consensus est maintenant responsable de l'accord des
validateurs sur l'état actuel de la blockchain et de la distribution des récompenses pour les
services réseau rendus (tels que la proposition ou l'attestation de blocs) en conséquence. Les deux
communiquent via l'API du moteur pour obtenir des informations sur les changements d'état et
ensemble permettent l'exécution décentralisée des transactions et des contrats intelligents, ainsi
que le maintien d'un registre distribué sécurisé et sans confiance.

Notamment, il existe une idée fausse courante à propos de The Merge. À savoir, qu'il conduirait à
moins de congestion du réseau et à des frais de transaction plus bas. Ce n'est pas le cas. La
capacité de traitement des transactions post-fusion d'Ethereum n'augmente que légèrement. Cependant,
cela marque l'achèvement d'une étape importante de la feuille de route d'Ethereum ; la dernière
version mise à jour de la feuille de route a été partagée dans un
[tweet](https://x.com/VitalikButerin/status/1588669782471368704) par Vitalik Buterin. La prochaine
étape – The Surge – vise à résoudre le problème d'évolutivité et à augmenter significativement le
débit des transactions en introduisant le sharding et en combinant les solutions de traitement de
données de couche 1 avec les technologies de couche 2 comme les rollups. La mise à jour sera
déployée par étapes pour atteindre une capacité de traitement allant jusqu'à 100 000 transactions
par seconde, visant à réduire la congestion du réseau et à réduire les frais de transaction.

#### « The Merge » a-t-il augmenté la capacité de traitement des transactions d'Ethereum ?

Bien que « The Merge » ait été une étape cruciale vers l'évolutivité à long terme d'Ethereum, il n'a
pas augmenté significativement le débit des transactions en soi. Compte tenu d'une petite réduction
du temps de bloc, d'une moyenne d'environ 13 secondes avant The Merge à 12 secondes après The Merge,
le débit n'a augmenté que légèrement.

Le sharding, qui devrait être déployé en 2023 dans le cadre de « The Surge », est conçu pour
améliorer l'évolutivité d'Ethereum en permettant au réseau de traiter plus de transactions
simultanément. Avec le sharding, la blockchain Ethereum sera divisée en partitions plus petites ou
shards, chacune avec son propre ensemble de validateurs. Cela permettra au réseau de gérer un nombre
significativement plus élevé de TPS (transactions par seconde).

Cependant, il est important de noter que le sharding est une entreprise complexe et difficile, et le
débit réel qui peut être atteint est incertain. De plus, le sharding seul pourrait ne pas être
suffisant pour atteindre les objectifs d'évolutivité à long terme d'Ethereum. Les solutions
d'évolutivité de couche 2 seront également essentielles pour atteindre un débit élevé. Lorsqu'elles
sont utilisées en combinaison avec le sharding, on estime que le potentiel d'Ethereum pourrait même
dépasser 100 000 TPS.
