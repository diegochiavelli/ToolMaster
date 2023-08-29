module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Usuarios', [
			{
				nomeUsuario: 'Admin',
				email: 'admin@gmail.com',
				senha: 'admin',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nomeUsuario: 'normal',
				email: 'normal@gmail.com',
				senha: 'normal',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nomeUsuario: 'comum',
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
