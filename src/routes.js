const routes = require("express").Router();
const { User } = require('./app/models');

const SessionController = require('./controllers/sessionController');

routes.post('/sessions', SessionController.store);

module.exports = routes;