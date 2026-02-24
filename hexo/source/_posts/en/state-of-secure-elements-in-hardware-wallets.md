---
title: "State of Secure Elements in Hardware wallets"
date: 2025-12-05 21:19:26
id: state-of-secure-elements-in-hardware-wallets
tree_view: true
lang: en
description: "Hardware wallets are used as second chip for storing private keys and seed words. Here is the state of secure elements in hardware wallets."
categories:
- [EN, Tech, Blockchain]
- [EN, Tech, Security]
- [EN, Tech, Bitcoin]
- [EN, Tech, Cryptography]
tags:
- blockchain
- bitcoin
- cryptography
- security
---

{% note danger %}
This article is solely educational and has not been catered to your individual circumstances, and as such, any action or inaction which you may contemplate based on the contents herein should be made in consultation with your personal legal, tax, and financial advisors. Nothing in this article or its associated services constitutes professional or financial advice of any kind (including business, employment, investment advisory, accounting, tax, and/or legal advice). Nothing in this article or its associated services constitutes or forms a part of any offer for sale or subscription of, or any invitation to offer to buy or subscribe for, any securities, nor should it, or any part of it, form the basis of, or be relied upon in connection with, any contract or commitment whatsoever.
{% endnote %}

## Hardware wallets

| Name | Open Source | Secure Element | SE Model + Microcontroller | Evaluation Assurance Level |
|------|-------------|----------------|----------------------------|---------------------------|
| [Bitbox02 Nova](https://shiftcrypto.ch/bitbox02/) | YES | YES | **Infineon OPTIGA Trust M (v3)** + STM32... | EAL6+ |
| [Cardware](https://www.cardwarewallet.com/) | YES | YES | **Optiga Trust M** + STM32 | EAL6+ |
| [HyperMate](https://www.hyperpay.tech/hypermatepro/pro) | YES | YES | **Infineon** ? | EAL6+ |
| [OneKey Classic 1S](https://onekey.so/products/onekey-classic-hardware-wallet/) | YES | YES | **THD89** | EAL6+ |
| [OneKey Pro](https://onekey.so/products/onekey-classic-hardware-wallet/) | YES | YES | **TMC THD89 x4** | EAL6+ |
| [Satochip/Satodime](https://satochip.io) | YES | YES | **NXP J3H145** and **NXP J3R110** | EAL6+ |
| [Trezor Safe 3](https://github.com/trezor) | YES | YES | **Infineon OPTIGA Trust M (v3)** + STM32F4 | NDA-free EAL6+ ! |
| [Trezor Safe 5](https://github.com/trezor) | YES | YES | **Infineon OPTIGA Trust M (v3)** + STM32U5 | NDA-free EAL6+ ! |
| [Trezor Safe 7](https://github.com/trezor) | YES | YES | **Infineon OPTIGA Trust M (v3)** + **TROPIC01** | NDA-free EAL6+ ! |
| [Cypherock X1](https://www.cypherock.com/) | YES | YES | **ATECC608A+NXP JCOP3** and **ARM Cortex-M** | EAL5+ outdated chip 608A |
| [KeyStone](https://keyst.one/) | YES | YES | **ARM Cortex-M0** | EAL5+ |
| [Bitbox02](https://shiftcrypto.ch/bitbox02/) | YES | YES | **ATECC608B** + ATSAMD51J20A | N/A |
| [Era wallet](https://era-wallet.com/) | YES | YES | **ATECC608B or ATECC608C** + STM32H753 | N/A |
| [Hito](https://hito.xyz/) | YES | YES | nRF5340 | N/A |
| [Jade](https://github.com/Blockstream/Jade) | YES | Virtual* | N/A | N/A |
| [Jade Plus](https://github.com/Blockstream/Jade) | YES | Virtual* | N/A + ESP32-S3 | N/A |
| [Keepkey](https://shapeshift.com/keepkey) | YES | NO | N/A + STM32 | N/A |
| [KeyStone3 (Pro)](https://keyst.one/) | YES | YES | **ATECC608B + Maxim DS28S60 (+ Maxim MAX32520)** | EAL? |
| [Passport Core](https://foundationdevices.com/) | YES | YES | **ATECC608C** + STM32... | N/A |
| [Passport Prime](https://foundationdevices.com/) | YES | YES | **ATECC608C** + SAMA5D2 processor | N/A |
| [Prokey](https://prokey.io/) | YES | NO | N/A + STM32F205VG | N/A |
| [Trezor One & T](https://github.com/trezor) | YES | NO | N/A + STM32F2/STM32F4 | N/A |
| [ColdCard Mk3](https://coldcard.com/) | NO (MIT+CC) | YES | **ATECC608B or ATECC608A** + STM32L496RGT6 | outdated chip 608A |
| [ColdCard Mk4](https://coldcard.com/docs/coldcard-mk4) | NO (MIT+CC) | YES | **ATECC608B+Maxim DS28C36B** + STM32L4S5VIT6 | N/A |
| [ColdCard Q](https://coldcard.com/) | NO (MIT+CC) | YES | **ATECC608B+Maxim DS28C36B** + STM32... | N/A |
| [CoolWallet Pro](https://www.coolwallet.io/coolwallet_pro) | NO (soon Y) | YES | **NXP J3R110** | EAL6+ |
| [CoolWallet S](https://www.coolwallet.io/) | NO (soon Y) | YES | **NXP P5CD081** | EAL5+ |
| [D'CENT](https://dcentwallet.com/products/BiometricWallet) | NO | YES | **NXP P60** | EAL5+ |
| [Hashwallet](https://www.gethashwallet.com/) | N/A | YES | **Infineon SLE78** | EAL6+ |
| [Husky HDW20](https://www.huskywallet.com/) | NO | YES | **ATECC608A** | outdated chip |
| [ImKey](https://imkey.im/) | NO | YES | **Infineon SLE 78CLUFX5000PH** | EAL6+ |
| [Jubiterwallet](https://jubiterwallet.de/) | NO | YES | **Infineon** ? | EAL6+ |
| [Kasse HK-1000](https://kasseusa.com/) | NO | YES | **ST31H320 A03** | EAL5+ |
| [Keevo](https://www.keevowallet.com/) | NO | YES | **Infineon Optiga Trust-P** | EAL5+ |
| [KeyPal](https://www.keypal.pro/) | N/A | YES | **NXP MCU + ?** | N/A |
| [Ledger Nano Gen5](https://shop.ledger.com/products/ledger-nano-gen5) | NO | YES | **ST33K1M5** + ? | EAL6+ |
| [Ledger Nano S Plus](https://shop.ledger.com/) | NO | YES | **ST33K1M5C** + STM32... | EAL6+ |
| [Ledger Nano X](https://shop.ledger.com/pages/ledger-nano-x) | NO | YES | **ST33J2M0** + STM32WB55 | EAL5+ |
| [Ledger Stax / Flex](https://shop.ledger.com/pages/ledger-stax) | NO | YES | **ST33K1M5** + ? | EAL6+ |
| [Ngrave](https://www.ngrave.io/products/zero) | N/A | YES | unknown built-in SE + STM32MP157C | EAL7+ |
| [Opolo](https://www.opolo.shop/) | NO | YES | **NXP** ? + ARM Cortex M4 | EAL6+ |
| [Safepal S1;X1](https://www.safepal.io/) | NO | YES | Unknown chip | EAL5+ |
| [Secux](https://secuxtech.com/) | NO | YES | **Infineon SLE 97** | EAL5+ |
| [Tangem](https://tangem.com/) | NO | YES | **Samsung SecureCore** microchip ? | EAL6+ |
| [~~Ledger Nano S~~](https://shop.ledger.com/products/ledger-nano-s) | NO | YES | **ST31H320** + STM32F042K6 | EAL5+ |
| [~~OneKey Classic~~](https://onekey.so/products/onekey-classic-hardware-wallet/) | YES | YES | **HSC32I1** | EAL6+*/EAL 4+ |
| [~~OneKey Mini~~](https://onekey.so/products/onekey-mini-hardware-wallet/) | YES | YES | **ATECC608A** | outdated chip |
| [~~OneKey Touch~~](https://onekey.so/products/onekey-touch-hardware-wallet/) | YES | YES | **ATECC608A** | outdated chip |


[Source](https://bitcointalk.org/index.php?topic=5304483.0)

## Common Criteria EAL (Evaluation Assurance Level) Explained

The Common Criteria defines 7 evaluation assurance levels (EAL1-EAL7), each representing increasing levels of security testing and assurance:

### EAL1 - Functionally Tested
- **Assurance**: Minimal, basic functional testing
- **Analysis**: Review of functional specification and some independent testing
- **Use case**: Low security requirements, off-the-shelf products
- **Effort**: Lowest cost and time

### EAL2 - Structurally Tested
- **Assurance**: Low to moderate security
- **Analysis**: Requires design documentation, developer testing evidence, and independent vulnerability analysis
- **Use case**: General commercial products with basic security needs
- **Effort**: Still relatively low cost

### EAL3 - Methodically Tested and Checked
- **Assurance**: Moderate security
- **Analysis**: Development environment controls, configuration management, more rigorous testing
- **Use case**: Security-conscious commercial applications
- **Effort**: Moderate investment required

### EAL4 - Methodically Designed, Tested and Reviewed
- **Assurance**: Moderate to high security
- **Analysis**: Complete design documentation, security architecture analysis, extensive independent testing
- **Use case**: **Most common level for commercial security products** (smart cards, firewalls, VPNs, hardware wallets)
- **Effort**: Significant but practical for commercial products

### EAL5 - Semiformally Designed and Tested
- **Assurance**: High security
- **Analysis**: Semi-formal design verification, advanced vulnerability analysis, covert channel analysis
- **Use case**: High-security applications, military/government systems
- **Effort**: Very high cost and time, requires specialized expertise

### EAL6 - Semiformally Verified Design and Tested
- **Assurance**: Very high security
- **Analysis**: Semi-formal verification of design against specification, comprehensive independent testing
- **Use case**: Ultra-high security environments, critical infrastructure
- **Effort**: Extremely high cost, rarely achieved in practice

### EAL7 - Formally Verified Design and Tested
- **Assurance**: Extremely high security (highest level)
- **Analysis**: Formal mathematical proof of security properties, complete formal verification
- **Use case**: Theoretical maximum security, rarely if ever achieved in commercial products
- **Effort**: Prohibitively expensive, requires formal methods expertise

### Practical Context for Hardware Wallets

- **EAL4** is the "sweet spot" - provides good security assurance while remaining commercially viable
- **EAL5+** certification is extremely rare and expensive, typically only justified for military/government applications
- **Higher EAL ≠ more secure product** - it means more rigorous evaluation process, not necessarily better security design
- Many modern secure elements in hardware wallets target **EAL5+ or EAL6+** certification (e.g., CC EAL6+, AVA_VAN.5)
- **NDA-free EAL6+** (like Trezor Safe series) means the certification was achieved without requiring non-disclosure agreements, allowing for true transparency


## The choice of the AI

**Asking Claude AI** to look at the open-source wallets in this file, it would consider **the Trezor Safe series (Safe 3, Safe 5, and Safe 7) to be the most secure** for these reasons:

  1. NDA-free EAL6+ Certification - This is unique and crucial:
    - EAL6+ is the highest practical certification level
    - "NDA-free" means no non-disclosure agreements were required
    - Complete transparency - no hidden security compromises
    - Aligns perfectly with open-source principles
  2. Proven Secure Elements:
    - Infineon OPTIGA Trust M (v3) - industry-leading, well-audited chip
    - Safe 7 adds TROPIC01 - an open-source RISC-V chip (even more transparency!)
  3. Progressive Hardware:
    - Safe 3: STM32F4 microcontroller
    - Safe 5: STM32U5 microcontroller (newer)
    - Safe 7: TROPIC01 open-source chip (most advanced)

  Other Strong Contenders:

  - Bitbox02 Nova - Same Infineon OPTIGA Trust M (v3), EAL6+, but not NDA-free
  - Satochip/Satodime - High-end NXP chips (J3H145, J3R110), EAL6+, but not NDA-free
  - OneKey Pro - TMC THD89 x4, EAL6+, interesting multi-chip approach

  Why NDA-free Matters:

  Most EAL6+ certifications require NDAs, meaning manufacturers must keep certain security details secret. The Trezor Safe series achieved the same certification without NDAs, meaning:
  - Full public disclosure is possible
  - No backdoors can be hidden under "security through obscurity"
  - True verifiability for the open-source community

  **Recommendation of the AI: Trezor Safe 7 (most advanced) or Safe 5 (proven) for maximum security in an open-source hardware wallet.**
