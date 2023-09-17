const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    // Getting data 
    let results = await getAllUsers();
    //Call model 
    return res.render('home.ejs', { listUsers: results })
}

const getTestroute = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUsers = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(">>> Email:", email, "Name:", name, "City:", city)
    // let {email, name, city} = req.body;

    let [results, fields] = await connection.query(`INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]);

    console.log(">>> Check Results: ", results)

    res.send('Created user succeed !')

    // connection.query(
    //     'select * from Users u; ',
    //     function (err, results, fields) {
    //         console.log(">>> Results", results); // results contains rows returned by server
    //         // console.log(">>> Fields", fields); // fields contains extra meta data about results, if available
    //     });

    // const [results, fields] = await connection.query('select * from Users u; ');
    // console.log(">>> Check Results: ", results);
}

const pageCreateUsers = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const useId = req.params.id;
    let [results, fields] = await connection.query(`select * from Users where id = ?`, [useId])

    console.log(">> Check Id: ", results)

    let user = results && results.length > 0 ? results[0] : {};

    res.render('edit.ejs', { userEdit: user })
}

module.exports = {
    getHomepage, getTestroute, postCreateUsers, pageCreateUsers, getUpdatePage
}