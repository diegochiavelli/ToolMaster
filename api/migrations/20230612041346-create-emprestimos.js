'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Emprestimos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataSaida: {
        type: Sequelize.DATEONLY
      },
      dataDevolucao: {
        type: Sequelize.DATEONLY
      },
      observacao: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      id_usuario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id'}
      },
      id_funcionario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Funcionarios', key: 'id'}
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
    return queryInterface.dropTable('Emprestimos');
  }
};