const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const { response } = require("express");

const app = express()
const path = "/users"
const port = 8082

app.use(cors())
app.use(body_parser.json())

app.get(path,
    (request, response)=>{
        console.log("llego peticion")
        console.log(request)

        response.send("Saludo Cordial Users")

    }
)

app.listen(8082,
    () => {
        console.log("Subio api users puerto "+port)
    }
)