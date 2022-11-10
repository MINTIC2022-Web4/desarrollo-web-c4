module.exports = {
    login: (req, res) => {
        let fs = require('fs')
        fs.readFile('users.json', 'utf8', function (err, data) {
            if (err) throw err
            let arrayOfUsers = JSON.parse(data)
            const { username, password } = req.body
            console.log(req.body)//------------------->>>>
            if (username === 'admin' && password === 'admin') {
                return res.status(200).json(
                    {
                        "username": arrayOfUsers[0].username,
                        "roles": arrayOfUsers[0].roles,
                        "rights": arrayOfUsers[0].rights
                    }
                )
            } else {
                return res.status(200).json({ mensaje: 'Usuario o contraseña incorrectos' })
            }
        })

    }
}