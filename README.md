# Informations
Nom : Derue
Prénom : Florian
Email Vinci : florian.derue@student.vinci.be

# URL Github du projet
https://github.com/florian-derue-vinci/IPL-social

# Explication du code

Ceci est un projet de validation d'adresses mail développé en TypeScript.

La fonction vérifie qu’une chaine de caractère est bien une adresse email valide :
- Il doit contenir au moins un @
- Il doit contenir au moins un point dans le nom de domaine (et pas le dernier caractère)
- Il ne peut contenir aucun espace
- Il doit avoir du texte avant et après le @

# Ligne de commande pour lancer les tests

Tests unitaires :
- npm test

Tests avec le coverage :
- npm run test:coverage

# Technologies utilisées
- Runtime : Node.js
- Language : TypeScript
- Framework tests : Jest
- CI/CD : Github actions
- Méthode : TDD

# Coverage
L'ojectif est de viser un minimum de 70% de coverage pour :
- Les lignes de codes
- Les fonctions