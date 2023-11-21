'use strict';

module.exports = (sequelize, DataTypes) => {
  const Emprestimos = sequelize.define('Emprestimos', {
    dataSaida: DataTypes.DATEONLY,
    dataDevolucao: DataTypes.DATEONLY,
    observacao: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Emprestimos.associate = function(models) {
    Emprestimos.belongsTo(models.Usuarios, {foreignKey: 'id_usuario'});
    Emprestimos.belongsTo(models.Funcionarios, {foreignKey: 'id_funcionario'});
    Emprestimos.belongsToMany(models.Equipamentos, {through: 'EmpEquipamentos', foreignKey: 'id_emprestimo'});
    // Emprestimos.belongsTo(models.Equipamentos, {foreignKey: 'id_equipamento'});
    // Emprestimos.belongsTo(models.Veiculos, {foreignKey: 'id_veiculo'});
  };
  return Emprestimos;
};