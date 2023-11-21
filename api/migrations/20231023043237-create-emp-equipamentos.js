'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EmpEquipamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      id_emprestimo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Emprestimos', key: 'id'}
      },
      id_equipamento: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Equipamentos', key: 'id'}
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EmpEquipamentos');
  }
};