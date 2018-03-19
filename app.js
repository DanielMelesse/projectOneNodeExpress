const express = require('express')
const bodyparser = require('body-parser')
const morgan  = require('morgan')
const app = express();



// midlewares

app.use(morgan('dev'));
app.use(bodyparser.json());

// routes 
app.use('/users', require('./routes/users'))


// start the server 

const port  = process.env.PORT || 4000;

app.listen(port)
console.log("app.js server runing")