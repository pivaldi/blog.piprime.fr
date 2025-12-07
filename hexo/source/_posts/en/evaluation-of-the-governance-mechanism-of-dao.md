---
title: "Analysis of the governance of different DAOs."
date: 2025-12-07 16:17:00
id: evaluation-of-the-governance-mechanism-of-dao
lang: en
description: "Explore the governance mechanisms of different DAOs."
categories:
- [EN, Tech, Cryptography, DAO]
- [EN, Tech, Cryptography, WEB3]
tags:
- cryptography
- decentralized
- "numeric identity"
---
<picture>
<img alt="DAO" src="/media/evaluation-of-the-governance-mechanism-of-dao/dao.webp">
</picture>

{%note%}
[Cet article est également disponible en français](/fr/evaluation-de-la-gouvernance-des-principales-dao/).
{%endnote%}


## Uniswap DAO

Uniswap governance is token-based: UNI holders (often via delegates) discuss proposals on the forum, run off-chain "temperature checks" (Snapshot), then submit executable on-chain proposals. On-chain votes pass if "for" votes exceed "against" and reach quorum (commonly cited as **40M UNI** in favor), followed by a timelock before execution. ([Uniswap Docs][uniswap-1])

On decentralization: UNI's initial allocation gave **60% to the community** but **~40% to insiders** (team/investors/advisors), which can concentrate voting power. ([Uniswap Labs][uniswap-2]) Programs like treasury delegation can further centralize influence by amplifying select delegates. ([The Block][uniswap-3])

One broader limitation: many DAOs govern *parameters and treasuries*, but depend on off-chain teams, legal entities, and privileged actors (front-ends, dev roadmaps, "delegate classes"), limiting true autonomy even when voting is on-chain.

[uniswap-1]: https://docs.uniswap.org/concepts/governance/process "Process - Uniswap"
[uniswap-2]: https://blog.uniswap.org/uni "Introducing UNI - Uniswap Protocol"
[uniswap-3]: https://www.theblock.co/post/349149/uniswap-dao-passes-preliminary-vote-115-million-treasury-delegation-program "Uniswap DAO backs $113 million 'Treasury Delegation' program to boost ..."

## Aave DAO

Aave governance runs in stages: ideas start on the Aave Governance Forum, move to a **Temp Check** on Snapshot (non-binding), then an **ARFC** (final comments) with another Snapshot vote, and finally an on-chain **AIP** vote that—if passed—executes after a timelock (typically via the "Short Executor"; governance-changes use a slower "Long Executor"). ([aave.com][aave-1])

On decentralization: while voting is open to AAVE holders/delegates, voting power is meaningfully concentrated—**top 100 holders control ~12.45M AAVE of 16M supply (~78%)**, suggesting oligarchic influence risks. ([Ethereum (ETH) Blockchain Explorer][aave-2])

One broader limitation: many DAOs still rely on **off-chain governance plumbing** (forums, delegate politics, and emergency/guardian roles), so "autonomous" protocols can revert to trusted actors during crises. ([vote.onaave.com][aave-3])

[aave-1]: https://aave.com/docs/ecosystem/governance "Governance | Aave Protocol Documentation"
[aave-2]: https://etherscan.io/token/tokenholderchart/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9 "Aave Token Token Contract and Distribution Chart - Etherscan"
[aave-3]: https://vote.onaave.com/proposal/?proposalId=402&utm_source=chatgpt.com "Aave Governance - vote.onaave.com"

## Yearn Finance DAO

Yearn governance is largely **off-chain, token-weighted**: proposals (YIPs) are discussed in the forum, then **veYFI holders vote on Snapshot**; proposals passing with **>50% support** are executed in practice by a **9-signer multisig (6/9 threshold)**. ([Yearn Docs][yearn-1])

On decentralization: Yearn's launch was unusually "fair" (no premine/VC/team allocation; early supply distributed via liquidity mining). ([Yearn Docs][yearn-2]) Still, current ownership is concentrated: one recent rich-list snapshot shows the **top 10 addresses ~38%** and **top 100 ~84%** of YFI. ([CoinLore][yearn-3]) That concentration plus multisig execution means it's **partly decentralized**, but not fully.

One broader limitation: many DAOs can vote, but **execution and operations** still depend on multisigs, keyholders, and off-chain coordination—so autonomy is social/institutional, not purely on-chain. ([Yearn Docs][yearn-1])

[yearn-1]: https://docs.yearn.fi/contributing/governance/proposal-process "Proposal Process | Yearn Docs"
[yearn-2]: https://docs.yearn.fi/contributing/governance/yfi "YFI | Yearn Docs"
[yearn-3]: https://www.coinlore.com/coin/yearn-finance/richlist "Yearn.finance Rich List - Top 100 Addresses | CoinLore"

## MakerDAO

MakerDAO governance blends off-chain deliberation with on-chain control. MKR holders vote on **Governance Polls** (signaling/parameter preferences) and binding **Executive Votes** that, when passed, enact "spells" to change protocol parameters (e.g., collateral rules, rates) via the Maker Governance Portal. ([community-portal-staging.makerfoundation.com][maker-1])

On decentralization: decision power is meaningfully concentrated—one recent rich-list snapshot shows the **top 10 MKR addresses hold ~33.66%** and the **top 100 ~83.43%** of supply, implying whale/delegate dominance risk despite open participation. ([CoinLore][maker-2])

One limitation of DAO frameworks: even with on-chain votes, **agenda-setting, delegation, and operational execution** often centralize around a small set of actors, so autonomy remains partly social rather than purely programmatic.

[maker-1]: https://community-portal-staging.makerfoundation.com/en/learn/governance/governance-faq/ "Governance | MakerDAO Community Portal"
[maker-2]: https://www.coinlore.com/coin/maker/richlist "Maker Rich List - Top 100 Addresses | CoinLore"

## SushiSwap DAO

SushiSwap governance is **token-weighted**: proposals are discussed by the community, then voted on via **Snapshot** using SUSHI. Sushi's own docs note that only proposals posted to Snapshot by the **CORE team** are considered binding if they pass quorum, and votes typically cover tokenomics, major structural changes, and use of DAO/dev-fund wallets. ([docs.sushi.com][sushi-1])

On decentralization: this process has clear **centralization chokepoints** (proposal "gating" by the core team, plus reliance on multisig-style execution in practice). Recent reporting around treasury-control proposals and governance controversies reinforces that power can concentrate around a small operational group. ([The Block][sushi-2])

One broader limitation: many DAOs can *vote*, but **credible, autonomous execution** still depends on trusted operators (multisigs/teams) and off-chain coordination—so "autonomy" remains partly social, not purely programmatic.

[sushi-1]: https://docs.sushi.com/dao/governance "️ Governance · Sushi"
[sushi-2]: https://www.theblock.co/post/287588/sushi-dao-treasury-proposal-passes-signal-vote "Controversial Sushi DAO treasury proposal passes signal vote"


## Aragon DAO

Aragon's governance has historically been **ANT token–weighted**: proposals (AGPs) were put to ANT holders, with **1 ANT = 1 vote** (often via common DAO tooling such as on-chain voting modules / Snapshot-style signaling, depending on the era and product stack). ([Aragon Legacy Documentation][aragon-1])

On decentralization: Aragon is a cautionary tale. In **Nov 2023**, the **Aragon Association** announced it would **dissolve** and make **~86,343 ETH (~$155M then)** redeemable by ANT holders—after governance tensions including a described attempted "51% attack" to capture the treasury. That episode suggests meaningful **central points of control** remained around the Association and treasury custody, despite token voting. ([Blockworks][aragon-2])

One broader limitation: many DAOs can vote, but **legal wrappers, treasuries, and emergency powers** often sit off-chain (or in multisigs), so "autonomy" breaks exactly when high-stakes decisions hit.

[aragon-1]: https://legacy-docs.aragon.org/the-ant-token/about-the-token/about-ant "About ANT | Aragon User Documentation"
[aragon-2]: https://blockworks.co/news/aragon-dao-dissolves-ether "Aragon Association to dissolve, make 86K ETH redeemable"

## Decentraland DAO

Decentraland governance is **hybrid**: proposals are created and voted on **off-chain** in Decentraland's Snapshot space (surfaced via governance.decentraland.org), using **Voting Power (VP)** derived from holdings of **MANA, NAMES, and LAND** (e.g., **1 MANA = 1 VP; 1 NAME = 100 VP; 1 LAND = 2000 VP**). Passed *binding* votes are then enacted **on-chain** through Aragon by a **DAO Committee multisig**, with oversight from a **Security Advisory Board** and delays/timelocks. ([Decentraland Documentation][decentraland-1])

On decentralization: token/asset-weighted VP plus custody/execution by committees means decentralization is **partial**. Holder concentration is high—one recent rich-list snapshot shows **top 10 MANA addresses ~43.66%** and **top 100 ~73.17%** of supply—so a small set can dominate outcomes. ([CoinLore][decentraland-2])

One broader limitation: many DAOs still rely on **multisigs/boards and off-chain processes** for execution and security, so "autonomy" breaks down into trusted governance when stakes are high. ([Decentraland Documentation][decentraland-1])

[decentraland-1]: https://docs.decentraland.org/decentraland/how-does-the-dao-work/ "How the DAO works | Decentraland Documentation"
[decentraland-2]: https://www.coinlore.com/coin/decentraland/richlist "Decentraland Rich List - Top 100 Addresses | CoinLore"


## Compound DAO

Compound governance is **on-chain and token-weighted**: COMP holders (or delegates) create proposals through **Governor Bravo**, vote during a set voting period, and successful proposals are **queued into a Timelock** and then executed on-chain (anyone can execute after the delay). Proposals can change risk parameters, add markets, or upgrade contracts. ([Compound][compound-1])

On decentralization: while open in theory, COMP ownership is concentrated. A recent rich-list snapshot shows the **top 10 addresses hold ~36.53%** and the **top 100 ~77.41%** of COMP. ([CoinLore][compound-2]) Tokenomics also allocated large shares to insiders (about **~24% shareholders/investors** and **~22% founders & team**, alongside **~42% to protocol users**). ([Tokenomist][compound-3])

One broader limitation: many DAOs have on-chain votes but **off-chain influence and plutocracy** (whales, delegates, insiders) mean "autonomy" often reflects capital concentration rather than collective self-rule.

[compound-1]: https://compound.finance/docs/governance "Compound v2 Docs | Governance"
[compound-2]: https://www.coinlore.com/coin/compound/richlist "Compound Rich List - Top 100 Addresses | CoinLore"
[compound-3]: https://tokenomist.ai/compound-governance-token "Compound (COMP) | Tokenomics, Supply & Release Schedule"

## Curve DAO (CRV / veCRV)

Curve governance is **vote-escrowed**: users lock CRV to receive **veCRV**, and voting power scales with both **amount locked and lock duration**. veCRV holders vote on on-chain DAO proposals and, crucially, on **gauge weights** that direct where CRV emissions go (a major economic lever). ([docs.tally.xyz][curve-1])

On decentralization: allocation is "community-heavy" over the long run (**57% emissions + 5% early users + 5% reserve ≈ 67% community**), but insiders are still large (**~26.43% core team + 3.57% investors**). ([resources.curve.finance][curve-2]) Recent moves to add **emergency multisig powers** also show reliance on trusted actors in practice. ([Outposts][curve-3])

One limitation of DAO frameworks: **safety requires escape hatches** (multisigs/guardians), which undermines "true" autonomy exactly during crises.

[curve-1]: https://docs.tally.xyz/education/governance-frameworks/curve-voting-escrow "Curve Voting Escrow | Tally Docs"
[curve-2]: https://resources.curve.finance/crv-token/supply-distribution/ "Supply & Distribution - Curve Resources"
[curve-3]: https://outposts.io/article/curve-proposes-emergency-dao-powers-d37346eb-c2fc-4df1-9dfe-570caccfe22f "Curve Proposes Emergency DAO Powers - outposts.io"


## Lido DAO (LDO / stETH ecosystem)

Lido governance is token-based: **LDO holders** propose and vote through a regular flow that uses established tools (research/forum → off-chain signaling → on-chain actions), with newer designs adding **Dual Governance** safeguards tied to **stETH holders**. ([Lido][lido-1])

On decentralization: voting is open, but ownership is concentrated. Etherscan's holder chart shows the **top 100 LDO holders control ~84.05%** of supply, and several top holders are large entities/exchanges or labeled Lido-related vesting addresses—suggesting meaningful centralization risk in practice. ([Ethereum (ETH) Blockchain Explorer][lido-2]) Lido also formalizes "ops multisigs" policies, underscoring reliance on committees for execution/security. ([Lido Governance][lido-3])

One limitation of DAO frameworks: even with on-chain voting, **execution and crisis response** often depend on multisigs/committees, so autonomy degrades into trusted governance when stakes are high.

[lido-1]: https://lido.fi/governance "Lido DAO Governance"
[lido-2]: https://etherscan.io/token/tokenholderchart/0x5a98fcbea516cf06857215779fd812ca3bef1b32 "Lido DAO Token Token Contract and Distribution Chart - Etherscan"
[lido-3]: https://research.lido.fi/t/lido-dao-ops-multisigs-policy-2-0/9574 "Lido DAO Ops Multisigs Policy (2.0) - Proposals - Lido Governance"


## ENS DAO (Ethereum Name Service)

ENS governance is token-based and delegate-heavy. Proposals are developed on the ENS forum, refined into governance proposals, and then—when ready—submitted as **Executable Proposals** for an **on-chain vote** using common governance UIs (e.g., Agora/Tally). If passed, execution happens through the DAO's on-chain governance system (typically via timelock-style execution). ([docs.ens.domains][ens-1])

On decentralization: the initial distribution emphasized community/airdrop and a DAO treasury, but **current holdings appear highly concentrated**; one recent rich-list snapshot estimates the **top 10 addresses hold ~84.72%** of ENS. ([ens.mirror.xyz][ens-2])

One limitation of DAO frameworks: even with on-chain voting, **delegation + whale concentration** can centralize agenda-setting and outcomes, weakening "true autonomy."

[ens-1]: https://docs.ens.domains/dao/governance/process/ "Governance Process | ENS Docs"
[ens-2]: https://ens.mirror.xyz/-eaqMv7XPikvXhvjbjzzPNLS4wzcQ8vdOgi9eNXeUuY "$ENS Token Allocation (Claiming Opens Nov 8) — ENS"


## 10 other well-known DAOs by treasury size

1. **Optimism Collective** — DeepDAO treasury leaderboard (AUM ranking) ([DeepDAO][1])
2. **Arbitrum DAO** — DeepDAO treasury leaderboard (AUM ranking) ([DeepDAO][1])
3. **Mantle DAO (ex-BitDAO)** — DeepDAO treasury leaderboard (AUM ranking) ([DeepDAO][1])
4. **GnosisDAO** — DeepDAO treasury leaderboard (AUM ranking) ([DeepDAO][1])
5. **ENS DAO** — DeepDAO treasury leaderboard (AUM ranking) ([DeepDAO][1])
6. **The Graph DAO** — DeepDAO treasury leaderboard (AUM ranking) ([DeepDAO][1])
7. **MakerDAO (Maker Protocol)** — DeepDAO treasury leaderboard (AUM ranking) ([DeepDAO][1])
8. **Lido DAO** — DeepDAO treasury leaderboard (AUM ranking) ([DeepDAO][1])
9. **dYdX DAO** — DeepDAO treasury leaderboard (AUM ranking) ([DeepDAO][1])
10. **Polygon (protocol governance / community treasury)** — DeepDAO treasury leaderboard (AUM ranking) ([DeepDAO][1])

The DeepDAO leaderboard page is the canonical place to click through (it updates continuously). ([DeepDAO][2])

[1]: https://deep-dao-deepdao.com/ "DeepDAO - Comprehensive Analytics for Decentralized Autonomous"
[2]: https://deepdao.io/ "DeepDAO – Discovery Engine for DAO Ecosystem"
