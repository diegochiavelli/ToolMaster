module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Equipamentos', [
			{
        		nome: 'Chave de fenda',
				marca: 'Phillips',
       			modelo: 'r12',
				valor: 30.33,
				dataAquisicao: "2022-02-01",
				garantia: "2024-02-01",
				fornecedor: 'Sertão',
				depreciacao: 10,
        		dataRevisao: "2022-02-01",
        		status: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
        		nome: 'Furadeira',
				marca: 'Apple',
        		modelo: 'PX-RS',
				valor: 150.33,
				dataAquisicao: "2022-02-01",
				garantia: "2025-02-01",
				fornecedor: 'Camelo Box12',
				depreciacao: 10,
        		dataRevisao: "2022-02-01",
        		status: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
      		{
        		nome: 'Máquina de Solda',
				marca: 'LG',
        		modelo: 'Turbinada',
				valor: 49.33,
				dataAquisicao: "2022-02-01",
				garantia: "2027-02-01",
				fornecedor: 'Mercado Livre',
				depreciacao: 10,
        		dataRevisao: "2022-02-01",
        		status: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
      		{
        		nome: 'Furadeira',
				marca: 'Ouro Fino',
        		modelo: 'PX-RS',
				valor: 150.33,
				dataAquisicao: "2022-02-01",
				garantia: "2028-02-01",
				fornecedor: 'Netshoes',
				depreciacao: 10,
        		dataRevisao: "2022-02-01",
        		status: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
      		{
        		nome: 'Maleta',
				marca: 'Disney',
        		modelo: 'Blindada',
				valor: 66.33,
				dataAquisicao: "2022-02-01",
				garantia: "2025-02-01",
				fornecedor: 'Casas Bahia',
				depreciacao: 10,
        		dataRevisao: "2022-02-01",
        		status: true,
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Equipamentos', null, {})
  }
}
