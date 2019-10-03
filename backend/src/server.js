const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
require('dotenv').config()

const app = express()


mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(error => {
    console.error ('\x1b[31m',"MONGOB não conectou! Você colocou a URL de conexão no arquivo arquivo .env ?")
});


app.use(express.json())
app.use("/", express.static(__dirname + "/../../frontend/dist"));
app.use(routes)
const port = process.env.PORT || 3333;
app.listen(port, function () {
    console.log(`Servidor executando em ${port}`)
  });