module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Saidas', [
			{
				quantidade: 1,
				observacao: 'testeSaida',
				id_usuario: 1,
				id_equipamento: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				quantidade: 1,
				observacao: 'testeSaida',
				id_usuario: 2,
				id_equipamento: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Saidas', null, {})
	}
}
