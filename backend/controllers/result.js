const result = require('../models/result');



const fieldSelect = {
    _id: 1, jour_de_tirage: 1,
    date_de_tirage: 1,
    combinaison_gagnante_en_ordre_croissant: 1,
    combinaison_gagnant_second_tirage_en_ordre_croissant: 1
};


exports.getAll = (req,res) =>{
    result.find()
    .select(fieldSelect)
    .then(results => res.status(200).json(results))
    .catch(err => res.status(400).json(  {err}  ));
};

exports.getDay = (req,res) =>{
  console.log(req.params.day);

  let day = req.params.day.toUpperCase();
  let dayArr = new Array(8).fill(" ");

  day.split('').map((val,index)=>{
      dayArr[index] = val;
  });
  day = dayArr.join('');

  console.log('---',day,'---');
  res.send();
};