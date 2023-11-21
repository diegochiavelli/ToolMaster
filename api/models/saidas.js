'use strict';
module.exports = (sequelize, DataTypes) => {
  const Saidas = sequelize.define('Saidas', {
    quantidade: DataTypes.INTEGER,
    observacao: DataTypes.STRING
  }, {});
  Saidas.associate = function(models) {
    Saidas.belongsTo(models.Usuarios, {foreignKey: 'id_usuario'});
    Saidas.belongsTo(models.Equipamentos, {foreignKey: 'id_equipamento'});
  };
  return Saidas;
};