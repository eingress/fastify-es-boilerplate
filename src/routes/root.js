export default async (fastify, opts) => {
  fastify.get('/', async (request, reply) => {
    return { root: true };
  });
};
