const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
    username: {
        type: String,
        minlength: 3,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    score: {
        type: Number,
        required: true,
    },
    joke: {
        type: Schema.Types.ObjectId,
        ref: 'Joke',
        validate: {
            validator: async function(value) {
                const jokeExists = await model('Joke').findById(value);
                return jokeExists != null;
            }
        }
    },
})

scoreSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = model('Score', scoreSchema);