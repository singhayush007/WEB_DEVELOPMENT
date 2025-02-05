const express = require('express')
const app = express()
const port = 3000

app.use(express.static("Public"))

app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World2!')
})

app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put')
})


app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name :["Harry" , "Jerry"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})