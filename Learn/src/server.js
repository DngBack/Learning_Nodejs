const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web.js')
require('dotenv').config()

const app = express() // app express
const port = process.env.PORT || 3000// port 
const hostname = process.env.HOST_NAME


// config temple engine
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs') // we using ejs

//-config template engine 
configViewEngine(app)

// web set up config 
app.use('/', webRoutes) // Adding tien to dang truoc

//config staticfig
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))

// khai bao route
// app.get('/', (req, res) => {
//     res.send('Hello World! Testing Nodemon')
// })

// // Add more one route 
// app.get('/testroute', (reg, res) => {
//     // res.send('Checking oke new Route!')
//     res.render('sample.ejs')
// })

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})