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
  


// Test pour le Système de Collision (Vérifier la destruction d'un ennemi)
// Méthode à retrouver dans : src/ts/physics.ts
// Pour s'assurer que lorsqu'un projectile touche un ennemi, l'ennemi est détruit et retiré de la liste des ennemis.
describe('Système de Collision', () => {
  it('devrait détruire un ennemi lorsqu\'un projectile le touche', () => {
    // Simuler l'apparition d'un ennemi
    const initialState = calculate({ 
      input: {axes: {x: 0, y: 1}, fire: false},
      deltaTime: 2.1,
      addPoints: () => {} 
    });
    
    //  on recupere l'enemie de force pour s'assurer qu'il est aligné avec le projectile que nous allons tirer
    const targetEnemy = initialState.enemies[initialState.enemies.length - 1];
  targetEnemy.position.angle = Math.PI / 2; // Aligné avec {x: 0, y: 1}
  
    // simuler le tir d'un projectile qui va toucher l'ennemi
    calculate({ 
      input: {axes: {x: 0, y: 1}, fire: true},
      deltaTime: 0.01, 
      addPoints: () => {} 
    });
      

    // simiuler le passage du temps pour faire avancer le projectile vers l'ennemi
    let state: PhysicsOutput;
    for (let i = 0; i < 1000; i++) {
    state = calculate({ 
      input: {axes: {x: 0, y: 1}, fire: false}, 
      deltaTime: 0.005, 
      addPoints: () => {} 
    });
  }
  
  // Vérifier que l'ennemi ciblé a été retiré de la liste des ennemis
  expect(state.enemies).not.toContain(targetEnemy);
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
