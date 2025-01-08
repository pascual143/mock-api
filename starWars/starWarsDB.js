const express = require('express');
const app = express();
const port = 3000;

// Datos ficticios de Star Wars
const characters = [
  { id: 1, name: 'Luke Skywalker', role: 'Jedi', homeworld: 'Tatooine' },
  { id: 2, name: 'Darth Vader', role: 'Sith', homeworld: 'Tatooine' },
  { id: 3, name: 'Leia Organa', role: 'Rebel Leader', homeworld: 'Alderaan' },
  { id: 4, name: 'Han Solo', role: 'Smuggler', homeworld: 'Corellia' },
  { id: 5, name: 'Yoda', role: 'Jedi Master', homeworld: 'Unknown' },
];

const starships = [
  { id: 1, name: 'Millennium Falcon', model: 'YT-1300 Corellian light freighter', pilot: 'Han Solo' },
  { id: 2, name: 'X-Wing Starfighter', model: 'Incom T-65 X-wing starfighter', pilot: 'Luke Skywalker' },
  { id: 3, name: 'TIE Fighter', model: 'TIE/ln starfighter', pilot: 'Darth Vader' },
  { id: 4, name: 'Slave I', model: 'Firespray-31-class patrol and attack', pilot: 'Boba Fett' },
];

// Endpoints de la API
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API Fake de Star Wars!');
});

// Obtener todos los personajes
app.get('/api/characters', (req, res) => {
  res.json(characters);
});

// Obtener un personaje por ID
app.get('/api/characters/:id', (req, res) => {
  const { id } = req.params;
  const character = characters.find((char) => char.id === parseInt(id));
  
  if (character) {
    res.json(character);
  } else {
    res.status(404).json({ message: 'Personaje no encontrado' });
  }
});

// Obtener todas las naves
app.get('/api/starships', (req, res) => {
  res.json(starships);
});

// Obtener una nave por ID
app.get('/api/starships/:id', (req, res) => {
  const { id } = req.params;
  const starship = starships.find((ship) => ship.id === parseInt(id));
  
  if (starship) {
    res.json(starship);
  } else {
    res.status(404).json({ message: 'Nave no encontrada' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API de Star Wars escuchando en http://localhost:${port}`);
});
