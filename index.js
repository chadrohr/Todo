let express = require('express')
let bodyParser = require('body-parser')
let server = express()
let todos = require('./server-assets/models/todo')

server.use(express.static(__dirname + '/public'))
server.use(bodyParser.json());

server.use(todos.routes);
// CRUD APPLICATION







server.listen(8080, function () {
    console.log("The server is running on port 8080")
})