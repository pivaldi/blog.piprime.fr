---
title: "An Evolving Polymorphic Blockchain Consensus"
date: 2025-12-19 20:40:04
id: evolving-polymorphic-blockchain-consensus
tree_view: true
lang: en
description: "A study of blockchain consensus system that can change its behavior over time."
categories:
- [EN, Tech, Blockchain]
- [EN, Tech, Cryptography]
tags:
- blockchain
- cryptography
---

This article is available in [french](/fr/consensus-de-blockchain-polymorphe-evolutive).

Evolving polymorphic blockchain consensus means a **consensus system that can *change its behavior
over time*** either by **switching between multiple consensus modes** or by **dynamically tuning
parameters** (committee size, timeouts, quorum thresholds, validator set, etc.) in response to
network conditions and adversarial behavior.

Here are the main ways this shows up in the literature and designs

##  Mode-switching consensus (true “polymorphism”)

These protocols explicitly **switch** between consensus styles to trade off latency vs robustness
depending on conditions (network delay, churn, suspected faults).

* Example: work proposing **automatic switching** between *leader consensus* and *leaderless
  consensus* in consortium settings (ATBFT). ([ScienceDirect][1])

**Why do this?**  
Leader-based BFT is fast when the leader is honest and the network is stable; leaderless can be
slower but more resilient to leader attacks and some network pathologies.

##  Dynamic membership / committee reconfiguration

Instead of one fixed validator set, the protocol includes a **safe way to rotate/resize committees**
(often BFT/HotStuff-inspired), so the system can evolve as participants join/leave.

Recent papers frame this as “dynamic BFT” / “dynamic-committee consensus,” focusing on
reconfiguration safety and availability. ([Springer Link][2])

**Why do this?**  
Long-lived chains need to handle churn, scaling, and changing trust assumptions without hard forks
every time.

##  Adaptive / AI-tuned consensus parameters

Some approaches don’t switch protocols, but **continuously tune** parameters (timeouts, block size,
leader rotation rules, slashing thresholds) based on observed conditions—sometimes using ML/RL.

Example: “adaptive consensus optimization” using AI techniques to adjust validation parameters and
detect malicious behavior. ([Frontiers][3])  
**Caveat:** if the adaptation logic is wrong or manipulable, it becomes a new attack surface.

##  Hybrid consensus (combine PoS/BFT/PoW ideas)

A “polymorphic” feel can also mean **hybrid architectures** that blend properties (e.g., BFT
finality on top of PoS; sharding with hybrid approaches).

Some recent proposals explicitly describe **hybrid + adaptive** designs (especially around
sharding). ([arXiv][4])

## Evolving without breaking safety

Making consensus “evolve” safely tends to require:
* **A formally-defined upgrade/reconfiguration mechanism** (so nodes don’t split into different
  rulesets).
* **Clear invariants**: safety (no double-finality), liveness (keeps making progress),
  accountability (punish misbehavior).
* **Governance & activation rules**: how a switch/upgrade is proposed, validated, and activated
  (on-chain voting, social consensus, admin keys—each has trade-offs).

Surveys on modern consensus consistently emphasize that new mechanisms are basically juggling the
same trilemma trade-offs, and that “flexible scaling / evolving designs” are an active research
direction. ([ScienceDirect][5])

[1]: https://www.sciencedirect.com/science/article/pii/S209672092400068X "ATBFT-automatically switch consensus protocol - ScienceDirect"
[2]: https://link.springer.com/article/10.1007/s12083-025-01934-9 "Efficient dynamic-committee BFT consensus based on HotStuff"
[3]: https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1672273/full "Adaptive consensus optimization in blockchain using reinforcement ..."
[4]: https://arxiv.org/pdf/2411.06895 "DYNASHARD: Secure and Adaptive Blockchain Sharding Protocol with Hybrid ..."
[5]: https://www.sciencedirect.com/science/article/pii/S1389128625006280 "Comprehensive survey of blockchain consensus mechanisms: Analysis ..."

---

Here’s a concrete **permissionless L1** design that’s **polymorphic (multi-mode)** and **evolving
(self-tuning + safely upgradable)**, inspired by Bitcoin/Ethereum but explicitly built to *switch*
its consensus behavior when conditions change.

## MorphL1: a polymorphic permissionless consensus

### Core idea

Run a **Nakamoto-style chain for availability** + a **BFT-style finality overlay for fast
finality**, with an **automatic fallback mode** when the network is stressed or adversarial. Think
"Ethereum's Gasper direction" (fork-choice + finality gadget) but made explicitly multi-mode and
self-tuning. ([ethereum.org][6])

## Mode 0 — Normal mode (fast, low latency)

**Block production:** slot-based PoS (or PoW if you want), with a longest/heaviest-chain fork choice.

**Finality overlay (committee BFT gadget):**
* Every epoch, sample a **random committee** from stake (VRF-based).
* Committee runs a 2–3 step BFT vote to **finalize checkpoints** (like "finality gadget" style). This is conceptually aligned with Gasper (Casper-FFG + LMD-GHOST). ([ethereum.org][6])
* Finality votes are *lightweight* and aggregateable (BLS-style), so normal throughput stays chain-like.

**Why it works:** you get Bitcoin-like continuous block flow + Ethereum-like “stronger” finality when network conditions are decent.

## Mode 1 — Turbulence mode (robust under delay/forks)

Trigger when the chain shows symptoms of instability, e.g.:
* fork rate above threshold;
* late blocks / missed slots spike;
* finality votes stall for >K epochs;
* evidence of targeted leader disruption.

**Changes in this mode:**
* **Increase confirmation depth** for applications (protocol-level recommended safety margin).
* **Adjust fork-choice weighting** to penalize “recently unseen” branches more aggressively.
* **Raise committee size** (more messages, but better resilience).
* **Longer timeouts** for finality voting to regain liveness under higher latency.

This type of tuning is motivated by analyses showing security/latency tradeoffs depend strongly on
network/processing constraints. ([arXiv][7])

## Mode 2 — Adversarial mode (attack containment)

If the network appears under active adversary pressure (e.g., correlated censorship, repeated
finality breaks, equivocation bursts), switch to a **leaderless / less leader-dependent finality
subprotocol** for the committee.

Two practical ways to do this:

### A. Committee switches from leader-based BFT to leaderless BFT

* In normal mode, use a pipelined/leadered BFT for speed.
* In adversarial mode, fall back to a leaderless or leader-minimized protocol to reduce "attack the leader" leverage.
  This is the same *design pattern* as explicit automatic switching protocols in the literature
  (even though many papers target consortium settings). ([ScienceDirect][8])

### B. “Safety-first” finality rules

* If conflicting finalized checkpoints are possible under extreme conditions, enforce harsh slashing
  and a recovery rule (economic finality).
* During recovery, allow chain growth (availability) but treat finality as paused until a clean
  epoch occurs.

## The “evolving” part: safe reconfiguration without forks

To be permissionless, evolution has to be **predictable, verifiable, and hard to game**.

### A. On-chain, bounded parameter evolution

Certain parameters can move within pre-set ranges *without* a hard fork:

* committee size range,
* timeout schedule,
* fork-choice tie-break parameters,
* confirmation-depth recommendations.

Parameter updates are computed from **public telemetry** (missed slots, propagation delay proxies,
vote participation), and applied with:

* **hysteresis** (no flapping),
* **time-locks** (e.g., activate after N epochs),
* **caps** (cannot exceed safe bounds proven/analyzed).

This is exactly the kind of "tuning analysis" researchers do on Gasper-like systems. ([ScienceDirect][9])

### B. Dynamic validator/committee reconfiguration

Committees rotate every epoch anyway, but the protocol must ensure safe membership changes for the
*finality overlay*.
Use a reconfiguration method with explicit safety proofs (dynamic-committee BFT research focuses on
this). ([Springer Link][10])

### C. Hard-fork minimization via “consensus profiles”

Instead of one monolithic spec, define **profiles** (Mode 0/1/2) as first-class, and upgrade by:
* shipping new profile rules,
* activating via stake-weighted signaling + time delay,
* requiring supermajority to enable new profiles (but never to *keep producing blocks*).

So governance can evolve *capabilities*, while the chain remains live under the base chain rules.

## Security & incentive notes (what can go wrong)

* **Manipulating the trigger:** attackers might try to force Mode 2 to slow the chain.  
  Mitigation: multi-metric triggers + hysteresis + require cryptographic evidence (equivocations)
  for the strongest switches.
* **Committee capture:** defend with strong randomness (VRFs) and large enough committees; slash
  equivocation.
* **Complexity risk:** polymorphism adds complexity—so each mode must be formally specified, and
  switching must preserve safety invariants (no "half the network thinks we're in Mode 0").
  "Flexible BFT" work is a good reminder that different fault models/beliefs can coexist, but it
  must be carefully engineered. ([arXiv][11])

[6]: https://ethereum.org/developers/docs/consensus-mechanisms/pos/gasper/ "Gasper - ethereum.org"
[7]: https://arxiv.org/abs/2303.09113v4 "Nakamoto Consensus under Bounded Processing Capacity"
[8]: https://www.sciencedirect.com/science/article/pii/S209672092400068X "ATBFT-automatically switch consensus protocol - ScienceDirect"
[9]: https://www.sciencedirect.com/science/article/pii/S0140366425000805 "A stochastic analysis of the Gasper protocol - ScienceDirect"
[10]: https://link.springer.com/article/10.1007/s12083-025-01934-9 "Efficient dynamic-committee BFT consensus based on HotStuff"
[11]: https://arxiv.org/pdf/1904.10067 "arXiv:1904.10067v2 [cs.CR] 30 May 2019"

## MorphPoW-L1: a PoW permissionless L1 with *optimistic instant finality*

The goal:
* **Normal case:** transactions become *final in seconds* (a few network round trips).
* **Worst case:** if the fast path is attacked or the network is messy, the chain **falls back** to classic PoW safety (probabilistic finality), then recovers automatically.

This is basically the **Thunderella paradigm** (fast optimistic path + slow PoW fallback) made
permissionless, with **ByzCoin-style open membership** for the fast-path committee. ([Springer Link][12])

## Data structures: two layers

### A. Slow chain (PoW “keyblocks”)

* A normal PoW chain (like Bitcoin) whose blocks (“**keyblocks**”) do *not* need to carry all transactions.
* Keyblocks anchor time, randomness, and membership.

Decoupling leader election from transaction serialization is a well-trodden trick (e.g., Bitcoin-NG). ([USENIX][13])

### B. Fast stream (microblocks / fast confirmations)

* Between keyblocks, transactions flow as **microblocks** (high frequency).
* Microblocks get **finalized instantly** when the fast committee signs them (below).

Again, the "keyblocks + microblocks" pattern is used in Bitcoin-NG / ByzCoin-like designs. ([USENIX][13])

## Permissionless committee formation (no stake required)

To make “instant finality” work without PoS, we need a committee that:
* is **open membership**,
* is **Sybil-resistant**,
* roughly tracks **hashpower**.

Use **recent PoW winners as committee shares**:
* Maintain a sliding window of the last **W keyblocks**.
* Each keyblock gives its miner **one (or more) committee shares**.
* The committee for epoch *e* is those shares; voting power is proportional to shares.

This is essentially what [ByzCoin](https://github.com/dedis/cothority/blob/main/byzcoin/README.md)
proposes: open membership, hashpower-proportional consensus groups
formed from recently successful miners, enabling seconds-level irreversible commits (when the
committee is honest). ([USENIX][14])

## Polymorphic consensus modes (the “polymorph”)

### Mode 0 — **Optimistic instant finality** (default)

* A designated **accelerator/leader** proposes microblocks.
* The committee runs a very short BFT/collective-signing step (e.g., 2–3 rounds) to **finalize** the microblock.
* Finality proof = aggregated signature + committee roster reference (from the keyblock window).

This is the optimistic "instant confirmation" path described by Thunderella. ([Springer Link][12])

### Mode 1 — **Degraded network mode** (self-tuning)

Triggered by metrics like: rising orphan rate, signature participation drops, propagation delay spikes.
Actions:
* Increase timeouts / committee size within bounded ranges.
* Slow microblock cadence.
* Require higher “seen-by” thresholds before proposing the next microblock.

Why: real security/latency depends heavily on network conditions; tuning is part of the performance envelope. ([tselab.stanford.edu][15])

### Mode 2 — **Fallback PoW mode** (attack / partition / leader misbehavior)

If the fast path stalls or equivocates:
* Nodes **ignore fast-finality** and accept only what the **PoW slow chain** eventually confirms.
* Once conditions stabilize, automatically return to Mode 0.

This "fast path + fallback and recovery via slow chain" is the Thunderella paradigm. ([Springer Link][12])

## “Evolving” consensus: safe, bounded adaptation + upgrades

### A. On-chain bounded parameter evolution (no fork)

Parameters evolve automatically within safe caps:
* committee window size **W**
* microblock rate
* BFT timeouts / quorum margins
* trigger thresholds for Mode switching

**Anti-gaming:** hysteresis + multi-metric triggers + time-locks (changes apply after N keyblocks).

### B. Capability upgrades (rare, explicit)

For deeper changes (new signature scheme, new membership sampling, etc.):
* deploy as **new “profile” version**
* activate by hashpower signaling over a long window + delayed start height
* old clients can still follow slow-chain safety, even if they don’t understand the newest fast profile (they just won’t treat fast proofs as final)

## What you get (and what you pay)

### Pros

* **Seconds-level finality** in the optimistic case (Mode 0). ([Springer Link][12])
* Still **permissionless PoW** membership (no staking required). ([arXiv][16])
* **Robust fallback** to Nakamoto consensus when the fast path is attacked or the network is unstable. ([Springer Link][12])

### Trade-offs / risks

* **Committee capture risk** if an attacker has sustained high hashpower over the committee window W (you choose W to balance responsiveness vs capture resistance).
* **Complexity**: mode switching must be *formally specified* to avoid “half the network thinks it’s Mode 0” splits.
* **Leader/accelerator DoS**: mitigated by quick replacement rules and Mode 2 fallback.

[12]: https://link.springer.com/content/pdf/10.1007/978-3-319-78375-8_1.pdf?pdf=inline+link&utm_source=chatgpt.com "Thunderella: Blockchains with Optimistic Instant Confirmation"
[13]: https://www.usenix.org/system/files/conference/nsdi16/nsdi16-paper-eyal.pdf "Bitcoin-NG: A Scalable Blockchain Protocol - USENIX"
[14]: https://www.usenix.org/system/files/conference/usenixsecurity16/sec16_paper_kokoris-kogias.pdf "Enhancing Bitcoin Security and Performance with Strong ... - USENIX"
[15]: https://tselab.stanford.edu/research/blockchains-decentralized-systems/achieving-physical-limits/ "Consensus layer protocols to achieve physical limits"
[16]: https://arxiv.org/abs/1602.06997 "[1602.06997] Enhancing Bitcoin Security and Performance with Strong ..."

---

Below is a **workable parameter set** for a Europe-wide deployment of the **MorphPoW-L1** design
(PoW keyblocks + BFT/collective-signing “instant finality” fast path + PoW fallback), with numbers
chosen so “instant” finality is realistically **~2 seconds** in the optimistic case.

### Network assumption (Europe-wide)

To hit sub-5s finality, you need a bounded-latency regime *most of the time*. A reasonable engineering target is:
* **RTT p50:** 25–50 ms
* **RTT p95:** 120–180 ms
* **RTT p99:** 250–400 ms
  (achievable across EU with good peering; the protocol *still works* outside this, but “instant” becomes “slower instant,” and may fall back.)

This matters because BFT-style finality wants a few round trips.

## Concrete parameters

### PoW keyblocks (membership + randomness anchor)

* **Keyblock interval:** **60 seconds**  
  Rationale: fast enough to refresh committee and recover quickly; slow enough to limit stale blocks
  vs. very short PoW.
* **Keyblock payload:** minimal (header + refs), not full tx set.
* **Difficulty adjustment:** retarget every **N=720 keyblocks (~12h)** (or your favorite smoother algo).

> This "separate leader-election blocks vs transaction stream" pattern is exactly the Bitcoin-NG
> direction. ([USENIX][17])

### Committee selection (permissionless, hashpower-proportional)

**Sliding window W:** **1440 keyblocks (~24h)**

* Each mined keyblock grants **1 committee share** (or more if you want weighting by difficulty
  contributions, but start simple).
* Committee voting power = shares in window.  
  **Effective committee size target (for messaging):** **n ≈ 200–400** *representative members*
* You can keep **all shares** for weighting, but for fast-path messaging, sample/aggregate into
  ~200–400 “active signers” each epoch using a VRF seeded by the keyblock chain (membership stays
  PoW-proportional; messaging cost stays bounded).

> ByzCoin's central idea is *exactly* open membership with hashpower-proportional consensus groups
> formed from recently successful miners, enabling seconds-level irreversible commits using
> collective signing. ([USENIX][18])

### Fast path (microblocks + instant finality)

* **Microblock rate:** **2 microblocks/sec** (every **500 ms**)  
  Each microblock contains transactions + state transition data (or rollup-style blobs if you
  prefer).
* **Finality quorum:** **≥ 2/3 of committee shares** (weighted)
* “Final” microblock = has a quorum certificate (QC) that references:
  1. roster hash (derived from keyblock window),
  2. microblock hash,
  3. view/epoch id,
  4. aggregated signatures (collective signing).
* **Consensus step count:** **2 rounds** in the optimistic case
  * Round A: pre-commit vote
  * Round B: commit vote (QC)
* **Timeouts (Mode 0):**
  * `Tvote = max(350 ms, 2 * RTT_p95)` → pick **400 ms**
  * `Tcommit = max(350 ms, 2 * RTT_p95)` → pick **400 ms**
  * Total optimistic time ≈ proposal + 2 voting rounds + aggregation

  * Proposal dissemination: ~RTT_p95/2 to RTT_p95 ≈ 120–180 ms
  * Votes/aggregation (tree): ~1 RTT_p95 per round (roughly)
  * **Target “instant finality” ≈ 1.2–2.5 seconds**

This matches the intent of ByzCoin (seconds-level irreversible commit via collective signing) and
Thunderella's optimistic fast path. ([USENIX][18])

## Mode switching thresholds (polymorphic behavior)

### Mode 0 (default): optimistic instant finality

Stay here if all true over last **M=60 seconds**:
* microblock finality success rate ≥ **98%**
* median finality time ≤ **2.5s**
* equivocations detected = **0**

### Mode 1 (turbulence): self-tuning but still “fast”

Enter if any condition holds for **>30s**:
* finality success rate < **98%**
* median finality time > **2.5s**
* orphans/stales among keyblocks > **3%**

Actions in Mode 1:
* microblock rate → **1/sec** (1000 ms)
* timeouts: `Tvote=Tcommit=800 ms`
* active signers sample size ↑ (e.g., 300 → 400)

### Mode 2 (fallback PoW): abandon instant finality temporarily

Enter immediately if:
* conflicting QCs for same height (equivocation) OR
* no QC for **>10 seconds** OR
* network partition signals (e.g., two incompatible roster hashes appear)

Actions in Mode 2:
* treat fast path as “advisory”
* confirm via PoW keyblocks only (probabilistic)
* recover to Mode 1 after **K=30** consecutive “clean” seconds (no equivocation + QC restored), then to Mode 0 after stability.

> Thunderella explicitly frames this as "fast asynchronous path + slow synchronous fallback executed
> only if something goes wrong," giving optimistic instant confirmation while preserving robustness.
> ([Springer Link][19])

## Recommended “application finality” semantics

* **Instant finality (Mode 0/1):** 1 QC = final
* **Fallback finality (Mode 2):** require **k=6 keyblocks (~6 minutes)** for high-value transfers, or tune based on threat model

So apps get a single API: “final” is QC-final in normal times, and PoW-depth final during attacks.

## Quick sanity check (why these numbers are plausible)

* **60s keyblocks** keep PoW stable and membership fresh.
* **24h committee window** makes it hard to “flash attack” the committee unless the attacker
  sustains large hashpower for long enough.
* **2-round QC with ~400 ms timeouts** is consistent with Europe p95 RTT and a tree-aggregation
  signature scheme (the approach used in ByzCoin's collective signing line). ([USENIX][18])

[17]: https://www.usenix.org/system/files/conference/nsdi16/nsdi16-paper-eyal.pdf "Bitcoin-NG: A Scalable Blockchain Protocol - USENIX"
[18]: https://www.usenix.org/system/files/conference/usenixsecurity16/sec16_paper_kokoris-kogias.pdf "Enhancing Bitcoin Security and Performance with Strong ... - USENIX"
[19]: https://link.springer.com/content/pdf/10.1007/978-3-319-78375-8_1.pdf?pdf=inline+link&utm_source=chatgpt.com "Thunderella: Blockchains with Optimistic Instant Confirmation"

---

Here’s a concrete **two-profile spec** (EU-optimized + global-optimized) and a **purely on-chain
trigger formula** for switching Mode 0/1/2, for a **PoW L1 with optimistic instant finality** (PoW
keyblocks + microblocks + committee QC).

## Profile A: EU-optimized

Aim: ~1.2–2.5s finality most of the time.

### PoW layer (keyblocks)

* **Keyblock interval:** 60 s
* **Retarget:** 720 keyblocks (~12h)
* **Committee window W:** 1440 keyblocks (~24h)

### Committee & fast path

* **Active signer sample:** 256 (derived from PoW-share roster via VRF each epoch)
* **Microblock cadence:** 2 / sec (every 500 ms)
* **QC rule:** weighted quorum **≥ 2/3** of committee shares
* **BFT steps:** 2 rounds (PRECOMMIT, COMMIT)

### Timeouts

* `Tvote = 400 ms`, `Tcommit = 400 ms`
* **QC deadline per microblock:** `Dqc = 1200 ms`
  (if QC doesn’t appear by then, don’t finalize “instantly”)

### Fallback confirmations when fast path is off

**PoW depth suggestion:** 6 keyblocks (~6 min) for high-value transfers.

## Profile B: Global-optimized (aim: ~3–7s finality, fewer fallbacks)

### PoW layer (keyblocks)

* **Keyblock interval:** 90 s
* **Retarget:** 480 keyblocks (~12h)
* **Committee window W:** 960 keyblocks (~24h)

### Committee & fast path

* **Active signer sample:** 384 (more redundancy for higher latency)
* **Microblock cadence:** 1 / sec (every 1000 ms)
* **QC rule:** weighted quorum **≥ 2/3**
* **BFT steps:** 2 rounds (same protocol)

### Timeouts

* `Tvote = 900 ms`, `Tcommit = 900 ms`
* **QC deadline per microblock:** `Dqc = 3500 ms`

### Fallback confirmations

**PoW depth suggestion:** 8 keyblocks (~12 min) for high-value transfers (more conservative globally).

## On-chain observable signals (no external telemetry)

Everything below can be computed from block headers + committee messages included on-chain.

### Inputs (measured over a sliding window)

Let the chain define:
* `MB(t)`: microblocks proposed in the last `t` seconds
* `QC(t)`: microblocks that obtained a QC within the deadline (`Dqc`) in last `t` seconds
* `EQ(t)`: number of *equivocation proofs* included on-chain in last `t` seconds
  (same leader/committee key signs two conflicting microblocks for same height/view)
* `STALE(k)`: stale-rate of PoW keyblocks over last `k` keyblocks
  (stale = keyblock not on best chain but seen and referenced)

Define:
* **QC success rate:** `q = QC(60s) / max(1, MB(60s))`
* **QC median latency:** `L50 = median(time(QC) - time(proposal))` over last 60s
* **Equivocation count:** `e = EQ(300s)` (5 minutes)
* **PoW stale rate:** `s = STALE(120)` (last ~2h EU profile, ~3h global profile; adjust as you like)

## Mode switching rules (deterministic, hysteresis, time-locked)

### Immediate safety trigger → Mode 2 (fallback PoW)

Enter **Mode 2** instantly if any of these are true:
1. `e > 0` (any equivocation proof in last 5 minutes), **or**
2. **Conflicting QCs** observed for same height/view, **or**
3. `q < 0.80` for **two consecutive** 30s subwindows, **or**
4. “QC blackout”: **no QC** appears for `Tblackout`
   * EU: `Tblackout = 10s`
   * Global: `Tblackout = 20s`

**Mode 2 behavior**

* Microblocks may still propagate, but **nodes do not treat them final**.
* Chain finality = PoW confirmations only.
* Collect evidence (equivocation proofs), slash/penalize if your design supports it.

### Performance/stability trigger → Mode 1 (turbulence tuning)

Enter **Mode 1** if (and only if Mode 2 triggers are false) and any holds for **>30s**:
* EU: `q < 0.98` **or** `L50 > 2.5s` **or** `s > 0.03`
* Global: `q < 0.95` **or** `L50 > 6s` **or** `s > 0.04`

**Mode 1 actions (bounded adaptation)**

* EU: microblock rate 2/s → 1/s, timeouts 400ms → 800ms, signer sample +25%
* Global: microblock rate stays 1/s, timeouts 900ms → 1400ms, signer sample +25%
* Increase QC deadline `Dqc` proportionally.

### Recovery back to Mode 0 (hysteresis)

Return to **Mode 0** only after **Nclean** consecutive seconds:
* No equivocation proofs (`e == 0` within the rolling window),
* QC success rate above threshold,
* Median latency below threshold.

Suggested:
* EU: `Nclean = 120s` with `q ≥ 0.985` and `L50 ≤ 2.2s`
* Global: `Nclean = 180s` with `q ≥ 0.97` and `L50 ≤ 5.0s`

### Recovery from Mode 2 → Mode 1 (first), then Mode 0

* Exit Mode 2 to Mode 1 after `Nclear` seconds without fresh equivocations and QC resumes:
  * EU: `Nclear = 60s`, require at least 30 QCs observed
  * Global: `Nclear = 90s`, require at least 30 QCs observed
* Then follow the Mode 1 → Mode 0 rule above.

## Why this is implementable

* **All triggers are derived from data already in the protocol**: QCs, microblock timestamps/sequence numbers, equivocation proofs, and PoW stale rate.
* **No trust in ping/latency estimates**: you infer health from “did we actually finalize quickly and consistently?”
