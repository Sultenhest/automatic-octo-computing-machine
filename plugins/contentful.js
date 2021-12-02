const contentful = require('contentful');

const config = {
  space: process.env.NUXT_ENV_CONTENTFUL_SPACE,
  accessToken: process.env.NUXT_ENV_CONTENTFUL_ACCESS_TOKEN,
};

const client = contentful.createClient(config);

export default client;