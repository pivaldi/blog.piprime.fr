---
title: Tuto Debian pour miner de la Monero avec une GPU NVIDIA
date: 2025-09-18 20:12:57
id: tuto-debian-pour-miner-de-la-monero-avec-une-gpu-nvidia
lang: fr
description: "Tuto Debian/Unbuntu pour miner de la Monero en utilisant une carte graphique Nvidia."
categories:
- [FR, Tech, Linux]
- [FR, Tech, Crypto]
- [FR, Tech, Crypto, Monero]
- [FR, Tech, Linux, Debian]
tags:
- Linux
- Crpyto
- Monero
---

<figure>
<img src="/media/tuto-debian-pour-miner-de-la-monero-avec-une-gpu-nvidia/xmrig-mining.webp" alt="XMRing Mining on a personnal Laptop." />
</a>
<figcaption>
<span><br>XMRing Mining on a personnal Laptop</span>
</figcaption>
</figure>

On trouvera ici, un tutoriel complet pour miner de la XMR avec une carte graphique Nvidia.  Bien sûr
tout est déjà sur le net mais souvent réparti sur différent site et parfois sans cohérence entre les
sites.  
C'est pourquoi je propose ici un tuto complet pour les geeks.

## Les Builds

[La documentation officielle pour builder XMRig et Cuda](https://xmrig.com/docs/miner/build/ubuntu) est bien cool mais elle est inconsistante sur une Debian.
Je propose ici la solution que j'ai adoptée en ajoutant quelques détails pour lesquels on peut passer pas mal de temps à chercher.

{% note Note %}
J'utilise les drivers propriétaire NVIDIA avec ce fichier `/etc/apt/sources.list` qu'il faudra adapter à votre version de Debian :

```txt
deb https://deb.debian.org/debian/ bookworm main contrib non-free non-free-firmware
deb http://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware
deb-src https://deb.debian.org/debian/ bookworm main contrib non-free non-free-firmware

deb-src http://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware

# bookworm-updates, to get updates before a point release is made;
# see https://www.debian.org/doc/manuals/debian-reference/ch02.en.html#_updates_and_backports
deb https://deb.debian.org/debian/ bookworm-updates main contrib non-free non-free-firmware
deb-src https://deb.debian.org/debian/ bookworm-updates main contrib non-free non-free-firmware

# bookworm-backports, previously on backports.debian.org
deb https://deb.debian.org/debian/ bookworm-backports main contrib non-free non-free-firmware
deb-src https://deb.debian.org/debian/ bookworm-backports main contrib non-free non-free-firmware

# Installing the debugging symbols
# See https://wiki.debian.org/HowToGetABacktrace
deb http://debug.mirrors.debian.org/debian-debug/ bookworm-debug main

```

Voici les paquets NVIDIA installé sur mon PC après une installation toute fraîche.

```txt
>  dpkg --get-selections | grep -i nvidia
firmware-nvidia-graphics			install
firmware-nvidia-gsp				install
glx-alternative-nvidia				install
libegl-nvidia0:amd64				install
libgl1-nvidia-glvnd-glx:amd64			install
libgles-nvidia1:amd64				install
libgles-nvidia2:amd64				install
libglx-nvidia0:amd64				install
libnvidia-allocator1:amd64			install
libnvidia-cfg1:amd64				install
libnvidia-egl-gbm1:amd64			install
libnvidia-egl-wayland1:amd64			install
libnvidia-eglcore:amd64				install
libnvidia-encode1:amd64				install
libnvidia-glcore:amd64				install
libnvidia-glvkspirv:amd64			install
libnvidia-ml1:amd64				install
libnvidia-pkcs11-openssl3:amd64			install
libnvidia-ptxjitcompiler1:amd64			install
libnvidia-rtcore:amd64				install
nvidia-alternative				install
nvidia-driver					install
nvidia-driver-bin				install
nvidia-driver-libs:amd64			install
nvidia-egl-common				install
nvidia-egl-icd:amd64				install
nvidia-installer-cleanup			install
nvidia-kernel-common				install
nvidia-kernel-dkms				install
nvidia-kernel-support				install
nvidia-legacy-check				install
nvidia-modprobe					install
nvidia-persistenced				install
nvidia-settings					install
nvidia-smi					install
nvidia-support					install
nvidia-suspend-common				install
nvidia-vdpau-driver:amd64			install
nvidia-vulkan-common				install
nvidia-vulkan-icd:amd64				install
xserver-xorg-video-nvidia			install
```

{% endnote %}

### Build de XMRig

```bash
sudo apt install git build-essential cmake libuv1-dev libssl-dev libhwloc-dev
cd ~/code
git clone https://github.com/xmrig/xmrig.git
mkdir xmrig/build && cd xmrig/build
cmake ..
make -j$(nproc)
```

On teste les dépendances :
```text
ldd xmrig
	linux-vdso.so.1 (0x00007f10d37c9000)
	libssl.so.3 => /lib/x86_64-linux-gnu/libssl.so.3 (0x00007f10d3157000)
	libcrypto.so.3 => /lib/x86_64-linux-gnu/libcrypto.so.3 (0x00007f10d2c00000)
	libuv.so.1 => /lib/x86_64-linux-gnu/libuv.so.1 (0x00007f10d3777000)
	libhwloc.so.15 => /lib/x86_64-linux-gnu/libhwloc.so.15 (0x00007f10d30fa000)
	libm.so.6 => /lib/x86_64-linux-gnu/libm.so.6 (0x00007f10d2b20000)
	libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f10d293e000)
	/lib64/ld-linux-x86-64.so.2 (0x00007f10d37cb000)
	libudev.so.1 => /lib/x86_64-linux-gnu/libudev.so.1 (0x00007f10d30cc000)
```

### Build de CUDA

Il y a des problèmes de compilation sous Debian… En particulier [Issue with unsupported (or latest gcc > 11) compilers](https://github.com/NVIDIA/cuda-samples/issues/179).
Voici une bonne façon de procéder :

```bash
sudo apt install libcuda1 nvidia-cuda-toolkit-gcc
git clone https://github.com/xmrig/xmrig-cuda.git
mkdir xmrig-cuda/build && cd xmrig-cuda/build
cmake .. -DCUDA_LIB=/usr/local/cuda/lib64/stubs/libcuda.so -DCUDA_TOOLKIT_ROOT_DIR=/usr/lib/nvidia-cuda-toolkit/
NVCC_APPEND_FLAGS='-allow-unsupported-compiler' make -j$(nproc)
```

## Configuration

On peut utiliser l'[assistant de configuration de XMRig](https://xmrig.com/wizard). J'utilise cette configuration que j'ai anonymisée que j'ai placée dans le fichier `~/.config/xmrig.json` :
```json
{
    "autosave": true,
    "donate-level": 4,
    "cpu": true,
    "opencl": false,
    "cuda": {
        "enabled": true,
        "loader": "/home/pi/code/xmrig-cuda/build/libxmrig-cuda.so"
    },
    "pools": [
        {
            "coin": "monero",
            "algo": "rx/0",
            "url": "xmr-eu.kryptex.network:8029",
            "user": "YOUR_MONERO_ADDR/YOUR_KRYPTEX_USER_NAME",
            "pass": "x",
            "tls": true,
            "keepalive": true
        }
    ]
}
```

Comme vous pouvez le voir, j'utilise [le pool Kryptex](https://pool.kryptex.com/xmr) pour lequel j'ai [créé un compte](https://www.kryptex.com/).
Il y une [documentation pour connecter son propre matériel](https://pool.kryptex.com/articles/account-mining-fr) au pool de `Kryptex` mais on peut choisir aussi d'[autres pools](https://miningpoolstats.stream/monero).  
**Il n'est pas recommandé d'utiliser les trois premiers pools sous peine de fragiliser la sécurité de la blockchain Monero**.

## Usage

On peut voir [liste des options de XMRig](https://xmrig.com/docs/miner/command-line-options), voici celles que j'utilise pour tester ma configuration :

```txt
>  ./xmrig --config="$HOME/.config/xmrig.json" --threads=16 --cpu-priority=5 --cpu-memory-pool=-1 --huge-pages-jit --randomx-1gb-pages --dry-run
 * ABOUT        XMRig/6.24.0 gcc/12.2.0 (built for Linux x86-64, 64 bit)
 * LIBS         libuv/1.44.2 OpenSSL/3.0.17 hwloc/2.9.0
 * HUGE PAGES   supported
 * 1GB PAGES    supported
 * CPU          Intel(R) Core(TM) Ultra 9 185H (1) 64-bit AES
                L2:18.0 MB L3:24.0 MB 16C/22T NUMA:1
 * MEMORY       20.0/30.8 GB (65%)
 * DONATE       4%
 * ASSEMBLY     auto:intel
 * POOL #1      127.0.0.1:18081 coin Monero
 * POOL #2      xmr-eu.kryptex.network:8029 coin Monero
 * COMMANDS     hashrate, pause, resume, results, connection
[2025-09-17 16:26:11.519]  config   OK
```

Visiblement tout va bien donc feu, on le lance en tant que root pour éviter d'avoir l'erreur `FAILED TO APPLY MSR MOD, HASHRATE WILL BE LOW` !  
On vire le `--dry-run` et c'est parti :

```txt
sudo ./xmrig --config="/home/pi/.config/xmrig.json" --threads=20 --cpu-priority=5 \
    --cpu-memory-pool=-1 --huge-pages-jit --print-time=3600 --health-print-time=3600 \
    --pause-on-battery
```



