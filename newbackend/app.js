import express from 'express'
const app = express();


var data =[1,2,3,4]
app.get('/', function(req , res){
    res.send('hello i am 2')
})


app.get('/data', function(req , res){
    res.send(data)
})
app.post('/data/:number', function(req , res){
    data.push(parseInt(req.params.number));
    res.send(data);
})
app.listen(3000);