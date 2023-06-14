module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Veiculos', [
			{
				chassi: '9BRBLWHEXG0100112',
				marca: 'Phillips',
				modelo: 'r121',
				ano: "2022-02-01",
				hodometro: 12345,
				observacao: 'risco do porta malas',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				chassi: '9BRBLWHEXG0100113',
				marca: 'Apple',
				modelo: 'r152',
				ano: "2022-02-01",
				hodometro: 12345,
				observacao: 'freio com defeito',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				chassi: '9BRBLWHEXG0100114',
				marca: 'Samsung',
				modelo: 'r124',
				ano: "2022-02-01",
				hodometro: 12345,
				observacao: 'farol piscando',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				chassi: '9BRBLWHEXG0100115',
				marca: 'LG',
				modelo: 'r132',
				ano: "2022-02-01",
				hodometro: 12345,
				observacao: 'buzina nao funciona',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				chassi: '9BRBLWHEXG0100116',
				marca: 'Brastemp',
				modelo: 'r122',
				ano: "2022-02-01",
				hodometro: 12345,
				observacao: 'alarme estragado',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Veiculos', null, {})
	}
}
