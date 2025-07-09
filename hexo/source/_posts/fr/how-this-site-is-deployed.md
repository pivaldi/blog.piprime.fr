---
title: Comment ce site Web hexo est-il construit et déployé ?
date: 2025-04-29 20:00:00
id: how-this-hexo-website-is-build-and-deployed
description: Comment ce site Web hexo est déployé à l'aide de Docker, Caddy, docker-caddy-proxy grâce à Ansible.
categories:
- [FR, Tech, Configuration, Docker]
- [FR, Tech, Configuration, Ansible]
tags:
- Docker
- Ansible
- Hexo
- Makefile
- Caddy
---

![Ansible déployant le blog Hexo avec Docker](/media/how-this-hexo-website-is-build-and-deployed/deploying-hexo-docker-ansible.webp)

[This article is available in English](/en/how-this-hexo-website-is-build-and-deployed/)

Ce site web est construit avec le [framework de blog Hexo](https://hexo.io/)
et l'[élégant thème NexT](https://theme-next.js.org/).  
Rien de très exceptionnel pour l’instant… 🥸

Voyons en détail la maintenance du serveur et le déploiement du blog.

## Génération des Pages/Articles Asymptote

Toutes les [pages Asymptote](/asymptote) et les
[articles Asymptote](/categories/tech/programming/asymptote/) proviennent des
[exemples de codes Asymptote](https://github.com/pivaldi/asymptote-exemples)
et sont générés automatiquement par le [générateur d’exemples Asymptote](https://github.com/pivaldi/asymptote-exemples-builder).  
Une fois les fichiers markdown Hexo générés, une synchronisation `rsync` est effectuée via [ce simple script](https://github.com/pivaldi/asymptote-exemples-builder/blob/master/bin/sync-to-hexo-blog.sh).

Grâce à cette organisation, tous les projets autour d’Asymptote sont séparés par concept avec leur
signification propre, leur périmètre d'usage propre, et leur fonctionnement spécifique.

## Génération de HTML avec Docker

Le déploiement commence par la génération des fichiers statiques `html` via un [Dockerfile NodeJS](https://github.com/pivaldi/blog.piprime.fr/blob/master/hexo/Dockerfile)
et un fichier [docker-compose.yml](https://github.com/pivaldi/blog.piprime.fr/blob/master/compose.yaml), de sorte que la commande [make generate](https://github.com/pivaldi/blog.piprime.fr/blob/master/Makefile#L26)
fait tout le travail de génération des fichiers `html` statiques.

## Serveur avec Caddy

L’étape suivante du déploiement consiste à servir les fichiers statiques `html` avec une instance du
serveur web [Caddy](https://caddyserver.com/) sur le port `4280`
via un simple [Dockerfile Caddy](https://github.com/pivaldi/blog.piprime.fr/blob/master/caddy/Dockerfile)
en utilisant le même `docker-compose.yml`, de sorte que la commande [make serve](https://github.com/pivaldi/blog.piprime.fr/blob/master/Makefile#L38)
fait tout le travail de création d'image et de mise en service.  
Le port `4280` est défini par la variable d’environnement `SERVER_PORT` et vous pouvez [voir le fichier Caddy utilisé pour mon blog Hexo](https://github.com/pivaldi/blog.piprime.fr/blob/master/caddy/Caddyfile).

Cependant, il n’est pas suffisant de servir le blog dans un conteneur Docker sur le port `4280`, le blog doit
être accessible sur les ports `80` et `443` pour le domaine `blog.piprime.fr` !

## Proxy du Port 443 vers 4280 avec Caddy-Docker-Proxy

Sur la machine hôte, nous souhaitons servir plusieurs services web accessible par les ports `80` et `443`, et non sur le port `4280`.  
Pour atteindre cela, j’utilise un
[Caddy Docker Proxy](https://github.com/lucaslorentz/caddy-docker-proxy) avec la [configuration Docker suivante](https://github.com/pivaldi/blog.piprime.fr/blob/master/compose.yaml#L28) :

```yaml
networks:
   - caddy
labels:
   caddy_0: blog.piprime.fr
   caddy_0.reverse_proxy: "{{upstreams ${SERVER_PORT}}}"
```

et, pour rediriger temporairement `www.piprime.fr` vers le blog, les lignes suivantes :

```yaml
   caddy_1: www.piprime.fr
   caddy_1.redir: "https://blog.piprime.fr{uri} temporary"
```

Bien que la commande `make deploy-caddy-docker-proxy` réalise tout le processus de déploiement de ce
blog, je ne veux pas avoir à me souvenir où cloner le projet, comment le mettre à jour, ni quels sont les logiciels
à installer sur l’hôte (`git`, `make`, `Docker` globalement sur la machine hôte).

## Déploiement/Maintenance avec Ansible

Lorsqu’il faut utiliser une nouvelle instance de serveur, quelle qu'en soit la raison, c’est
vraiment pénible d’installer toutes les dépendances logicielles, de faire toutes les configurations
et de réaliser tout le processus de déploiement pour tous les services.  
Même pour mettre à jour le blog, j'en ai assez de me connecter via `ssh`, d’aller dans le bon répertoire, de me rappeler
quelle commande lancer, et de m’assurer que tout a été fait correctement sans oublier une commande magique
cachée derrière les fagots.

Pour automatiser toute l’installation, la mise à jour et la maintenance du serveur, j’ai choisi le logiciel d'automatisation [Ansible](https://www.redhat.com/en/ansible-collaborative).  
Ma [configuration Ansible](https://github.com/pivaldi/ansible) est à ce point sécurisée que j’ai confiance de la partager !

Concernant ce blog, la seule chose à faire et à retenir est de lancer la commande `make piprimefr-blog` ;
cela garantira que les logiciels nécessaires sont installés, correctement configurés, et cela clonera
le blog ou le mettra à jour si besoin.

- Pour installer une nouvelle instance de serveur ou la mettre à jour, la seule commande à lancer est `make all` !  
- Vous pouvez jeter un œil à [la tâche Ansible principale pour déployer ce blog Hexo](https://github.com/pivaldi/ansible/blob/master/roles/piprime.fr/tasks/blog.yml).

## Conclusion

Ce blog est partiellement généré par un outil d'automatisme (pages et articles Asymptote), servi par une instance dockerisée d'un serveur web Caddy, elle-même proxyfiée par Caddy Docker Proxy.  
Toute la maintenance du serveur et le déploiement du blog sont réalisés grâce au moteur d’automatisation Ansible.
