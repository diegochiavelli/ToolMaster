'use strict';
module.exports = (sequelize, DataTypes) => {
  const Equipamentos = sequelize.define('Equipamentos', {
    nome: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    dataAquisicao: DataTypes.DATEONLY,
    garantia: DataTypes.DATEONLY,
    fornecedor: DataTypes.STRING,
    depreciacao: DataTypes.FLOAT,
    dataRevisao: DataTypes.DATEONLY,
    status: DataTypes.BOOLEAN
  }, {});
  Equipamentos.associate = function(models) {
    Equipamentos.hasMany(models.Emprestimos, {foreignKey: 'id_equipamento'});
  };
  return Equipamentos;
};