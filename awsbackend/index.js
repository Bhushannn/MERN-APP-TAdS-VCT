const connectToMongo = require('./db.js');
const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
connectToMongo();

app.use(express.json());
app.use(cors())

const port = 8000;


app.use('/user', require('./routes/tads_user.js'));
app.use('/riddle', require('./routes/tads_riddles.js'));


// ---------------deploy-------------



// __dirname = path.resolve();
// if ("production") {
//     app.use(express.static(path.join(__dirname, "/frontend/build")));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//     })
// } else {
//     app.get("/", (req, res) => {
//         res.send("API is running..");
//     })
// }









// ---------------deploy----------------

app.listen(port, () => {
    console.log(`TAdS VCT listening at http://localhost:${port}`)
})