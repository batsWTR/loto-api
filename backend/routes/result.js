const express = require('express');
const result = require('../models/result')




const fieldSelect = {
  _id: 1, jour_de_tirage: 1,
  date_de_tirage: 1,
  combinaison_gagnante_en_ordre_croissant: 1,
  combinaison_gagnant_second_tirage_en_ordre_croissant: 1
};
const router = express.Router();

router.get('/getAll', (req,res) =>{
    result.find()
    .select(fieldSelect)
    .then(results => res.status(200).json(results))
    .catch(err => res.status(400).json(  {err}  ));
});

router.get('/getDay/:day', (req,res) =>{
  console.log(req.params.day);
  

  res.send();
});

module.exports = router;