const Knex = require('knex');
const KnexFile = require('../knexfile')[process.env.NODE_ENV || 'development'];

module.exports = () => {

  return new Knex(KnexFile);

}
