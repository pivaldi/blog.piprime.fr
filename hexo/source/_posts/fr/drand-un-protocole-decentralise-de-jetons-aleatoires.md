---
title: "drand : un protocole décentralisé de jetons aléatoires"
date: 2025-10-25 18:34:44
id: drand-un-protocole-decentralise-de-jetons-aleatoires
lang: fr
description: "drand est un protocole distribué produisant à intervalles réguliers des valeurs aléatoires, non biaisables et publiquement vérifiables"
categories:
- [FR, Tech, Cryptographie]
tags:
- cryptographie
- hasard
- distribué
- décentralisé
---

# drand — un service distribué de balises aléatoires

**drand** (prononcé *di-rand*) est un service/protocole distribué produisant à intervalles réguliers
des valeurs aléatoires **imprévisibles**, **non biaisables** et **publiquement vérifiables**. Il
repose sur de la cryptographie à seuil ([threshold BLS](https://fr.wikipedia.org/wiki/Signature_de_Boneh-Lynn-Shacham)),
une génération de clé distribuée (DKG) et une chaîne de balises (beacons) signées.

Source : [drand.love][1]

## Objectifs et propriétés de sécurité

drand vise à offrir une **source de hasard publique** utilisable par des applications, telles que
blockchains, les lots, tirages, time-locks, etc, avec les propriétés suivantes :

* **Imprévisibilité** : personne (même un sous-ensemble de nœuds) ne peut connaître la sortie d'un futur round avant sa publication.
* **Non-biaisabilité** : aucun participant ou coalition admissible ne peut forcer la sortie vers une valeur de son choix.
* **Vérifiabilité publique** : tout client peut vérifier cryptographiquement que la valeur a bien été produite par le groupe autorisé.
* **Disponibilité** : malgré la suppression d'une partie des nœuds, le réseau continue à produire des balises (tant que le seuil est respecté).

Source : [docs.drand.love][2]

## Architecture générale

1. **Groupe de nœuds (n)** : un ensemble d'opérateurs (souvent appelés *operators* ou *nodes*) qui exécutent drand. Ils détiennent collectivement une clé privée *partagée*.
2. **Distributed Key Generation (DKG)** : protocole interactif (ex. Pedersen DKG) qui permet à ces n nœuds de générer une clé publique commune et des *partages* privés sans qu'une autorité centrale connaisse la clé complète. [Voir la doc](https://docs.drand.love/docs/cryptography/) pour plus d'information.
3. **Rounds / beacon** : à chaque intervalle (p. ex. toutes les X secondes), les nœuds exécutent un protocole de signature à seuil pour produire la valeur aléatoire du round r. Le résultat inclut la signature collective (ou l'agrégation partielle) et parfois une référence à la balise précédente (mode *chained*). ([docs.drand.love][3])
4. **API publique** : les balises sont exposées via HTTP/gRPC ; n'importe qui peut récupérer et vérifier une sortie. Voir la section développeur [Getting Started — Developers](https://docs.drand.love/developer/).

Source : [docs.drand.love][4]


## Mécanique cryptographique

1. **Primitives utilisées**

drand utilise des **[signatures BLS](https://fr.wikipedia.org/wiki/Signature_de_Boneh-Lynn-Shacham)** (Boneh–Lynn–Shacham),
qui tirent parti de **[pairings bilinéaires](https://crypto.stanford.edu/pbc/notes/ep/pairing.html)** pour permettre
l'agrégation facile de signatures partielles en une signature unique vérifiable.

Source : [docs.drand.love][2]

2. **Génération de la clé (DKG)**

Les n nœuds exécutent un protocole DKG (souvent [Pedersen DKG](https://dl.acm.org/doi/10.5555/1754868.1754929)) :
chaque nœud crée un polynôme secret et distribue des partages (shares) aux autres. Après vérifications (commitments),
on obtient une **clé publique commune** `PK` et pour chaque nœud un **share privé** `sk_i`.
Le secret complet n'existe nulle part. Cela évite qu'un acteur unique puisse signer seul.

Source : [docs.drand.love][5]


3. **Production d'un round**

* Pour un round r (horodaté / séquentiel), chaque nœud i calcule une *signature partielle* `σ_i = Sign(sk_i, input_r)`
  où `input_r` typiquement contient l'identifiant du round et souvent la balise précédente (dans le mode *chained*).
* Une fois qu'on a t signatures partielles ou plus (t = seuil), on **agrège** ces `σ_i` via la construction BLS
  pour obtenir la signature de seuil `Σ_r`.
* La **valeur pseudo-aléatoire** du round est dérivée (p.ex. `H(Σ_r)` ou `H(Σ_r || previous_value)`),
  ce qui la rend vérifiable par tous (on vérifie `Σ_r` avec `PK`).

Source : [docs.drand.love][2]

4. **Modes — chained vs unchained**

drand supporte les deux modes suivants :

   * **Chained** : chaque balise inclut (ou signe) la balise précédente formant ainsi une chaîne où chaque sortie dépend de la précédente.
   Cela renforce la résistance à certains types d'attaque par recomputation et crée une histoire linéaire.
   * **Unchained** : les sorties sont indépendantes ; utile si on ne veut pas de dépendance temporelle.

Source : [docs.drand.love][2]

## Vérification par un client

1. Récupérer la sortie du round `r` : contient `round`, `random_value`, `signature`, et `public_key` (ou référence).
2. Vérifier la signature `Σ_r` à l'aide de la clé publique du groupe `PK` (BLS verify).
3. Vérifier optionnellement la chaîne des balises et si en **mode chained**, s'assurer que le round r signe/référence r−1, etc.  
   La vérification est publique et non interactive : tout client peut effectuer ces opérations localement.

Source : [docs.drand.love][5]

## Résilience et modèle de menace

* **Tolérance aux fautes** : drand implémente un modèle `t-of-n` : tolère jusqu'à `f = n − t` nœuds
  défaillants (par crash ou arrêt). Tant que t nœuds ou plus coopèrent, une balise est produite. ([docs.drand.love][2])
* **Adversaire adaptatif vs statique** : si l'adversaire peut corrompre des nœuds *avant* la DKG, il risque de compromettre la clé.
  Les protections incluent audits opérateurs, opérateurs diversifiés (League of Entropy) et rotation/resharing de clés. ([Cloudflare][6])
* **Attaques possibles** : DoS sur des nœuds pour retarder le round, corruption des partages, attaques réseau.  
  Solutions : redondance, opérateurs indépendants, surveillance, seuil choisi pour résister à des collusions probables.

Source : [docs.drand.love][3]

## Opérations pratiques

* **Déployer un réseau drand** : on installe [le daemon](https://github.com/drand/drand) (Go) sur chaque opérateur,
  exécute la DKG pour créer la configuration du groupe, puis on lance les rounds avec une fréquence configurée. ([GitHub][7])
* **Consommer la vraie sortie** : via REST/gRPC (endpoints publics du mainnet/League of Entropy) : GET `/public/latest` ou `/public/{round}` etc. Voir [la doc développeur](https://docs.drand.love/developer/).
* **Cas d'usage courants** : élection, blockchains, tirages/loteries vérifiables, génération de secrets temporisés ([timelock](https://en.bitcoin.it/wiki/Timelock)),
  jeux, ou toute logique nécessitant un hasard non manipulable.  
  Par exemple [Filecoin](https://filecoin.io/) utilise drand pour son entropie non biaisable ([spec.filecoin.io][8]).

## Limites, bonnes pratiques et points d'attention

* **Sélection du seuil `t`** : compromis entre disponibilité et sécurité (un petit `t` permet une meilleure disponibilité, mais plus de risque de collusion).  
  Choisir `t` en fonction du modèle de menace et de la diversité opérationnelle. ([docs.drand.love][3])
* **Risque de corruption lors de la DKG** : la DKG doit être exécutée soigneusement et idéalement auditable.  
  En pratique, on préfère des opérateurs indépendants, audités et géographiquement/administrativement séparés, c'est le principe de la *League of Entropy*. ([Cloudflare][6])
* **Latence** : la production de balises dépend du réseau et du temps d'agrégation des signatures partielles.
  drand n'est pas conçue pour des exigences de latence extrêmes (inférieures à la milliseconde), mais plutôt pour des rounds réguliers (par ex. chaque minute).

Source  : [docs.drand.love][5]

## Exemple concret

1. **Setup** : 7 opérateurs `n = 7`, seuil `t = 5`. Exécution d'une DKG → sortie `PK`.
2. **Round r** : chaque opérateur signe la *seed* (incluant `r` et potentiellement `prev`) → collecte de ≥5 signatures partielles.
3. **Aggregation** : création de `Σ_r` → `random = H(Σ_r)` → publication sur l'API.
4. **Vérification** : client récupère `random` et `Σ_r`, vérifie `Verify(PK, Σ_r, input_r)` → si ok, accepte la valeur.

Source : [docs.drand.love][2]

## Conclusion

drand est aujourd'hui l'une des solutions les plus abouties pour fournir du **hasard publique et
distribué** : open-source, utilisée en production (ex. [League of Entropy](https://www.drand.love/loe)),
basé sur des primitives bien étudiées (BLS, DKG).  
Son adoption pratique dépendra surtout de la **diversité** des opérateurs,
des paramètres du seuil, et de la qualité de l'opération (monitoring, rotation).

Source : [drand.love][1]

[1]: https://www.drand.love/ "Drand: Home"
[2]: https://docs.drand.love/docs/cryptography/ "Cryptography"
[3]: https://docs.drand.love/docs/specification/ "Protocol Specification"
[4]: https://docs.drand.love/developer/ "Getting Started - Developers"
[5]: https://docs.drand.love/docs/ "Welcome to the drand docs"
[6]: https://www.cloudflare.com/leagueofentropy/ "Distributed Randomness Beacon"
[7]: https://github.com/drand/drand "drand/drand: 🎲 A Distributed Randomness Beacon Daemon"
[8]: https://spec.filecoin.io/libraries/drand/ "drand - Distributed Randomness"
