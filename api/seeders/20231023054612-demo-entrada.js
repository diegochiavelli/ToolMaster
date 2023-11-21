module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Entradas', [
			{
				preco: 10.50,
				quantidade: 10,
				observacao: 'testeEntrada',
				id_usuario: 1,
				id_equipamento: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				preco: 20.29,
				quantidade: 20,
				observacao: 'testeEntrada',
				id_usuario: 2,
				id_equipamento: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Entradas', null, {})
	}
}
