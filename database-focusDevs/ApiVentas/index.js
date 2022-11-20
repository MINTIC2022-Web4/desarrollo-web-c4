const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const { response } = require("express");

const app = express()
const path = "/ventas"
const port = 8081

app.use(cors())
app.use(body_parser.json())

app.get(path,
    (request, response)=>{
        console.log("llego peticion")
        console.log(request)

        response.send("Saludo Cordial Ventas")

    }
)

app.listen(8081,
    () => {
        console.log("Subio api ventas puerto "+port)
    }
)