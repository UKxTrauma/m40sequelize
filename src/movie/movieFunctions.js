const Movie = require("./movieTable")

exports.addMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject);
    }catch (error) {
        console.log(error)
    }
}

exports.updateMovieTitle = async (yargsObject) => {
    try {
        await Movie.update({ title: yargsObject.newTitle }, {
            where : { title: yargsObject.title }
        });
        console.log('title updated');
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovieActor = async (yargsObject) => {
    try {
        await Movie.update({ actor: yargsObject.newActor }, {
            where : { actor: yargsObject.actor }
        });
        console.log('actor updated');
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async (yargsObject) => {
    try {
        await Movie.destroy({
            where : { title: yargsObject.title }
        });
        console.log('deleted');
    } catch (error) {
        console.log(error)
    }
}

exports.listMovies = async () => {
    try {
        let list = await Movie.findAll();
        console.table(list.map( ({id, title, actor}) => ({id, title, actor})));
    } catch (error) {
        console.log(error)
    }
};