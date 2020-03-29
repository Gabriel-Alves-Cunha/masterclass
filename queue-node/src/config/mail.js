export default {
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	secure: false,
	auth: { // Como nao eh prudente deixar credenciais em codigo, => `yarn add dotenv` e boto ".env" no .gitignore!
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS
	}
};