const express = require('express');

const app = express();

app.use((req,res) =>{
    res.json({msg: 'le serveur fonctionne'});
});


module.exports = app;