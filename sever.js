const express = require('express')
const path = require('path')
const http = require('http')
const app = express()
const server = http.createServer(app)
const fs = require('fs')
const PORT = process.env.PORT || 3000

server.listen(PORT)
app.use(express.static(path.join(__dirname, "public")))
var data = fs.readFileSync('frasi.json')
data = JSON.parse(data)
data = JSON.stringify(data)


app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index', {data})
})

app.get('/regole', (req, res)=>{
    res.sendFile(__dirname+'/regole.html')
})