# POC-VueJSMongoDB

## Description

Ce projet est une preuve de concept (Proof of Concept - POC) utilisant Vue.js pour le frontend et MongoDB pour la gestion de la base de données. L'objectif est de démontrer comment ces technologies peuvent être intégrées pour créer une application web performante et scalable.

## Table des matières

- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Contribuer](#contribuer)
- [Licence](#licence)
- [Contact](#contact)

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure)
- MongoDB (version 4 ou supérieure)

## Installation

### Backend

1. Clonez le repository :

```bash
git clone https://github.com/rundredoffi/POC-VueJSMongoDB.git
```

2. Accédez au répertoire backend du projet :

```bash
cd POC-VueJSMongoDB/backend
```

3. Installez les dépendances :

```bash
npm install
```

### Frontend

1. Accédez au répertoire frontend du projet :

```bash
cd ../frontend
```

2. Installez les dépendances :

```bash
npm install
```

## Utilisation

### Backend

1. Démarrez le serveur MongoDB :

```bash
mongod
```

2. Démarrez le backend :

```bash
npm run start
```

### Frontend

1. Démarrez l'application frontend :

```bash
npm run serve
```

2. Accédez à l'application via votre navigateur à l'adresse suivante :

```
http://localhost:8080
```

## Structure du projet

Voici un aperçu de la structure du projet :

```
POC-VueJSMongoDB/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── ...
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── views/
│   │   ├── App.vue
│   │   ├── main.js
│   │   └── ...
│   ├── .env.example
│   └── package.json
└── ...
```

## Fonctionnalités

- **Authentification** : Gestion de l'authentification des utilisateurs avec JWT.
- **CRUD** : Fonctionnalités de création, lecture, mise à jour et suppression pour les documents MongoDB.
- **Interface utilisateur réactive** : Utilisation de Vue.js pour une expérience utilisateur fluide et dynamique.

## Technologies utilisées

- **Frontend** : Vue.js, Vue Router, Vuex
- **Backend** : Node.js, Express.js
- **Base de données** : MongoDB
- **Autres** : Axios, JWT

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer, veuillez suivre les étapes ci-dessous :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commitez vos modifications (`git commit -m 'Add some AmazingFeature'`)
4. Poussez votre branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENCE](./LICENSE) pour plus d'informations.

## Contact

Pour plus de détails ou des questions, veuillez me contacter par email à l'adresse suivante : **[contact.rundred@gmail.com]**

---

N'hésitez pas à personnaliser davantage ce README selon vos besoins spécifiques.