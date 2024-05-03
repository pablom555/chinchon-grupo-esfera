import { describe, it } from 'node:test';
import assert from 'node:assert';

import { sameSuit, consecutive } from './helpers.js';

describe('Helpers', function() {

  describe('function sameSuit()', function() {

    it('should return true when all cards are of the same suit', function() {
      const cards = [
        { value: 2, label: 'oro' },
        { value: 3, label: 'oro' },
        { value: 4, label: 'oro' }
      ];
      assert.strictEqual(sameSuit(cards), true);
    });

    it('should return false when not all cards are of the same suit', function() {
      const cards = [
        { value: 2, label: 'oro' },
        { value: 3, label: 'oro' },
        { value: 4, label: 'copa' }
      ];
      assert.strictEqual(sameSuit(cards), false);
    });
  });

  describe('function consecutive()', function() {
    it('should return true when numbers are consecutive', function() {
      const numbers = [1, 2, 3, 4, 5];
      assert.strictEqual(consecutive(numbers), true);
    });

    it('should return false when numbers are not consecutive', function() {
      const numbers = [1, 2, 4, 5, 6];
      assert.strictEqual(consecutive(numbers), false);
    });
  });
});
