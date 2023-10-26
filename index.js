const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios').default;

const AnimalRoute = require('./Routes/AnimalRoute');




app.set('view engine', 'ejs');

app.use(express.json());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(AnimalRoute);



app.listen(4000, () => {
    console.log("4000 Listen");
})