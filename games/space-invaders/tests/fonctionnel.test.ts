// test fonctionnel du jeu Space Invaders
import { describe, it, expect } from 'vitest';
import { Game } from '../src/game';

describe('Space Invaders Game', () => {
  it('should initialize the game correctly', () => {
    const game = new Game();
    expect(game).toBeDefined();
    expect(game.player).toBeDefined();
    expect(game.invaders).toBeDefined();
    expect(game.bullets).toBeDefined();
  });

  it('should move the player left and right', () => {
    const game = new Game();
    const initialX = game.player.x;

    game.movePlayerLeft();
    expect(game.player.x).toBeLessThan(initialX);

    game.movePlayerRight();
    game.movePlayerRight();
    expect(game.player.x).toBeGreaterThan(initialX);
  });

  it('should shoot bullets', () => {
    const game = new Game();
    const initialBulletCount = game.bullets.length;

    game.s                  hoot();
    expect(game.bullets.length).toBe(initialBulletCount + 1);
  });

  it('should detect collisions between bullets and invaders', () => {
    const game = new Game();
    const invader = game.invaders[0];
    const bullet = { x: invader.x, y: invader.y }; // Simulate a bullet hitting the invader

    game.bullets.push(bullet);
    game.checkCollisions();

    expect(game.invaders).not.toContain(invader);
    expect(game.bullets).not.toContain(bullet);
  });
});