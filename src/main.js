const express = require('express');
const mongoose = require('mongoose')
const { log, readLog } = require("./api/log");
const { checkSecret } = require("./utils/checkSecret");
const { cors } = require("./utils/cors");

const PORT = process.env.PORT || 3032;
const app = express();

app.use(express.json());
app.use(cors);
app.use(express.urlencoded({extended: false}));
app.use(checkSecret)

app.get('/log', log)
app.get('/read', readLog)

mongoose.connect('mongodb://localhost/stopsleep_logs', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});