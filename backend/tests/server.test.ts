import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import app from '../src/app.js';

let server: ReturnType<typeof app.listen>;
let baseUrl: string;

before(async () => {
  server = app.listen(0);
  await new Promise<void>((resolve) => server.once('listening', resolve));
  const address = server.address();
  assert(address && typeof address !== 'string');
  baseUrl = `http://127.0.0.1:${address.port}`;
});

after(() => {
  server.close();
});

test('serves the welcome message and superhero data', async () => {
  const welcome = await fetch(baseUrl);
  assert.equal(await welcome.text(), 'Save the World!');

  const response = await fetch(`${baseUrl}/api/superheroes`);
  assert.equal(response.status, 200);
  const heroes = await response.json();
  assert(Array.isArray(heroes) && heroes.length > 0);
  assert.equal(heroes[0].name, 'A-Bomb');
});
