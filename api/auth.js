const express = require('express');
const api = express.Router();
const authController = require('../controller/authController');
const utility = require('../helper/utility');

api.post('/api/auth',  utility.use(authController.signin));

module.exports = api;
