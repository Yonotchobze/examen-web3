const router = require('express').Router()
const Joke = require('../models/joke');

router.get('/', (req, res) => {
    Joke.find({}).then(jokes => {
        res.json(jokes);
    });
});

router.get('/:id', (req, res) => {
    Joke.findById(req.params.id).then(joke => {
        if (joke)
            return res.json(jokes);
        else
            return res.status(404).end();
    }).catch(error => {
        return res.status(400).send('unknown id');
    })
});

router.delete('/:id', (req, res) => {
    Joke.deleteOne({_id: req.params.id}).then(result =>
        res.status(204).end()
    ).catch(error => {
        return res.status(400).send('unknown id');
    })
});

router.post('/', (req, res) => {
    const body = res.body;

    if (!body || !body.question || !body.answer || !body.category)
        return res.status(400).end();

    const joke = new Joke({
        question: body.question,
        answer: body.answer,
        category: body.category
    })
    
    joke.save().then(savedJoke =>
        {return res.json(savedJoke)}
    ).catch(error => 
        {return res.status(400).end()}
    )
});

module.exports = router