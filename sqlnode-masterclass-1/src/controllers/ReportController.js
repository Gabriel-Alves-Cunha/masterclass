const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
	async show(req, res) {
		// Encontrar todos os usuarios que tem email que termina com @outlook.com
		// Desses, quero todos que moram na rua "Rua Guilherme Gembala"
		// Bem como, deles, eu quero buscar as techs que começam com React

		const users = await User.findAll({
			attributes: [ 'name', 'email' ],
			where: {
				email: {
					[ Op.iLike ]: '%@outlook.com'// [Op.iLike] VALOR DA VARIAVEL Op.iLike
				}
			},
			include: [
				{
					association: 'addresses',
					where: {
						street: 'Rua Guilherme Gembala'
					}
				}, // enderecos
				{
					association: 'techs',
					required: false,
					where: {
						name: {
							[Op.iLike]: 'React%'
						}
					}
				} // techs
			]
		});

		return res.json(users);
	}
};