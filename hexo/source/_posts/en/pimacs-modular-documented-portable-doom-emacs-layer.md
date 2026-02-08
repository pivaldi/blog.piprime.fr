---
title: "PIMacs: A Modular, Documented, and Reproducible Doom Emacs Layer"
date: 2026-02-08 12:24:53
id: pimacs-modular-documented-reproducible-doom-emacs-layer
description: "PIMacs is a modular, documented, and reproducible layer on top of Doom Emacs, designed to deliver a ready-to-use development ecosystem with auto tooling installation."
lang: en
tags:
  - emacs
  - doom-emacs
  - open-source
categories:
- [EN, Tech, Engineering]
- [EN, Tech, Emacs]
---

This article is available in [French](/fr/pimacs-modular-documented-reproducible-doom-emacs-layer).


[PIMacs](https://github.com/pivaldi/pimacs) is not “yet another Emacs config”.  
It is a **modular, documented, and reproducible layer on top of [Doom Emacs](https://github.com/doomemacs/doomemacs)**, designed to deliver a *ready-to-use development ecosystem* comparable to modern IDEs—while preserving Emacs’ flexibility.

PIMacs is built around four core ideas:

- **Composable modules instead of a monolithic config**
- **Self-documented workflows via auto-generated refcards**
- **On-demand installation of development tooling using [Mise](https://mise.jdx.dev/)**
- **Portable and reproducible environments, including Docker + X support**

Everything else is optional.

## Philosophy: Emacs as a System, Not a Dotfile

Most Emacs setups slowly grow into unstructured personal dotfiles.  
PIMacs treats Emacs as a **system**:

- Modules are explicit
- Tooling is declarative
- Documentation is generated
- Environments are reproducible

The result is an editor that behaves more like **Zed or JetBrains IDEs**:
open a project → tooling is available → you start working.

But without giving up control.

## Modular by Design

PIMacs is organized as a collection of **independent Doom-compatible modules**:

```text
modules/pimacs/
├── default/
├── keys/
├── avy/
├── session/
├── ui/
├── lang-go/
├── lang-php/
├── lang-c/
├── docker/
├── refcards/
└── …
```

Each module has a clear scope, can be enabled or disabled independently, declares both **editor behavior** and **tooling requirements** thanks to [Mise](https://mise.jdx.dev/).

You can enable everything:

```elisp
(load! "modules/pimacs/init")
```

Or compose intentionally:

```elisp
(load! "modules/pimacs/default")
(load! "modules/pimacs/lang-go")
(load! "modules/pimacs/refcards")
```

Nothing is implicit. If it’s active, it’s because you chose it.

## On-Demand Tooling with Mise: IDE-Level Readiness

One of the most powerful features of PIMacs is its **tight integration with Mise** for development tooling management.  
Instead of assuming tools are already installed on your system, PIMacs can **auto-install and manage language toolchains on demand** per module.

### Declarative Toolchains per Language

Each language module may ship its own `mise.toml` file declaring required tools.  
For example, the [Go module](https://github.com/pivaldi/pimacs/tree/master/lang-go) defines its toolchain [here](https://github.com/pivaldi/pimacs/blob/master/lang-go/mise.toml).  
This can include:

* Go itself
* Language servers
* Formatters
* Linters
* Auxiliary CLI tools

When you load the module `lang-go` with the option `+tool`, the required tooling is:

* detected
* installed automatically if missing
* activated automatically for the current user

As Mise installs **per-user, versioned, managed tooling**, not system-global so that Emacs is immediately usable, with all required tooling available without manual setup.  
Unlike most Emacs configurations, PIMacs treats external tooling as part of the editor contract, not a prerequisite.

### CLI Integration Inside Emacs

The [PIMacs cli](https://github.com/pivaldi/pimacs/blob/master/default/cli.el)  integrates Mise directly into Emacs workflows:

* Ensures the correct tool versions are available
* Aligns Emacs tooling with project expectations
* Keeps CLI and editor in sync

From the user’s perspective, the experience is similar to modern IDEs like [Zed](https://zed.dev/):
**clone → open → code**.

The difference is that tooling remains:

* explicit
* reproducible
* transparent

## Auto-Generated Refcards: Documentation That Does Not Lie

PIMacs includes a **[refcards system](https://github.com/pivaldi/pimacs/blob/master/doc/README.org)** that automatically generates documentation from the active configuration.  
It also provides **per-module refcards**, extracted directly from the code itself. For example:

- [Default PIMacs/keys Key Bindings with Keyboard Option “azerty”](https://github.com/pivaldi/pimacs/blob/master/keys/keys-key-bindings-refcard.org)
- [PIMacs/lang-go Key Bindings with Keyboard Option “azerty”](https://github.com/pivaldi/pimacs/blob/master/lang-go/lang-go-key-bindings-refcard.org).
- [PIMacs/lang-php Key Bindings with Keyboard Option “azerty”](https://github.com/pivaldi/pimacs/blob/master/lang-php/lang-php-key-bindings-refcard.org).
- etc.

**In practice, every module that defines keybindings also ships its own detailed refcards.**

Instead of hand-written docs that drift over time, PIMacs, extracts keybindings and commands from modules, generates structured refcards and keeps documentation aligned with reality.  
This makes the configuration self-explaining, auditable and shareable.

**Documentation becomes a build artifact, not an afterthought.**

## Keymaps That Respect Your Keyboard

Navigation and ergonomics are first-class concerns.

The `pimacs/keys` and `pimacs/avy` modules define a consistent navigation layer.
For AZERTY users, an explicit toggle exists:

```elisp
(keys +azerty)
```

Keyboard layout is part of the environment — PIMacs treats it as such.

## Emacs Inside Docker, With X Support

PIMacs can be to run fully featured **inside Docker containers with full graphical support**.

This enables:

* identical setups across machines
* isolated experiments
* reproducible demos
* controlled CI environments

With X forwarding, you get a real GUI Emacs with themes, fonts, Tree-sitter, everything — fully encapsulated.

## Language Support Without Overreach

Language modules (`lang-*`) follow one rule:

> Enable modern tooling on demand and stay predictable.

* Tree-sitter where it makes sense
* LSP without magic
* Minimal defaults, easy overrides

PIMacs avoids heavy abstraction layers and respects user control.

## Conclusion

PIMacs answers a practical question:

> *Can Emacs provide an IDE-level experience without becoming opaque?*

The answer is **yes**, if:

* configuration is modular
* tooling is declarative
* documentation is generated
* environments are reproducible

PIMacs delivers a ready-to-use development ecosystem comparable to Zed or [JetBrains](https://www.jetbrains.com/) — while remaining unmistakably Emacs.

**Repository:** [https://github.com/pivaldi/pimacs](https://github.com/pivaldi/pimacs)

*Emacs is a platform. PIMacs treats it like one.*
