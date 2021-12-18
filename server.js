const express = require('express');
const mongoose = require('mongoose');
const connection = require('./config/connection')
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

// app.use(require('./routes'));

mongoose.set('debug', true);



// app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));


connection.once('open', () => {
    app.listen(PORT, () =>
        console.log(`🌍 Connected on localhost:${PORT}`));
})