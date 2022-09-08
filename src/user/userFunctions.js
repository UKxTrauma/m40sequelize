const User = require("./userTable")

exports.addUser = async (userObject) => {
    try {
        await User.create(userObject);
    }catch (error) {
        console.log(error)
    }
}

exports.updateUserName = async (yargsObject) => {
    try {
        await User.update({ name: yargsObject.newName }, {
            where : { name: yargsObject.name }
        });
        console.log('name updated');
    } catch (error) {
        console.log(error)
    }
}

exports.updateUserEmail = async (yargsObject) => {
    try {
        await User.update({ email: yargsObject.newEmail }, {
            where : { email: yargsObject.email }
        });
        console.log('email updated');
    } catch (error) {
        console.log(error)
    }
}

exports.deleteUser = async (yargsObject) => {
    try {
        await User.destroy({
            where : { name: yargsObject.name }
        });
        console.log('deleted');
    } catch (error) {
        console.log(error)
    }
}

exports.listUsers = async () => {
    try {
        let list = await User.findAll();
        console.table(list.map( ({id, name, email}) => ({id, name, email})));
    } catch (error) {
        console.log(error)
    }
};