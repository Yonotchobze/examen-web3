const {Schema, model} = require('mongoose');

const jokeSchema = new Schema({
    question: {
        type: String,
        minlength: 3,
        required: true,
    },
    answer: {
        type: String,
        minlength: 3,
        required: true,
    },
    category: {
        type: String,
        minlength: 3,
        required: true,
    },
})

jokeSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = model('Joke', jokeSchema);