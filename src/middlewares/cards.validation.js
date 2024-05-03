export const validationCards = (req, res, next) => {
  const cards = req.body.cards;
  const validLabels = ['oro', 'copa', 'espada', 'basto'];

  if (!Array.isArray(cards) || cards.length !== 7) {
    return res.status(400).send('The cards are not valid');
  }

  const cardSet = new Set();

  for (let card of cards) {
    if (typeof card !== 'object' || card === null) {
      return res.status(400).send('The cards are not valid');
    }

    if (!card.hasOwnProperty('value') || !card.hasOwnProperty('label')) {
      return res.status(400).send('The cards are not valid');
    }

    if (typeof card.value !== 'number' || card.value < 1 || card.value > 12) {
      return res.status(400).send('The cards are not valid');
    }

    if (typeof card.label !== 'string' || !validLabels.includes(card.label)) {
      return res.status(400).send('The cards are not valid');
    }

    const cardString = JSON.stringify(card);
    if (cardSet.has(cardString)) {
      return res.status(400).send('The cards are not valid');
    }

    cardSet.add(cardString);
  }

  next();
};
