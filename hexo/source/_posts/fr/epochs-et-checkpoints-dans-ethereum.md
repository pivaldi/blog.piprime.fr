---
title: "Epochs et les Checkpoints dans Ethereum"
date: 2025-10-30 00:02:31
id: epochs-et-checkpoints-dans-ethereum
tree_view: true
lang: fr
description: "Les Epochs et les Checkpoints sont des concepts clés dans le système de consensus Proof of Stake d'Ethereum 2.0, en particulier en ce qui concerne le rôle de la Beacon Chain."
categories:
- [FR, Tech, Cryptographie, Ethereum]
tags:
- cryptographie
- hasard
- distribué
- décentralisé
- ethereum
---

Les **Epochs** (époques) et les **Checkpoints** sont des concepts clés dans le système de consensus
**Proof of Stake (PoS)** d'Ethereum 2.0, en particulier en ce qui concerne le rôle de la **[Beacon Chain](/fr/la-beacon-chain)**.
Ces mécanismes sont essentiels pour garantir la finalité des transactions et la sécurité du réseau.

## Epochs (Époques)

**Une epoch (époque) est une période de temps dans laquelle un certain nombre de blocs sont
validés sur la Beacon Chain**. Dans le système de **Proof of Stake** d'Ethereum 2.0, le réseau est
divisé en ces périodes fixes pour organiser la validation des blocs et la gestion des validateurs.

### Fonctionnement des Epochs

* **Durée d'une Epoch**  
  Une epoch dure **32 blocs**. Chaque bloc est produit toutes les **12 secondes** environ, donc une
  epoch dure environ **6 minutes et 24 secondes**.
* **Responsabilité des validateurs**  
  Les validateurs sont responsables de proposer des blocs et de voter pour la validité des blocs
  dans chaque epoch. Lors de chaque epoch, un nouveau groupe de validateurs est choisi pour proposer
  et attester les blocs suivants.
* **Sélection des validateurs**  
  À chaque epoch, les validateurs sont organisés en **groupes** (appelés "attestations committees")
  et sont responsables de la validation des blocs. Ces groupes sont dynamiques et changent d'epoch
  en epoch, ce qui permet de répartir les responsabilités et d'éviter la centralisation de la
  validation des blocs.

### Pourquoi les Epochs sont importantes

* **Rotation des validateurs**  
  À chaque epoch, les validateurs sont régulièrement réassignés à de nouveaux rôles, ce qui réduit
  le risque de manipulation ou de collusion entre les validateurs.
* **Suivi de la progression du réseau**  
  Les epochs permettent également de suivre l'état d'avancement du réseau Ethereum 2.0, facilitant
  ainsi la gestion et la sécurisation des transactions.

## Checkpoints

Un **checkpoint** est un moment clé dans le processus de validation des blocs sur la [Beacon Chain](/fr/la-beacon-chain).
C'est un point spécifique dans le temps où le réseau marque que certaines transactions sont
désormais finalisées et qu'elles ne peuvent plus être modifiées.

### Fonctionnement des Checkpoints

* **Quand se produit un checkpoint ?**  
  Un checkpoint se produit à la fin de chaque epoch, c'est-à-dire tous les 32 blocs. Chaque
  checkpoint contient des informations sur les blocs validés durant cette époque et sert de
  **référence pour la finalité** des blocs.
* **Finalité des transactions**  
  Lorsqu'un checkpoint est atteint, les blocs validés jusqu'à ce moment sont considérés comme
  **finalisés**. Cela signifie que, une fois qu'un bloc est validé à un checkpoint, il ne peut plus
  être annulé ou modifié, ce qui protège l'intégrité du réseau. Les transactions dans ces blocs sont
  considérées comme irréversibles.
* **Casper FFG ([Friendly Finality Gadget](https://tokens-economy.gitbook.io/consensus/chain-based-proof-of-stake/proof-of-stake-casper-pos-casper))**  
  Ce mécanisme est utilisé pour déterminer la finalité des blocs à travers les checkpoints. Le
  système nécessite un consensus majoritaire (66%) des validateurs pour valider un checkpoint. Si les
  validateurs sont d'accord sur le checkpoint, celui-ci devient finalisé, et les blocs précédents
  sont définitivement intégrés à la chaîne.[^1]

### Pourquoi les Checkpoints sont importants

* **Finalité rapide**  
  Contrairement au **Proof of Work**, qui nécessite plusieurs confirmations de blocs pour assurer
  leur sécurité, le PoS permet de finaliser rapidement les transactions après quelques blocs. Les
  checkpoints permettent donc une **finalité rapide** des transactions, ce qui est crucial pour
  garantir que les transactions ne soient pas réversibles.
* **Sécurité renforcée**  
  Un checkpoint assure que même si un validateur tente de tricher, il doit corrompre une majorité de
  validateurs pour réécrire l'historique, ce qui est extrêmement difficile et coûteux. En cas de
  déviation de la chaîne (par exemple, une attaque ou une fraude), le réseau peut revenir à un point
  de contrôle antérieur.

## Relation entre Epochs et Checkpoints

* **Un checkpoint marque la fin d'une epoch**  
  À la fin de chaque epoch, les validateurs déterminent
  si le bloc de cette epoch est valide et finalisé. Ce processus aboutit à la création du
  checkpoint.
* **Les checkpoints sont essentiels pour assurer la finalité du réseau**  
  En utilisant le mécanisme de [Casper FFG](https://tokens-economy.gitbook.io/consensus/chain-based-proof-of-stake/proof-of-stake-casper-pos-casper),
  chaque checkpoint devient une "ancre" qui sécurise les blocs précédents. Cela permet au réseau
  d'avoir une finalité rapide, contrairement à Ethereum 1.0 (PoW), où il fallait attendre plusieurs
  confirmations pour être sûr qu'une transaction ne serait pas inversée.

## **Exemple de scénario**

* Imaginons qu'une transaction `A` se produise dans un bloc sur la Beacon Chain. À chaque epoch, les
  validateurs votent pour attester ce bloc. Après la fin de l'epoch (32 blocs), un checkpoint est
  atteint. Si la majorité des validateurs atteste ce checkpoint, la transaction `A` est alors **finalisée**.
* Si quelqu’un tente de modifier la transaction `A` ou d’effectuer un réorganisation de la blockchain
  (comme c'était possible avec le PoW dans Ethereum 1.0), cela serait impossible une fois le
  checkpoint atteint et validé, car le bloc et la transaction sont désormais considérés comme
  irréversibles.

### Conclusion

* Les **Epochs** sont des périodes fixes dans le processus de validation des blocs, permettant de
  gérer les validateurs et la progression du réseau.
* Les **Checkpoints** marquent les moments où les blocs sont validés et où les transactions
  deviennent **finalisées**.

Ensemble, ces mécanismes garantissent la **sécurité, la finalité rapide et la décentralisation** du
réseau Ethereum 2.0, tout en permettant aux validateurs de participer à la gestion du réseau de
manière équitable et organisée.


[^1]: Si plus de 2/3 des validateurs ne parvient pas à s'entendre sur un bloc,
    celui-ci reste en attente de finalisation ; il faut alors attendre l'epoch suivante où une nouvelle tentative
    de validation aura lieu.  
    Même si un checkpoint n'est pas immédiatement finalisé, les blocs peuvent continuer à accumuler
    des attestations au fur et à mesure des epochs, et il devient de plus en plus difficile pour une
    faction malveillante de manipuler les blocs précédents car l'histoire devient de plus en plus
    sécurisée à chaque epoch successive.  
    Le mécanisme de « [fuite d'inactivité](https://eth2book.info/bellatrix/part2/incentives/inactivity/) » s'active lorsque la chaîne
    échoue à finaliser plus de deux epochs consécutifs. Il pénalise progressivement les ETH des
    validateurs qui ne participent pas à la majorité, ce qui aide le réseau à retrouver un consensus
    et à finaliser les blocs.  
    Pour plus de détails sur ce processus, on peut consulter [cet article en anglais sur la finalité](https://blog.ethereum.org/2016/05/09/on-settlement-finality)
    qui décrit plus en profondeur le fonctionnement des checkpoints dans Ethereum.
