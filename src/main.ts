import pack from '../package.json' assert { type: 'json' };
import fastify from 'fastify';

const app = fastify();

app.get('/', function rootHandler(_, rep) {
  rep.send({ version : pack.version });
});

app.listen({ port: 3000 }, function ListenCB() {
  console.log('Listen to 3000');
});
