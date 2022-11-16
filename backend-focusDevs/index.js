const express = require('express')
const app = express()
var cors = require('cors')
const port = 3001
bodyParser = require('body-parser'),
jwt = require('jsonwebtoken')

app.use(cors());
app.set('port', process.env.PORT || port)

//middlewares
app.use(express.json());
app.use('/productos', require('./routes/ruta-productos'));

app.use("/ventas", require('./routes/ruta-ventas'));

app.use("/login", require('./routes/ruta-login'));


app.listen(port, () => console.log(`App esta en el puerto ${port}!`));


