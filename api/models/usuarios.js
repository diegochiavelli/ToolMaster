'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
    nomeUsuario: DataTypes.STRING,
    senha: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Usuarios.associate = function(models) {
    // associations can be defined here
  };
  return Usuarios;
};