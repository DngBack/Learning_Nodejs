const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web.js')
// const mysql = require('mysql2')
const connection = require('./config/database.js')
require('dotenv').config()

const app = express() // app express
const port = process.env.PORT || 3000// port 
const hostname = process.env.HOST_NAME

// Config req.body
app.use(express.json()); //utilizes the body-parser package
app.use(express.urlencoded({ extended: true }));

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

// Test Connection with Database 
// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3307,
//     user: 'root',
//     password: '123456',
//     database: 'nodejs',
// });

// simple query 
// connection.query(
//     'select * from Users u; ',
//     function (err, results, fields) {
//         console.log(">>> Results", results); // results contains rows returned by server
//         // console.log(">>> Fields", fields); // fields contains extra meta data about results, if available
//     }
// );

// // Add more one route 
// app.get('/testroute', (reg, res) => {
//     // res.send('Checking oke new Route!')
//     res.render('sample.ejs')
// })

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})