---
title: "Understand the Decentralized Finance (DeFi)"
date: 2025-12-97 17:00:00
id: defi-understand
lang: en
description: "Decentralized Finance (DeFi) is a collection of decentralized, open-source, peer-to-peer financial services built on blockchain technology."
categories:
- [EN, Tech, Blockchain]
- [EN, Tech, DeFi]
- [EN, Tech, Cryptography]
tags:
- blockchain
- defi
- bookmark
- cryptography
---

[Cet article existe en Français](/fr/defi-comprendre/).

{% note %}
This is the summary of the MOOC course [Mastering Web3](https://www.unic.ac.cy/mastering-web3-unic-s-brand-new-free-mooc-offering-a-blockchain-verifiable-certificate/) taken at [University of Nicosia](https://www.unic.ac.cy/).
{% endnote %}

## Defining DeFi

### Traditional Finance (TradFi)

We will use the term TradFi to refer to the financial services industry, encompassing the management of
money, credit, banking, investments, assets & liabilities, etc.
* At the center of TradFi’s services and activities lie centralized institutions that act as intermediaries.
So, the term CeFi, short for Centralized Finance, may be used as synonymous to TradFi.
* CeFi institutions include central banks, commercial banks, and all types of financial service providers.
* TradFi is based on two main pillars:
* Custodial approach: assets are entrusted to CeFi entities for safekeeping and management
* Permissioned nature: only vetted individuals and organizations can participate in the financial system; user
activity is closely tied to identity.
The ability to trade with untrusted entities through a trusted intermediary has arguably been a driver of
economic growth for centuries.

### Drawbacks of TradFi

* Financial exclusion: Affects 1.4-1.5 billion people globally (24-25%), with smaller portions of
the population in Europe (3.6%) and the U.S. (4-5%) remaining unbanked and lacking access
to traditional financial services.
* High costs and slow speeds: Remittances carry high fees, averaging 7%, and can rise to
10.53% when using banks. Transfers are often artificially delayed, increasing inefficiency.
* Politicization of money: Central banks and governments can manipulate currencies, print
money, and impose capital controls, leading to market distortions and economic instability.
* Lack of transparency and systemic risks: Traditional finance is opaque, leading to
information asymmetries, systemic risks, and scandals like the Libor manipulation.
* Crises and bank runs: Traditional financial systems are vulnerable to economic crises and
sudden withdrawals, destabilizing the system and creating further risk for individuals. 

### DeFi Defined

Decentralized Finance (DeFi) is a collection of decentralized, open-source, peer-to-peer
financial services built on blockchain technology, minimizing reliance on third parties like banks.
* Unlike fintech, which enhances traditional finance, DeFi enables financial activities such as
lending, borrowing, and trading without centralized institutions, using smart contracts to
manage transactions.
* DeFi revolutionizes traditional services by removing intermediaries, allowing users to
interact directly in a trustless environment, reducing costs and increasing efficiency.
* DeFi not only replicates traditional financial functions but also enables new, innovative
services and business models that are not feasible in conventional financial systems.
* Users retain full control of their assets, eliminating the need for custodial services.
* DeFi operates 24/7 without the need for banking hours or delays in processing, offering
global accessibility.

### DeFi characteristics

Features that differentiate public blockchains (on which DeFi runs) from the private networks used
in TradFi:
* Open/Permissionless & Censorship-Resistant: Public blockchains allow unrestricted access to DeFi,
with no need for identity proof or authorization, and no single entity can block valid transactions.
* Peer-to-Peer Transactions: Transactions occur directly between users, eliminating the need for
intermediaries.
* Decentralized Validation: Transaction validation is distributed among independent network participants,
ensuring no central authority controls the process.
* Public Transparency: All transactions and state changes are publicly accessible and verifiable by anyone.
* Immutable Records: Once recorded, transactions cannot be modified, ensuring tamper-proof records.
* Borderless Operations: DeFi operates globally without geographical restrictions, allowing anyone with
internet access to participate.

### DeFi is constantly growing

<picture>
<img alt="DeFi is constantly growing" src="/media/defi-understand/defi-growing.webp">
<figcaption>
<span><a href="https://a16zcrypto.com/posts/article/state-of-crypto-report-2025/">Source</a>.</span>
</figcaption>
</picture>


● Since DeFi's
inception, DEXs
have grown to
account for 10% of
spot crypto
trading, up from
0% four years ago.
● Over $150 billion
is locked in
thousands of DeFi
protocols.

## The DeFi stack

DeFi apps can be considered at different layers of abstraction

<picture>
<img alt="defi layers abstraction" src="/media/defi-understand/defi-layers-abstraction.webp">
<figcaption>
<span><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3571335">Source</a>.</span>
</figcaption>
</picture>

### The Settlement Layer

**The Settlement Layer is where transactions are ultimately settled**.

The settlement layer is the foundation for all activities in a decentralized ecosystem.
* **It consists of the underlying blockchain, as well as its native asset**.
* For example, in the case of DeFi apps on Ethereum, the settlement layer includes the Ethereum
blockchain and Ether (Ethereum’s native asset).
Settlement layers:
* **Store information, value, and ownership securely**
* **Ensure that status changes (balances, ownership, etc) follow the blockchain’s rules**
* **Enable trustless execution**

As settlement is the first layer in the stack, the blockchains are referred to as Layer 1 (L1)
blockchains.

### The Asset Layer

**The Asset Layer includes all tokens used in DeFi apps**.

The Asset layer refers to both the native (L1) & non-native assets, it consists of **all assets** that are issued on top of the settlement layer.  
This includes the network’s native asset (e.g., in the case of Ethereum, Ether) but also other tokens that are issued according to L1’s rules.

Each L1 blockchain has its own rules for token issuance, encapsulated in standards.
* For example, **ERC20** is Ethereum’s standard for fungible tokens, **ERC721** is Ethereum’s standard for non-fungible tokens, **ERC1155** is Ethereum’s standard for semi-fungible tokens, **ERC1400** is Ethereum’s standard for security tokens, etc.
* Similarly, **SPL** is Solana’s fungible token standard, **BEP20** is BSC’s, **BEP721** is BSC’s standard for non-fungible tokens, **BEP1155** is BSC’s standard for semi-fungible tokens, **BEP1400** is BSC’s standard for security tokens, etc.

#### Native vs. non-native tokens serve different functions

**Native tokens**
* They are the lifeblood of the L1 blockchain, underpinning its basic functions and fueling all apps built on it.
* Examples: ETH (Ethereum), BNB (BSC), AVAX (Avalanche), SOL (Solana), etc.
**Non-native tokens**
* All other tokens used in specific applications, serving different functions.
* Examples: UNI (Uniswap, a decentralized exchange), AAVE (Aave, a lending platform), MKR/DAI (Maker), etc.

One can found an [exhaustive list of all token related standards proposed for the Ethereum network](https://github.com/PhABC/ethereum-token-standards-list)

### The Protocol Layer

The Protocol Layer is where most DeFi apps lie, it **includes the core functionality of dApps**, such as decentralized exchanges, lending platforms, and stablecoins.

**The Protocol Layer is the heart of Decentralized Applications (dApps)**:
* Hosts the essential functionalities of dApps, particularly in the DeFi sector.
* dApps are executed through smart contracts on this layer.
**Implementation and Interaction**:
* Smart contracts form the backbone of dApps.
* Users typically engage with these contracts via familiar Web2 interfaces, linking to the Application Layer
**Diverse Functionalities Within the Protocol Layer**:
* Facilitates decentralized exchanges (DEXs) for direct, peer-to-peer asset trading.
* Enables lending and borrowing platforms for decentralized finance transactions.
* Supports complex financial instruments like derivatives.
* Includes a wide range of other applications: stablecoins, yield farming protocols, liquidity pools, prediction markets, insurance, and asset management tools.

### The Application Layer

**The Application Layer enables most users to access DeFi apps, it's a Gateway to DeFi for Users**.
Designed for users who don't directly engage with the Protocol Layer or smart contracts, it provides a user-friendly interface, making DeFi accessible to a broader audience.

**Simplifying DeFi Interactions**:
* DeFi applications offer intuitive User Interfaces (UIs) for ease of use.
* These interfaces cater to non-experts, simplifying complex financial interactions.
**Role and Significance**:
* Acts as the front-end layer, bridging users to underlying DeFi smart contracts.
* Essential for streamlining and demystifying the user experience in decentralized finance.

While web front-ends are crucial for accessing DeFi apps, they are not the apps themselves. These interfaces serve as the visible layer, allowing efficient and user-friendly interaction with complex blockchain protocols.

### Aggregation Layer

**The Aggregation Layer consolidates various DeFi services into a single platform**.
It aggregates multiple decentralized applications (dApps) and protocols, providing users with a unified interface to access a wide range of financial services.

**Key Features**:
* **Unified Interface**: Offers a single entry point for accessing multiple DeFi services.
* **Efficiency**: Reduces the need for users to navigate multiple platforms, saving time and effort.
* **Accessibility**: Makes complex financial services more accessible to a broader audience.

**Role and Significance**:
* Acts as the middle layer, connecting users to the Application Layer and Protocol Layer.
* Facilitates seamless interaction between users and the underlying DeFi ecosystem.

**The Aggregation Layer consolidates various DeFi services into a single platform**.
It aggregates multiple decentralized applications (dApps) and protocols, providing users with a unified interface to access a wide range of financial services.

**Examples of aggregators**:
* [DeBank](https://debank.com/): Offers a holistic view of users' DeFi assets and liabilities, supporting numerous protocols and facilitating easy portfolio tracking and management.
* [Yearn Finance](https://yearn.fi/): Automates the process of yield farming, moving funds across different lending protocols to maximize interest earnings for users.

## Decentralized Lending

**Decentralized Lending is a decentralized autonomous financial service that algorithmically governs loans through smart contracts**.

**Key Features**:
* **Smart Contract Governance**: Utilizes smart contracts to automate and govern loan processes.
* **Decentralized Decision Making**: Enables users to participate in decision-making processes through decentralized governance mechanisms.
* **Risk Management**: Implements risk management protocols to ensure the safety and stability of loans.


**Advantages of Decentralized Finance**
* Aims to improve the efficiency of capital distribution and reduce associated costs.
* Strives to remove barriers to financial inclusion, promoting economic privacy and freedom.
* While these goals are common, different platforms vary in their effectiveness and approach to achieving them.

**Open Access and Simplified Processes**

* No central counterparty oversees or sets conditions for deposits and loans.
* Eliminates the need for credit histories or extensive financial records, democratizing access to financial services.
* Enables anyone to lend their assets and earn interest, or borrow crypto by providing collateral.

| Collateral | Loans are typically overcollateralized | Loans are typically undercollateralized or unsecured |
| Maturity | Fixed or Perpetual | Typically fixed |
| Risks to lender | Platform risk, protocol risk, volatility, governance risk, rug pulls, etc. | Default risk, systemic risk |
| Risks to borrower | Forced liquidation | Loss of collateral, legal consequences |

| Liquidity | High | Low |
| --- | --- | --- |
| User control | High | Low |
| Interest rates | Variable | Fixed |
| Collateral | Required | Optional |
| Maturity | Flexible | Fixed |
| Risks to lender | Platform risk, protocol risk, volatility, governance risk, rug pulls, etc. | Default risk, systemic risk |
| Risks to borrower | Forced liquidation | Loss of collateral, legal consequences |

| User control | High | Low |
| --- | --- | --- |
| Interest rates | Variable | Fixed |
| Collateral | Required | Optional |
| Maturity | Flexible | Fixed |
| Risks to lender | Platform risk, protocol risk, volatility, governance risk, rug pulls, etc. | Default risk, systemic risk |
| Risks to borrower | Forced liquidation | Loss of collateral, legal consequences |

### TradFi lending can be undercollateralized – but at a cost

In exchange for providing loans, TradFi lenders usually require:
* **Some reward**, typically in the form of interest rate (which, in turn, reflects the creditworthiness of the borrower).
* **Some insurance** that the money will be repaid, typically in the form of collateral, credit history checks and KYC. TradFi lenders can also make borrowers repay by law.

For these reasons, lenders can provide **undercollateralized or even unsecured loans**: **loans where the value of the collateral is less than the value of the loan (or even zero)**.  
This is because the additional risks/costs for lenders are covered by the interest rates they charge.  
To cover the additional risks/costs for lenders, interest rates in TradFi are typically high.

But what about DeFi lending, where no legal, credit history or KYC processes are typically applied?

### DeFi loans must be overcollateralized

In pseudonymous, permissionless & open finance, it would be reasonable to assume that if the
value of the collateral fell below the value of the loan, there would be no incentive to pay back the debt.  
**This is known as moral hazard**

To mitigate this, DeFi loans are typically **overcollateralized**:
* In other words, a borrower can only borrow **less** money than the value of their collateral.
* **If the value of the collateral later falls below the outstanding value of the loan, the collateral will be (partially or wholly) liquidated**, i.e., sold in the open market to repay the lender.
* No moral hazard; no need for KYC, credit history checks or calling the authorities.

### Popular DeFi lending platforms

* [Aave](https://aave.com/): Offers a decentralized lending platform with a focus on liquidity and user control.
* [Compound](https://compound.finance/): Provides a decentralized lending platform with a focus on interest rates and user control.
* [MakerDAO](https://makerdao.com/): Known for its DAI stablecoin, MakerDAO allows users to borrow against their cryptocurrency by creating Collateralized Debt Positions (CDPs).
* [DyDx](https://www.dydx.xyz/): A non-custodial decentralized exchange and lending platform that offers margin trading along with borrowing and lending capabilities

## Decentralized exchanges

Decentralized exchanges are smart contracts that mimic CEX functionality.

DEXes are decentralized applications (dApps) that facilitate token swaps using smart contracts, removing the need for a central intermediary. They allow users to buy and sell tokens in exchange for other tokens in a peer-to-peer manner.

**Key Features of DEXes**:
* **Peer-to-Peer Trading**: Enables direct trades between users, cutting out intermediaries like brokers, market makers, and custodians.
* **Self-Custody**: Users retain control over their funds, enhancing security and autonomy.
**Advantages and Integration in DeFi**:
* **Composability**: DEXes can seamlessly interact with other DeFi applications, fostering a more integrated and versatile financial ecosystem.
* **Interoperability**: Facilitates easy interaction and compatibility with a variety of DeFi applications and protocols.
* **Potential for Lower Transaction Costs**: Theoretically, the absence of intermediaries in DEXes can lead to reduced transaction fees.
* **Enhanced Security**: DEXes operate on a decentralized network, reducing the risk of single points of failure and enhancing security.
* **User Control**: Users have full control over their assets, enabling them to make informed decisions and manage their finances more effectively.

### Background: Understanding order books

The basic notion on which a CEX operates is that of an **order book**, which collects the volume of all buy (bid) and sell (ask) orders for an asset. Conversely, a DEX will typically rely on **liquidity pools and automated market makers**.

To understand the difference, let’s first explain what an order book is.
* An order book collects the volume of all buy (**bid**) and sell (**ask**) orders for an asset.
* The current price of the asset is determined by where bids and asks meet (are **matched**).

Order books are effective in **liquid markets** as they minimize **slippage** (the difference between the expected and actual price of a trade).

CEX liquidity is provided by **market makers (MMs)**, whose job is to maintain a stream of bid and ask orders in the book.


### Example of an order book snapshot

<picture>
<img alt="Example of order-book snapshot" src="/media/defi-understand/order-book.webp">
<figcaption>
<span>Example of an order book snapshot.</span>
</figcaption>
</picture>

**It is, however, very difficult to build a DEX using order books**.  
**Posting orders would require on-chain transactions, which cost gas fees and the same would be true for cancelling orders.**

As a result, on-chain orders would become very expensive, especially for market makers (MMs) and high-frequency traders (HFTs).

Given that MMs/HFTs are important for efficient market operations, an order book-based DEX would probably **not be illiquid**.  
Illiquidity translates to **high slippage, lost trades and inefficient price discovery**.  
These problems would be exacerbated by the **time delay** introduced by block confirmation times; transactions need to be confirmed on the blockchain, which, among others, opens the possibility for frontrunning trades.

A Solution is to **replace order books with liquidity pools**.

**A liquidity pool is a reserve of funds held in a smart contract.**
* LPs are one of the **foundational mechanisms** in DeFi.
* They are essential, not only in DEXs, but also in dLending/dBorrowing, synthetic assets, insurance, etc.

LPs aim to overcome the liquidity trap in decentralized trading by **always ensuring sufficient liquidity**.

[Bancor](https://bancor.network/) was the first protocol that utilized LPs, but they were popularized by [Uniswap](https://uniswap.org/).
* Other popular DEXs that use LPs are [Curve](https://curve.fi/) (multi-blockchain), [Pancakeswap](https://pancakeswap.finance/) (BSC), [Balancer](https://balancer.fi) (Ethereum), etc.

**In LP-based DEXs, anyone can become a market maker by providing liquidity for a token pair**.  
This also means that there are **no listing requirements**, such as those found in CEXs

### Popular decentralized exchanges

* [Uniswap](https://uniswap.org/): The largest decentralized exchange by volume, operating on Ethereum.
* [SushiSwap](https://sushiswap.fi/): A decentralized exchange that offers a user-friendly interface and a focus on liquidity and user control.
* [Pancakeswap](https://pancakeswap.finance/): A popular DEX on Binance Smart Chain.
* [Balancer](https://balancer.finance/): Focuses on automated portfolio management with
liquidity pools that adjust to market movements.
* [Curve](https://curve.fi/): Specializes in stablecoin trading with low slippage and fees.

## Conclusions

* DeFi is transforming the financial landscape by allowing users to access financial services in a decentralized, peer-to-peer manner.
* Key DeFi characteristics include: open/permissionless access, peer-to-peer transactions, decentralization, public verifiability, immutability, and borderless functionality.
* The DeFi stack consists of multiple layers: Settlement Layer, Asset Layer, Protocol Layer, Application Layer, and Aggregation Layer.
* Decentralized lending and borrowing platforms operate through smart contracts, removing the need
for intermediaries and traditional credit checks.
* DeFi loans are typically overcollateralized, eliminating moral hazard and reducing risks for lenders.
* Decentralized exchanges (DEXs) allow users to trade tokens without intermediaries by relying on
liquidity pools rather than traditional order books.
* DeFi presents unique opportunities for innovation, but also carries risks such as platform risk, protocol risk, and governance risk.

## Further reading
* [DeFi Pulse](https://defipulse.com/)
* [DeFi Llama](https://defillama.com/)
* [DeFi Pulse](https://defipulse.com/)
* [Navigating DEXs and Decentralized Lending/Borrowing Platforms](https://www.youtube.com/watch?v=qQO63t9oUBk)
