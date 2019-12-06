const { createClient } = require('@commercetools/sdk-client');
const { createAuthMiddlewareForClientCredentialsFlow } = require('@commercetools/sdk-middleware-auth');
const { createHttpMiddleware } = require('@commercetools/sdk-middleware-http');
const { createAuthMiddlewareForPasswordFlow } = require('@commercetools/sdk-middleware-auth')

const fetch = require('node-fetch');

const projectKey = 'koreviz'

const getClient = () => {
  const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
    host: 'https://auth.commercetools.co',
    projectKey,
    credentials: {
      clientId: 'qhDzZugAoUxR1r28XuEyl4gD',
      clientSecret: 'Pizqbz_gh9ZT3jztJqnHbi3V0DqaijpM',
    },
    scopes: ['manage_project:koreviz manage_api_clients:koreviz view_api_clients:koreviz'],
    fetch,
  })
  const httpMiddleware = createHttpMiddleware({
    host: 'https://api.commercetools.co',
    fetch,
  })
  const client = createClient({
    middlewares: [authMiddleware, httpMiddleware],
  })
  return client
}

const getMLClient = () => { }

const getMyAPIClient = () => { }



module.exports.getClient = getClient;
module.exports.projectKey = projectKey;
module.exports.getMLClient = getMLClient;
module.exports.getMyAPIClient = getMyAPIClient;
