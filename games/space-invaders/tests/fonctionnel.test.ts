// test fonctionnel du jeu Space Invaders 
// fonctionnal.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { calculate, PhysicsOutput, Projectile, reset } from '../src/ts/physics';

// Avant chaque test, réinitialiser l'état du jeu pour garantir des tests indépendants
beforeEach(() => {
  reset();
});

// Test pour le Système de Tir (Vérifier la création d'un projectile)
// Méthode à retrouver dans : src/ts/physics.ts
// Pour s'assurer que lorsqu'on tire, un projectile est créé et ajouté à la liste des projectiles.
describe('Système de Tir', () => {
  it('devrait créer un projectile lorsqu\'on tire', () => {
    // Simuler une entrée de tir
    const fakeData = {
      // Simuler une entrée de tir avec les axes et le bouton de tir activé
      input: {axes: {x: 0, y: 1}, fire: true},
      
      // deltaTime de 1s, calculer la physique pour une frame (images par seconde), pour ne pas faire avancer les projectiles ou les ennemis pendant le test
      deltaTime: 1,
      
      // fonction pour ajouterdes points
      addPoints: () => {}
    };

    // Appeler la fonction de calcul de la physique avec les données simulées
    const result = calculate(fakeData);
  
    // Vérifier que le projectile a été créé et ajouté à la liste des projectiles
    expect(result.projectiles.length).toBeGreaterThan(0);
  });
});
  

// Test pour le Système de Mouvement (Souris)
// Méthode à retrouver dans : src/ts/physics.ts
// Pour s'assurer que lorsque le joueur se déplace, sa position est mise à jour correctement.
describe('Système de Mouvement (Souris)', () => {
  it('devrait mettre à jour la position du joueur selon l\'entrée des axes', () => {
    // définition d'une direction cible (ex: en haut à droite)
    const moveData = {
      input: { axes: { x: 1, y: 1 }, fire: false },
      deltaTime: 0.1, // Un temps très court suffit
      addPoints: () => {}
    };

    // calcule de la position résultante
    const state = calculate(moveData);

    // vérifie si le joueur n'est plus à sa position d'origine (0, 1)
    // On s'attend à ce que le joueur ait tourné vers la direction (1, 1)
    expect(state.playerPosition.x).not.toBe(0);
  });
});


// Test pour la Condition de Game Over (Vérifier que le jeu se termine lorsque les ennemis atteignent le joueur)
// Méthode à retrouver dans : src/ts/physics.ts
// Pour s'assurer que lorsque les ennemis atteignent le joueur, la condition de game over est déclenchée.
describe('Condition de Game Over', () => {
  it('devrait déclencher le game over lorsque les ennemis atteignent le joueur', () => {
    // Apparition d'un ennemi 
    const enemi = {
      input: {axes: {x: 0, y: 0}, fire: false},
      deltaTime: 2, 
      // 2s Pour être sûr qu'un ennemi apparaisse
      addPoints: () => {}
    };
    calculate(enemi);

    // Simuler le passage du temps pour faire avancer l'ennemi vers le joueur
    const moveData = {
      input: {axes: {x: 0, y: 0}, fire: false},
      deltaTime: 10, 
      // 10s : l'ennemi aura largement atteint le radius < 90
      addPoints: () => {}
    };
    const state = calculate(moveData);
    
    // Vérifie si la condition de game over est déclenchée
    expect(state.gameOver).toBe(true);
  });
});