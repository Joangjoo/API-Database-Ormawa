const express = require("express")
const app = express()
const cors = require("cors")
const bem = require("./Bem.json")
const bem2 = require("./Bem2.json")
app.use(cors())


app.get("/",(req , res) => {
    return res.status(200).send(bem)
    
})

app.get("/Bem2",(req , res) => {
    return res.status(200).send(bem2)
    
})

app.listen(3000)

