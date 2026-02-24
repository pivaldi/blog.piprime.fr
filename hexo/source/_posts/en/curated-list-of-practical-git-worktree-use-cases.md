---
title: "A Curated List of Practical Git Worktree Use Cases"
date: 2026-01-21 20:52:24
id: curated-list-of-practical-git-worktree-use-cases
tree_view: true
lang: en
description: "A curated list of practical git worktree use cases with real workflows."
categories:
- [EN, Tech, Git]
tags:
- git
- workflows
---

[This article is available in french](/fr/liste-selectionnee-de-cas-d-usage-pratiques-de-git-worktree).

Git worktrees are one of those Git features that sound optional—until the day they quietly eliminate
half your workflow friction.

If you’ve ever:
* cloned the same repository multiple times;
* stashed changes just to switch context;
* do recurrent code reviews;
* or delayed a hotfix because your branch was “too messy”…

…then Git worktrees are for you.

This article presents **curated, real-world use cases** for Git worktrees, each paired with **minimal command snippets** that show *how the workflow actually looks*—without turning the post into a manual.

## A Quick Mental Model

A Git worktree lets you check out **multiple branches of the same repository at the same time**, each in its own directory, while sharing a single `.git` database.

> One repository → multiple working directories → zero stashing.

Throughout this article, we’ll assume a simple convention:

* your main repo lives in `my-repo/`
* worktrees live next to it in `../wt/`

## Parallel Feature Development Without Context Switching

**The problem**: you’re deep into *Feature A* when *Feature B* suddenly becomes urgent. Stashing feels risky. Committing feels premature.  
**The worktree approach**: give each feature its own working directory.

```bash
git worktree add -b feature/audit-logs ../wt/audit-logs origin/master
```

This single command does three things at once:
1. Create a new branch called feature/audit-logs
2. starting from origin/master
3. check it out into the directory ../wt/audit-logs.

Now:
* `my-repo/` → Feature A
* `../wt/audit-logs/` → Feature B

You don’t “switch context” anymore—you *physically move* between contexts. Editors, terminals, and mental state stay clean.

Once *Feature B* commited/pushed, you can remove the worktree with the command `git worktree remove ../wt/audit-logs/` from the directory `my-repo/`.

## Hotfixes Without Interrupting Ongoing Work

**The problem**: production is broken, but your current branch is half-refactored and unsafe to commit.  
**The worktree approach**: spin up a hotfix directly from `master`.

```bash
git fetch origin
git worktree add -b hotfix/critical-bug ../wt/hotfix-critical origin/master
```

Fix, commit, push—without touching your in-progress work.

Hotfixes stay pure. No rebasing, no cherry-picking from a dirty branch.  
When production is involved, this alone justifies worktrees.

## Reviewing Pull Requests Without Disturbing Your Own Branch

**The problem**: you want to run a teammate’s PR locally, but you’re mid-feature.
**The worktree approach**: check out the PR into its own directory.

```bash
git fetch origin pull/123/head:pr-123
git worktree add ../wt/pr-123 pr-123
```

Run the app, tests, migrations—then delete the directory when done.

Code review becomes an *isolated activity*, not something that derails your day.

{% note %}
`git fetch origin pull/123/head:pr-123` means retrieve from `origin` the PR `pull/123/head` (the
head commit of the PR branch on Github) and write it localy in the branch pr-123.
{% endnote %}

## Long-Running Experiments and Spikes

**The problem**
You want to explore a risky idea that may not survive, and you don’t want it bleeding into “real” branches.

**The worktree approach**
Create a spike branch with its own worktree.

```bash
git worktree add -b spike/new-cache-strategy ../wt/spike-cache origin/master
```

**Why this works**
Experiments become cheap and disposable. If it fails, you delete a folder—not untangle a branch history.

## Release Preparation While Development Continues

**The problem**
You need to stabilize a release branch while new features keep moving forward.

**The worktree approach**
One worktree per release.

```bash
git worktree add ../wt/release-1.8 release/1.8
```

Bug fixes, version bumps, and tags live there—while your main repo continues on `develop` or `master`.

**Why this works**
Release work stays conservative. Development stays fast. No accidental cross-contamination.

## Running Multiple Versions of the App Side-by-Side

**The problem**: you need to compare behavior between `master` and a refactor branch.  
**The worktree approach**: run both versions simultaneously.

```bash
git worktree add ../wt/run-master origin/master
git worktree add ../wt/run-refactor feature/big-refactor
```

Each directory runs its own instance.  
Perfect for regressions, migrations, performance comparisons, and “what actually changed?” investigations.

## Teaching, Demos, and Documentation

**The problem**: live demos and tutorials suffer from branch switching and waiting.  
**The worktree approach**: prepare one worktree per demo step.

```bash
git worktree add ../wt/demo-step-1 demo/step-1
git worktree add ../wt/demo-step-2 demo/step-2
```

You jump instantly between known-good states. This is gold for workshops, talks, and blog screenshots.

## Debugging CI Failures Across Commits

**The problem**: CI fails on one branch, passes on another, and you need to compare locally.  
**The worktree approach**: pin worktrees to the failing states.

```bash
git worktree add ../wt/ci-fail origin/failing-branch
git worktree add --detach ../wt/ci-commit abcdef1234
```

You can keep multiple failing states around simultaneously—no recloning, no guesswork.

{% note %}
`git worktree add --detach ../wt/ci-commit abcdef1234` creates a worktree checked out at a specific
commit, without attaching it to any branch, it's a snapshot, not a moving line of history.

It's used to:
* inspect the repo exactly as CI saw it
* run tests or builds
* compare with another commit or branch
{% endnote %}

## Taming Large Repos and Monorepos

**The problem**: branch switching in a monorepo is slow, risky, and mentally taxing.
**The worktree approach**: assign worktrees by domain or initiative.

```bash
git worktree add ../wt/frontend feature/frontend-redesign
git worktree add ../wt/backend feature/backend-perf
```

Each worktree becomes a stable “workspace.” Tooling, caches, and focus stay localized.

## Clean Separation of IDEs, Tooling, and Containers

**The problem**: IDEs, language servers, and containers dislike frequent branch switches.
**The worktree approach**: one worktree per tooling context.

```bash
git worktree add ../wt/go feature/go-migration
git worktree add ../wt/js feature/ui-overhaul
```

Each IDE window has a stable filesystem and branch. No re-indexing. No broken debug configs.

## Managing Worktrees (The Only Commands You Really Need)

List active worktrees:

```bash
git worktree list
```

Remove a worktree cleanly:

```bash
git worktree remove ../wt/pr-123
```

Clean up stale metadata:

```bash
git worktree prune
```

Delete the associated branch (optional):

```bash
git branch -d pr-123
```

## Final Thoughts

Git worktrees don’t replace branching—they **unlock its full potential**.

They reward engineers who:

* work in parallel;
* support production systems;
* review code seriously;
* and value low-friction workflows.

If you’ve ever cloned a repo “just to keep things clean,” you were already doing worktrees—manually.  
Once you adopt them intentionally, going back feels unnecessary.
