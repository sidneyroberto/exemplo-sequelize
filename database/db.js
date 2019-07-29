const Sequelize = require('sequelize');
const ContatoModel = require('../models/contato');
const dbConfig = require('./config');

const modo = process.env.NODE_ENV || 'development';
const config = dbConfig[modo];

const conexao = new Sequelize(config.db, config.user, config.password, {
    host: config.host,
    dialect: config.dialect
});

const Contato = ContatoModel(conexao, Sequelize);

conexao
    .sync({ alter: true })
    .then(() => console.log('Sequelize -> BD e tabelas criados'));

const db = { Contato };

module.exports = db;