import express from 'express';
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

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

const port = Number(process.env.PORT ?? 41071);

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

export default app;
