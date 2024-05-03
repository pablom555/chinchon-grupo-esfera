import { describe, it } from 'node:test';
import assert from 'node:assert';

import { hasChinchon, hasStraightFlush, hasGame } from './games.js';

describe('Games', function() {

  describe('function hasChinchon()', function() {
    it('should return true when 7 cards are of the same suit and have consecutive values', function() {
      const cards = [
        { value: 2, label: 'oro' },
        { value: 3, label: 'oro' },
        { value: 4, label: 'oro' },
        { value: 5, label: 'oro' },
        { value: 6, label: 'oro' },
        { value: 7, label: 'oro' },
        { value: 8, label: 'oro' }
      ];
      assert.strictEqual(hasChinchon(cards), true);
    });

    it('should return false when 7 cards are not of the same suit or do not have consecutive values', function() {
      const cards = [
        { value: 2, label: 'oro' },
        { value: 3, label: 'baso' },
        { value: 4, label: 'oro' },
        { value: 5, label: 'oro' },
        { value: 6, label: 'oro' },
        { value: 7, label: 'oro' },
        { value: 8, label: 'oro' }
      ];
      assert.strictEqual(hasChinchon(cards), false);
    });
  });

  describe(' function hasStraightFlush()', function() {
    it('should return true when there is a sequence of 3, 4, 5 or 6 consecutive numbers', function() {
      const cards = [
        { value: 2, label: 'oro' },
        { value: 3, label: 'oro' },
        { value: 4, label: 'oro' },
        { value: 5, label: 'basto' },
        { value: 6, label: 'espada' },
        { value: 7, label: 'espada' },
        { value: 8, label: 'oro' }
      ];
      assert.strictEqual(hasStraightFlush(cards), true);
    });

    it('should return false when there is no sequence of 3, 4, 5 or 6 consecutive numbers', function() {
      const cards = [
        { value: 2, label: 'oro' },
        { value: 4, label: 'oro' },
        { value: 6, label: 'oro' },
        { value: 8, label: 'oro' },
        { value: 10, label: 'oro' },
        { value: 12, label: 'oro' },
        { value: 14, label: 'oro' }
      ];
      assert.strictEqual(hasStraightFlush(cards), false);
    });
  });

  describe('function hasGame()', function() {
    it('should return true when there are four cards of the same value', function() {
      const cards = [
        { value: 2, label: 'oro' },
        { value: 2, label: 'copa' },
        { value: 2, label: 'espada' },
        { value: 2, label: 'basto' },
        { value: 3, label: 'oro' },
        { value: 4, label: 'espada' },
        { value: 5, label: 'copa' }
      ];
      assert.strictEqual(hasGame(cards), true);
    });

    it('should return false when there are not four cards of the same value in a 7-card hand', function() {
      const cards = [
        { value: 2, label: 'oro' },
        { value: 3, label: 'espada' },
        { value: 4, label: 'copa' },
        { value: 5, label: 'basto' },
        { value: 6, label: 'espada' },
        { value: 7, label: 'copa' },
        { value: 8, label: 'copa' }
      ];
      assert.strictEqual(hasGame(cards), false);
    });
  });
});
