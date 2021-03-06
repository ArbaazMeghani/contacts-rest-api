let express = require('express');
let keys = require('../config/keys');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors = require('cors');

let app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

let contactsRoute = require('./routes/contacts');

app.use((req, res, next) => {
    console.log(` ${new Date().toString()} => ${req.method} ${req.originalUrl} ${req.body.toString()}`);
    next();
});
app.use('/api/v1', contactsRoute);

app.use((req, res, next) => {
    res.status(404).send("404 Resource Not Found");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Running Express Server on Port: " + port));