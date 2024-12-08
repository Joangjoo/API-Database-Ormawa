const express = require("express")
const app = express()
const cors = require("cors")
const bem = require("./Bem.json")



app.get("/",(req , res) => {
    return res.status(200).send(bem)
    
})

app.listen(3000)