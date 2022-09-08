const { sequelize } = require("../db/connection")
const { QueryTypes } = require('sequelize')

exports.info = async () => {
    try {
        let list = await sequelize.query("SELECT * FROM Movies LEFT JOIN Users ON Movies.id = Users.id", { type: QueryTypes.SELECT});
        console.table(list.map( ({id, title, actor, name, email}) => ({id, title, actor, name, email})));
    } catch (error) {
        console.log(error)
    }  
};

// const { DataTypes } = require("sequelize")
// const { sequelize } = require("../db/connection")
// const Movie = require("../movie/movieTable")
// const User = require("../user/userTable")

// exports.info = async () => {
//     // const Movie = sequelize.define(
//     //     "Movie",
//     //     { title: DataTypes.STRING },
//     // );
    
//     // const User = sequelize.define(
//     //     "User",
//     //     { name: DataTypes.STRING },
//     //     { email: DataTypes.STRING},
//     // );

//     Movie.hasMany(User, {foreignKey: 'id'});
//     User.belongsTo(Movie, {foreignKey: 'id'});
//     // User.hasMany(Movie, {foreignKey: 'id'});
//     // Movie.belongsTo(User, {foreignKey: 'id'});

//     // const list = await User.findAll({ include: {model: Movie, attributes: ['title']} });
//     const list = await User.findAll({ include: Movie });
//     let hopeful = JSON.stringify(list, null, 2);
//     console.log(hopeful)
//     let parse = JSON.parse(hopeful)
//     let array = []
//     for (let anything of parse) {
//         array.push(anything)
//         // console.log(anything)
//     }
//     console.log(array)
//     // console.log(parse)
//     // for (let anything of hopeful) {
//     //     console.log(anything)
//     // }
//     // console.log(list.da)
//     // console.log(list.map(value => value.dataValues))
// }