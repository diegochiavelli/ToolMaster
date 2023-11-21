module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Usuarios', [
			{
				nome: 'Admin',
				email: 'admin@gmail.com',
				senha: 'admin',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'normal',
				email: 'normal@gmail.com',
				senha: 'normal',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'comum',
				email: 'comum@gmail.com',
				senha: 'comum',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Usuarios', null, {})
	}
}
