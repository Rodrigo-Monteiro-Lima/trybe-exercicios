const express = require('express');
require('express-async-errors');
const apiCredentials = require('./middlewares/apiCredentials');
const validateTeam = require('./middlewares/validateTeam');
// const existingId = require('./middlewares/existingId');

let nextId = 3;
const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

const app = express();

app.use(express.json());
app.use(apiCredentials); 

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if (teams.some((t) => t.id === id)) return next();
  res.status(404).json({ message: 'Team not found' });
};

app.get('/teams', (req, res) => res.status(200).json({ teams }));
app.get('/teams/:id', existingId, (req, res) => {
  const { id } = req.params;
  const team = teams.find((t) => t.id === Number(id));
  res.status(200).json({ team });
});

// app.post('/teams', (req, res) => {
//   const newTeam = { ...req.body };
//   teams.push(newTeam);

//   res.status(201).json({ team: newTeam });
// });
app.post('/teams', validateTeam, (req, res) => {
  if (
    !req.teams.teams.includes(req.body.sigla)
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla' });
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

// app.put('/teams/:id', (req, res) => {
//   const { id } = req.params;
//   const { name, initials } = req.body;

//   const updateTeam = teams.find((team) => team.id === Number(id));

//   if (!updateTeam) {
//     res.status(404).json({ message: 'Team not found' });
//   }

//   updateTeam.name = name;
//   updateTeam.initials = initials;
//   res.status(200).json({ updateTeam });
// });
app.put('/teams/:id', validateTeam, existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

// app.delete('/teams/:id', (req, res) => {
//   const { id } = req.params;
//   const arrayPosition = teams.findIndex((team) => team.id === Number(id));

//   if (arrayPosition === -1) {
//     res.status(404).json({ message: 'Team not found' });
//   }
//   teams.splice(arrayPosition, 1);

//   res.status(200).end();
// });
app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

module.exports = { app, teams };