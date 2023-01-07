import path from 'path';

import Fastify from 'fastify';
import AutoLoad from '@fastify/autoload';

const { env, stdout } = process;

const { API_ADDRESS = '0.0.0.0', API_PORT = 3000 } = env;

let _api;

const kill = () => {
  if (_api) _api.close();
};

const run = async (opts) => {
  _api = Fastify(opts);

  _api.register(AutoLoad, { dir: path.join(__dirname, 'plugins') });
  _api.register(AutoLoad, { dir: path.join(__dirname, 'routes') });

  await _api.listen({ address: API_ADDRESS, port: API_PORT });
  stdout.write(`[API] Available at http://${API_ADDRESS}:${API_PORT}\n`);
};

export default { kill, run };
