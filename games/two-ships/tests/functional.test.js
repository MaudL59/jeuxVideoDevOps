import { describe, it, expect } from 'vitest';
import { getRange, RANGE_MELEE, RANGE_NEAR, RANGE_FAR } from '../src/ai';
import { vec3_create } from '../src/vec3';

describe('Tests fonctionnels du fichier ai.js', () => {

//   C'est quoi ? Le corps-à-corps (mêlée).
// Pourquoi ? À cette distance, l'ennemi est "collé" à toi.
// Action de l'IA : Au lieu de tirer, elle va probablement essayer de te 
// donner un coup, de te foncer dedans ou de déclencher une explosion. 
// C'est la zone de danger immédiat.
  
  it('RANGE_MELEE pour une distance < 64', () => {
    const e = { position: vec3_create(0, 0, 0) };
    const t = { position: vec3_create(10, 0, 0) };
    expect(getRange(e, t)).toBe(RANGE_MELEE);
  });
  
// C'est quoi ? La distance de tir idéale.
// Pourquoi ? L'ennemi te voit clairement et il est assez 
// proche pour ne pas rater sa cible.
// Action de l'IA : C'est ici qu'elle va ouvrir le feu, 
// lancer des missiles 
// ou commencer à te poursuivre activement.  

  it('RANGE_NEAR pour une distance < 512', () => {
    const e = { position: vec3_create(0, 0, 0) };
    const t = { position: vec3_create(100, 0, 0) };
    expect(getRange(e, t)).toBe(RANGE_NEAR);
  });

  
//   C'est quoi ? La zone de repos ou de patrouille.
// Pourquoi ? Tu es tellement loin que l'ennemi ne te considère plus comme 
// une menace immédiate ou ne te voit même plus.
// Action de l'IA : Elle s'arrête de tirer, 
// elle retourne à sa position de départ ou elle continue sa 
// ronde tranquillement. Ça permet d'économiser les performances du jeu :
//  on ne fait pas calculer des attaques complexes à un ennemi qui est
//   à l'autre bout de la carte !

  it('RANGE_FAR pour une grande distance', () => {
    const e = { position: vec3_create(0, 0, 0) };
    const t = { position: vec3_create(2000, 0, 0) };
    expect(getRange(e, t)).toBe(RANGE_FAR);
  });

});
