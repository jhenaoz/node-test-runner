const UsersDomain = require('../../domain/users.domain.js');

exports.list = async function (req, res) {
    const usersDomain = new UsersDomain();
    const users = await usersDomain.getAllUsers();
    res.send(users)
}