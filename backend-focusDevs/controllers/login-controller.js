
const llave  = require('../jwt')

module.exports = {
    login: (req, res) => {
        let fs = require('fs')
        fs.readFile('users.json', 'utf8', function (err, data) {
            if (err) throw err
            let arrayOfUsers = JSON.parse(data)
            const { username, password } = req.body
            console.log(req.body)//------------------->>>>
            if (username === 'admin' && password === 'admin') {
                const payload = {
                    check: true
                };
                const token = jwt.sign(payload, llave.config, {
                    expiresIn: 5000
                });

                console.log(token)

                return res.status(200).json(
                    {
                        "username": arrayOfUsers[0].username,
                        "roles": arrayOfUsers[0].roles,
                        "rights": arrayOfUsers[0].rights,
                        token: token
                    }
                )
            } else {
                return res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' })
            }
        })

    }
}