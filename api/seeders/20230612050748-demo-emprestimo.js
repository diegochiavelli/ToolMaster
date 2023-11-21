module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Emprestimos', [
			{
				dataSaida: "2023-03-03",
				dataDevolucao: "2023-03-03",
				observacao: 'Concluido',
				status: 'Concluido',
				id_usuario: 1,
				id_funcionario: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				dataSaida: "2022-02-01",
				dataDevolucao: "2022-02-02",
				observacao: 'Obra 2',
				status: 'Pendente',
				id_usuario: 1,
				id_funcionario: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				dataSaida: "2022-02-01",
				dataDevolucao: "2022-02-02",
				observacao: 'Obra 2',
				status: 'Atrasado',
				id_usuario: 1,
				id_funcionario: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Emprestimos', null, {})
	}
}
