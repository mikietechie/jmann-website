const http = require("http")
const path = require('path')
const express = require("express")
const nunjucks = require("nunjucks")
const morgan = require('morgan')

const app = express()
const PORT = process.env.PORT || 5000

app.use('/public', express.static(path.join(__dirname, 'src', 'public')))
app.use(morgan("tiny"))
nunjucks.configure('src', {
    express: app,
    watch: true,
    autoescape: true,
})

app.get('/', function(req, res) {
    const categories = require("./data/categories.json")
    const products = require("./data/products.json")
    res.render('index.html', {req, categories, products})
})

app.get('/about', function(req, res) {
    res.render('about.html', {req})
})

app.get('/contact', function(req, res) {
    const branches = require("./data/branches.json")
    res.render('contact.html', {req, branches})
})
app.get('/email', function(req, res) {
    const branches = require("./data/branches.json")
    res.render('email.html', {req, branches})
})

app.get('/store', function(req, res) {
    const products = require("./data/products.json")
    res.render('store.html', {req, products})
})

const server = http.createServer(app)
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})