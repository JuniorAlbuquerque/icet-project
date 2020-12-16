const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile.developmentt);

module.exports = knex;