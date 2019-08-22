const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    userPwd: {type: String, required: true},
})

const Users = mongoose.model('users', usersSchema);

module.exports = Users;