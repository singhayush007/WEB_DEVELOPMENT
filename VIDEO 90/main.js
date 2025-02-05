const express = require('express')
const app = express()
const port = 3000
const blog =require('./routes/blog')
const fs = require("FS")

//  app.use(express.static("Public"))
app.use('/blog', blog)
  
//Middleware 1 - Logger for our application 
app.use((req, res, next) => {
    console.log(req.headers)
    req.harry ="I am harry bhai";
    fs.appendFileSync("Logs.txt",'${Date.now()} is a ${req.method}\n')
    Console.log('${Date.now()} is a ${req.method}')
    //res.send("Hacked by Middleware 1")
    next()
})

//Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.send('Hello about! + ')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port,() =>{
    console.log('Example app listening on port ${port}')
})
