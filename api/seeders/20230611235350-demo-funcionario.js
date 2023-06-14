module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Funcionarios', [
			{
				nome: 'Ana Souza',
				cpf: '001.001.001-01',
				telefone: '99 9 9999-9991',
				assinatura: 'Souza',
				observacao: 'Atendente',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Marcos Cintra',
				cpf: '001.001.001-02',
				telefone: '99 9 9999-9992',
				assinatura: 'Cintra',
				observacao: 'Engenheiro',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Loraine Cardoso',
				cpf: '001.001.001-05',
				telefone: '99 9 9999-9995',
				assinatura: 'Cardoso',
				observacao: 'Veterinária',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sandra Gomes',
				cpf: '001.001.001-04',
				telefone: '99 9 9999-9994',
				assinatura: 'Gomes',
				observacao: 'Recepcionista',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Paula Morais',
				cpf: '001.001.001-03',
				telefone: '99 9 9999-9993',
				assinatura: 'Marais',
				observacao: 'Cozinheira',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sergio Lopes',
				cpf: '001.001.001-06',
				telefone: '99 9 9999-9996',
				assinatura: 'Lopes',
				observacao: 'Advogado',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Funcionarios', null, {})
  }
}
