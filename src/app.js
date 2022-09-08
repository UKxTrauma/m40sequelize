const yargs = require("yargs")
const { sequelize } = require("./db/connection")
const { addMovie, listMovies, updateMovieTitle, updateMovieActor, deleteMovie } = require("./movie/movieFunctions")
const { addUser, listUsers, updateUserName, updateUserEmail, deleteUser } = require("./user/userFunctions")
const { info } = require("./joined/joinTable")

const app = async (yargsObject) => {
    try {
        await sequelize.sync()

        //Movie
        if (yargsObject.create && yargsObject.title) {
            await addMovie ({ title: yargsObject.title, actor: yargsObject.actor })
            await listMovies()
        } else if (yargsObject.read && yargsObject.movie) {
            await listMovies()
        } else if (yargsObject.update && yargsObject.title) {
            await updateMovieTitle (yargsObject)
            await listMovies()
        } else if (yargsObject.update && yargsObject.actor) {
            await updateMovieActor (yargsObject)
            await listMovies()
        } else if (yargsObject.delete && yargsObject.title) {
            await deleteMovie (yargsObject)
            await listMovies()

        //Joined
        } else if (yargsObject.read && yargsObject.uploadedBy) {
            await info()

        //User
        } else if (yargsObject.create && yargsObject.name) {
            await addUser ({ name: yargsObject.name, email: yargsObject.email })
            await listUsers()
        } else if (yargsObject.read && yargsObject.users) {
            await listUsers()
        } else if (yargsObject.update && yargsObject.name) {
            await updateUserName (yargsObject)
            await listUsers()
        } else if (yargsObject.update && yargsObject.email) {
            await updateUserEmail (yargsObject)
            await listUsers()
        } else if (yargsObject.delete && yargsObject.name) {
            await deleteUser (yargsObject)
            await listUsers()

        } else {
            console.log("Incorrect command")
        }
        sequelize.close()
    } catch(error) {
        console.log(error)
    }
}

app(yargs.argv)