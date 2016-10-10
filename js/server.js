const path = require('path')
const express = require('express')
const app = express()

app.listen(process.env.PORT || 8080)

const indexPath = path.join(__dirname, '../index.html')
const publicPath = express.static(path.join(__dirname, '../public'))

app.use('/lib', publicPath)
app.get('/', function (_, res) { res.sendFile(indexPath) })
console.log('Listening')
