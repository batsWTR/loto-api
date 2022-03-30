const mongoose = require('mongoose');


const resultSchem = mongoose.Schema({
    _id: {type: Number, required: true},
    jour_de_tirage: {type: String, required: true}
});

module.exports = mongoose.model('result', resultSchem);