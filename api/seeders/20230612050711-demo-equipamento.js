module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Equipamentos', [
			{
        		nome: 'Chave de fenda',
       			modelo: 'r12',
				marca: 'Phillips',
				quantidade: 30,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
        		nome: 'Furadeira',
				modelo: 'r12',
				marca: 'Phillips',
				quantidade: 30,
				createdAt: new Date(),
				updatedAt: new Date()
			},
      		{
        		nome: 'Máquina de Solda',
				modelo: 'r12',
				marca: 'Phillips',
				quantidade: 30,
				createdAt: new Date(),
				updatedAt: new Date()
			},
      		{
        		nome: 'Furadeira',
				modelo: 'r12',
				marca: 'Phillips',
				quantidade: 30,
				createdAt: new Date(),
				updatedAt: new Date()
			},
      		{
        		nome: 'Maleta',
				modelo: 'r12',
				marca: 'Phillips',
				quantidade: 30,
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Equipamentos', null, {})
  }
}
