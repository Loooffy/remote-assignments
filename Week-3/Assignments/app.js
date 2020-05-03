const express = require('express')
const app = express()
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

app.use(express.static('static'))

app.get('/', (req, res) => res.send('Hello, My Server!'))
app.get('/getData', (req, res) => getdata(req, res))
app.get('/myName',) 

app.listen(port, () => console.log('Example app listening'))
