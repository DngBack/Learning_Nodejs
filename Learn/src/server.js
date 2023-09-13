const express = require('express')
const app = express() // app express 
const port = 3000 // port 
const path = require('path')

// config temple engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs') // we using ejs



// khai bao route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Add more one route 
app.get('/testroute', (reg, res) => {
    // res.send('Checking oke new Route!')
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})