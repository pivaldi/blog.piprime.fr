---
title: "Post Mortem : La mort de LUNA et TerraUSD, Explication simple"
date: 2025-12-13 21:03:00
id: post-mortem_la-mort-de-luna-et-terrausd-explication-simple
tree_view: true
lang: en
description: "Cet article vous fournira toutes les connaissances nécessaires pour comprendre ce qui s'est passé avec LUNA et UST."
categories:
- [EN, Tech, Blockchain]
- [EN, Tech, Altcoin]
- [EN, Tech, Cryptomonnaie]
tags:
- blockchain
- altcoin
- cryptomonnaie
---

{% note warning %}
Cet article est une traduction de l'article [Post Mortem: The death of LUNA & TerraUSD, Explained Simply](https://lambisdion.medium.com/post-mortem-the-death-of-luna-terrausd-simply-explained-177e0612fb7e) de [Lambis Dionysopoulos](https://lambisdion.medium.com/)
{% endnote %}

Cet article vous fournira toutes les connaissances nécessaires pour comprendre ce qui s'est passé avec LUNA et UST.

## Qu'est-ce que l'UST ?

UST est (était) un stablecoin de l'écosystème Terra. Les stablecoins visent à atténuer la volatilité des
cryptomonnaies et à fournir une unité de compte native de la blockchain en indexant leur prix sur un ou
plusieurs actifs, comme le dollar américain. Ils conservent ainsi la plupart des avantages des
cryptomonnaies non stables, tels que l'ouverture et les transactions sans frontières. Les cryptomonnaies
sont déployées sur des blockchains, et Terra est la blockchain sous-jacente à UST.

## Qu'est-ce que Terra ?

Terra a été créée en 2018 avec l'objectif de servir de plateforme pour une monnaie décentralisée
attractive afin de lutter contre l'inflation élevée et les faibles rendements commerciaux. Pour ce faire,
elle a lancé trois applications principales :
* Anchor, l'équivalent d'une banque blockchain rémunérant les dépôts ;
* Mirror, un protocole de produits dérivés on-chain pour l'investissement ;
* Chai, une application de paiement mobile promettant des frais réduits, du cashback et un règlement rapide.

De nombreuses autres applications ont été développées sur la plateforme Terra, créant un écosystème qui a collecté
31 milliards de dollars de valeur totale bloquée (TVL). La TVL peut être considérée comme une mesure
de la valeur d'un réseau. Elle correspond en quelque sorte aux « actifs sous gestion » appliqués à la
finance décentralisée (DeFi).

<figure>
<a data-fancybox data-src="/media/post-mortem_la-mort-de-luna-et-terrausd-explication-simple/tvl-luna.webp" data-caption="Le TVL correspond globalement aux « actifs sous gestion » mais pour DeFi.">
<img src="/media/post-mortem_la-mort-de-luna-et-terrausd-explication-simple/tvl-luna_thumb.webp" alt="TVL Luna" />
</a>
<figcaption style="margin-top: 0px">
<span>Le TVL correspond globalement aux « actifs sous gestion » mais pour DeFi. <a href="https://lambisdion.medium.com/post-mortem-the-death-of-luna-terrausd-simply-explained-177e0612fb7e">Source</a>.</span>
</figcaption>
</figure>

L'UST, stablecoin de Terra, a joué un rôle crucial dans la croissance de cet écosystème.  
Utilisé comme paire de trading, réserve de valeur et moyen d'échange, il a suscité une forte
demande. Son utilité au sein de l'écosystème Terra, le besoin de stabilité sur des marchés volatils
et des rendements pouvant atteindre 20 % lorsqu'il était proposé aux protocoles DeFi (principalement
Anchor) ont contribué à son essor. Pour bien comprendre cet attrait, il faut savoir que le taux
annuel effectif global (TAEG) moyen des comptes d'épargne est de 0,06 %, contre 2,8 % pour un bon du
Trésor à 10 ans. De plus, les transferts de fonds internationaux sont coûteux et prennent plusieurs
jours.  
En résumé, l'UST (et les stablecoins en général) représente une alternative intéressante aux
monnaies fiduciaires grâce à son absence de frontières, ses rendements plus élevés et, avantage
supplémentaire pour les adeptes des cryptomonnaies, une interchangeabilité plus efficace (plus
simple, moins coûteuse et plus rapide) avec les cryptomonnaies.

Cependant, en finance, rien n'est gratuit. Des rendements plus élevés impliquent un risque
accru, ce qui, dans le cas des bons du Trésor américain, était justifié.

## Comment fonctionne UST (introduction aux stablecoins algorithmiques) ?

En tant que stablecoin algorithmique, l'UST a atteint son ancrage au dollar américain grâce à l'arbitrage.
Cette approche diffère de celle de certaines autres cryptomonnaies stables populaires qui utilisent des
garanties et sont échangeables à parité contre l'actif qu'elles représentent. En théorie, les cryptomonnaies
stables algorithmiques sont plus efficientes en termes de capital, puisqu'elles ne nécessitent pas le
blocage d'actifs en garantie. Elles peuvent également être plus décentralisées, s'appuyant sur les
forces du marché plutôt que sur des intermédiaires pour maintenir leur ancrage.

<figure>
<img src="/media/post-mortem_la-mort-de-luna-et-terrausd-explication-simple/algo-resource-collateral.webp" alt="Triangle algo-resource-collateral" />
</a>
<figcaption style="margin-top: 0px">
<span><a href="https://lambisdion.medium.com/post-mortem-the-death-of-luna-terrausd-simply-explained-177e0612fb7e">Source</a>.</span>
</figcaption>
</figure>

**Cependant, ces avantages se font au détriment de la stabilité**.  
Pour maintenir sa stabilité face au dollar américain, l'UST s'est associée à une cryptomonnaie
« partenaire » appelée [LUNA](https://coinmarketcap.com/fr/currencies/terra-luna/).  
LUNA n'est pas un stablecoin et son cours peut fluctuer librement en fonction de l'offre et de la demande.  
Point important : 1 UST peut toujours être échangé contre 1 $ de LUNA (moins une petite commission) et inversement.  
Concrètement, lors de l'échange , une partie des LUNA est détruite tandis que le reste
est bloqué dans une réserve, ce qui le retire de la circulation. En contrepartie, de nouveaux UST sont créés.
L'UST génère un profit net de 0,02 $. L'augmentation de l'offre d'UST et la pression à la vente exercée
par les arbitragistes qui se tournent vers d'autres actifs, anticipant une réaction similaire de la part des
autres acteurs, font baisser le prix de l'UST. Parallèlement, le prix du LUNA augmente. Ce mécanisme
rend le LUNA d'autant plus attractif que l'utilité et la demande d'UST sont élevées. Investir dans le LUNA,
c'est miser sur l'utilité de l'UST et sur le succès de l'écosystème Terra.
Inversement, si le UST se négocie au-dessus de son cours de référence, disons à 1,02 $, les
arbitragistes sont incités à échanger (et à retirer de la circulation) 1 $ de LUNA contre (de nouveaux)
Luna peut être créée en retirant UST du circuit. Cette fluctuation de l'approvisionnement est essentielle
à la stabilité d'UST.

Lorsque 1 UST = 1 USD, il n'y a aucun intérêt à échanger des LUNA contre des UST ou
inversement . Toutefois, la situation change lorsque le cours de l'UST s'écarte de son taux de change cible.  
Si, par exemple, l'UST se négocie à 0,98 $, les arbitragistes peuvent profiter de cet écart de prix en
l'achetant et en l'échangeant contre 1 $ de LUNA, empochant ainsi la différence de 0,02 $. De ce fait, le
prix de l'UST augmente en raison de la hausse de la demande et de la contraction de son offre, puisque
le LUNA ne peut être créé qu'en détruisant de l'UST. Ce processus entraîne une baisse du prix du LUNA.

Inversement, si le UST se négocie au-dessus de son cours de référence, disons à 1,02 $, les
arbitragistes sont incités à échanger (et à retirer de la circulation) 1 $ de LUNA contre (de
nouveaux) UST, ce qui génère un profit net de 0,02 $.  
L'augmentation de l'offre d'UST et la pression à la vente exercée par les arbitragistes qui se
tournent vers d'autres actifs, anticipant une réaction similaire de la part des autres acteurs, font
baisser le prix de l'UST. Parallèlement, le prix du LUNA augmente. Ce mécanisme rend le LUNA
d'autant plus attractif que l'utilité et la demande d'UST sont élevées. Investir dans le LUNA, c'est
miser sur l'utilité de l'UST et sur le succès de l'écosystème Terra.

## Alors, qu'est-ce qui a mal tourné ?

Plusieurs choses se sont produites simultanément.  
Durant le week-end, l'UST a commencé à se négocier légèrement en dessous de son cours de référence,
ce qui pourrait être attribué à un environnement macroéconomique défavorable, tant dans le secteur
des cryptomonnaies qu'en général. Cet écart de prix a entraîné l'épuisement progressif des réserves
d'UST de [Curve](https://www.curve.finance/dex/ethereum/swap) (certains évoquent une attaque coordonnée), les traders convertissant leurs UST en
d'autres stablecoins, cryptomonnaies ou monnaies fiduciaires. Curve étant la principale plateforme
d'échange décentralisée de stablecoins, la suppression massive de liquidités a envoyé un signal
négatif aux marchés et a accentué la baisse du prix de l'UST, qui s'est encore davantage éloigné de
son cours de référence de 1 $.

<figure>
<a data-fancybox data-src="/media/post-mortem_la-mort-de-luna-et-terrausd-explication-simple/balance-ust.webp" data-caption="Proportion d'équilibre.">
<img src="/media/post-mortem_la-mort-de-luna-et-terrausd-explication-simple/balance-ust_thumb.webp" alt="Proportion d'équilibre de l'UST" />
</a>
<figcaption style="margin-top: 0px">
<span><a href="https://lambisdion.medium.com/post-mortem-the-death-of-luna-terrausd-simply-explained-177e0612fb7e">Source</a>.</span>
</figcaption>
</figure>

Vous souvenez-vous de la banque crypto « [Anchor](https://academy.bit2me.com/fr/que-es-anchor-protocol/) » mentionnée précédemment, qui offrait un
rendement de 20 % sur les UST ? L'incertitude quant à la capacité des UST à maintenir leur ancrage
a entraîné un exode massif, avec plus de 10 milliards d'UST retirés du protocole et vendus sur le marché.

La confiance s'érodant envers UST et l'écosystème Terra dans son ensemble, LUNA a
également perdu de son attrait, puisqu'il s'agit, comme nous l'avons établi, d'un pari sur le
succès d'UST et de Terra. Cette situation a incité les traders à [vendre à découvert](https://www.challenges.fr/tag_lexique-economique/vente-a-decouvert_5311/) LUNA,
entraînant une nouvelle baisse de son prix.

<figure>
<img src="/media/post-mortem_la-mort-de-luna-et-terrausd-explication-simple/deposit-borrow-ust.webp" alt="Dépôt total vs emprunt total." />
</a>
<figcaption style="margin-top: 0px">
<span>Dépôt total vs emprunt total. <a href="https://lambisdion.medium.com/post-mortem-the-death-of-luna-terrausd-simply-explained-177e0612fb7e">Source</a>.</span>
</figcaption>
</figure>

Si le dollar américain (UST) chute en dessous de son ancrage, sa capacité à retrouver la parité avec
le dollar américain (USD) dépend du maintien d'une valeur raisonnable pour le dollar lunaire (LUNA).
En effet, comme nous l'avons établi, 1 UST est brûlé (retiré de la circulation) pour 1 dollar de LUNA
nouvellement créé. Bien que ce mécanisme fonctionne correctement en temps normal, il se rompt
sous une pression extrême, car l'échange massif d'UST contre du LUNA entraîne la dévaluation de
ce dernier à mesure que son offre augmente. Plus l'UST s'éloigne de son ancrage, plus les
arbitragistes le brûlent pour obtenir du LUNA, et plus le LUNA se dévalue. La vente massive d'UST
sur le marché libre empêche également l'UST de retrouver son ancrage, ce qui déclenche une spirale
infernale.

## Quel a été l'impact sur le marché en général ?

La [Luna Foundation Guard](https://lfg.org/) (LFG), entité à l'origine de Terra et d'UST, est chargée de défendre
l'ancrage de l'UST au dollar américain.  
Ses réserves étaient principalement constituées de bitcoins, qu'elle vendait progressivement pour
soutenir le cours de l'UST. L'afflux de bitcoins vendus par la LFG a inondé le marché, chaque
bitcoin supplémentaire se vendant à un prix inférieur, rendant le sauvetage de l'UST plus difficile.
Finalement, la LFG a épuisé ses réserves de bitcoins en quelques jours, sans parvenir à défendre
l'ancrage de l'UST.

<figure>
<a data-fancybox data-src="/media/post-mortem_la-mort-de-luna-et-terrausd-explication-simple/reserve-balance-usd.webp" data-caption="Solde de réserve BTC/ERC-20/Terra/AVAX.">
<img src="/media/post-mortem_la-mort-de-luna-et-terrausd-explication-simple/reserve-balance-usd_thumb.webp" alt="Solde de réserve BTC/ERC-20/Terra/AVAX" />
</a>
<figcaption style="margin-top: 0px">
<span><a href="https://lambisdion.medium.com/post-mortem-the-death-of-luna-terrausd-simply-explained-177e0612fb7e">Source</a>.</span>
</figcaption>
</figure>

## Que va-t-il se passer maintenant ?

Les validateurs ont suspendu la blockchain Terra afin de trouver une solution.  
Cet incident porte un coup dur à l'image ouverte et résiliente du réseau. Terra peut choisir
d'abandonner complètement UST, afin de tenter de récupérer une partie de la valeur de LUNA, ou bien
abandonner à la fois UST et LUNA au profit d'un nouveau jeton. Cela pourrait également sonner le
glas de l'écosystème Terra dans son ensemble.

<figure>
<img src="/media/post-mortem_la-mort-de-luna-et-terrausd-explication-simple/twit-ust-halted.webp" alt="Twit : ust doit s'arréter" />
</a>
<figcaption style="margin-top: 0px">
<span>La blockchain Terra doit d'arrêter<a href="https://lambisdion.medium.com/post-mortem-the-death-of-luna-terrausd-simply-explained-177e0612fb7e">Source</a>.</span>
</figcaption>
</figure>
