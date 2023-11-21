'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmpEquipamentos = sequelize.define('EmpEquipamentos', {
    quantidade: DataTypes.INTEGER,
  }, {});
  EmpEquipamentos.associate = function(models) {
    EmpEquipamentos.belongsTo(models.Emprestimos, {foreignKey: 'id_emprestimo'});
    EmpEquipamentos.belongsTo(models.Equipamentos, {foreignKey: 'id_equipamento'});
  };
  return EmpEquipamentos;
};