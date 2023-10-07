const PORT = 3000
const express = require('express') 
const path = require("path")
const apiRoute = require('./routes/Api')


const app = express()

app.use('/Api', apiRoute)
app.use('/Api',express.static(path.join(__dirname, "publi")))


app.listen(PORT, ()=>{
    console.log("servidor rodando na porta", PORT)
})

