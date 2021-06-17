'use strict';

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);
const db = require('./db');
const { response } = require('express');

server.listen(port, hostname, function() {
    console.log(`Server is running at http://${hostname}:${port}`)
});

const rootController = function(request, response) {
    const snippet = `<h1>Hello World</h1><p><a href='/cats'>The cat says..</a></a></p><p><a href='/dogs'>The dog says..</a></p><p><a href='/greet'>Let's greet some people!</a></p>`;
    response
        .status(200)
        .send(snippet)
        .end();
}

const catController = function(request, response) {
    let snippet = `Meow!`
    console.log(request.params);
    response
        .status(200)
        .send(snippet)
        .end();
}

const dogController = function(request, response) {
    let snippet = `Woof!`
    console.log(request.params);
    response
        .status(200)
        .send(snippet)
        .end();
}

const catDogController = function(request, response) {
    let snippet = `Dogs and cats living together.. mass hysteria!`
    console.log(request.params);
    response
        .status(200)
        .send(snippet)
        .end();
}

const greetController = (request, response) => {
    let snippet = `<p>Who would you like to greet?</p><a href='greet/Luke'><p>Luke</a></p><p><a href='greet/Ahsoka'>Ahsoka</a></p><p><a href='greet/Han'>Han</a></p>`
    console.log(request.params);
    response
        .status(200)
        .send(snippet)
        .end();
}


app.get('/', rootController);
app.get('/cats', catController);
app.get('/dogs', dogController);
app.get('/cats_and_dogs', catDogController);
app.get('/greet', greetController);
app.get('/greet/:handle', (request, response) => {
    const { handle } = request.params;
    response.send(`<h1>Hello, ${handle}!</h1><p><a href='/greet'>Greet someone else</a></p>`);
});
// Study this code, it looks more efficient 

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const express = require('express');
// const app = express();

// const server = http.createServer(app);

// app.get('/', (req, res) => {
//     res.send(`Hello World!`);
// });

// app.get('/cats', (req, res) => {
//     res.send(`Meow!`);
// });

// app.get('/dogs', (req, res) => {
//     res.send(`Woof!`);
// });

// app.get('/cats_and_dogs', (req, res) => {
//     res.send(`Dogs and cats living together...mass hysteria!!`);
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });