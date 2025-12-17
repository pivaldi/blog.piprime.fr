---
title: "Blockchain FAQ of The Cambridge Blockchain Network Sustainability Index"
date: 2025-12-16 22:39:34
id: faq-blockchain
lang: EN
description: "The Blockchain FAQ of the University of Cambridge."
categories:
- [EN, Tech, Blockchain]
- [EN, Tech, Bitcoin]
tags:
- blockchain
- bitcoin
- nft
- defi
- dapps
---

This article is available in [French](/fr/faq-blockchain).

{% note %}
This FAQ comes from the [The Cambridge Blockchain Network Sustainability Index (CBNSI)](https://ccaf.io/cbnsi/about/faq).  
This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).
{% endnote %}

## Blockchain Basics

### What is a public blockchain

A public blockchain is a publicly distributed ledger where information is immutable - such as transactions on the Bitcoin blockchain - and anyone can access and participate in it. There exists no central authority but a decentralised network composed of independent and pseudonymous actors. To maintain the network, validators are incentivised; they earn a cryptocurrency reward for each block discovered or transaction validated, depending on the blockchain protocol and its underlying consensus mechanism. These mechanisms, whether they require financial resources in the form of collateral or the expenditure of energy, incentivise honest behaviour while punishing dishonest one.

While their decentralised nature leads to redundancy and a high level of security, depending on the level of participation, and transparency, it also comes at a cost. Public Blockchains often have scalability issues and due to their transparency are ill-suited for sensitive data. For this reason, companies interested in using blockchain technology often focus on developing private or consortium blockchains rather than public ones.

### What is private blockchain?

While a public blockchain brings transparency, decentralisation, and security, a private blockchain enacts governing rules to write, edit, or even delete blockchain entries. Exclusively distributed for one or several entities forming a “*consortium*”, the ledger is maintained by very few validators known as *trusted intermediaries*. To become a *trusted intermediary*, actors must disclose their identity and receive approval from the consortium. Then, block validation is arbitrarily operated by these validators relying on e.g., proof-of-authority (PoA). A consensus mechanism where blocks are individually signed by nodes, not depending on capital or energy tenet but on confidence.

Proof-of-authority enables a high level of scalability owing to the limited number of nodes verifying and adding new blocks. However, access restrictions inevitably lead to a centralisation of node operators and thus to a strong dependence on one or a few actors, as well as transparency issues, rendering private solutions unsuitable for many applications on public blockchains.

### What are the challenges with distributed consensus?

A key issue in electronic payment systems is the** double-spending problem**. Given that value is represented digitally, what prevents users from simply copy-pasting their electronic funds and spend them multiple times? Traditional payment systems rely on central bookkeeping and strict rules enforced by operators. In distributed systems with no central authority, however, potential disagreements over valid but conflicting transactions need to be resolved in a different manner.

Research in the field of distributed systems has produced a number of **consensus algorithms** that allow a network of nodes to collectively reach agreement over the state of the system. However, these mechanisms are limited to permissioned environments characterised by a small number of identifiable parties that need to be online at all times. If participation in the consensus process were to be extended to a larger number of actors who are unknown, the network would become vulnerable to **Sybil attacks**. A malicious actor could easily set up an arbitrary number of fake nodes that appear to be operated by different parties and hijack the voting process. This is why simple majority voting in open systems with dynamic membership (where pseudonymous users can join, leave, and re-join at will) does not work in practice.

### What is proof-of-work?

Proof-of-work is a mechanism that protects against Sybil attacks by attaching a financial cost to the vote in an attempt to discourage malicious actors from participating – or at least making it significantly more expensive. In a decentralised network with many mistrusting actors, this cost needs to be objectively measurable, difficult (i.e. expensive) to generate, not fakeable, and easily verifiable by third parties.

Proof-of-work comes in the form of a cryptographic puzzle that participants need to solve. Based on the concept of hashing functions, the puzzle requires participants to find a hash value that must be below a specific target, which is determined by a set difficulty level. Since there is no shortcut for solving the puzzle, brute-forcing via trial-and-error is the only option. This process can be likened to guessing a random number or rolling many dices to arrive at a specific configuration. Solving the proof-of-work is a computationally intensive process that imposes a real financial cost on the ‘solver’ in the form of electricity.

### What is proof-of-stake?

Another common consensus mechanism is referred to as proof-of-stake. This method used to ensure trustless consensus is fundamentally different from proof-of-work. Unlike its predecessor, proof-of-stake substitutes the resource cost associated with the computationally intensive process of guessing random numbers to solve a cryptographic puzzle with a requirement to pledge financial resources, in the form of the blockchain's native tokens, as collateral (so-called "staking"). To participate in attesting or proposing new blocks, so-called validators must lock or "stake" a set number of native tokens, for instance, ether (ETH) in the case of Ethereum. Depending on the protocol design, validators are (randomly) selected to perform certain services for which they get subsequently rewarded. However, in the case of misbehaviour, a financial penalty (so-called "slashing") is imposed upon the malicious or faulty node, effectively reducing the validator's "stake". Given that this method of sanctioning undesirable behaviour replaces the energy-intensive process of finding a valid proof-of-work, it is often praised for being the more environmentally friendly alternative to reaching distributed consensus. However, some argue that this approach leads to several unintended adverse consequences.

### What is the blockchain trilemma?

The blockchain trilemma describes the difficulty of achieving the following three properties simultaneously: **scalability, decentralisation, and security**. The blockchain trilemma describes the difficulty of achieving the following three properties simultaneously: scalability, decentralisation and security. The trilemma describes the inevitable situation in which a blockchain cannot excel in all three properties. In general, it can be said that only two of the three properties are compatible. Developers usually accept optimising one function in favour of another. First, **scalability** implies the ability of a network to perform a growing transactional throughput. Second, **decentralisation** refers to the level of control an individual holds in the overall network or to what extent the network is distributed among members. A blockchain network with many independent block-validating participants generally serves as a reference for a highly decentralised network, while the presence of only a few is an indicator of a considerable degree of centralisation. Lastly, a high-level of **security** is paramount to ensure the integrity of the network; it must be prohibitively difficulty and expensive for an attacker to execute a successful chain reorganisation or take control of the network entirely.

In response to the trilemma, ecosystem developers used their ingenuity to address known limitations of base layers and introduced innovative solutions (i.e., sidechains, optimistic and zero-knowledge rollups, sharding, etc.). Those who developed new base layers generally continued to opt for either decentralisation or scalability. The future will tell if one day a panacea will be found that allows a base layer to excel in all properties.

## Bitcoin

### Bitcoin Basics

#### What is Bitcoin?

**Bitcoin** (with a capitalised **B**) is an open software protocol and peer-to-peer (P2P) network that enables users to transact online without relying on trusted intermediaries. The system is permissionless since it operates without a central authority, allowing anyone in the world to send, store, and receive digital tokens of value without prior approval.

These digital tokens constitute Bitcoin’s native cryptocurrency **bitcoin** (with a lower-case **b**). Like other cryptocurrencies, bitcoins do not have a formal issuer and thus are not someone’s liability. This makes them more akin to digital commodities than digital currencies or other financial assets.

All Bitcoin transactions are denominated in the local unit of account, which is generally represented by the acronym *BTC* (or XBT in exchange tickers). The total supply of bitcoin is fixed at 21 million BTC, with new units being transparently issued as part of the mining process according to a pre-determined schedule. One bitcoin can be subdivided into smaller units: the smallest base unit is called *satoshi*, with one bitcoin equivalent to 100 million satoshis.


#### How is Bitcoin different from traditional electronic payment systems?

Electronic payments are typically enabled through closed book-entry systems where customer accounts are centrally maintained by operators such as commercial banks or credit card companies. These institutions act as gatekeepers that exercise discretionary control over the payment network: this includes access policies (who can use the service), risk procedures and compliance (what actions can be done), and account management (what assets and transactions are allowed). As a result, users may be denied access, have accounts closed, or see transactions flagged and reversed.

In contrast, Bitcoin is a permissionless system that operates without a central authority. Users are free to use the network and transact without prior approval by others. Like physical cash, users can transact pseudonymously and remain in full control of their own funds (*self-custody*). No single actor can unilaterally seize assets, reverse transactions, or change the ruleset. The Bitcoin network also operates 24/7 around the clock and is cross-jurisdictional by nature. These properties do come at significant costs, however – a large network with massive redundancies, scalability and performance constraints, slow coordination and decision-making, and, above all, an expensive and energy-intensive consensus mechanism.


#### What is the Bitcoin blockchain?"

The Bitcoin blockchain is the public ledger that records all Bitcoin transactions. Effectively a shared database, it is collectively maintained by tens of thousands of computers called **full nodes**. The ledger is organised using a particular data structure which bundles transactions into a data block that is cryptographically linked to the previous block. Over time, this process results in a growing chain of blocks that is extended by special actors called **miners**, who append new blocks in anticipation of financial rewards. The use of this specific data structure ensures that tampering with the transaction history (e.g. modifying past transactions) will be detected immediately by other network participants as the linked block hashes do not add up.


#### How does Bitcoin implement proof-of-work?

Bitcoin uses proof-of-work to establish a global competition among consensus participants – in this case *miners* – where the winning party receives the right to append their block to the public ledger. To compensate miners for the incurred costs, the Bitcoin network offers a financial reward in the form of newly-minted bitcoin and transaction fees (*block reward*). However, rewards are only distributed to the miner who found a solution first, turning mining into a** highly competitive race**.

After the puzzle has been solved, the corresponding block is appended to the blockchain and the competition starts anew. Due to fluctuations in hashrate and the random nature of the puzzle, the pace and time at which blocks are solved is not constant. The Bitcoin network regulates these fluctuations by periodically (after 2,016 blocks) adjusting the difficulty of the puzzle to a level that resets the pace of blocks being solved back to 10 minutes on average.

Should a situation occur where two valid blocks are proposed roughly at the same time by different miners, the blockchain will *fork* – meaning splitting into two distinct branches. In a relatively short period, network participants will naturally converge towards the **‘longest’ chain**, which is represented by the branch that was most difficult to produce. The rationale is that branches that have accumulated more computing power were more expensive to generate in the first place, suggesting that miners had to put up more capital upfront.

#### What is the game theory behind Bitcoin?

A clever **economic incentive design** that promotes honesty over cheating underpins Bitcoin’s consensus process. Miners voluntarily incur financial costs* ex ante* in the expectation of a potential future reward. The **threat of sunk costs** (i.e. not receiving the block reward because of dishonest behaviour but having already paid for the performed work) – creates the financial incentive for miners to play by the rules. Assuming miners are profit-maximising economic agents, honesty is the most rational strategy. As a result, Bitcoin may be considered less a technical innovation and more a carefully calibrated socio-economic system that relies on a complex combination of economic incentives, game theory, and a solid technical foundation.

### Bitcoin Mining

#### How do miners solve the proof-of-work puzzle?

Solving the proof-of-work puzzle requires miners to exhaust all possible options until a random number — called a **nonce** in technical jargon — is found that meets the network difficulty target. Rather than guessing numbers manually, miners use special hardware equipment to quickly generate potential solutions.

In the very beginning, mining could be done with the [central processing units (CPUs)](https://en.wikipedia.org/wiki/Central_processing_unit) of standard computers. In the following years, miners moved towards more computationally-performant – albeit still general-purpose – equipment such as [graphics processing units (GPUs)](https://en.wikipedia.org/wiki/Graphics_processing_unit) and [field-programmable gate arrays (FPGAs)](https://en.wikipedia.org/wiki/Field-programmable_gate_array). However, the mining industry changed considerably when in 2013, the first generation of [application-specific integrated circuits (ASICs)](https://en.wikipedia.org/wiki/Application-specific_integrated_circuit) started to emerge. ASICs are purpose-built hardware optimised explicitly for proof-of-work algorithms, which makes them orders of magnitude more efficient for Bitcoin mining than general-purpose equipment. As a result, it did not take long for ASICs to dominate and eventually replace CPU, GPU, and FPGA mining in Bitcoin.

Today, Bitcoin mining is exclusively performed with millions of energy-sapping ASICs that have little to no use value outside of cryptocurrency mining.

#### What costs do miners incur?

Miners incur financial costs in the form of **capital expenditures** (one-time fixed costs such as the purchase of specialised hardware) and **operational expenditures** (ongoing variable costs such as electricity, cooling, salaries, and others). Equipment purchases and electricity contracts are the largest cost factors.

Miners voluntarily incur these costs upfront in the expectation of a potential future reward (i.e. newly minted bitcoin and block transaction fees). The threat of sunk costs – miners risking losing their entire investment – is a key component of Bitcoin’s game theory and economic incentive design.

#### What is hashrate?

Hashrate measures the speed at which a machine – or a collective of machines – can process a proof-of-work algorithm. It is expressed in hashes per second, named after the random alphanumeric code (hashes) generated through the hashing function that underpins the proof-of-work algorithm. **Total hashrate** generally refers to the aggregate computing power of all mining hardware attempting to solve the puzzle at a given point in time. As of July 13th, 2021, Bitcoin’s total hashrate is about 100 Exahashes per second (Eh/s). This corresponds to a hundred quintillion (100 * 1018) ‘guesses’ being continuously churned out every single second by the Bitcoin mining industry.

#### What are hashing facilities?

A hashing facility is physical data centre dedicated to cryptocurrency mining activities. Colloquially referred to as **mining farms**, these facilities are often operating at an industrial scale and located in regions with access to abundant energy sources and favourable climate conditions. The specialised hardware employed requires vast amounts of energy and certain environmental conditions to operate, making it economically attractive to build large-scale facilities that allow leveraging economies of scale.

Hashing facilities are often designed to host thousands of hardware devices. They can be either used by entities for their own mining activities (proprietary hashing) or allow paying clients to rent space for their hardware (remote hosting services in co-location). The latter is a business model that gained in popularity as it enables miners from all over the world to leverage geographical advantages of certain regions.

#### What are mining pools?

Mining is a highly competitive industry since the block reward (i.e. newly minted bitcoin and transaction fees) is only distributed to the miner who finds the solution to the hash puzzle first. This task has become increasingly difficult over time as the puzzle's complexity soared, putting pressure on individual miners whose likelihood of solving the puzzle declined considerably – and with the regularity of revenues.

To reduce risk and cover ongoing operational expenditures, miners started to coordinate their efforts by forming collectives called ‘mining pools’ as early as 2010. These services allow individual miners and hashing facilities to pool together computing power to increase the odds of solving the puzzle. Individual miners connect their equipment to a pool server that bundles the mining efforts of all partaking entities. The pool operator then distributes rewards proportionally to each miner’s contribution which increases predictability of revenues by reducing the variance in pay outs.

#### How mobile are Bitcoin miners?

In theory, mining requires only hardware, electricity, and a stable internet connection. In the age of satellites, this brings remote, sometimes underdeveloped regions with surplus energy into focus. Unlike most energy-intensive industries, Bitcoin mining is not bound to a particular physical location and miners can relocate relatively quickly. The emergence of industrial-scale data centres dedicated to cryptocurrency mining worldwide has enabled some miners to take advantage of seasonal differences in energy prices between regions by using so-called co-location services, making them highly mobile.

International migration comes with many logistical issues and costs, such as forgone earnings, transportation, differences in equipment standard requirements, and potential tax liabilities, to name just a few. For miners who intend to relocate, the time component is of utmost importance as disconnected hardware causes a loss in revenue. Thus, transport is usually carried out by air freight which is more expensive but significantly faster than other means of transport. Besides lost revenue, transportation carries the risk of hardware being damaged or even lost during the journey. Therefore, the new profitability level must be sustainable enough to compensate for incurred risks and opportunity costs to make relocation worthwhile. As a result, regular migrations, such as those recorded in China, have been observed mostly on a regional rather than international level since transportation is less complex and time-intensive.

#### Can the equipment be used to mine other cryptocurrencies too?

Nowadays, Bitcoin mining is carried out exclusively via special-purpose ASIC equipment. As the name suggests, these machines are *application-specific*: unlike general-purpose hardware, they can hardly be used for anything outside their intended purpose. Bitcoin ASICs contain chips that are specifically optimised for the **SHA-256 hashing algorithm** which underpins Bitcoin’s proof-of-work (a full list of compatible equipment can be found [here](http://sha256.cbeci.org/)). More than a dozen other cryptocurrencies and blockchain networks, including Bitcoin Cash and Bitcoin SV, use the same algorithm today.

The ‘mineable universe’ of an ASIC is thus always limited to cryptocurrencies whose proof-of-work mechanism is based on the same hashing algorithm for which the machine has been optimised. Consequently, if an algorithm recedes in importance, so does the value of ASICs optimised for that algorithm. This mechanism is an important cornerstone of the economic incentive design and game theory of proof-of-work cryptocurrencies because it introduces the notion of sunk (equipment) costs as a deterrent for dishonest behaviour.

### Bitcoin Power Consumption

#### Can you directly measure Bitcoin’s electricity consumption?

Bitcoin’s real electricity consumption cannot be directly measured for multiple reasons. Miners can operate pseudonymously without needing to identify themselves. Miners also use different hardware equipment with varying energy efficiencies for which there are no reliable sales or distribution figures. Older equipment may sit idly in warehouses for a long time until skyrocketing mining revenues suddenly justify temporary redeployment. There are significant differences between hashing facilities in terms of how effectively they use power (e.g. how much electricity is used for cooling as opposed to just running the machines).

Bitcoin’s electricity consumption can thus only be estimated. These approximations are based on** theoretical models** that rely on specific assumptions. The CBECI is a bottom-up economic model that provides a range of potential estimates, delineated by a hypothetical lower bound representing the absolute minimum consumption (floor) and a hypothetical upper bound corresponding to the absolute maximum consumption (ceiling). Please see the [Cambridge Bitcoin Electricity Consumption Index Methodology](https://ccaf.io/cbnsi/cbeci/methodology) section for more information on the underlying assumptions.

#### What are the drivers of Bitcoin's power consumption?

**Expected mining profitability** (i.e. forecasted revenues minus costs) determines whether machines are running or sitting idle. Mining revenues are highly volatile by nature given their dependency on the bitcoin price and the dynamic competitive environment (e.g. fluctuating hashrate, moving difficulty level, and volatile transaction fees). Operational costs are more predictable and primarily determined by electricity rates.

Therefore, Bitcoin's power consumption is closely linked to the financial costs incurred in mining as well as **bitcoin’s expected price trajectory**: rising bitcoin prices and/or decreasing electricity costs generally lead to increased electricity consumption as less efficient hardware will be reinstated (the converse is also true). This is reflected in the CBECI model which is very sensitive to changes in both the average electricity cost parameter and the daily bitcoin price variable.

#### Does Bitcoin’s energy consumption rise proportionally with the number of transactions?

Bitcoin’s energy footprint is **linked to block production**, not transaction processing. This means that the number of transactions within a block has no impact on its energy expenditure: for a given difficulty level, a full block containing thousands of transactions has the same electricity footprint as an empty block with no transactions. The widespread misconception that Bitcoin’s energy consumption rises with a growing number of transactions seems to have its origins in the popular** energy cost per transaction **metric. Often used to compare the ‘energy efficiency’ of different payment systems, it is a purely theoretical measure that has little practical relevance without additional context.

A meaningful comparison would first require a uniform definition of the term ‘transaction’. Bitcoin transactions can contain hidden semantics that may not be immediately apparent. For instance, a single transaction in Bitcoin may be bundling together hundreds of smaller payments to individual addresses. It may also correspond to a settlement of thousands of off-chain transactions that took place on second-layer solutions (e.g. opening and closing channels in the Lightning Network). It could also potentially represent millions of timestamped data points using open protocols such as [OpenTimestamps](https://opentimestamps.org/).


#### What is the effect of changes in hardware inventories?

Increases in hashrate do not necessarily come at the cost of higher electricity consumption. In recent years, astonishing technological progress has been made in dedicated bitcoin mining hardware, rendering it over 700 times more powerful and nearly 100 times more energy-efficient over the past decade (2013 - 2023). This rapid progress resulted in a notably short product life cycle for mining equipment in the early days of Bitcoin, with hardware quickly becoming obsolete due to it being unprofitable to operate at reasonable electricity rates. This has led to a rise in total hashrate without a corresponding surge in power demand. However, it is increasingly evident that the pace of technological advancement has decelerated and stabilised. The initial frenetic leaps in computational power and efficiency have transitioned to more incremental improvements, signifying the maturation of Bitcoin mining technology.

Moreover, in periods when bitcoin mining is especially lucrative, an initial assumption might be that the heightened incentive to mine equates to significant spikes in power consumption, given that higher profitability could justify the operation of older, likely less efficient, hardware. Whilst this argument holds some merit and is somewhat echoed in our estimates, the situation demands a more nuanced perspective. For instance, China's ban on cryptocurrency mining led to a severe shortage of hosting space for mining hardware. Evidence suggests this bottleneck resulted in even highly profitable hardware being stored in warehouses and not being utilised due to a lack of space in data centres. Given that even new machines were being stored, it is reasonable to infer that mining operators would have already replaced all old machines with newer models, exploiting all possible means to enhance the overall efficiency of their mining operations. Therefore, although the incentive to use less efficient equipment becomes more pronounced during exceptionally profitable bitcoin mining periods and likely materialises to a degree, a substantial upsurge in the number of such devices seems doubtful.

Ultimately, the question essentially boils down to how much new hardware (in terms of consumption) enters the market versus how much of the older hardware is decommissioned.

See:
* [Kochkodin, B. (2021). Bitcoin Miners Thwarted by Data Center Crunch](https://www.bloomberg.com/news/articles/2021-07-07/bitcoin-miners-thwarted-by-data-center-crunch-amid-profit-boom#xj4y7vzkg).  
* [Sigalos, M. (2022). Kazakhstan’s deadly protests hit bitcoin, as the world’s second-biggest mining hub shuts down](https://www.cnbc.com/2022/01/06/kazakhstan-bitcoin-mining-shuts-down-amid-fatal-protests.html).

#### Can Bitcoin operate with any level of electricity?

In theory, the Bitcoin network does not require a pre-determined level of electricity to function. The system is designed to dynamically adjust to changing external circumstances via the **difficulty adjustment mechanism**. Every 2016 blocks, or on average roughly two weeks, the difficulty target level of the hashing puzzle will automatically adjust upwards or downwards depending on how the underlying hashrate has changed. This mechanism regulates the number of blocks such that, on average, a new block is created every 10 minutes. If, during this period, blocks have been found on average in more (or less) than 10 minutes, then the difficulty level decreases (or increases) proportionally to bring back the average time between blocks to roughly 10 minutes.

In practice, however, electricity usage and associated costs are an important factor for network security. Higher electricity expenditures tend to increase network security as attacks become more expensive (and thus less likely). Lower electricity expenditures can expose the network to 51-percent attacks, where attackers attempt to build an alternative chain branch that overtakes the honest chain. However, there is an ongoing debate over whether Bitcoin is currently *overpaying* for its security, suggesting that a similar degree of security could also be achieved and maintained at lower electricity expenditures. No conclusive answer to this question of **optimal security spend **has yet been found.

#### Is there an upper limit to Bitcoin’s electricity consumption?

In theory, the world’s total electricity production constitutes the only natural ceiling to Bitcoin’s power usage. In practice, however, there are several factors that put a limit on Bitcoin’s power demand growth.

Firstly, there might not be enough functional hardware available on the market to support a significant surge in electricity consumption. Older equipment might be defunct or non-operational, and the production of new equipment could face delays owing to global chip shortages in leading foundries. Secondly, miners are not only competing amongst themselves but also with other industrial and residential electricity users. This competition limits access to abundant, low-cost energy resources. Additionally, there's limited hosting capacity in energy-rich regions, which could be rapidly filled. Lastly, in the long run, bitcoin mining is poised to grapple with challenges stemming from a decreasing supply schedule, notably the 'halvings', and a historically observed increase in the difficulty to mine bitcoin. These factors are anticipated to heighten competitiveness within the mining landscape, likely leading to a consolidation of mining activities in specific regions with highly competitive electricity rates.

#### Is it possible to project Bitcoin’s future footprint?

A credible forecast of Bitcoin’s future power demand would first and foremost require an accurate prediction of bitcoin’s future price trajectory. Additionally, uncertainty around hashrate developments and other network factors further complicate the projection. Finally, technological advances in mining hardware may affect hardware replacement cycles and cause significant inventory changes, with new energy-efficient machines replacing older, less efficient hardware. The only thing that can be said with certainty is that miners will continue fulfilling their role as long as there is an economic incentive to do so – i.e. as long as it remains profitable.

#### Can’t Bitcoin just move to a less energy-intensive consensus mechanism?

Cryptocurrency networks employ distributed consensus algorithms to ensure that pseudonymous participants reach agreement over the state of the public ledger – i.e. who owns what. In** proof-of-work**, electricity serves as the proving resource that imposes an irrevocable financial cost on miners. In recent years alternative algorithms have been proposed that promise similar security features and network properties at substantially less energy overhead. Most famously, proof-of-stake is a now-widely deployed alternative that reduces network power demand by more than 99%. In proof-of-stake, electricity is replaced as the proving resource with staked capital in the form of locked-up cryptocurrency. *Validators* – the pendant to miners – can vote proportionally to the amount of collateral they have provided.

However, it is unclear to date whether alternative consensus algorithms like proof-of-stakes can replicate the same security assurances without engaging in **substantial trade-offs**. For instance, proof-of-stake cryptocurrencies require social coordination outside the system when the network is partitioned (‘forked’): unlike proof-of-work, there is no objective yardstick (‘longest’ chain in terms of computational power) that enables pseudonymous actors to naturally converge towards a single chain. The introduction of subjectivity in this supposedly trustless process creates centralisation risk. It also raises ethical issues as wealth directly determines voting power. Users who can only stake smaller amounts of native tokens are unlikely to be chosen as validator nodes, leaving them with no other option than delegating their tokens to a pool. In contrast to proof-of-work mining pools, however, users cannot redirect their stake to a different provider without first being 'allowed' to withdraw, introducing the risk of vendor lock-in. Furthermore, networks become more vulnerable to potential attacks involving stolen or ‘borrowed’ private keys that control a substantial stake.

While wealth disparities and the formation of oligopolies are certainly a concern in proof-of-work as well, particularly with only a few hardware manufacturers, technological innovation can always rebalance the prevailing power dynamics. Proof-of-work may appear enormously ‘wasteful’ at first glance, but it provides a uniquely trustless mechanism for arriving at decentralised consensus in an open, pseudonymous network. Other consensus mechanisms may appear less ‘wasteful’ at first sight but have their own downsides that may not always be immediately apparent. Ultimately, a comparison between different consensus mechanisms is difficult to draw as it requires an assessment of network properties in the context of the intended utility, defined by each network's respective community and users.

It is not unheard for networks to move to a different consensus algorithm after launch. The technical and operational complexities associated with such a transition make this a challenging undertaking, however. How can a decentralised network coordinate a system-critical update in the absence of a central authority, potentially putting billions of dollars of user funds at risk? How would this transition impact network incentives, and consequently affect network security and properties? These issues are certainly among the reasons why it took Ethereum, the second-largest cryptocurrency and public blockchain network, years to transition to a proof-of-stake consensus-based mechanism.

### Environmental Implications

#### What is the link between electricity consumption and carbon emissions?

It is essential to distinguish between electricity consumption and environmental footprint. The first concerns the total amount of electricity used by the Bitcoin mining process. The latter concerns the environmental implications of Bitcoin mining. What ultimately matters for the environment is not the level of electricity consumption per se, but the **carbon intensity of the energy sources** used to generate that electricity.

For instance, one kilowatt-hour (kWh) of electricity generated by a coal-fired power station has a substantially worse environmental footprint than one kWh of electricity produced by a wind farm. As a result, rising (or falling) power demand does not automatically lead to a proportional increase (or decrease) in carbon dioxide and other greenhouse gas emissions.

#### What energy sources are Bitcoin miners using?

Bitcoin miners are found all around the world, and consequently use a **broad variety of power sources**. Our 2020 industry survey found that hydroelectric power, coal, and natural gas were dominating, but that miners were also using oil, nuclear power, and renewables (wind, solar, and geothermal) as part of their energy mix.1

Miners can receive electricity from the local grid, which is often powered by a varying composition of energy sources. Miners may also be directly connected to local power stations (*off-grid mining*), which are generally powered by a single energy source.

#### How sustainable is Bitcoin’s power mix?

Although energy source disclosures are becoming more common among hashing facilities, the exact energy mix of the Bitcoin mining industry remains unknown. Several studies have shown that a growing share of total electricity consumption originates from renewable energy sources such as hydro, solar, or wind power. However, estimates diverge considerably, ranging from approximately 20%1–30%2 of the total energy mix to more than 70%.3

A possible explanation for these discrepancies – aside from methodological differences – can be found in the dynamic nature of Bitcoin mining, which causes the power mix to fluctuate throughout the year. Thanks to the relative mobility of mining equipment, hashing facilities can be set up in a comparatively short time elsewhere. This has led to some miners favouring off-grid electricity deals with power stations in remote areas for which little or no data is available. Furthermore, seasonal migrations between regions with different energy profiles have been observed in some countries; most notably in China where miners have flocked from the coal-rich Northern Province of Xinjiang to the South-Western Province of Sichuan to benefit from cheap surplus hydro power during the monsoon season.

Estimates that lack a time dimension are unable to capture these subtleties. All they can provide is a partial insight based on a single snapshot at one specific point in time. Since Bitcoin’s power mix is not static, a proper environmental assessment of Bitcoin mining requires continuous tracking and analysis. As the mining market is undergoing significant changes following the Chinese government crackdown in June 2021, more research and data is needed to assess how the global redistribution of hashrate affects the energy mix and carbon intensity of the network. Our team is currently exploring the development of a carbon emissions model that, based on dynamic geolocational data from the mining map, attempts to track Bitcoin’s environmental footprint over time.

#### Is Bitcoin mining an environmental disaster?

This question has undoubtedly sparked a lot of heated debate since Bitcoin has come under public scrutiny for its enormous energy consumption on par with that of whole nations. The energy mix plays a vital role in finding a conclusive answer to this question. Until additional and better data on the network’s power mix become available, strong assertions on either side of the debate should be considered with caution.

A **radical thought experiment** can provide an alternative perspective on this question. What would be Bitcoin’s environmental footprint assuming the absolute worst case? For this experiment, let’s use the annualised power consumption estimate from CBECI as of July 13th, 2021, which corresponds to roughly 70 TWh. Let’s also assume that all this energy comes exclusively from coal (the most-polluting fossil fuel) and is generated in one of the world’s least efficient coal-fired power plants (the now-decommissioned Hazelwood Power Station in Victoria, Australia). In this worst-case scenario, the Bitcoin network would be responsible for about 111 Mt (million metric tons) of carbon dioxide emissions1, accounting for roughly 0.35% of the world's total yearly emissions.

It should be noted that this calculation does not include the carbon footprint of the entire hardware supply chain from production to delivery, nor the generated e-waste from the disposal of older models.

#### Do Bitcoin miners seek out renewable energy sources?

Miners are economic actors that want to maximise their profits. As ‘energy nomads’, they seek **cheap and stable power** irrespective of location or underlying power source. This tends to overlap in some regions with certain renewable energy sources where seasonal surplus capacity cannot be absorbed, leading to attractive electricity rates not matched elsewhere. An example is the recorded migration of Chinese miners to provinces in the Southern West where hydropower is abundant – and thus very cheap – in summer. However, when electricity prices rise due to dropping water levels, these miners move North to coal-fired regions like Xinjiang that now offer better rates.

Intensifying discussions around Bitcoin’s sustainability are likely to cause a change in mindset, though. The growing institutional focus on ESG (*Environmental, Social, and Governance*) considerations has already led some publicly traded mining companies to actively incorporate sustainability goals into their business model. In the future, the pursuit of a ‘net-zero’ emissions strategy may well turn into a competitive advantage as the world is moving towards decarbonisation. In either case, operations will continue to be dictated by economic rather than ideological or environmental principles.

#### Does Bitcoin mining incentivise the deployment of renewable power generation?

Some have suggested that Bitcoin miners could help stabilise energy grids that struggle with the intermittent nature of renewables. During times of abundant generation, miners can absorb excess capacity that the grid could not handle otherwise. In turn, they halt operations on-demand when the grid runs short. As a result, grids could manage load more effectively, which should incentivise the deployment of additional renewables-based power generation capacity.

However, the same argument can also be made for carbon-based generation: by creating new demand for stable and abundant power – which renewables cannot easily provide on their own, miners extend the economic lifetime of old power plants that run on fossil fuels such as coal or natural gas. In some regions, this has already led to power plants that were decommissioned for the lack of profitability to be reinstated again.

#### Are there initiatives to make Bitcoin greener?

More recently, a number of privately-formed initiatives have emerged in the Bitcoin ecosystem to address rising sustainability concerns. Some focus on bringing more transparency to the mining industry through new data and insights. Others introduce commitments for mining members to actively decarbonise by a future date. Many publicly listed mining firms have already acted as trailblazers by disclosing information about facilities, power mixes, and sustainability efforts. Some non-mining Bitcoin firms such as asset managers and exchanges have already begun offsetting their emissions via carbon credits. These combined efforts have led to a broader environmental awareness among the industry, nudging mining firms to review their energy sourcing strategies more carefully and take steps to reduce their carbon footprint.

The largest push for decarbonisation may, however, ultimately come from the investor side. Institutional investors and service providers are increasingly bound by stringent ESG rules and requirements. This raises questions about whether Bitcoin can be considered a compliant investment, which determines future inflows of funds into the ecosystem. Some have suggested that these considerations represent a potentially existential threat for miners, thereby creating a natural financial incentive for the industry to actively decarbonise. Others are doubting the effectiveness of a purely market-driven approach and call for additional policy responses.

#### Has our work on greenhouse gas emissions been peer-reviewed?

The methodology of our research on Bitcoin-related greenhouse gas emissions has been reviewed by subject matter experts. We would like to take this opportunity to thank Ulrich Gallersdörfer (Technical University of Munich) and Lena Klaaßen (ETH Zurich) from the Crypto Carbon Ratings Institute, Prof. Andreas Park (University of Toronto), Ingolf Anton Gunnar Pernice (Weizenbaum Institute), and Michael Dowling (DCU Business School) for reviewing our work and providing vital feedback. Furthermore, we would also like to thank all those who provided feedback along our development and helped us refine our methodology. In addition, we would also like to thank all those who provided feedback during the development of our work and helped us refine our methodology. In particular, Thomas Eisermann, Jonathan Koomey, and George Kamiya, but also to all those who have shared their thoughts on our work in countless conversations.

## Ethereum

### Ethereum Basics

#### What is Ethereum?

**Ethereum** is an open software protocol and a peer-to-peer (P2P) network that allows users to transact online without relying on trusted intermediaries. The system operates without a central authority, making it a permissionless platform that enables anyone in the world to send, store, and receive digital tokens of value without the need for prior approval.

Ethereum’s native token is called ether, or ETH for short, and is used when interacting with the network. What sets Ethereum apart from other blockchain networks, such as Bitcoin, is its Turing-complete language, which allows for complex smart contracts that have enabled promising use cases, including decentralised applications (dApps), decentralised finance (DeFi), and decentralised autonomous organisations (DAOs).

On September 15, 2022, Ethereum underwent a significant change by transitioning from a proof-of-work-based consensus mechanism to proof-of-stake. This unprecedented move drastically reduced the networks energy consumption as the computationally-intensive process of proof-of-work has been replaced by providing financial resources as collateral (so-called staking). This transition marked the first stage of Ethereum’s ambitious multistage plan to gradually improving the network’s capabilities.

#### What is the Ethereum blockchain?

The Ethereum blockchain is a decentralised, public ledger that records all transactions on the Ethereum network. It serves as a shared database, collectively maintained by thousands of computers known as nodes. This distributed ledger technology allows for transparency, security, and immutability in recording transactions.

Over time, the recording of transactions results in a growing chain of blocks that is extended by special actors called validators, who append new blocks in anticipation of financial rewards. The use of this specific data structure ensures that any attempt to tamper with the transaction history is immediately detected by other network participants, as any modification to a previous transaction would result in a chain of mismatched block hashes.

#### What are smart contracts?

Smart contracts are self-executing programmes that run on, for instance, EVM-compatible blockchains. They are written in a high-level programming language called Solidity, and are used to automate the execution of transactions and the exchange of assets on the blockchain. Smart contracts are designed to be autonomous and self-governing, meaning that once they are deployed on the blockchain, they can be executed automatically without the need for intermediaries or third-party validators. They are also transparent and tamper-proof, meaning that their code and execution history is publicly visible and immutable.

One of the key features of Ethereum smart contracts is their ability to facilitate the creation and exchange of custom tokens, or "ERC-20 tokens", on the Ethereum network. These tokens can represent any type of asset or value, and can be used for a variety of purposes, such as fundraising, incentivizing users, or providing access to services. Smart contracts can also be used to create more complex applications, such as decentralised finance (DeFi) protocols, which enable peer-to-peer lending, borrowing, and trading of digital assets without the need for centralized intermediaries. Other examples include prediction markets, voting systems, and supply chain management solutions.

However, it's important to note that while they are designed to be secure and reliable, they are not infallible, and can still be vulnerable to bugs and security exploits if not written and deployed correctly.

#### What is the Ethereum Virtual Machine (EVM)?

The Ethereum Virtual Machine (EVM) is a key component of the Ethereum blockchain. It is a software platform that runs smart contracts written in the Solidity programming language. The EVM is responsible for executing code, managing state, and handling transactions on the Ethereum blockchain.

The EVM is a Turing-complete virtual machine, but often referred to as quasi-Turing-complete, as a gas limit is used to restrict the amount of computational resources that a single transaction can consume on the network. This means that smart contracts can perform any computation that is possible on a universal Turing machine, but that there is a limit to how much computation a contract can perform in a single transaction. Gas is the unit of account used to measure the computational resources required to execute a contract. Users must pay for gas to execute contracts, and the cost of gas varies depending on the complexity of the contract and the demand for computational resources on the network.

The EVM is a powerful tool for developing decentralised applications and has enabled the creation of a wide range of innovative projects on the Ethereum blockchain, from decentralized finance (DeFi) to non-fungible tokens (NFTs). Its flexibility and security make it a popular platform for developers who are interested in building decentralised applications that can be run on a global network without relying on centralized intermediaries.


#### What are gas fees in Ethereum?

Gas is a fundamental concept in the Ethereum blockchain that plays a critical role in managing the execution of smart contracts and transactions on the network. When a user submits a transaction to the Ethereum network, they must pay a fee in the form of ether (the cryptocurrency used in Ethereum) to incentivize validators to process the transaction. This fee is known as the "gas fee" and is calculated by multiplying the gas price by the gas units required to execute the transaction. The gas price is the amount of ether that the user is willing to pay for each unit of gas used during the execution of the transaction. The gas limit, on the other hand, specifies the maximum number of gas units that a user is willing to pay for the transaction. If a transaction uses up all the gas units specified in the limit during execution, it will be automatically reverted, and any changes made to the state of the system will be discarded. The purpose of the gas limit is to prevent poorly written or malicious smart contracts from consuming too many resources on the network, which could lead to network congestion and slowdowns.

EIP-1559, which was implemented in August 2021, introduced a significant change to the way gas prices are calculated on the Ethereum network. Prior to the upgrade, users had to manually set the gas price for their transactions based on market conditions and their desired transaction speed. However, the London upgrade introduced a new pricing mechanism known as the "EIP-1559 fee market" which aims to simplify and optimise gas price calculations. This new pricing mechanism introduces a new transaction fee model that includes two components: a base fee and a tip. The base fee is a dynamically calculated price that reflects the current level of network congestion. The base fee is burned (i.e., destroyed) when the transaction is processed, effectively reducing the supply of Ethereum and creating deflationary pressure. The tip, on the other hand, is an optional amount that the sender can add to the base fee to incentivise validators to prioritise their transaction. The tip is not burned and is paid directly to the validator who includes the transaction in a block.

#### What is an ERC-20 token?

The ERC-20 standard is a set of rules and requirements for creating a token on the Ethereum blockchain. ERC stands for “Ethereum for Comment” and was introduced in 2015 to provide a common framework for Ethereum-based tokens to ensure interoperability and compatibility with existing Ethereum infrastructure. ERC-20 defines a set of functions that a smart contract must implement in order to be considered an ERC-20 token. These functions include transferring tokens, querying the balance of a specific account, and approving the transfer of tokens on behalf of another account.

One of the key benefits of the ERC-20 standard is its interoperability with other smart contracts and platforms. This means that tokens built using the ERC-20 standard can be used and traded on a wide range of decentralised exchanges (DEXs), wallets, and other blockchain-based services without requiring any additional integration work. ERC-20 tokens are also fully compatible with Ethereum's other standard protocols, such as ERC-721 for non-fungible tokens (NFTs), allowing developers to easily create unique digital assets on top of the Ethereum blockchain.

Overall, the ERC-20 standard has played a crucial role in the growth of the Ethereum ecosystem, enabling the creation of a diverse range of tokens and facilitating the adoption of blockchain technology in various industries.

#### What is a NFT?

A non-fungible token (NFT) is a unique digital identifier that cannot be copied, substituted, or subdivided. It is recorded on a blockchain and used to certify ownership and authenticity. NFT ownership is documented in the blockchain, enabling the sale and trade of NFTs. With minimal or no coding skills required, NFTs can be created by anyone and typically encompass references to digital files such as photographs, videos, and audio. As uniquely identifiable assets, NFTs differ from cryptocurrencies, which are fungible.

NFTs have gained popularity in recent years for representing a wide variety of digital assets, including art, music, and collectibles. They have also facilitated the development of new digital content forms, such as virtual worlds and games.

The technical aspects of NFTs are underpinned by blockchain technology, a distributed database ensuring secure, transparent, and tamper-proof transactions. NFTs are generated using smart contracts, which are self-executing agreements stored on the blockchain. Upon NFT creation, the smart contract allocates a unique identifier and records its ownership within the blockchain.

NFTs have numerous well-known applications, such as representing digital art, music, and collectibles, as well as facilitating the development of new digital content forms like virtual worlds and games. Additionally, they are being employed to denote physical assets, including real estate and automobiles.

As an emerging technology, NFTs are accompanied by several contemporary legal challenges. One primary concern is ownership; although the smart contract assigns a unique identifier and records ownership on the blockchain, the copyright ownership of the underlying asset represented by the NFT remains ambiguous. Intellectual property is another issue; while the smart contract typically grants a licence to the NFT creator, the enforcement of this licence and its interaction with other intellectual property laws are often unclear.

Despite these challenges, NFTs hold the potential to revolutionise the way digital assets are perceived and managed. They can facilitate a more secure, transparent, and efficient means of trading and managing digital assets while fostering the creation of new digital content forms and representing physical assets.

### Decentralised Applications

#### What are decentralised applications?

Decentralised applications (dApps) are digital applications that are deployed on blockchain networks using smart contracts. They are open-source and operate without a central authority, meaning that no individual or company has control over them. Instead, dApps are controlled by the logic written into the contract. To use a dApp, users must interact with the smart contract that governs its behaviour. This allows for anonymous communication and transaction execution between users. The key benefits of using dApps are increased security, transparency, and resistance to censorship. Additionally, dApps provide greater control over user data and assets and enable decentralised governance and decision-making.

One of the most popular blockchain networks for deploying dApps is Ethereum. Examples of dApps on Ethereum include decentralised exchanges (DEXs), decentralised autonomous organisations (DAOs), and non-fungible token (NFT) marketplaces. DEXs allow for peer-to-peer trading of cryptocurrencies without intermediaries. DAOs enable decentralised decision-making, and NFT marketplaces facilitate trading unique digital assets.

#### What is DeFi?

Decentralised Finance (DeFi) is an emerging financial system built on Ethereum and similar blockchains, enabling the creation of open, transparent, and accessible financial applications and services. DeFi is powered by smart contracts, which underpin a range of novel financial instruments, including loans, stablecoins, and more. These instruments are built and managed on networks like Ethereum, without intermediaries, resulting in faster, more secure, and accessible services compared to traditional financial services. DeFi platforms provide various financial services, such as lending, borrowing, trading, and insurance, to anyone with an internet connection and without requiring personal information.

The DeFi ecosystem is experiencing rapid growth, with new applications and services being developed and deployed regularly. These innovations are pushing the boundaries of finance and offering previously unavailable opportunities for global financial system participation.

Despite its potential to revolutionise the financial industry by making services more accessible and affordable, DeFi faces several challenges, including security, regulation, and scalability. Security remains a significant concern, as DeFi platforms are frequently hacked, resulting in users losing millions of dollars in cryptocurrency.

Regulation is another challenge faced by DeFi. The Financial Conduct Authority (FCA) in the United Kingdom has warned that DeFi is a high-risk investment, and the US Securities and Exchange Commission (SEC) has indicated that existing security rules could also apply to DeFi. Moreover, scalability is a concern, as DeFi platforms are often slow and inefficient, making it difficult to handle large transaction volumes.

Nevertheless, DeFi has the potential to revolutionise the financial industry. Millions of people worldwide are already using DeFi platforms, and the industry continues to grow rapidly. As these platforms become more secure and regulated, their popularity is likely to increase further.

Notable DeFi applications include:

* Lending: DeFi platforms enable users to lend and borrow money without banks or other financial institutions.
* Borrowing: DeFi platforms facilitate borrowing money without involving banks or other financial institutions.
* Trading: DeFi platforms allow users to trade cryptocurrencies and other assets.
* Insurance: DeFi platforms enable users to purchase insurance against losses.

Contemporary legal challenges facing DeFi are:

* Regulation: DeFi platforms often lack regulation, offering no guarantees of user protection in case of problems.
* Security: DeFi platforms are susceptible to hacking, resulting in users losing significant amounts of cryptocurrency.
* Scalability: DeFi platforms' can be slow and inefficient depending on the transaction processing capabilities of the underlying blockchain.

### The Merge

#### The Merge in a nutshell

The Ethereum community already discussed the possibility of shifting to a PoS consensus-based mechanism as early as 2014.5 Still, it was only many years later, on 15 September 2022, that Ethereum successfully underwent this transition – The Merge – that fundamentally altered the network's architecture. Before The Merge was successfully implemented, the consensus layer (Beacon Chain) and execution layer ran in parallel, with the only communication between these two chains concerned inflows on the Ethereum staking smart-contract on the execution layer so that these funds could be replicated on the Beacon Chain, but both blockchains still having their own way of reaching consensus.  

While in PoW network participants who proposed blocks needed to demonstrate unforgeable proof that computational resources have been spent, in PoS such a requirement does not exist. Instead, Ethereum requires network participants that engage in proposing new blocks and providing attestations (so-called validators) to pledge 32 ETH as collateral. If a validator behaves negligently or maliciously, knowingly or unknowingly, they will not be compensated by the network or, in more severe cases, a financial penalty (known as “slashing”) will be imposed upon them, and their stake (pledged collateral) will be reduced accordingly.  

After The Merge, the execution layer is still responsible for executing transactions and smart contracts and maintaining the network's current state. This is done through the Ethereum Virtual Machine (EVM), a sandboxed environment that executes code in a decentralised manner across the network. On the other hand, the consensus layer is now responsible for validators agreeing on the current state of the blockchain and distributing rewards for network services rendered (such as proposing or attesting blocks) accordingly. Both communicate via the engine API to get information about state changes and together enable the decentralised execution of transactions and smart contracts, as well as the maintenance of a secure and trustless distributed ledger.

Notably, there is a common misconception about The Merge. Namely, that it will lead to less network congestion and lower transaction fees. This is not the case. Ethereum’s post-merge transaction processing capacity only slightly increases. However, it marks the completion of a significant stage of the Ethereum roadmap; the latest updated version of the roadmap has been shared in a [tweet](https://x.com/VitalikButerin/status/1588669782471368704) by Vitalik Buterin. The next milestone – The Surge – aims to address the issue of scalability and significantly increase transaction throughput by introducing sharding and combining layer 1 data processing solutions with layer 2 technologies like rollups. The update will be rolled out in stages to achieve a processing capacity of up to 100,000 transactions per second, aimed at reducing network congestion and lowering transaction fees. 

#### Did “The Merge” increase Ethereum’s transaction processing capacity?

While “The Merge” was a crucial step towards Ethereum's long-term scalability, it has not significantly increased transaction throughput on its own. Given a small reduction in block time, from an average of about 13 seconds before The Merge to 12 seconds after The Merge, throughput only increased slightly.

Sharding, which is expected to be deployed in 2023 as part of “The Surge”, is designed to improve Ethereum's scalability by allowing the network to process more transactions simultaneously. With sharding, the Ethereum blockchain will be divided into smaller partitions or shards, each with its own set of validators. This will enable the network to handle a significantly higher number of TPS (transactions per second).

However, it is important to note that sharding is a complex and difficult undertaking, and the actual throughput that can be achieved is uncertain. Additionally, sharding alone may not be sufficient to achieve Ethereum's long-term scalability goals. Layer-2 scaling solutions will also be essential to achieving high throughput. When used in combination with sharding, it is estimated that Ethereum’s potential could even exceed 100,000 TPS.
