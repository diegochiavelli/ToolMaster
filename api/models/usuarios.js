'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, { 
      defaultScope:{
        attributes:{
          exclude: ['senha']
        }
      }});
  Usuarios.associate = function(models) {
    Usuarios.hasMany(models.Entradas, {foreignKey: 'id_usuario'});
    Usuarios.hasMany(models.Saidas, {foreignKey: 'id_usuario'});
  };
  return Usuarios;
};



