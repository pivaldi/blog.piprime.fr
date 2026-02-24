---
title: "DAO, reseaux sociaux décentralisés et identité numérique décentralisées."
date: 2025-11-18 18:35:40
id: dao_reseaux-sociaux-decentralises_identite-numerique-decentralisee
tree_view: true
lang: fr
description: "Explorer l'identité auto-souveraine, comprendre le service de noms Ethereum, les sites Web décentralisés et explorer les études de cas DAO."
categories:
- [FR, Tech, Cryptographie, DAO]
- [FR, Tech, Cryptographie, WEB3]
tags:
- cryptographie
- hasard
- distribué
- décentralisé
- ethereum
- "identité numérique"
---

<picture>
<img alt="Autonomous Organization (DAO)" src="/media/dao_reseaux-sociaux-decentralises_identite-numerique-decentralisee/dao.webp">
<figcaption>
<span><a href="https://builtin.com/blockchain/decentralized-autonomous-organization">Source builtin.com/</a>.</span>
</figcaption>
</picture>

---

{% note %}
Ceci est le résumé d'un cours du MOOC
[Mastering Web3](https://www.unic.ac.cy/mastering-web3-unic-s-brand-new-free-mooc-offering-a-blockchain-verifiable-certificate/)
suivi à l'[Université de Nicosia](https://www.unic.ac.cy/).
{% endnote %}

## Identité numérique souveraine (SSI)

### Qu'est-ce qu'une identité numérique souveraine

* SSI offre aux individus un contrôle total sur leur identité numérique sans recourir à des
  autorités tierces.
* SSI est souvent utilisé de manière interchangeable avec l'identité décentralisée, permettant aux
  utilisateurs de gérer eux-mêmes leur identité numérique grâce à des technologies décentralisées.
* Une identité numérique correspond à toute donnée en ligne pouvant être liée à un individu ou à une
  organisation (par exemple, mots de passe, noms d'utilisateur, comptes bancaires, profils de
  réseaux sociaux, etc.).
* Le parcours du SSI a commencé avec le concept de « [Web of Trust](https://fr.wikipedia.org/wiki/Toile_de_confiance) » introduit par PGP dans les années 1990, qui décentralisait la confiance grâce à la validation par les pairs.  
  En 1996, [l’article](https://www.usenix.org/conference/6th-usenix-security-symposium/establishing-identity-without-certification-authorities)
  de [Carl Ellison](https://www.linkedin.com/in/carl-ellison-a458646) proposait de vérifier
  l’identité sans les autorités de certification traditionnelles.  
  Enfin, l’essor de la technologie blockchain dans les années 2000 a fourni l’infrastructure
  décentralisée qui a permis au SSI de devenir une solution pratique et sécurisée pour l’identité
  numérique.

### Identité centralisée vs. décentralisée

| Aspect | Centralized Identity | Decentralized Identity |
|--------|----------------------|------------------------|
| Contrôle | Contrôlé par une autorité centrale (par exemple, un gouvernement, une entreprise). | Les personnes ont un contrôle total sur leur propre identité. |
| Stockage des données | Les données sont stockées sur des serveurs centralisés, appartenant aux organisations. | Les données sont stockées d'une façon décentralisée. |
| Securité | Risque de violations, de piratage et d'utilisation abusive des données personnelles. | Sécurité renforcée grâce à la cryptographie et au stockage décentralisé. |
| Confidentialité | Les données des utilisateurs peuvent être consultées et partagées par des entités centralisées. | Bon dans l'ensemble, dépendant de la chaîne racine pour la résolution des litiges. |
| Possession | L'entité détentrice de l'identité est propriétaire des données. | Les individus possèdent et gèrent leur identité et leurs données. |
| Accessibilité | Les utilisateurs accèdent aux systèmes via des comptes gérés par les autorités centrales. | Les utilisateurs accèdent directement aux systèmes, avec une autorisation accordée à leur discrétion. |
| Confiance | La confiance est placée dans l’autorité centrale. | La confiance est distribuée et vérifiée cryptographiquement. |
| Interopérabilité | Limité, souvent cloisonné sur différentes plateformes. | Hautement interopérable sur toutes les plates-formes utilisant des protocoles standardisés. |
| Risque de perte de contrôle | Risque faible | Risque important |

### Les trois acteurs clés impliqués dans le SSI

1. **Le titulaire**  
* Le titulaire est la personne physique ou morale qui possède et contrôle son identité numérique.
* Ils gèrent leur identité avec des identifiants décentralisés (DID) et des informations
  d'identification vérifiables (VC), garantissant une identification sécurisée et privée.
* Le titulaire contrôle quelles données partager, avec qui, et peut révoquer l'accès à tout moment.
2. **L'émetteur**  
* L'émetteur signe numériquement les informations d'identification, garantissant ainsi
  l'authenticité pour la vérification par un tiers.
* L’émetteur est une entité de confiance qui crée et délivre des identifiants validant l’identité du titulaire.
* Les exemples incluent les gouvernements (cartes d’identité, passeports), les universités
  (diplômes) et les entreprises (vérification de l’emploi).
3. **Le vérificateur**  
* Le vérificateur vérifie l’authenticité des identifiants du titulaire.
* Il peut s'agir d'une banque, d'un employeur ou d'un organisme gouvernemental exigeant une preuve
  d'identité pour les services.
* Le vérificateur ne stocke pas les données d'identité mais valide les informations d'identification
  par une preuve cryptographique.

### Flux de données SSI entre ses participants

Le concept du triangle de confiance :
* Le triangle de confiance se compose de trois participants clés : le titulaire, l'émetteur et
  le vérificateur. Ils travaillent ensemble pour permettre une gestion sécurisée des identités.
* Ce cadre décentralisé permet aux utilisateurs de conserver le contrôle de leurs données tout en
  permettant aux émetteurs et aux vérificateurs de valider les informations d'identification de
  manière sécurisée et fiable.
* En tirant parti de la cryptographie, le système garantit l'intégrité, la confidentialité et la
  sécurité des données, réduisant considérablement les risques de violations et de fraude par
  rapport aux systèmes d'identité centralisés traditionnels.

<picture>
<a data-fancybox data-src="/media/dao_reseaux-sociaux-decentralises_identite-numerique-decentralisee/ssi.webp"" data-caption="Identité auto-souveraine et flux de données entre l'émetteur, le vérificateur et le titutaire.">
<img alt="Identité auto-souveraine et flux de données de l'émetteur au vérificateur" height="500" src="/media/dao_reseaux-sociaux-decentralises_identite-numerique-decentralisee/ssi_thumb.webp">
</a>
<figcaption>
<span>Flux de données entre l'émetteur, le vérificateur et le titutaire. <a href="https://www.adnovum.com/blog/self-sovereign-identity-ssi-switzerland">Source www.adnovum.com</a>.</span>
</figcaption>
</figure>

### Piliers clés du SSI

1. **Blockchain**  
   Elle fournit un registre décentralisé et inviolable garantissant l’intégrité des données et
   empêchant les modifications non autorisées des données d’identité.
2. **Identifiants décentralisés (DID)**  
   Les identifiants uniques basés sur la blockchain qui permettent des identités numériques
   autogérées, vérifiables et non liées.
3. **Informations d'identification vérifiables (VC)**  
   Informations d'identification cryptographiquement sécurisées et signées numériquement, émises par
   des autorités de confiance, qui peuvent être vérifiées sur la blockchain pour éviter la fraude.

Ces trois piliers fonctionnent ensemble pour créer un système d’identité sécurisé et décentralisé.
La blockchain garantit l'intégrité des données, les DID permettent aux utilisateurs de contrôler
leur identité et les VC permettent un partage d'informations d'identification sécurisé et vérifiable
sans risque de fraude. Session : DAO, médias sociaux décentralisés et identité numérique.

### Les bénéfices du SSI

* **Pour les particuliers**
  * **Propriété et contrôle**  
    Les individus peuvent contrôler entièrement leurs données personnelles sans dépendre d'autorités
    centralisées.
  * **Confidentialité et sécurité**  
    Les individus peuvent décider quelles données partager et avec qui, minimisant ainsi les risques
    de violations et d'utilisation abusive.
  * **Portabilité**  
    Les individus peuvent utiliser leur identité et leurs informations d’identification sur diverses
    plateformes et services.
* **Pour les organizations**  
  * **Efficacité**  
    Les organisations économisent du temps et des ressources en délivrant et en vérifiant
    efficacement les informations d’identification.
  * **Sécurité améliorée**  
    Les méthodes cryptographiques garantissent l’intégrité des données et réduisent la fraude à
    l’identité.
  * **Responsabilité réduite**  
    Moins de données utilisateur stockées de manière centralisée signifie moins de risques de
    violations, de poursuites ou d'amendes.
* **Pour les développeurs**  
  * **Expériences utilisateur améliorées**  
    Les développeurs créent des applications avec une authentification sans mot de passe pour une
    utilisation transparente.
  * **Accès direct aux données**  
    Les développeurs peuvent demander des données directement aux utilisateurs, en contournant les
    intermédiaires.
  * **Solutions décentralisées**  
    Créez des [dApps](/fr/comprendre-les-notions-de-smart-contracts-et-de-dapps) en tirant parti de SSI pour une vérification d'identité sécurisée.

### Les quatre phases de l'évolution de l'identité numérique

1. **Identité centralisée**  
   * Géré par une seule autorité (gouvernement, entreprise par exemple) sur laquelle les utilisateurs
     ont un contrôle limité.
   * Les systèmes courants sont les adresses e-mail, les pièces d’identité émises par le
    gouvernement.
   * Les risques de sécurité sont les bases de données centralisées sont vulnérables au piratage, aux
     violations de données et à la perte de contrôle des utilisateurs.
2. **Identité fédérée**  
   * L'identité est gérée par plusieurs autorités, mais on s'appuie toujours sur un fournisseur
     d'identité central (par exemple, Google, connexion Facebook).
   * Cela offre une certaine commodité, mais pose néanmoins des problèmes de confidentialité, car les
     données sont stockées dans des bases de données centralisées.
3. **Identité centrée sur l'utilisateur**  
   * Les utilisateurs ont plus de contrôle sur leurs données mais interagissent toujours avec des
     systèmes et des autorités centralisés pour gérer et authentifier leur identité.
4. **Identité auto-souveraine (SSI)**  
   * Une approche entièrement décentralisée où les individus gèrent leur identité sur la blockchain,
     leur donnant un contrôle total sur leurs données et la manière dont elles sont partagées.
   * SSI offre le plus haut niveau de sécurité, de confidentialité et d'autonomie.

## ENS (Ethereum Name Service)

### ENS Overview

L'[Ethereum Name Service (ENS)](https://ens.domains/) est un système de dénomination décentralisé construit sur la blockchain Ethereum :
* ENS permet la traduction d’adresses blockchain longues et complexes en noms lisibles par l’homme,
  rendant ainsi les interactions avec les réseaux blockchain plus conviviales.
* Il est conçu pour prendre en charge non seulement les adresses Ethereum, mais aussi un écosystème
  plus large, permettant la dénomination inter-chaînes pour divers services blockchain.

<picture>
<img alt="Autonomous Organization (DAO)" src="/media/dao_reseaux-sociaux-decentralises_identite-numerique-decentralisee/piprime.eth.webp">
<figcaption>
<span><a href="https://app.ens.domains/piprime.eth">Source app.ens.domains</a>.</span>
</figcaption>
</picture>

### Résoudre le problème du [triangle de Zooko](https://fr.wikipedia.org/wiki/Triangle_de_Zooko)

<picture>
<img height="300px" alt="Autonomous Organization (DAO)" src="/media/dao_reseaux-sociaux-decentralises_identite-numerique-decentralisee/zooko-s-triangle-fr.svg">
<figcaption>
<span>Le triangle de Zooko définit les trois propriétés désirées pour un <a href="https://fr.wikipedia.org/wiki/Protocole_de_communication">protocole de communication</a>.</span>
</figcaption>
</picture>

---

Le Triangle de Zooko est un concept de cryptographie et de systèmes de dénomination qui met en
évidence un compromis entre trois qualités essentielles souvent recherchées dans les systèmes de
dénomination. Ces trois qualités sont :

* Human-Meaningful: Easy for people to read and remember.
* Secure: Resilient to manipulation or hijacking.
* Decentralized: No central authority controls it.

[ENS équilibre efficacement les trois qualités du Triangle de Zooko](https://support.ens.domains/en/articles/7900404-what-is-ens) :

* **Humain-signifiant**  
  Les noms ENS, comme vitalik.eth, sont faciles à retenir et conviviaux, éliminant ainsi le besoin
  d’adresses blockchain complexes.
* **Sécurisé**  
  Construit sur la blockchain Ethereum, ENS garantit la sécurité et l'immuabilité, rendant les noms
  infalsifiables une fois enregistrés.
* **Décentralisé**  
  ENS fonctionne sur le réseau décentralisé d’Ethereum, supprimant l’autorité centrale, ce qui
  garantit une résistance à la censure et une plus grande fiabilité.

### Structure de l'ENS et principales caractéristiques

* Les noms ENS sont stockés sous forme de jetons non fongibles (NFT) [ERC-721](https://ethereum.org/developers/docs/standards/tokens/erc-721),
  avec des plans futurs pour la compatibilité [ERC-1155](https://academy.bit2me.com/fr/que-es-token-erc-1155/),
  permettant des normes de jetons plus flexibles et évolutives.
* ENS fonctionne de manière similaire au système de noms de domaine (DNS), mais fonctionne sur la
  blockchain, offrant le même concept de correspondance de noms lisibles par l'homme à des ressources
  spécifiques (par exemple, adresses de portefeuille, contenu ou contrats intelligents).
* Un exemple bien connu d'ENS en action est Vitalik.eth, qui est un nom lisible par l'homme qui se résout en l'adresse Ethereum spécifique [0xd8da6bf26964af9d7eed9e03e53415d37aa96045](https://etherscan.io/address/0xd8da6bf26964af9d7eed9e03e53415d37aa96045).
* **Enregistrements programmables**  
  Les noms ENS sont flexibles et peuvent stocker différents types d'enregistrements, tels que des
  adresses de portefeuille de crypto-monnaie (par exemple, Bitcoin, Ethereum), des hachages de
  contenu, des identifiants de réseaux sociaux, etc.
* **Dénomination inter-chaînes**  
  ENS ne se limite pas à Ethereum ; il prend en charge la dénomination de plusieurs blockchains et
  peut être utilisé pour résoudre les noms de diverses applications décentralisées (dApps).
* **Compatibilité [DNS](https://www.nameshield.com/ressources/lexique/dns-domain-name-system/)**
  ENS peut importer des noms DNS (tels que des domaines .com) dans son système, permettant ainsi une
  fonctionnalité basée sur la blockchain pour les noms de domaine Internet existants.

### ENS et la blockchain

* ENS fonctionne sur le réseau décentralisé de [contrats intelligents d’Ethereum](/fr/comprendre-les-notions-de-smart-contracts-et-de-dapps).
* Contrairement au DNS, qui repose sur une série de serveurs racine centralisés, ENS utilise des
  contrats intelligents pour résoudre les noms en adresses et autres enregistrements.
* La nature décentralisée de l’ENS signifie que les noms et les enregistrements de l’ENS ne sont pas
  vulnérables à la censure ou au contrôle d’une seule entité.  
  L'ENS DAO permet la gouvernance communautaire, où les modifications apportées au protocole et au
  système sont décidées par le biais d'un vote décentralisé.
  [La Constitution de l'ENS DAO](https://docs.ens.domains/dao/constitution) garantit que les noms de
  l'ENS ne peuvent être violés ou censurés, offrant ainsi aux utilisateurs une propriété de nom
  sécurisée et fiable.

### Cas d'usage des ENS

ENS peut être utilisé comme **adresse de portefeuille** facile à retenir.
* Le cas d’utilisation principal et le plus courant d’ENS est de simplifier la gestion des adresses
  de crypto-monnaie.
* Au lieu de mémoriser des adresses de portefeuille hexadécimales longues et complexes, les
  utilisateurs peuvent utiliser un nom ENS lisible par l'homme.
* ENS prend en charge plusieurs crypto-monnaies et permet ainsi aux utilisateurs de lier plusieurs
  adresses de crypto-monnaie (par exemple, Bitcoin, Ethereum) à un seul nom ENS, permettant ainsi
  des paiements multi-crypto.
* Cela élimine le besoin pour les utilisateurs de rappeler différentes adresses de portefeuille, ce
  qui facilite les transactions.

Les noms ENS ne se limitent pas aux adresses de portefeuille, **ils peuvent stocker une variété d’enregistrements** tels que :
* Les identifiants des réseaux sociaux ;
* Les images de profil ;
* Des enreigistrements personnalisé ;
* Les liens vers des sites Web décentralisés.

ENS permet également aux utilisateurs de créer **une identité Web3 unifiée** qui peut s'intégrer à
diverses applications et plates-formes décentralisées (dApps).

**Les noms ENS peuvent stocker des métadonnées** telles que:
* Une adresse E-mail
* L'URL d'un site Web
* Noms d'utilisateur sur les réseaux sociaux (p. ex.., Twitter, Instagram)

Ces métadonnées peuvent être récupérées par les dApps et les services, éliminant ainsi le besoin de
gérer plusieurs profils sur diverses plates-formes.  
Cela permet aux autres de trouver facilement votre présence en ligne, en reliant diverses identités
numériques en un seul endroit.

**L'ENS comme identité sur les réseaux sociaux**:
* Un cas d’utilisation croissant de l’ENS est celui d’une identité sur les réseaux sociaux, reliant un nom ENS à divers profils de réseaux sociaux.
* Les utilisateurs peuvent rattacher des comptes de réseaux sociaux (Twitter, Instagram, etc.) à leur nom d'ENS, consolidant ainsi leur identité numérique.
* Des [guides sont disponibles pour ajouter des profils de réseaux sociaux](https://ethereum.org/fr/social-networks/) (par exemple, définir un identifiant Twitter via ENS).

**Plusieurs projets permettent la communication par courrier électronique basée sur l'ENS**:
* [ETHMail](https://ethmail.cc/) (lien mort en 2025…)
* [EtherMail](https://ethermail.io/)
* [Skiff Mail](https://skiff.com/mail)

Les noms ENS peuvent également **stocker des enregistrements personnalisés** qui peuvent être liés à
presque n'importe quel type de service ou de données. Les utilisateurs peuvent **créer des clés de
service pour diverses applications ou services** avec lesquels ils interagissent.

**Site Web décentralisé utilisant ENS**:
* ENS permet aux utilisateurs de pointer leur nom vers des sites Web hébergés sur des réseaux
  décentralisés, créant ainsi des sites Web entièrement décentralisés.
* Cela donne aux utilisateurs un contrôle total sur le domaine et l'hébergement, ce qui rend le site
  Web résistant à la censure.
* Les utilisateurs peuvent créer des sites Web décentralisés liés à leur nom ENS.

## Preuve d'humanité

### Le problème de la confiance en ligne

<picture>
<img alt="Autonomous Organization (DAO)" src="/media/dao_reseaux-sociaux-decentralises_identite-numerique-decentralisee/joe-biden-twiter-pawned.webp">
<figcaption>
<span>Le compte Twitter (actuellement X) de Joe Biden qui a été piraté.</span>
</figcaption>
</picture>

---

La « confiance » a toujours été un problème, mais elle s’est de plus en plus aggravée à mesure que
nos vies se sont déplacées vers Internet :
* Internet permet à chacun de créer des comptes et d'interagir de manière anonyme.
* Les faux comptes et les robots rendent difficile la distinction entre les vraies personnes et les fraudeurs.
* Ce manque de confiance érode la fiabilité des systèmes en ligne, des réseaux sociaux aux plateformes financières.

Quelques exemples indicatifs:
* [Les pirates ont compromis 130 comptes très médiatisés](https://www.bbc.com/news/technology-53425822),
  dont Elon Musk et Barack Obama.
* [Facebook a supprimé 1,3 milliard de faux comptes](https://www.statista.com/statistics/1013474/facebook-fake-account-removal-quarter/)
  au premier semestre 2023.
* Des robots et de faux profils ont été utilisés pour influencer les électeurs lors des élections
  américaines de 2016 et 2020.
* [Attaques Sybil](https://www.binance.com/fr/academy/glossary/sybil-attack) : un seul individu crée plusieurs identités et les utilise pour manipuler des
  systèmes qui reposent sur des identités uniques, tels que le vote, les systèmes de réputation ou
  les réseaux décentralisés.

### Les mécanismes de consensus ont une forme de résistance sybil

Des mécanismes de consensus ont été créés comme une forme de résistance sybil.  
Par exemple, Bitcoin a présenté PoW comme un système « un processeur, une voix ».
Le système de preuve de travail (PoW) utilisé par Bitcoin a été conçu pour garantir que chaque
participant au réseau dispose d'une voix proportionnelle à sa puissance de calcul, selon le
principe « un processeur, une voix ».  
Le « unique CPU » peut être considéré comme un proxy pour la participation individuelle, ou l'identité.

Cependant, bien que PoW soit décentralisé, **il ne peut toujours pas servir de preuve d’humanité ou
de personnalité**, car il n’existe aucun mécanisme garantissant qu’un seul individu est limité à
l’exploitation d’un seul nœud.

### Présentation de la preuve d’humanité ou de personnalité

Les systèmes de preuve d’humanité sont conçus pour vérifier qu’une identité numérique correspond à
un être humain réel. Ils combinent la technologie blockchain avec une validation communautaire pour
garantir :
* **Unicité** : chaque identité est liée à un seul individu.
* **Décentralisation** : en supprimant le recours à une seule autorité, elle réduit les
  vulnérabilités telles que la censure et les points de défaillance uniques, créant ainsi un système
  plus résilient.
* **Sécurité** : la nature immuable et inviolable de la blockchain garantit que les enregistrements
  d'identité ne peuvent pas être modifiés, renforçant ainsi la fiabilité.
* **Évolutivité** : le modèle communautaire permet à ces systèmes de se développer de manière
  organique, en s'adaptant à divers contextes et besoins mondiaux sans goulots d'étranglement.
* **Confidentialité** : en utilisant des méthodes cryptographiques, les individus peuvent prouver leur
  humanité sans révéler de données personnelles sensibles, protégeant ainsi leur vie privée dans un
  environnement numérique de plus en plus surveillé.
* **Accessibilité mondiale** : la nature sans frontières de la blockchain et le caractère inclusif de la
  validation communautaire permettent la participation des individus des régions mal desservies,
  donnant ainsi du pouvoir à ceux qui ne disposent pas de formes d'identification traditionnelles.

### Approches pour obtenir la preuve d’humanité

* **Événements de vérification en personne** : les participants se rassemblent dans des lieux physiques
  pour se vérifier mutuellement. La participation pseudonyme peut garantir des identités uniques
  sans documentation formelle.
* **Vérification basée sur les réseaux sociaux** : les individus se portent garants les uns des
  autres au sein de réseaux décentralisés. Les modèles Web of Trust construisent l’identité grâce à
  des attestations mutuelles, et les systèmes peuvent améliorer la vérification avec des preuves
  cryptographiques.
* **Systèmes de vérification biométrique** : les méthodes biométriques associent des identifiants
  uniques à des enregistrements décentralisés. Les techniques de préservation de la confidentialité
  garantissent que les données restent locales, tandis que l'intégration de la blockchain empêche la
  duplication et améliore la sécurité.
* **Systèmes de vérification basés sur les tâches** : les réseaux de validation s'appuient sur des
  tâches humaines collaboratives pour confirmer les identités. Ces systèmes sont plus complexes que
  les reCAPTCHA et rendent difficile la manipulation des processus de vérification par les robots ou
  les faux comptes.

### Le système d'identité Worldcoin

[Worldcoin](https://world.org/) est un projet visant à créer des identités numériques uniques à
l'aide de scans de l'iris pour éviter la duplication et établir une preuve d'humanité.

{% note warning %}
Le Comité thaïlandais de protection des données personnelles (PDPC) a pris des mesures décisives
après avoir découvert des violations potentielles des lois du pays sur la protection des données.
L'organisme de réglementation a identifié plusieurs préoccupations critiques qui ont conduit à cette
interdiction radicale de Worldcoin Thaïlande :
* Collecte non autorisée de données biométriques par balayage de l'iris ;
* Transparence insuffisante sur l’utilisation et le stockage des données ;
* Risques potentiels pour la sécurité nationale et la vie privée des citoyens ;
* Défaut d'obtenir le consentement approprié pour le traitement des données.

[Source](https://coinedition.com/fr/sam-altman-a-recu-lordre-de-supprimer-12-million-de-scans-diris-alors-que-les-regulateurs-thailandais-rejettent-le-modele-jetons-pour-iris/).
{% endnote %}

* Les utilisateurs visitent un [appareil Orb](https://world.org/orb) qui scanne leur iris et génère un identifiant mondial unique et crypté, stocké sur la blockchain.
* L'objectif est de distribuer l'UBI (Universal Basic Income) aux humains vérifiés via l'Orb, mais
  les aspects économiques du projet et leur évolutivité vers une adoption massive ne sont pas bien
  définis.
* Il existe également de nombreuses autres limites associées à cette approche, pour n'en nommer que quelques-unes :
  * **Problèmes de confidentialité**. Les critiques affirment que même avec le cryptage, la collecte de données biométriques présente des risques.
  * **Accessibilité**. Nécessite un accès physique à un Orb, ce qui peut exclure les utilisateurs des zones éloignées.
  * **Risque de centralisation** : le recours à un Orb, qui est propriétaire, introduit des points
    potentiels de défaillance ou de contrôle.

## Introduction aux DAOs

### Définition d'un « Decentralized Autonomous Organization (DAO) »

**[Un DAO](https://www.binance.com/fr/academy/articles/decentralized-autonomous-organizations-daos-explained) est un système
dans lequel les fonctions de stockage et de transaction de valeur et de notaire (vote) peuvent être
conçues, organisées, enregistrées et archivées, et où les données et les actions sont enregistrées
et exécutées de manière autonome et décentralisée**

En novembre 2024, [la capitalisation boursière combinée de tous les DAO](https://coinmarketcap.com/view/dao/) était d'environ 27,4
milliards de dollars. Cette valorisation reflète la valeur totale des crypto-monnaies et des jetons
liés aux DAO, soulignant le rôle important que jouent les DAO dans l’écosystème plus large des
crypto-monnaies.

### Pourquoi avons-nous besoin d’un DAO – de toute façon, qu’est-ce que la gouvernance ?

La gouvernance est un cadre de règles et de procédures qui régissent la conduite des participants d'un réseau (ou d'une société).

La gouvernance est essentielle pour garantir la transparence, la sécurité et la stabilité d'un réseau ou d'une société. Elle permet aux participants de prendre des décisions collectives et de prendre en compte les intérêts de tous les membres.

La gouvernance permet également de garantir la résilience et la résistance aux attaques et aux failles. Elle permet aux participants de prendre des décisions rapides et efficaces en cas de problèmes ou de crises.

| Aspect | Gouvernance traditionnelle | Gouvernance DAO / Blockchain |
|---|---|---|
| Prise de décision | Centralisée (ex. : membres du conseil) | Décentralisée (vote de la communauté) |
| Application | Intermédiaires humains | Contrats intelligents (« le code fait loi ») |
| Responsabilité | Cadres juridiques et réglementaires | Cela dépend… |
| Flexibilité | Dynamique (jugement humain) | Rigide (définie par le code) |
| Transparence | Registres publics | Registres publics |
| Sécurité | Mesures de sécurité centralisées | Mesures de sécurité décentralisées |
| Stabilité | Infrastructure centralisée | Infrastructure décentralisée |

### La gouvernance de la tradition à la décentralisation

La gouvernance traditionnelle est souvent basée sur des structures hiérarchiques et des processus décisionnels centralisés. Elle peut être lente et difficile à mettre en œuvre, et elle peut être vulnérable aux conflits d'intérêts et aux erreurs humaines.

La gouvernance DAO / Blockchain est basée sur des contrats intelligents et des votes de la communauté. Elle permet aux participants de prendre des décisions collectives et de prendre en compte les intérêts de tous les membres. Elle est souvent plus rapide et plus efficace que la gouvernance traditionnelle, et elle est moins vulnérable aux conflits d'intérêts et aux erreurs humaines.

Gouvernance traditionnelle (prise de décision centralisée)  
                             ↓  
Web 3.0 et Blockchain (Intermédiaires réduits, Transparence)  
                             ↓  
Gouvernance DAO ((en théorie) entièrement décentralisée, autonome)

* **Gouvernance traditionnelle**
  * Principales caractéristiques
    * Autorité centralisée (conseils d’administration, dirigeants).
    * Structure hiérarchique.
    * Décisions appliquées par des intermédiaires ou des organismes de réglementation.
  * Exemple : Gouvernance d'entreprise avec vote des actionnaires et décisions du conseil d'administration.
* **Gouvernance DAO**
  * Principales caractéristiques
    * Prise de décision décentralisée.
    * Contrats intelligents auto-exécutables.
    * Participation communautaire grâce à des jetons de gouvernance.

La gouvernance décentralisée représente une évolution vers l’inclusivité et l’autonomie, mais elle apporte de nouveaux défis nécessitant des solutions innovantes. La gouvernance décentralisée représente une évolution vers l’inclusivité et l’autonomie, mais elle apporte de nouveaux défis nécessitant des solutions innovantes.

### Governance Tokens

La décentralisation de la participation et de la gouvernance est au cœur des protocoles blockchain et des applications DeFi. Pour y parvenir, de nombreux projets DeFi émettent des tokens de gouvernance qui visent à décentraliser la gouvernance du protocole sous-jacent.

La gouvernence par token peut être :
* *Gagné*, en participant à certaines activités, comme fournir des [liquidités](https://www.binance.com/fr/academy/articles/liquidity-explained).
* *Miné* pour les créateurs de protocoles et les premiers investisseurs.
* *Donné* aux adresses qui remplissent des critères spécifiques dans un processus appelé airdrop.
* *Acheté* et *vendu*, en [DEX](https://www.binance.com/fr/academy/articles/what-is-a-decentralized-exchange-dex) et [CEX](https://www.binance.com/fr/academy/articles/what-s-the-difference-between-a-cex-and-a-dex), comme pour tout autre jeton coté en bourse.

Les jetons de gouvernance ne doivent pas être confondus avec les jetons utilitaires, qui peuvent être échangés contre des services spécifiques.  
Les détenteurs de jetons de gouvernance décident collectivement de l'avenir d'un projet en s'organisant en organisations autonomes décentralisées (DAO).


### Pourquoi la question de la gouvernance est-elle pertinente dans DeFi ?

Il y a trois raisons pour lesquelles la gouvernance dans DeFi est importante :
1. Il contient le « De » (décentralisation) dans DeFi
2. C'est une conséquence nécessaire de la façon dont la valeur est gérée par les applications déployées sur les couches supérieures de la pile DeFi.
3. Cela permet aux utilisateurs de participer à la décision de l'avenir du projet et de contribuer à sa croissance.

D'après les propos de [Vitalik Buterin](https://en.wikipedia.org/wiki/Vitalik_Buterin) :
{% note %}
Pour les projets de la couche application, et notamment les projets DeFi, nous nous heurtons au problème suivant : les systèmes de contrats intelligents de la couche application contrôlent souvent directement des actifs externes, et ce contrôle ne peut être transféré par fork.

Si la gouvernance on-chain de [Tezos](https://www.binance.com/fr/academy/learn-and-earn/course/what-is-tezos-xtz-BN721205606323798017/) est compromise par un attaquant, la communauté peut effectuer un hard fork sans autre perte que des coûts de coordination certes élevés.

Si la gouvernance on-chain de [Sky](https://www.binance.com/fr/academy/articles/what-is-sky-sky) est compromise par un attaquant, la communauté peut tout à fait créer une nouvelle instance de MakerDAO, mais elle perdra tous les ETH et autres actifs bloqués dans les CDP MakerDAO existants.

Par conséquent, bien que la gouvernance off-chain soit adaptée aux couches de base et à certains projets de la couche application, de nombreux projets de cette couche, en particulier les projets DeFi, nécessiteront inévitablement une gouvernance on-chain formalisée.
{% endnote %}

### Une Introduction aux DAO

Bitcoin a donné naissance à la notion de monnaie inarrêtable et Ethereum à celle de code inarrêtable.  
Les DAO combinent monnaie inarrêtable et code inarrêtable pour créer des organisations quasi inarrêtables.

Pour comprendre ce qu'est une DAO, examinons l'acronyme. Les DAO sont (en théorie) :
* *Décentralisées* : Elles ne possèdent pas d'adresse physique et peuvent ne pas être, dans certaines juridictions, directement soumises aux règles et procédures établies concernant les entreprises. Elles sont entièrement constituées en ligne et fonctionnent sur la blockchain, maintenues par les nœuds qui assurent la maintenance du réseau.
* *Autonomes* : Elles sont entièrement définies par du code auto-exécutable (contrats intelligents) et fonctionnent selon le principe « le code fait loi », dans les limites de l'infrastructure blockchain sur laquelle elles sont déployées.
* *Organisationnelles* : C'est-à-dire un ensemble d'entités qui se réunissent pour atteindre un objectif commun. Les DAO sont agnostiques quant à l'identité des personnes ou entités interagissant avec le réseau et aux raisons pour lesquelles elles envoient ou reçoivent des informations ou de la valeur. Leur seul intérêt réside dans la réception et l'envoi d'informations valides, conformément aux règles de consensus.

Cela signifie que les blockchains, et par extension les DAO, peuvent interagir avec des humains, des IA ou tout élément capable d'envoyer et de recevoir des informations valides.

Comme l'a dit Richard Gendal Brown : « [Sur la blockchain, personne ne sait que vous êtes un réfrigérateur](https://gendal.me/2013/10/23/on-the-blockchain-nobody-knows-youre-a-fridge/). »

Certains affirment que les DAO ne sont pas directement comparables aux organisations traditionnelles conçues pour optimiser les profits, souvent au détriment du bien commun, engendrant de graves externalités et fonctionnant au détriment de l'inclusion, de la durabilité et de la résilience.

Par exemple, elles peuvent hériter de nombreuses propriétés de leurs réseaux blockchain sous-jacents et ainsi être sans permission, décentralisées, sans confiance, transparentes, résistantes à la censure – ou non.

D'autres soutiennent qu'une DAO idéale serait guidée par des valeurs, entièrement gouvernée par ses membres qui prennent démocratiquement des décisions concernant l'avenir du projet.

En pratique, comme pour les organisations classiques, les DAO ne sont ni parfaitement décentralisées ni centralisées, ni parfaitement « bonnes » ou « mauvaises ». Elles sont influencées par les choix de leurs membres et par l'environnement dans lequel elles évoluent.

### Governance via les DAO

Les modèles de gouvernance DAO présentent de nombreuses similitudes avec la gouvernance d'entreprise
traditionnelle.  
Les détenteurs de jetons de gouvernance peuvent :
* Créer des propositions de gouvernance sur l’avenir du protocole ;
* Voter sur les propositions ;
* Les propositions qui atteignent un certain niveau de consensus, tel que défini dans les contrats
  intelligents, sont acceptées et appliquées.

Cependant, comme nous le verrons par la suite, les DAO vont au-delà de la gouvernance.

**L'achat de jetons de gouvernance auprès d'une bourse centralisée signifie que vous ne pouvez pas
voter directement, car les jetons appartiennent à la bourse, qui peut voter en votre nom**.  
Cependant, **si vous transférez les jetons sur votre portefeuille personnel, vous obtenez un contrôle total et
pouvez participer aux décisions de gouvernance en votant directement.**

### Exemples de DAO et leurs caractéristiques

Les DAO peuvent avoir plusieurs formes…

<figure>
<a data-fancybox data-src="/media/dao_reseaux-sociaux-decentralises_identite-numerique-decentralisee/daos.webp">
<img src="/media/dao_reseaux-sociaux-decentralises_identite-numerique-decentralisee/daos_thumb.webp" title="Cliquer pour agrandir" alt="Une cartographie des DAO" />
</a>
<figcaption><br><span>Une cartographie des DAO (<a href="https://x.com/Cooopahtroopa/status/1407458878246121475">source</a>)</span></figcaption>
</figure>

* **Uniswap**  
  [Uniswap](https://app.uniswap.org/) est une plateforme d'échange décentralisée (DEX) qui permet aux utilisateurs d'échanger
  des cryptomonnaies directement depuis leurs portefeuilles grâce à des pools de liquidité
  automatisés, en remplacement des carnets d'ordres traditionnels. Son modèle de gouvernance DAO
  inclut un système de proposition et de vote pour son jeton de gouvernance. Pour soumettre une
  proposition à la plateforme, les utilisateurs doivent posséder au moins 1 % du total des jetons [UNI](https://coinmarketcap.com/currencies/uniswap/) de
  gouvernance émis.
* **Compound**  
  La [DAO Compound](https://compound.finance/) gouverne le protocole Compound, une plateforme de finance décentralisée permettant
  aux utilisateurs de prêter et d'emprunter des cryptomonnaies à des taux d'intérêt déterminés
  algorithmiquement. Les décisions de gouvernance sont prises par les détenteurs de [jetons COMP](https://coinmarketcap.com/currencies/compound/). Les
  utilisateurs peuvent transférer leurs jetons de gouvernance (COMP) à d'autres utilisateurs pour
  voter (Gouvernance en tant que service).  
  Compound exige également une participation minimale de 1 % pour soumettre une proposition.
* **Aave**  
  La [DAO Aave](https://aave.com/) gouverne le protocole Aave, une plateforme de liquidité décentralisée et non
  dépositaire où les utilisateurs peuvent fournir et emprunter des actifs. Les détenteurs de jetons
  AAVE proposent et votent les modifications du protocole.
  Les [jeton de gouvernance AAVE](https://coinmarketcap.com/currencies/aave/) et [stkAAVE](https://coinmarketcap.com/currencies/staked-aave/)
  confère à ses détenteurs un pouvoir de proposition et de vote.
* **Sky**  
  [Sky](https://sky.money/) est une plateforme décentralisée permettant aux utilisateurs de créer et de gérer le stablecoin DAI, indexé sur le dollar américain et garanti par différents types de cryptomonnaies.  
  Les détenteurs de SKY votent sur l’ajout de types de garanties, l’ajustement des frais de stabilité
  et les améliorations de la gouvernance ; par exemple, l’inclusion d’actifs réels comme garantie a
  été une décision prise par la communauté.  
  Les participants souhaitant voter doivent bloquer leurs SKY (jeton de gouvernance de Sky) en les transférant
  de leurs portefeuilles privés vers le contrat de vote, d’où ils pourront les retirer à tout moment.

### Les DAO au-delà de la gouvernance

Les DAO ont de nombreuses applications, au-delà de la simple gouvernance, bien sûr…  
Par exemple, beaucoup commencent à prendre conscience des avantages liés au travail au sein
d'organisations flexibles et natives d'Internet. Les DAO utilisent une multitude d'outils et de
mécanismes pour rémunérer et récompenser non seulement les contributeurs principaux, mais aussi les
contributeurs occasionnels. Ces avantages peuvent inclure :
* Un emploi à temps plein, comme dans une entreprise traditionnelle.
* Des subventions pour des projets spécifiques.
* Des primes pour la découverte de bugs, de vulnérabilités et d'exploits.
* D'autres formes de partage des revenus via des programmes d'évaluation par les pairs.

### Les propriétés clés d'un DAO sont autonomie et décentralisation

#### Autonomie

Le concept d'autonomie varie selon le contexte et revêt différentes significations selon les disciplines :
* En **sciences sociales**  
  Traditionnellement, l'autonomie renvoie à l'indépendance vis-à-vis d'une autorité centrale,
  mettant l'accent sur l'autogestion dans la prise de décision.
* En **Philosophie** (par exemple, Kant)  
  Elle se concentre sur l'autonomie de l'esprit et de la conscience, insistant sur l'indépendance morale et intellectuelle.
* En **informatique et ingénierie**  
  L'autonomie est définie comme la capacité d'un système à s'adapter et à fonctionner efficacement en situation d'incertitude.

Avec les récents progrès de l'IA et de la robotique, ces disciplines scientifiques dominent désormais les discussions scientifiques et la couverture médiatique.  
Remarque : Une structure conditionnelle de type « if-then-else » ne constitue pas une véritable
autonomie ; elle réagit simplement à des conditions prédéfinies et non à l'incertitude.

#### Décentralisation

La décentralisation consiste à répartir le pouvoir de décision au sein d'un vaste réseau de
participants plutôt que de le concentrer entre les mains d'une autorité centrale.  
Ceci est réalisé grâce à des mécanismes tels que le vote par jetons, les contrats intelligents et la
gouvernance communautaire, qui permettent aux parties prenantes de façonner les règles, les
opérations et l'évolution de l'organisation.  
La décentralisation garantit l'inclusion, la transparence et la résilience au sein de la structure de la DAO.

### Pourquoi tout cela est-il important ?

La [DAO Tornado Cash](https://tornado.cash/) gère Tornado Cash, un protocole de confidentialité décentralisé
sur [Ethereum](/fr/comment-fonctionne-ethereum/) qui permet des transactions anonymes en
cryptomonnaie grâce aux preuves à divulgation nulle de connaissance.  
Les décisions de gouvernance, telles que les mises à jour du protocole et les modifications de
paramètres, sont prises par les détenteurs du jeton [TORN](https://coinmarketcap.com/currencies/torn/).
Ces derniers peuvent proposer des modifications et voter sur celles-ci, leur pouvoir de vote étant
proportionnel à la quantité de TORN détenue.  
En août 2023, les autorités américaines ont inculpé les fondateurs de Tornado Cash, Roman Storm et Roman Semenov,
de **complot en vue de blanchiment d'argent, de violations de sanctions et d'exploitation d'une entreprise de transfert de fonds sans licence**.
L'acte d'accusation allègue qu'ils ont facilité le blanchiment de plus d'un milliard de dollars de
produits du crime via leur service de mixage de cryptomonnaies, y compris des fonds liés au groupe
de cybercriminalité nord-coréen Lazarus.  
Ces actions ont été jugées contraires aux sanctions américaines et à la réglementation anti-blanchiment d'argent.

{% note warning %}
L’Office of Foreign Assets Control (OFAC) du département du Trésor américain a sanctionné le service de mixage de cryptomonnaies Tornado Cash, utilisé pour blanchir plus de 7 milliards de dollars de cryptomonnaies depuis sa création en 2019. Ce montant inclut plus de 455 millions de dollars volés par le groupe Lazarus, un groupe de pirates informatiques parrainé par l’État de la République populaire démocratique de Corée (RPDC) et sanctionné par les États-Unis en 2019, lors du [plus important vol de cryptomonnaies connu à ce jour](https://www.fbi.gov/news/press-releases/press-releases/fbi-statement-on-attribution-of-malicious-cyber-activity-posed-by-the-democratic-peoples-republic-of-korea). Tornado Cash a ensuite servi à blanchir plus de 96 millions de dollars provenant de fonds détournés par des cybercriminels lors du vol du pont Harmony le 24 juin 2022, et au moins 7,8 millions de dollars provenant du vol Nomad du 2 août 2022. L’action d’aujourd’hui est prise conformément au décret exécutif (E.O.) 13694, tel que modifié, et fait suite à la désignation par l’[OFAC, le 6 mai 2022, du mélangeur de monnaie virtuelle Blender.io (Blender)](https://home.treasury.gov/news/press-releases/jy0768).

<picture>
<img alt="Le processus de mélange de cryptomonnaies Blender.io" src="/media/dao_reseaux-sociaux-decentralises_identite-numerique-decentralisee/blender.io.webp">
<figcaption>
<span>Le processus de mélange de cryptomonnaies Blender.io. <a href="https://home.treasury.gov/news/press-releases/jy0768">Source</a></span>
</figcaption>
</picture>

[Source](https://home.treasury.gov/news/press-releases/jy0916).
{% endnote %}

La DAO Tornado Cash n'était ni totalement autonome ni véritablement décentralisée. Une part
importante des jetons TORN (55 %) était allouée à la trésorerie de la DAO, tandis que 30 % étaient
versés aux développeurs fondateurs et aux premiers soutiens, concentrant ainsi le pouvoir de
gouvernance entre les mains d'un groupe restreint.

<picture>
<img alt="La distribution du token de gouvernance TORN" src="/media/dao_reseaux-sociaux-decentralises_identite-numerique-decentralisee/torn-distribution.webp">
<figcaption>
<span>La distribution du token de gouvernance TORN</span>
</figcaption>
</picture>

Si une DAO est véritablement autonome sur le plan éthique, elle peut être considérée comme un agent
moral et doit être tenue responsable de tout comportement contraire à l'éthique. Cependant, si elle
n'est pas autonome au sens moral du terme, alors qui est responsable des actions d'une DAO ? (Tan et al., 2024, [Problèmes ouverts liés aux DAO](https://arxiv.org/html/2310.19201v2))

D'un point de vue juridique, une telle DAO est classée dans la plupart des juridictions comme une
[société en nom collectif](https://fr.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_en_nom_collectif),
exposant les détenteurs de jetons à une responsabilité personnelle totale.

### Orientations futures et défis ouverts

D'un point de vue de la Nature interdisciplinaire, les DAO se situent à l’intersection des sciences
sociales et de l’informatique, combinant technologie et expérimentation centrée sur l’humain.

Les perspectives de recherche sont :
* **Informatique**  
  Protection de la vie privée, vote sécurisé, interaction homme-machine, DAO multichaînes et conception de systèmes.
* **Économie**  
  Mesure des coûts de gouvernance, dynamique du travail et problèmes principal-agent.
* **Éthique**  
  Exploration des DAO en tant qu’agents moraux et de leur responsabilité face aux comportements contraires à l’éthique.
* **Droit**  
  Incertitudes juridiques, responsabilité, faillite et défis réglementaires.
* Sciences politiques**  
  Dynamiques du pouvoir, mécanismes de vote et modèles de gouvernance numérique.

Les principales applications émergentes des DAO sont la **gouvernance de l’IA** et la **finance
régénérative** qui donne une priorité à la durabilité et à une répartition équitable des profits.

Les DAO sont des plateformes expérimentales qui offrent des perspectives sur la gouvernance,
l’autonomie et la coordination, tout en posant d’importants défis en matière de protection de la vie
privée, d’éthique, de droit et d’économie.

## Médias sociaux décentralisés

### Défis des médias sociaux centralisés

* **Propriété des données et confidentialité**
  Les plateformes centralisées contrôlent souvent les données des utilisateurs, ce qui soulève des problèmes de confidentialité et d'utilisation abusive potentielle.
* **Violations fréquentes de données**
  Les violations fréquentes de données mettent en évidence les vulnérabilités du stockage centralisé des données.
* **Modération du contenu**
  Des politiques de modération opaques et incohérentes peuvent entraîner de la censure ou la propagation de désinformation.
* **Monétisation et exploitation**
  Les créateurs peuvent recevoir une rémunération minimale, tandis que les plateformes conservent des bénéfices importants.
* **Pouvoir centralisé**
  Quelques entités agissent comme gardiens, influençant le discours public et le comportement des utilisateurs.

### Médias sociaux centralisés vs. décentralisés

| Fonctionnalité | Centralisé | Décentralisé |
|----------------|------------|--------------|
| Propriété des données | Plateforme | Utilisateur |
| Gouvernance | Plateforme | Communauté (Utilisateur) |
| Modération du contenu | Opaque et incohérente | Transparente et décentralisée (gérée par la communauté) |
| Censure | Contrôle à point unique | Résistant / démocratique |
| Monétisation | Plateforme | Incitations blockchain |
| Évolutivité | Élevée | Limitée en raison de la technologie et de l'adoption |
| Sécurité | Vulnérable aux attaques | Immuable et sécurisé |

### Défis des médias sociaux décentralisés

* **Évolutivité**
  Les réseaux décentralisés ont souvent du mal à gérer le volume et la vitesse des plateformes traditionnelles.
* **Expérience utilisateur**
  Les interfaces et les fonctionnalités peuvent être moins abouties par rapport aux équivalents centralisés.
* **Modération du contenu**
  Une modération efficace est complexe, pouvant potentiellement conduire à la propagation de contenus nuisibles ou de désinformation.
* **Adoption et effets de réseau**
  Les plateformes centralisées dominent en raison de leurs grandes bases d'utilisateurs, créant des barrières pour les alternatives décentralisées.
* **Incertitude réglementaire**
  Les plateformes décentralisées font souvent face à des cadres juridiques peu clairs ou restrictifs.

### Exemples de médias sociaux décentralisés

* **[Mastodon](https://mastodon.social)**
  Un réseau fédéré où les utilisateurs contrôlent leurs serveurs, favorisant une modération communautaire et la confidentialité.
* **[Bluesky](https://bluesky.social)**
  Construit sur le protocole AT, Bluesky vise à créer une base décentralisée pour les médias sociaux publics, permettant plusieurs fournisseurs interopérables et donnant aux utilisateurs le contrôle sur le contenu qu'ils voient.
* **[Secure Scuttlebutt (SSB)](https://ssbjs.org)**
  Un protocole de communication pair-à-pair qui permet aux utilisateurs d'héberger leur propre contenu, offrant une tolérance aux pannes et une résistance à la censure.
* **[Diaspora](https://diasporafoundation.org)**
  Une plateforme décentralisée et open-source où les données sont stockées sur des serveurs appartenant aux utilisateurs (« pods »), donnant aux utilisateurs le contrôle de leurs informations.
* **[Steemit](https://steemit.com)**
  Une plateforme basée sur la blockchain qui récompense les utilisateurs avec de la cryptomonnaie pour la création et la curation de contenu, favorisant une monétisation équitable.
* **[Holochain](https://holochain.org)**
  Une plateforme décentralisée qui permet aux utilisateurs de créer et de gérer leurs propres données, favorisant la souveraineté personnelle et la confidentialité.


### Exemple d'une pile technologique - SocialX

<picture>
<img alt="Social X est un écosystème pour vos interactions quotidiennes." src="/media/dao_reseaux-sociaux-decentralises_identite-numerique-decentralisee/ecosystem.webp">
<figcaption>
<span>Social X est un exemple d'écologie pour vos interactions quotidiennes. <a href="https://socialx.network/ecosystem/">Source</a>.</span>
</figcaption>
</picture>

[SocialX](https://socialx.network/) est une plateforme de médias sociaux basée sur la blockchain qui combine la création de communautés, les récompenses en cryptomonnaie et les interactions sécurisées.
Sa mission est de donner aux utilisateurs la propriété de leur contenu, de défendre la liberté d'expression et de récompenser les contributeurs pour leur travail créatif.
En exploitant la technologie blockchain, SocialX vise à décentraliser les réseaux sociaux, transformant la façon dont les gens partagent, interagissent et effectuent des transactions en ligne.

1. L'utilisateur télécharge du contenu
2. Le contenu est optimisé
3. IPFS est utilisé pour le stockage du contenu avec [Infura](https://www.infura.io/)
4. La technologie blockchain est utilisée pour la gestion des données transactionnelles et l'application SocialX
5. Elle fournit également un réseau P2P pour le calcul et le stockage
6. Les preuves à divulgation nulle de connaissance sont implémentées pour le chiffrement et la vérification des parties

<picture>
<img alt="Quand la blockchain rencontre les réseaux sociaux en ligne" src="/media/dao_reseaux-sociaux-decentralises_identite-numerique-decentralisee/when-blockchain-meets-online-social-networks.webp">
<figcaption>
<span>Quand la blockchain rencontre les réseaux sociaux en ligne. <a href="https://www.sciencedirect.com/science/article/abs/pii/S1574119220300195">Source</a>.</span>
</figcaption>
</picture>

## Conclusion

* Le SSI offre aux individus un contrôle total sur leur identité numérique, renforçant la confidentialité et la sécurité.
* La blockchain, les DID et les VC constituent les fondements du SSI, garantissant la décentralisation, la sécurité et l'intégrité des données.
* Le triangle de confiance (titulaire, émetteur, vérificateur) garantit une gestion d'identité sécurisée et respectueuse de la vie privée.
* L'ENS simplifie la gestion des adresses blockchain en traduisant les adresses complexes en noms lisibles par l'homme.
* L'ENS permet une dénomination décentralisée et résistante à la censure et prend en charge la fonctionnalité inter-chaînes.
* Les systèmes de preuve d'humanité combinent la blockchain et la validation communautaire pour vérifier les identités humaines réelles, réduisant ainsi la fraude et renforçant la confiance.
* Les DAO combinent les sciences sociales et informatiques avec la blockchain pour créer des structures de gouvernance innovantes.
* Bien que les DAO promettent autonomie, transparence et décentralisation, elles font face à des défis tels que la centralisation des jetons de gouvernance, les problèmes de confidentialité et les incertitudes juridiques.
* La recherche explore des solutions en matière de vote sécurisé, de normalisation et de nouveaux modèles économiques pour les DAO.
* Les DAO agissent également comme des plateformes pour tester des théories en matière de comportement organisationnel, de sciences politiques et d'éthique.
* Les réseaux sociaux décentralisés donnent aux utilisateurs le contrôle de leurs données, renforçant la confidentialité et résistant à la censure. Ces réseaux utilisent la blockchain pour une gouvernance communautaire et des systèmes de récompense pour les créateurs.
* Des projets comme Mastodon, Lens Protocol et SocialX montrent le potentiel de décentraliser la propriété du contenu et de promouvoir la liberté d'expression.
* Des défis comme l'évolutivité, l'adoption par les utilisateurs et la modération restent des obstacles pour les réseaux sociaux décentralisés.
* Les DAO et les réseaux sociaux décentralisés contribuent à la gouvernance, à l'interaction numérique et à l'inclusivité économique.
* Pour atteindre leur plein potentiel, ces systèmes doivent équilibrer l'innovation technique avec des considérations éthiques, juridiques et opérationnelles.
* Les DAO et les réseaux décentralisés jouent un rôle pivot dans la conduite de la prochaine phase de l'économie numérique.
