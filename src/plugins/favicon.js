import fp from 'fastify-plugin';

// Returns a transparent favicon.ico

const ico64 =
  'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T/////' +
  '//8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSM' +
  'glEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII';

const ico = Buffer.from(ico64, 'base64').toString('binary');

export default fp(async (fastify) => {
  fastify.get('/favicon.ico', (_, reply) => {
    reply.header('Content-Type', 'image/x-icon');
    reply.send(ico);
  });
});
