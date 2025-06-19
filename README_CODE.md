# Blog Basket Ivoirien - Explication du Code

## Présentation du Projet
Ce projet est un blog dédié au basketball en Côte d'Ivoire, mettant en avant son histoire, ses talents et son évolution. Il est construit avec le framework [Astro](https://astro.build/), spécialisé dans la création de sites statiques performants.

## Technologies Utilisées
- Astro pour la construction du site
- Fichiers Markdown pour le contenu des articles (dans `src/content/blog`)
- JavaScript pour la gestion dynamique des données
- CSS pour le style des composants et des pages

## Structure du Projet

```
/
├── public/                 # Fichiers statiques (images, styles, etc.)
├── src/
│   ├── assets/             # Assets comme les SVG
│   ├── components/         # Composants réutilisables (ex: Navbar)
│   ├── content/            # Articles de blog en Markdown
│   ├── layouts/            # Layouts des pages (ex: BlogLayout)
│   └── pages/              # Pages du site (accueil, blog, articles)
├── package.json            # Dépendances et scripts npm
├── astro.config.mjs        # Configuration Astro
└── README.md               # README par défaut
```

## Description des Pages Principales

### `src/pages/index.astro` (Page d'accueil)
- Affiche une section d'accueil avec un message de bienvenue
- Liste les derniers articles de blog triés par date de publication
- Présente une section "À propos" du blog
- Utilise le layout `BlogLayout` pour la structure générale

### `src/pages/blog/index.astro` (Liste des articles)
- Affiche tous les articles de blog disponibles
- Permet de naviguer vers chaque article via un lien
- Utilise également le layout `BlogLayout`

### `src/pages/blog/[slug].astro` (Page article)
- Génère dynamiquement une page pour chaque article Markdown
- Affiche le titre, la date, l’auteur et le contenu de l’article
- Gère le cas où l’article n’est pas trouvé (404)
- Utilise le layout `BlogLayout`

## Composants et Layouts

### `src/layouts/BlogLayout.astro`
- Structure HTML commune à toutes les pages utilisant ce layout
- Intègre la barre de navigation (`Navbar`)
- Contient le pied de page avec informations de contact et liens rapides
- Charge les styles globaux et les polices Google Fonts

### `src/components/Navbar.astro`
- Barre de navigation avec liens vers l’accueil et la liste des articles
- Responsive pour s’adapter aux mobiles et ordinateurs
- Affiche le logo du site

## Gestion du Contenu
- Les articles sont stockés en fichiers Markdown dans `src/content/blog`
- Chaque article contient des métadonnées (titre, date, auteur, description, tags, image)
- Astro utilise son API de collections de contenu pour récupérer et trier les articles

## Commandes pour Développer et Construire

| Commande          | Description                              |
|-------------------|----------------------------------------|
| `npm install`     | Installer les dépendances               |
| `npm run dev`     | Lancer le serveur de développement     |
| `npm run build`   | Construire le site pour la production  |
| `npm run preview` | Prévisualiser le site construit localement |

## Contact
Pour toute question : contact@basketivoirien.com

---

Ce fichier README explique brièvement la structure et les fonctionnalités principales du code du blog Basket Ivoirien construit avec Astro.
