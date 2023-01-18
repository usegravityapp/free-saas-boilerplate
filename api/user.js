const express = require('express');
const api = express.Router();
const userController = require('../controller/userController');
const utility = require('../helper/utility');

api.post('/api/user', utility.use(userController.create));

module.exports = api;
