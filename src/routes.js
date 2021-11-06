const routes = require("express").Router();
const { User } = require('./app/models');

User.create({
    name: 'Thálisson',
    email: 'tms.working@gmail.com',
    password_hash: 'tetetete'
})

module.exports = routes;