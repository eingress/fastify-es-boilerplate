import path from 'path';
import AutoLoad from 'fastify-autoload';

const Api = async (fastify, opts) => {
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts),
  });
};

export default Api;
