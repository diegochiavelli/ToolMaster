'use strict';
module.exports = (sequelize, DataTypes) => {
  const Funcionarios = sequelize.define('Funcionarios', {
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING,
    cargo: DataTypes.STRING,
  }, {});
  Funcionarios.associate = function(models) {
    Funcionarios.hasMany(models.Emprestimos, {foreignKey: 'id_funcionario'});
  };
  return Funcionarios;
};