/**
 * Taken from:
 * https://expressjs.com/en/starter/hello-world.html
 */

// setup express
const express = require('express');
const app = express();
const port = 3000;

// setup add route
// http://localhost:3000/add?num1=2&num2=2
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const sum = num1 + num2;
    res.send(`${num1} + ${num2} = ${sum}`);
});

// start express
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});