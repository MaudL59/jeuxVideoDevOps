import { describe, it, expect } from 'vitest';
import { clamp, lerp, mapLinear } from '../src/math';

describe('Tests des fonctions mathématiques', () => {
  
  it('clamp devrait limiter une valeur trop haute au maximum', () => {
    expect(clamp(10, 0, 5)).toBe(5);
  });

  it('clamp devrait limiter une valeur trop basse au minimum', () => {
    expect(clamp(-2, 0, 5)).toBe(0);
  });

  it('lerp devrait calculer le milieu entre deux valeurs', () => {
    expect(lerp(0, 10, 0.5)).toBe(5);
  });

  
  it('mapLinear devrait projeter une valeur sur une nouvelle échelle', () => {
    expect(mapLinear(5, 0, 10, 0, 100)).toBe(50);
  });

  it('mapLinear devrait fonctionner avec des échelles inversées', () => {
    expect(mapLinear(0, 0, 1, 10, 0)).toBe(10);
  });
});