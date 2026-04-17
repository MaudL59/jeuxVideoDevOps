# 🚢 Projet Two Ships - Pipeline CI/CD

Ce projet est 2 jeux vidéos développé en JavaScript et TypeScript, intégrés dans un cycle de vie **DevSecOps** complet utilisant GitHub Actions.

## 🚀 Fonctionnalités du Pipeline (CI/CD)
Le workflow automatise les étapes suivantes à chaque "push" ou "pull request" :
- **Linter & Audit** : Vérification du style de code et scan des vulnérabilités (npm audit).
- **Tests Automatisés** : Exécution de la suite de tests avec Vitest.
- **Build & Artifact** : Compilation du projet et sauvegarde des fichiers prêts pour la production.

## 🧪 Tests et Qualité du Code

Conformément aux exigences du projet, nous avons implémenté une suite de tests validant le cœur du gameplay.

### ✅ État des Tests pour Two Ships Passing In The Night (Vitest)
Les tests sont verts et valident les 8 scénarios critiques :

```text
 ✓ tests/unit.test.js (5 tests) 5ms
 ✓ tests/functional.test.js (3 tests) 7ms

 Test Files  2 passed (2) 
 Tests       8 passed (8) 
```
### ✅ État des Tests pour Space invader (Vitest)
Les tests sont verts et valident les 8 scénarios critiques :

 ```text
 ✓ tests/unitaire.test.ts (5 tests) 8ms
 ✓ tests/fonctionnel.test.ts (3 tests) 10ms

 Test Files  2 passed (2)
 Tests       8 passed (8)
```

## 🛡️ Sécurité (DevSecOps)
Nous utilisons `npm audit` pour détecter les failles de sécurité dans les dépendances. 
- **Audit Level** : Le pipeline surveille les vulnérabilités de niveau `critical`.
- **Résultat** : En cas de détection, un rapport est généré dans les logs du workflow pour analyse.  
 
 
## 📦 Artefacts de Build
À chaque succès du pipeline, les versions compilées des jeux sont sauvegardées en tant qu'artefacts GitHub :
- `build-two-ships` : Contient le dossier de distribution (`dist`).
- `build-space-invaders` : Contient le dossier de build (`build`).

*Ces fichiers sont conservés 90 jours et permettent un déploiement manuel rapide.* 


## 🛠️ Développement Local
Pour tester les jeux sur votre machine, suivez ces étapes :

### Installation des dépendances (obligatoire la première fois) puis lancement des test en local :
Choisissez le dossier du jeu (ex: `games/two-ships` ou `games/space-invaders`), puis lancez :

```bash
npm install
npm run test
```