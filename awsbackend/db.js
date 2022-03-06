const mongoose = require('mongoose');
const mongostr = "private key";

const connectToMongo = () => {
    mongoose.connect(mongostr, () => {
        console.log("MongoDB connection Successfull");
    })
}

module.exports = connectToMongo;
