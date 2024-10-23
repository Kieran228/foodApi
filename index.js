//! IMPORTING OUR PACKAGES

const express = require('express');

//todo create the "express" app
const app = express();
const port = 4000;
const router = require('./app/routes/router');

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

app.use('/api', router)