'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entradas = sequelize.define('Entradas', {
    preco: DataTypes.FLOAT,
    quantidade: DataTypes.INTEGER,
    observacao: DataTypes.STRING
  }, {});
  Entradas.associate = function(models) {
    Entradas.belongsTo(models.Usuarios, {foreignKey: 'id_usuario'});
    Entradas.belongsTo(models.Equipamentos, {foreignKey: 'id_equipamento'});
  };
  return Entradas;
};