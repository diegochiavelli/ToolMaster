'use strict';

module.exports = (sequelize, DataTypes) => {
  const Equipamentos = sequelize.define('Equipamentos', {
    nome: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
  }, {});
  Equipamentos.associate = function(models) {
    // Equipamentos.hasMany(models.Emprestimos, {foreignKey: 'id_equipamento'});
    Equipamentos.hasMany(models.Entradas, {foreignKey: 'id_equipamento'});
    Equipamentos.hasMany(models.Saidas, {foreignKey: 'id_equipamento'});
    Equipamentos.belongsToMany(models.Emprestimos, {through: 'EmpEquipamentos', foreignKey: 'id_equipamento'});
  };
  return Equipamentos;
};