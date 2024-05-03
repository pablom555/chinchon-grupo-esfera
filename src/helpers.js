/**
 * Checks if all cards are of the same suit.
 * @param {Array} cards - Array of objects representing the cards, each object has a `value` property for the number and a `label` property for the suit.
 * @returns {boolean} true if all cards are of the same suit, otherwise false.
 */
export function sameSuit(cards) {
  const firstSuit = cards[0].label;
  return cards.every(card => card.label === firstSuit);
}

/**
* Checks if the numbers are consecutive.
* @param {Array} numbers - Array of numbers.
* @returns {boolean} true if the numbers are consecutive, otherwise false.
*/
export function consecutive(numbers) {
  numbers.sort((a, b) => a - b);

  for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i + 1] - numbers[i] !== 1) {
          return false;
      }
  }
  return true;
}
