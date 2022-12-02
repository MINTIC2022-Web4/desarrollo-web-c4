const { MongoClient } = require("mongodb")

const run = async () => {

    const url = "mongodb+srv://usuario:usuario1@cluster0.um1d8ud.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(url)

    await client.connect()
        .then(
            (response) => {
                console.log("Conexion correcta test")
            }
        )

        .catch(

            (error) => {
                console.log("Conexion fallida test")
                console.log(error)

            }
        )
    const db = client.db("FocusDevs")

    const collection = await db.collection("Users")

    await collection.findOne({ "":"" })
        .then(

            (documento) => {
                console.log(documento)

            }
        )
        .catch(

            (error) => {
                console.log("Error al buscar")
                console.log(error)

            }
        )

        const resultado = collection.find({})

    await resultado.forEach      
    
    (
        (documento) => {
            console.log("Find")
            console.log(documento)
        }

    )


    await client.close()


}
run()