const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')

const bodyParser = require('body-parser')
var multer = require('multer')
var upload = multer()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('static'))

app.get('/', (req, res) => homepage(req, res))
app.post('/signup', (req, res) => signup(req, res))
app.post('/signin',upload.array(), (req, res) => signin(req, res))
app.get('/member', (req, res) => member(req, res))

app.listen(port, () => console.log('listening'))

// requests handlers

function homepage(req, res){
    res.render('sign')
} 

function signup(req, res){
    let email = req.body.signupEmail
    let password = req.body.signupPw
    let con = dbConn()
    dbStart(con)
    function response(result){
        if (result === email) {
            res.send('true')
            dbEnd(con)
        } else {
            dbCreate(con, email, password)
            res.render('member', {message:'welcome!'})
            dbEnd(con)
        }
    }
    dbQuery(con,'email', email, (result) => response(result))
}

function signin(req, res){
    let email = req.body.signinEmail
    let password = req.body.signinPw
    let con = dbConn()
    dbStart(con)
    function response(result){
        if (result === password) {
            res.render('member', {message:'welcome back!'})
            dbEnd(con)
        } else {
            res.redirect('/')
            //res.send(result)
            dbEnd(con)
        }
    }
    dbQuery(con, 'password', email, (result) => response(result))
}

function member(req, res){
    console.log(req.get('Referer'))
    res.render('member')
} 

// db handlers

function dbConn(){
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'loooffy',
        password: 'Loooffy11!',
        database: 'assignment'
    })
    return con
}

function dbStart(con){
    con.connect(function(err) {
        if (err) throw err;
    })
}

function dbQuery(con, field, q, response){
    con.query(`select ${field} from user where email ='${q}'`, function(err, result) {
        if (err) throw err;
        let dataString = JSON.stringify(result)
        let data = JSON.parse(dataString)
        if (Object.keys(result).length != 0){
            response(data[0][field])
        } else {
            response('email or password wrong, please try again')
        }
    })
}

function dbCreate(con, email, password){
    console.log('created')
    con.query(`insert into user (email, password) values ('${email}', '${password}')`, function(err, result){
        if (err) throw err;
        })
}

function dbEnd(con){
    con.end(function(err) {
        if (err) throw err;
        console.log('disconnected')
    })
}
