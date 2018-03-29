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

app.get('/ingredients', function (req, res) {
    res.send(ingredients)
})

app.post('/ingredients', function (req, res) {
    var ingredient = req.body;
    if (!ingredient || ingredient.text === "") {
        res.status(500).send({ error: "Please type something" })
    } else {
        ingredients.push(ingredient);
        res.status(200).send(ingredients)
    }
})

app.put('/ingredients/:ingredientId', function (req, res) {
    var newText = req.body.text;

    if (!newText || newText === "") {
        res.status(500).send({ error: "Please write some ingredient" })
    } else {
        for (var i = 0; i < ingredients.length; i++) {
            var ing = ingredients[i];
            if (ing.id === req.params.ingredientId) {
                ing.text = newText;
                break;
            }
        }
        res.send(ingredients);
    }
})

app.get('/api', function (req, res) {
    res.send('yahoo! api is working')
})

app.listen(3000, function () {
    console.log('first api start running on port 3000!')
})