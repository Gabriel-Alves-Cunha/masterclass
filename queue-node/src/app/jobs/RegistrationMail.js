import Mail from '../lib/Mail';

export default {
	key: 'RegistrationMail', // nome do job
	options: {
		delay: 5000
	},
	async handle({ data }) {
		const { user: { name, email } } = data;

		await Mail.sendMail({
			from: 'Queue Test <queue@queuetest.com',
			to: `${name} <${email}>`,
			subject: 'Cadastro de usuário',
			html: `Olá, ${name}, bem vindo(a) ao sistema de filas da Rocketseat :D`
		});
	}
};