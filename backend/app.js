require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const result = require('./models/result')


const app = express();

const fieldSelect = {
  _id: 1, jour_de_tirage: 1,
  date_de_tirage: 1,
  combinaison_gagnante_en_ordre_croissant: 1,
  combinaison_gagnant_second_tirage_en_ordre_croissant: 1
};

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1vwlg.mongodb.net/${process.env.DB_DB}?retryWrites=true&w=majority`,
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.get('/api/getAll', (req,res) =>{
    result.find()
    .select(fieldSelect)
    .then(results => res.status(200).json(results))
    .catch(err => res.status(400).json(  {err}  ));
});

app.get('/api/getDay/:day', (req,res) =>{
  console.log(req.params.day);
  

  res.send();
});


module.exports = app;