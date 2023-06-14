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
      tipoAlocacao: {
        type: Sequelize.STRING
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
      assinatura: {
        type: Sequelize.STRING
      },
      id_funcionario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Funcionarios', key: 'id'}
      },
      id_equipamento: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Equipamentos', key: 'id'}
      },
      id_veiculo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Veiculos', key: 'id'}
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