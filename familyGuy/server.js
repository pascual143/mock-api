// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Leer los datos desde el archivo JSON
const familyGuyData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/familyGuyData.json')));

// Rutas de la API
app.get('/api/characters', (req, res) => {
  res.json(familyGuyData.characters);
});

app.get('/api/episodes', (req, res) => {
  res.json(familyGuyData.episodes);
});

app.get('/api/quotes', (req, res) => {
  res.json(familyGuyData.quotes);
});

app.get('/api/characters/:id', (req, res) => {
  const character = familyGuyData.characters.find(c => c.id === parseInt(req.params.id));
  if (character) {
    res.json(character);
  } else {
    res.status(404).send({ error: "Character not found" });
  }
});

app.listen(port, () => {
  console.log(`Fake Family Guy API running at http://localhost:${port}`);
});
