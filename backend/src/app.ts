import express from 'express';
import { readFile } from 'node:fs/promises';

interface Superhero {
  id: number;
  name: string;
  image: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
}

const app = express();
const dataPath = new URL('../data/superheroes.json', import.meta.url);

app.get('/', (_req, res) => {
  res.send('Save the World!');
});

app.get('/api/superheroes', async (_req, res) => {
  const superheroes: Superhero[] = JSON.parse(await readFile(dataPath, 'utf8'));
  res.json(superheroes);
});

export default app;
