module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('EmpEquipamentos', [
			{
				quantidade: 1,
				id_emprestimo: 1,
				id_equipamento: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				quantidade: 1,
				id_emprestimo: 2,
				id_equipamento: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('EmpEquipamentos', null, {})
	}
}
