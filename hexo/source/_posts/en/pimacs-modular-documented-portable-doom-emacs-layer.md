---
title: "PIMacs: A Modular, Documented, and Reproducible Doom Emacs Layer"
date: 2026-02-08 12:24:53
id: pimacs-modular-documented-reproducible-doom-emacs-layer
tree_view: true
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

[PIMacs](https://github.com/pivaldi/pimacs) is a collection of **documented and reproducible [Doom Emacs](https://github.com/doomemacs/doomemacs) modules**, designed to provide an *out-of-the-box development ecosystem* comparable to modern IDEs while preserving the flexibility of Emacs.

PIMacs is built on four core pillars:

* **Composable [Doom](https://github.com/doomemacs/doomemacs) modules instead of a monolithic configuration**
* **Self-documented workflows via automatically generated refcards**
* **On-demand installation of development tools via [Mise**](https://mise.jdx.dev/)
* **Portable and reproducible environments, including Docker with X11 support**

## Modular by Design

PIMacs is organized as a set of **independent Doom-based modules**:

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

Each module has a clear scope, can be activated or deactivated independently, and declares both the **editor behavior** and **tool requirements** using [Mise](https://mise.jdx.dev/).

You can enable everything at once:

```elisp
(load! "modules/pimacs/init")

```

Or deliberately compose your own setup:

```elisp
(load! "modules/pimacs/default")
(load! "modules/pimacs/lang-go")
(load! "modules/pimacs/refcards")

```

## On-Demand Tools with Mise

One of the most powerful features of PIMacs is its **tight integration with Mise** for managing development tools.

Instead of assuming that tools are already globally installed on your system, PIMacs can **automatically install and manage software dependencies on demand**, module by module.

### Declarative Toolchains per Language

Each module can provide its own `mise.toml` file declaring its required tools.

For instance, the [Go module](https://github.com/pivaldi/pimacs/tree/master/lang-go) defines its toolchain [here](https://github.com/pivaldi/pimacs/blob/master/lang-go/mise.toml). This setup can automatically fetch:

* Go itself
* Language Servers (LSPs)
* Code formatters
* Linters
* Auxiliary CLI utilities

When you load the `lang-go` module with the `+tool` flag, the required tooling is detected, automatically installed if missing, and seamlessly activated for the current user environment.

Because *Mise* installs tools **per user, versioned, and isolated**—rather than globally across the system—PIMacs is immediately operational without tedious manual environment configurations. Unlike standard Emacs configurations, PIMacs treats external tooling as part of the editor's contract, not as a prerequisite.

### CLI Integration Within Emacs

The [PIMacs CLI](https://github.com/pivaldi/pimacs/blob/master/default/cli.el) directly hooks Mise into your Emacs workflows:

* Ensures the correct tool versions are always available
* Aligns Emacs tooling with project-specific runtime expectations
* Keeps the CLI environment and the editor in perfect sync

From a user experience standpoint, it mirrors modern editors like [Zed](https://zed.dev/): **clone → open → code**.

## Auto-Generated Refcards

PIMacs includes an automated **[refcard system](https://github.com/pivaldi/pimacs/blob/master/doc/README.org)** that generates up-to-date documentation straight from the active configuration.

It handles **per-module refcards** extracted directly from the underlying code, such as:

* [Default keybindings for PIMacs/keys with the "azerty" keyboard layout](https://github.com/pivaldi/pimacs/blob/master/keys/keys-key-bindings-refcard.org)
* [Keybindings for PIMacs/lang-go with the "azerty" keyboard option](https://github.com/pivaldi/pimacs/blob/master/lang-go/lang-go-key-bindings-refcard.org)
* [Keybindings for PIMacs/lang-php with the "azerty" keyboard option](https://github.com/pivaldi/pimacs/blob/master/lang-php/lang-php-key-bindings-refcard.org)
* ...and more.

> **In practice:** Every single module that defines keybindings automatically generates its own detailed, readable refcards.

Instead of relying on handwritten documentation that drifts out of date over time, PIMacs parses keymaps and commands directly from active modules, rendering structured reference files. This layout ensures your configuration is completely self-explanatory, auditable, and easy to share.

## Keymaps That Respect Your Layout

Navigation and physical comfort are top priorities.

The `pimacs/keys` and `pimacs/avy` modules establish a unified, ergonomic navigation layer tailored specifically for AZERTY keyboard users via the explicit `+azerty` flag, making sure your muscle memory doesn't fight default configurations.

## Emacs in Docker, with X11 Support

PIMacs is fully operational **inside Docker containers with complete graphical support**.

Leveraging X11 forwarding, you can launch a native, graphical Emacs container packed with themes, custom fonts, and Tree-sitter capabilities—completely sandboxed and reproducible.

## Conclusion

PIMacs answers a highly practical question:

> *Can Emacs offer an out-of-the-box, IDE-grade experience without turning into an opaque black box?*

The answer is **yes**. PIMacs provides a modern development ecosystem comparable to Zed or [JetBrains](https://www.jetbrains.com/) while remaining undeniably, cleanly Emacs.

**Repository:** [https://github.com/pivaldi/pimacs](https://github.com/pivaldi/pimacs)
