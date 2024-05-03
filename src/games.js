import { consecutive, sameSuit } from "./helpers.js";

/**
 * Checks if there is a chinchón.
 * @param {Array} cards - Array of objects representing the cards.
 * @returns {boolean} true if there is a chinchón, otherwise false.
 */
export function hasChinchon(cards) {
    const values = cards.map(card => card.value);
    return sameSuit(cards) && consecutive(values);
}

/**
 * Checks if there is a straight flush.
 * @param {Array} cards - Array of objects representing the cards.
 * @returns {boolean} true if there is a straight flush, otherwise false.
 */
export function hasStraightFlush(cards) {
    const suits = {};
    cards.forEach(card => {
        const suit = card.label;
        if (!suits[suit]) {
            suits[suit] = [];
        }
        suits[suit].push(card.value);
    });

    // Check if there is a sequence of 3, 4, 5, or 6 consecutive numbers
    const suitsConsecutive = Object.values(suits).some(suit => {
        suit.sort((a, b) => a - b);
        let count = 1;
        for (let i = 0; i < suit.length - 1; i++) {
            if (suit[i + 1] - suit[i] === 1) {
                count++;
                if (count >= 3 && count <= 6) {
                    return true;
                }
            } else {
                count = 1;
            }
        }
        return false;
    });

    return suitsConsecutive;
}

/**
 * Checks if there is a game.
 * @param {Array} cards - Array of objects representing the cards.
 * @returns {boolean} true if there is a game, otherwise false.
 */
export function hasGame(cards) {
    const values = {};
    cards.forEach(card => {
        const value = card.value;
        if (!values[value]) {
            values[value] = 1;
        } else {
            values[value]++;
        }
    });

    return Object.values(values).some(count => count === 4);
}
