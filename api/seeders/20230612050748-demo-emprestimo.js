module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Emprestimos', [
			{
				tipoAlocacao: 'Interno',
				dataSaida: "2022-02-01",
				dataDevolucao: "2022-02-02",
				observacao: 'Dia com chuva',
				assinatura: 'Digital',
				id_funcionario: 1,
				id_equipamento: 1,
				id_veiculo: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				tipoAlocacao: 'externo',
				dataSaida: "2022-02-01",
				dataDevolucao: "2022-02-02",
				observacao: 'Dia com chuva',
				assinatura: 'Digital',
				id_funcionario: 2,
				id_equipamento: 2,
				id_veiculo: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Emprestimos', null, {})
	}
}
