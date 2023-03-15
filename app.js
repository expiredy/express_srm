const express = require(`express`)
var hbs = require('hbs')

const path = require("path");

const app = express();
app.engine('html', hbs.__express);

app.get("/", function(req, res){
    res.status(200).render(`home`)
});


app.get("/admin", function(req, res){
    res.status(200).send(`Admin`)
});

module.exports = app