'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contato = sequelize.define('Contato', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dataNascimento: DataTypes.DATE
  }, {});
  Contato.associate = function (models) {
    // associations can be defined here
  };
  return Contato;
};