import { createServer } from '@graphql-yoga/node';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getBuiltMesh } from '../../../../.mesh';

async function buildServer() {
  const mesh = await getBuiltMesh();
  return createServer({
    plugins: mesh.plugins,
    graphiql: {
      endpoint: '/api/mesh/graphql',
      title: 'GraphQL Gateway',
    },
  });
}

const server$ = buildServer();

export default async function apiHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return (await server$).requestListener(req, res);
}
