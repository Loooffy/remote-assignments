const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const port = 3000

function getdata(req, res) {
    let pattern = /^[0-9]+$/;
    let param = req.query;
    let sum = 0;
    if (Object.keys(param).length===0) {
        res.send('Lack of Parameter');
        return;
    } else 
        if (param.number.match(pattern) === null) {
            res.send('Wrong parameter');
        return;
    } else { 
        for (let i=1;i<=parseInt(param.number);i++) {
            sum += i;
        }
        res.send(sum.toString());
    }
}

function dealWithCookie(req, res) {
    if (req.cookies.name == undefined){
        res.render('form');
    } else {
        res.render('name', {name:req.cookies.name});
    }
}

function addCookie(req, res) {
    res.cookie('name', req.query.name)
    res.render('name', {name:req.cookies.name})
}

app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('static'))
app.use(cookieParser())

app.get('/', (req, res) => res.send('Hello, My Server!'))
app.get('/getData', (req, res) => getdata(req, res))
app.get('/myName', (req, res) => dealWithCookie(req, res))
app.get('/trackName', (req, res) => addCookie(req, res))

app.listen(port, () => console.log('Example app listening'))
