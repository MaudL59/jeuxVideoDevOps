// tests unitaires type clamp/lerp
// unitaire.test.ts
import { describe, it, expect } from 'vitest';
import { clamp, lerp } from '../src/ts/math/math';
import { distance, magnitude, normalize, Vector } from '../src/ts/math/vector';


// Test pour Clamp(Limites de mouvement)
// Méthode à retrouver dans : src/ts/math/math.ts
// Il teste si le vaisseau sort de l'écran, clamp le force à rester sur le bord.
describe('clamp', () => {
  it('clamp devrait limiter une valeur entre min et max', () => {
    // clamp de 10 à 0-100 devrait retourner 10
    expect(clamp(0, 100, 10)).toBe(10);
    
    // clamp de -10 à 110 devrait retourner 0 et 100 respectivement
    expect(clamp(0, 100, -10)).toBe(0);
    
    // clamp de 110 à 0-100 devrait retourner 100
    expect(clamp(0, 100, 110)).toBe(100);
    
    // clamp de 50 à 0-100 devrait retourner 50
    expect(clamp(0, 100, 50)).toBe(50);
    
    // clamp de 150 à 0-100 devrait retourner 100
    expect(clamp(0, 100, 150)).toBe(100);
  });
});


// Test pour Lerp(avancement progressif)
// Méthode à retrouver dans : src/ts/math/math.ts
// Pour un déplacement fluide du point A au point B.
describe('lerp', () => {
  it('devrait retourner la valeur intermédiaire correcte', () => {
    // lerp entre 0 et 10 à 50% devrait être 5
    expect(lerp(0, 10, 0.5)).toBe(5);
    
    // lerp entre 0 et 10 à 25% devrait être 2.5
    expect(lerp(0, 10, 0.25)).toBe(2.5);
    
    // lerp entre 0 et 10 à 75% devrait être 7.5
    expect(lerp(0, 10, 0.75)).toBe(7.5);
  });
});


// Test pour Distance(Mesurer l'écart)
// Méthode à retrouver dans : src/ts/math/vector.ts
// Pour mesurer l'écart entre le joueur et un ennemi.
describe('distance', () => {
  it('devrait calculer la distance entre deux vecteurs', () => {
    const v1 = { x: 0, y: 0 };
    const v2 = { x: 3, y: 4 };
    // la distance entre (0,0) et (3,4) est 5
    expect(distance(v1, v2)).toBe(5);
  });
});


// Test pour Magnitude(Calculer la force)
// Méthode à retrouver dans : src/ts/math/vector.ts
// Pour connaître la vitesse réelle (longueur du vecteur).
describe('magnitude', () => {
  it('devrait calculer la magnitude d\'un vecteur', () => {
    const v = { x: 3, y: 4 };
    // la magnitude de (3,4) est 5
    expect(magnitude(v)).toBe(5);
  });
});


// Test pour Normalize(Uniformiser la vitesse)
// Méthode à retrouver dans : src/ts/math/vector.ts
// Pour garantir une vitesse constante dans toutes les directions.
describe('normalize', () => {
  it('devrait normaliser un vecteur', () => {
    const v = { x: 3, y: 4 };
    const normalized = normalize(v);
    // la magnitude du vecteur normalisé devrait être 1
    expect(magnitude(normalized)).toBeCloseTo(1);
    
    // le vecteur normalisé de (3,4) devrait être (0.6, 0.8)
    expect(normalized.x).toBeCloseTo(0.6);
    expect(normalized.y).toBeCloseTo(0.8);
  });
});