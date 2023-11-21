'use strict';
module.exports = (sequelize, DataTypes) => {
  const Veiculos = sequelize.define('Veiculos', {
    chassi: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    ano: DataTypes.STRING,
    hodometro: DataTypes.INTEGER,
    observacao: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  Veiculos.associate = function(models) {
    // Veiculos.hasMany(models.Emprestimos, {foreignKey: 'id_veiculo'});
  };
  return Veiculos;
};