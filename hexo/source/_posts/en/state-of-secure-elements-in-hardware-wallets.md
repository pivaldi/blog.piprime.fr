---
title: "State of Secure Elements in Hardware wallets"
date: 2025-12-05 21:19:26
id: state-of-secure-elements-in-hardware-wallets
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


| Name | Open Source | Secure Element | SE Model + Microcontroller | Evaluation Assurance Level |
|------|-------------|----------------|----------------------------|---------------------------|
| [Bitbox02 Nova](https://shiftcrypto.ch/bitbox02/) | YES | YES | **Infineon OPTIGA Trust M (v3)** + STM32... | EAL6+ |
| [Cardware](https://www.cardwarewallet.com/) | YES | YES | **Optiga Trust M** + STM32 | EAL6+ |
| [HyperMate](https://hyperpay.tech/hypermatepro/pro) | YES | YES | **Infineon** ? | EAL6+ |
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
