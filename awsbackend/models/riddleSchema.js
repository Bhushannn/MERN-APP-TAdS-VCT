const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const RiddleSchema = new Schema({
    riddleIndex: {
        type: Number,
        required: true,
        unique: true
    },
    riddlePlace: {
        type: String,
        required: true,
        unique: true
    },
    riddle: {
        type: String,
        required: true,
        unique: true
    }
});


const Riddles = mongoose.model('Riddles', RiddleSchema);
Riddles.createIndexes();
module.exports = Riddles;