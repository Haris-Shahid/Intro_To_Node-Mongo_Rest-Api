var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var ingredients = [
    {
        "id": 'dskljal',
        "text": 'Eggs'
    },
    {
        "id": 'dsklsfl',
        "text": 'Milk'
    },
    {
        "id": 'dsjksfl',
        "text": 'cow'
    },
    {
        "id": 'abjksfl',
        "text": 'hen legs'
    }
]

app.get('/', function(req, res) {
    res.send(ingredients)
})

app.post('/', function(req, res) {
    var ingredient = req.body ;
    if(!ingredient || ingredient.text === ""){
        res.status(500).send({error: "Please type something"})
    }else{
        ingredients.push(ingredient);
        res.status(200).send(ingredients)
    }
})

app.get('/api', function(req, res) {
    res.send('yahoo! api is working')
})

app.listen(3000, function() {
    console.log('first api start running on port 3000!')
})