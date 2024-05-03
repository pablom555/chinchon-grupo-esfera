import express from 'express';
import bodyParser from 'body-parser';
import { configDotenv } from 'dotenv';
import cors from 'cors';

import { hasChinchon, hasStraightFlush, hasGame } from './src/games.js';
import { validationCards } from './src/middlewares/cards.validation.js';

configDotenv();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.post('/', validationCards, (req, res) => {

  const cards = req.body.cards;
  const isChinchon = hasChinchon(cards);
  if (isChinchon) return res.send('Chinchón!');

  const isStraightFlush = hasStraightFlush(cards);
  if (isStraightFlush) return res.send('Straight flush!');

  const isGame = hasGame(cards);
  if (isGame) return res.send('Game!');

  res.send('No game');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
