const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
// const mongoose
const { expressJwt } = require('express-jwt')




app.use(express.json())
app.use(morgan('dev'))



// Routes
app.use('/', require('./routes/'))
app.use('/api', expressjwt({ secret: process.env.SECRET, alogorithms: ['HS256']}))
app.use('/api',require('./routes'))



app.get('/', (req, res) =>{
    res.send("hello world")
})


app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})