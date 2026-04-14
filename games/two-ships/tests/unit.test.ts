import { describe, it, expect } from 'vitest';
// On retire le .js à la fin de l'import, Vitest gère ça tout seul
import { clamp, lerp, mapLinear } from '../src/math';

describe('Tests des fonctions mathématiques', () => {
  
  it('clamp devrait limiter une valeur trop haute au maximum', () => {
    expect(clamp(10, 0, 5)).toBe(5);
  });

  it('clamp devrait limiter une valeur trop basse au minimum', () => {
    expect(clamp(-2, 0, 5)).toBe(0);
  });

  it('lerp devrait calculer le milieu entre deux valeurs', () => {
    // lerp(0, 10, 0.5) doit donner 5
    expect(lerp(0, 10, 0.5)).toBe(5);
  });

  
  it('mapLinear devrait projeter une valeur sur une nouvelle échelle', () => {
    // Si on mappe 5 d'une échelle [0, 10] vers [0, 100], ça doit faire 50
    expect(mapLinear(5, 0, 10, 0, 100)).toBe(50);
  });

  it('mapLinear devrait fonctionner avec des échelles inversées', () => {
    // Si on mappe 0 d'une échelle [0, 1] vers [10, 0], ça doit faire 10
    expect(mapLinear(0, 0, 1, 10, 0)).toBe(10);
  });
});