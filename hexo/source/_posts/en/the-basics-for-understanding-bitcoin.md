---
title: The Basics for Understanding Bitcoin
date: 2025-07-09 00:23:25
id: the-basics-for-understanding-bitcoin
lang: en
description: "Gradually, then suddenly: a framework for understanding bitcoin as money."
categories:
- [EN, Non Tech, Bitcoin]
tags:
- bitcoin
---

{% note %}
[This article is available in French](/fr/les-bases-pour-comprendre-bitcoin/)
{% endnote %}

When we talk about Bitcoin, it can mean three things:

1. **a computer protocol**;
1. **a means of payment**;
1. **a unit of account** in the process of being adopted.

## The Bitcoin Protocol

Just like `http/https` for the web, **the `bitcoin` protocol (lowercase)
is the set of rules governing the operation of the Bitcoin network**.  
It enables the creation, validation, and security of transactions on **a** blockchain, which is
a kind of distributed and decentralized database.

This protocol was initially designed by Satoshi Nakamoto, who published a white paper entitled
« [Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf) » in 2008.  
This document laid the foundations of the system, allowing Bitcoin to become the first
decentralized digital currency.

**The Bitcoin protocol is based on principles such as cryptography, transaction validation by
network nodes, and mining**, which is a computationally intensive process
~~that allows new blocks to be added to the blockchain~~ that ensures the decentralization of the
protocol by allowing randomness to emerge from the network itself.  
The network’s nodes maintain an independent copy of the blockchain, ensuring the
transparency and security of transactions.

## Bitcoin as a Means of Payment

Bitcoin is a robust payment system because it allows direct, secure, borderless, intermediary-free, and uncensorable transactions.  
It does, however, have two minor current limitations:
- the confirmation time for a transaction averages 10 minutes.  
  However, the [Lightning network solves Bitcoin’s scalability issue](https://en.wikipedia.org/wiki/Lightning_Network)[^1].
- transaction fees are variable and can sometimes be high depending on network congestion.

## Is Bitcoin Becoming a Unit of Account?

### Characteristics of a Unit of Account

The essential characteristics for something to be considered a unit of account are:
- **Universality in the area of use**  
  It must be widely recognized and accepted in the community or economy concerned so that
  everyone uses it to express the value of goods and services.
- **Relative stability of value**  
  Its value must be sufficiently stable over time to enable reliable comparisons. A
  unit of account that is too volatile makes price setting and contracts difficult.
- **Divisibility**  
  It must be divisible into smaller units to express the value of low-value goods or services,
  but also be aggregatable for high-value transactions.
- **Fungibility**  
  Fungibility is the ability of something to be replaced by another of the same kind. Money is
  fungible because one 10-euro bill is worth another, regardless of its history or previous owners.
- **Measurability and simplicity**  
  It must allow prices, debts, salaries, profits, etc. to be expressed
  clearly, understandably, and unambiguously.
- **Linguistic and accounting portability**  
  It must be easily usable in accounting records, contracts, and economic communication.

### Does Bitcoin Have the Characteristics of a Planetary Unit of Account?

- **Universality in the area of use**  
  [Bitcoin is increasingly recognized and used worldwide](/en/growing-recognition-and-acceptance-of-bitcoin-worldwide/).
- **Relative stability of value**  
  For now, Bitcoin is not a stable enough asset when converted to dollars.  
  Historically, Bitcoin is 5 to 8 times more volatile than gold; its volatility, though still
  high (60‑80%), tends to decrease as markets mature.  
  Here is a chart comparing the annualized volatility[^2] of Bitcoin since its creation to that of
  gold, rescaled from 1944 to match the same timeline:
  <figure>
  <img src="/media/les-bases-pour-comprendre-bitcoin/volatilite_bitcoin_vs_or.webp" alt="Annualized volatility of Bitcoin versus gold, rescaled since 1944" />
  <figcaption style="margin-top: 0px">
  <span>Annualized volatility of Bitcoin since 2009 versus gold, rescaled since 1944 to match the same timeline</span>
  </figcaption>
  </figure>

- **Divisibility**
  Bitcoin is the most divisible asset in the world; the smallest unit of Bitcoin is called the Satoshi (named after Bitcoin’s creator) and is worth 0.00000001 BTC (10^-7 BTC).
- **Fungibility**
  The Nanterre commercial court declared that Bitcoin is a “fungible intangible asset,” similar to fiat currency.[^3]  
  Moreover, Bitcoins are also considered fungible assets because they are apolitical,
  borderless, and functionally similar, with each unit of Bitcoin having the same
  value.  
  However, it should be noted that, since Bitcoin is traceable, **some service providers**
  may block Bitcoins that have been obtained illegally.[^4]
- **Measurability and simplicity**
  Bitcoin is all the more measurable as its production is limited: there will never be more than
  21 million Bitcoins in circulation, a limit that is written into the Bitcoin protocol.
- **Linguistic and accounting portability**
  - The symbol **₿** (like \$ or €) is recognized internationally.
  - Bitcoin addresses (`bc1q...`) and units (`satoshi`, `BTC`) are **independent of human language**.
  - Transactions use universal technical formats (hash, JSON, hexadecimal) requiring **no translation**.
  - Interfaces, wallets, and documentation are translated into **dozens of languages**, supporting global adoption.
  - Bitcoin retains its **constant identity** across countries: same name, same units, no cultural conversion.
  - 1 BTC = 100,000,000 satoshis → high **accounting precision** suited to both micro and macro-transactions.
  - The Bitcoin blockchain acts as a **universal, transparent, and traceable accounting ledger**, accessible everywhere.
  - Compatible with standard export formats (CSV, JSON, API) → **easy integration** into accounting software (ERP, CRM...).
  - Bitcoin is subject to **no national accounting standards** (IFRS, GAAP…) but can be integrated as needed for regulatory purposes.
  - Each transaction is identifiable by a **unique hash**, facilitating **auditing** and **verification of records**.

[^1]: See also the [Lightning Network explainer on Investopedia](https://www.investopedia.com/terms/l/lightning-network-bitcoin.asp) or, in French, [interview with Thaddeus Dryja, co-inventor of the Lightning Network](https://bitcoin.fr/entretien-avec-thaddeus-dryja-co-inventeur-du-lightning-network/)
[^2]: See [Measuring volatility in finance (Wikipedia)](https://en.wikipedia.org/wiki/Volatility_(finance))
[^3]: [Bitcoin recognized as a fungible asset - CoinDesk](https://www.coindesk.com/policy/2020/03/06/french-court-recognizes-bitcoin-as-fungible-replaceable-asset/) or, in french, [France: the court considers Bitcoin a fungible intangible asset, just like the euro](https://cryptoast.fr/france-la-justice-considere-le-bitcoin-comme-un-actif-incorporel-fongible-au-meme-titre-que-leuro/)
[^4]: [How law enforcement tracks and seizes bitcoin - MIT Technology Review](https://www.technologyreview.com/2023/01/23/1067019/crypto-crime-bitcoin-tracing-chainalysis/) or, in French [The FBI tries to prevent North Korean Lazarus hackers from selling $40 million in bitcoins](https://www.usine-digitale.fr/article/le-fbi-tente-d-empecher-la-vente-de-40-millions-de-dollars-de-bitcoins-par-les-hackers-nord-coreens-lazarus.N2162692)

