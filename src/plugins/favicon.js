import fp from 'fastify-plugin';

// Returns a transparent favicon.ico

const ico = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII',
  'base64',
).toString('binary');

export default fp(async (fastify, _, next) => {
  fastify.get('/favicon.ico', (_, reply) => {
    reply.header('Content-Type', 'image/x-icon');
    reply.send(ico);
  });

  next();
});
