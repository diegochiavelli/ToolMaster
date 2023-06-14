'use strict';
module.exports = (sequelize, DataTypes) => {
  const Funcionarios = sequelize.define('Funcionarios', {
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING,
    assinatura: DataTypes.STRING,
    observacao: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  Funcionarios.associate = function(models) {
    Funcionarios.hasMany(models.Emprestimos, {foreignKey: 'id_funcionario'});
  };
  return Funcionarios;
};