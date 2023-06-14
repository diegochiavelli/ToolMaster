'use strict';
module.exports = (sequelize, DataTypes) => {
  const Emprestimos = sequelize.define('Emprestimos', {
    tipoAlocacao: DataTypes.STRING,
    dataSaida: DataTypes.DATEONLY,
    dataDevolucao: DataTypes.DATEONLY,
    observacao: DataTypes.STRING,
    assinatura: DataTypes.STRING
  }, {});
  Emprestimos.associate = function(models) {
    Emprestimos.belongsTo(models.Funcionarios, {foreignKey: 'id_funcionario'});
    Emprestimos.belongsTo(models.Equipamentos, {foreignKey: 'id_equipamento'});
    Emprestimos.belongsTo(models.Veiculos, {foreignKey: 'id_veiculo'});
  };
  return Emprestimos;
};