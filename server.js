const http = require("http")
const path = require('path')
const express = require("express")
const nunjucks = require("nunjucks")
const morgan = require('morgan')

const app = express()
const PORT = 5000
exports.default = {PORT}

app.use('/public', express.static(path.join(__dirname, 'src', 'public')))
app.use(morgan("tiny"))
nunjucks.configure('src', {
    express: app,
    watch: true,
    autoescape: true,
})

app.get('/', function(req, res) {
    res.render('index.html', {req})
})

app.get('/about', function(req, res) {
    res.render('about.html', {req})
})

app.get('/contact', function(req, res) {
    const branches = require("./branches.json")
    console.log(branches)
    res.render('contact.html', {req, branches})
})
app.get('/email', function(req, res) {
    res.render('email.html', {req})
})

app.get('/store', function(req, res) {
    res.render('store.html', {req})
})

const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})