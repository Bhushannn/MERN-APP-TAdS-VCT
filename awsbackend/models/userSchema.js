const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passcode: {
        type: String,
        required: true
    },
    date: {
        type: Date, default: Date.now
    },
    EndDate: {
        type: Date, default: Date.now
    },
    tokens: {
        type: String,
        // required: true
    },
    userRiddleIndex: {
        type: Number
    }
});


const User = mongoose.model('User', UserSchema);
User.createIndexes();
module.exports = User;