const router = require('express').Router()
const Score = require('../models/score')

router.get('/', async (req, res) => {
    Score.find({}).then(score => {
        return res.json(score);
    });
});

router.post('/', async (req, res) => {
    const body = req.body;

    if (!body || !body.username || !body.score || !body.joke)
        return res.status(400).end();

    const scores = await Score.find({username: body.username, joke: body.joke});
    if (scores.length > 0)
        return res.status(409).end();

    const score = new Score({
        username: body.username,
        score: body.score,
        joke: body.joke,
    })
    
    score.save().then(savedScore =>
        {return res.json(savedScore)}
    ).catch(error => 
        {return res.status(400).end()}
    )
});

module.exports = router