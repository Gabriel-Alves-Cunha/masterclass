import 'dotenv/config';
import express from 'express';
import UserController from './app/controllers/UserController';

const app = express();
// import Queue from './app/lib/Queue';
// BullBoard.setQueues(Queue.queues.map(queue => queue.bull));
// app.use('./admin/queues', BullBoard.UI);
app.use(express.json());

app.post('/users', UserController.store);

const port = 3333;
app.listen(port, () => {
	console.log(`\nServer running on localhost:${port}.\n`);
})