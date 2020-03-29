import Queue from 'bull';
import redisConfig from '../../config/redis';


import * as jobs from '../jobs';

const queues = Object.values(jobs).map(job => ({
	bull: new Queue(job.key, redisConfig),
	name: job.key,
	handle: job.handle,
	options: job.options
})); // Array a partir dos valores do objeto e os parentese em volta das chaves eh para retornar direto o objeto.

export default {
	queues,
	add(name, data) {
		const queue = this.queues.find(queue => queue.name === name);

		return queue.bull.add(data, queue.options);
	},
	process() {
		return this.queues.forEach(queue => {
			queue.bull.process(queue.handle);

			queue.bull.on('failed', (job, err) => {
				//Sentry.captureException(err); Se fosse usar um software de captura de erros em producao, como o sentry.io (Soh teria que importar aqui!). Ou poderia usar ate mesmo o painel do proprio bull (yarn add bull-board) tanto em producao quanto em desenvolvimento (neste ultimo eh necessario criar algum modo de autenticacao para que nao seja qualquer um que possa pegar os erros!).
				console.log('\nJob failed!!\n', queue.name, job.data + '\n', err + '\n');
			});
		});
	}
};



// import RegistrationMail from '../jobs/RegistrationMail';

// const mailQueue = new Queue(RegistrationMail.key, redisConfig);

// mailQueue.on('failed', (job, err) => {
// 	console.log('\njob failed!!\n', job.name, job.data + '\n', err);
// });

// export default mailQueue;