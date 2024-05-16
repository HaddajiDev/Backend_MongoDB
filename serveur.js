const express = require('express');
const app = express();

app.use(express.json());

require('dotenv').config();
const db_Connect = require('./db_connect');
db_Connect();

app.use("/user", require('./Routes/user'));
app.use("/product", require('./Routes/product'));


app.listen(5000, (err) => err ? console.log(err) : console.log("Serveur is running"));