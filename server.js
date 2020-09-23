const express = require('express');
const app = express();
const hbs = require('hbs')

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));


//express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Diego'

    });
})

app.get('/about', (req, res) => {

    res.render('about', {

    });
})

app.listen(3000)