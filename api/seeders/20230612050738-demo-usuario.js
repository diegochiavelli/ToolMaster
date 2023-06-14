module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Usuarios', [
			{
				nomeUsuario: 'Admin',
				senha: 'senhafraca',
				status: 'Administrador',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nomeUsuario: 'Wesley Timido',
				senha: 'senhaforte',
				status: 'Almoxarife',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nomeUsuario: 'copeira',
				senha: 'querocafe',
				status: 'Tia',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Usuarios', null, {})
	}
}
