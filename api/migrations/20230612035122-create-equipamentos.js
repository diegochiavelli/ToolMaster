'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Equipamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      marca: {
        type: Sequelize.STRING
      },
      modelo: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.FLOAT
      },
      dataAquisicao: {
        type: Sequelize.DATEONLY
      },
      garantia: {
        type: Sequelize.DATEONLY
      },
      fornecedor: {
        type: Sequelize.STRING
      },
      depreciacao: {
        type: Sequelize.FLOAT
      },
      dataRevisao: {
        type: Sequelize.DATEONLY
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Equipamentos');
  }
};