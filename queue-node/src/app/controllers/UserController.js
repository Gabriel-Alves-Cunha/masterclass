import Queue from '../lib/Queue';

export default {
	async store(req, res) {
		const { name, email, password } = req.body;

		const user = {
			name, email, password
		};

		// Enviar um email
		// Como eu quero que seja processado em outro servidor => `yarn add bull` e crio a pasta jobs/RegistrationMail.js

		// Adicionar job RegistrationMail na fila
		await Queue.add('RegistrationMail', { user });

		return res.json(user);
	}
}