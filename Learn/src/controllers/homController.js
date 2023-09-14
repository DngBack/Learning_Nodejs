const getHomepage = (req, res) => {
    res.send('Hello World! Testing Nodemon')
}

const getTestroute = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getTestroute
}