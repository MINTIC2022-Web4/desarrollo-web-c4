const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const { response } = require("express");

const app = express()
const path = "/products"
const port = 8083

app.use(cors())
app.use(body_parser.json())

app.get(path,
    (request, response)=>{
        console.log("llego peticion")
        console.log(request)

        response.send("Saludo Cordial Products")

    }
)

app.listen(8083,
    () => {
        console.log("Subio api products puerto "+port)
    }
)