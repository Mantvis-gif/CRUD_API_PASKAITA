console.log('test');

//express - ekspreso serveris
//pg - integracija su Psql duombaze
//dotenv - prisijungimo duomenu pasidejimui duombazei

const express = require('express'); //require pasiima is modules express
const app = express ();

//prisijungima prie duombazes
const pool = require('./database');

app.use(express.json());//requestam ir response

//Apsirašyti ROUTE - kelias
//  GET   /products - route mums grazins visus produktus
//  GET   /products/:id - route mums viena 1 produkta
//  POST   /products/create - route sukurs produkta
//  PUT/PATCH   /products/update/:id - route redaguos produkta
//  DELETE   /products/delete/:id - istrins produkta

//req - request
//res - response
//localhost:3000/products
//{ message 'Sėkmingai pasiekiamas produktų puslapis'} status kodas 200
app.get('/products', async (req, res) => {
    //neapibrėžta klaida 400 kodas, jeigu nepavyksta prisijungti prie duombazes 500
    try {
        res.status(200).json({ message: 'Sėkmingai pasiekiamas produktų puslapis'});
    }
    catch (err) {
        res.status(400).json({error: 'error'});
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});

//  GET   /users - route mums grazins visus produktus
app.get('/users', async (req, res) => {
    //neapibrėžta klaida 400 kodas, jeigu nepavyksta prisijungti prie duombazes 500
    //select * from users
    try {
        const results = await pool.query("select * from users");
        res.status(200).json(results.rows);
        //res.status(200).json({ message: 'Sėkmingai pasiekiamas produktų puslapis'});
    }
    catch (err) {
        res.status(400).json({error: 'error'});
    }
});

app.get('/users/:id', async (req, res) => {
    //neapibrėžta klaida 400 kodas, jeigu nepavyksta prisijungti prie duombazes 500
    //select * from users
    try {
        const id = req.params.id;
        const results = await pool.query(`select * from users where id=$1`,[id]);
        res.status(200).json(results.rows);
        //res.status(200).json({ message: 'Sėkmingai pasiekiamas produktų puslapis'});
    }
    catch (err) {
        res.status(400).json({error: 'error'});
    }
});

app.post('/users', async (req, res) => {
    try {

        const {id, username, password} = req.body;

        const results = await pool.query(`insert into users (id,username,"password") values (${id}, '${username}', '${password}') returning *`);
        res.status(201).json(results.rows[0]);
        //res.status(200).json({ message: 'Sėkmingai pasiekiamas produktų puslapis'});
    }
    catch (err) {
        res.status(400).json({error: 'error'});
    }
});

app.put('/users/:id', async (req, res) => {
    try {

        const id = req.params.id;
        const {username, password} = req.body;

        const results = await pool.query (`update users 
            set username = '${username}',
            "password" = '${password}' 
            where id = ${id} 
            returning *`);

        //const results = await pool.query(`insert into users (id,username,"password") values (${id}, '${username}', '${password}') returning *`);
        res.status(200).json(results.rows[0]);
        //res.status(200).json({ message: 'Sėkmingai pasiekiamas produktų puslapis'});
    }
    catch (err) {
        res.status(400).json({error: 'error'});
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const results = await pool.query (`delete from users where id = ${id}`);
        res.status(200).json({message: 'Elementas sekmingai istrintas'});
        //res.status(200).json({ message: 'Sėkmingai pasiekiamas produktų puslapis'});
    }
    catch (err) {
        res.status(400).json({error: 'error'});
    }
});