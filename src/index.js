const Hapi = require('@hapi/hapi');
const config = require('config');
const todoRoutes = require('./routes/todoRoutes');

const init = async () => {
  const server = Hapi.server({
    port: config.get('port'),
    host: config.get('host'),
    routes: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
  });

  server.route(todoRoutes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
