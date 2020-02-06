const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_SCHEMA,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

app.use(
    bodyParser.json(),
    bodyParser.urlencoded({
        extended: true,
    }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type', 'application/json');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.get('/', (request, response) => {

    pool.query('SELECT * FROM contacts ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
});

app.post('/nResults', (request, response) => {
    console.log(request.body);
    const {limit} = request.body;

    if (limit && limit > 0) {
        pool.query('SELECT * FROM contacts ORDER BY id ASC LIMIT $1', [limit], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json(results.rows);
        })
    } else {
        console.log('Results number must be defined and non-zero');
        response.status(400)
    }
});

app.post('/add', (request, response) => {
    console.log(request.body);
    const {name, email, phone} = request.body;

    if (name && email && phone) {
        let phoneTrim = phone.replace('-', '');

        pool.query('INSERT INTO contacts (name, email, phone) VALUES ($1, $2, $3)', [name, email, phoneTrim], (error, result) => {
            if (error) {
                throw error;
            }
            response.status(201).send('Contact added with id' + result.id);
        })
    } else {
        console.log('Missing or empty parameter');
        response.status(400);
    }

});


app.listen(port, () => {
    console.log('App running on port ' + port);
});
