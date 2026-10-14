const contentful = require('contentful');

const config = {
  space: process.env.NUXT_ENV_CONTENTFUL_SPACE,
  accessToken: process.env.NUXT_ENV_CONTENTFUL_ACCESS_TOKEN,
};

const client = contentful.createClient(config);

export async function getSections(entryId) {
  try {
    const response = await client.getEntry(entryId);
    return response.fields.section || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

// Page mixin: renders Contentful sections into the generated HTML, then refetches
// in the browser so content edits show up without a redeploy.
export function sectionsPage(entryId) {
  return {
    async asyncData() {
      return { sections: await getSections(entryId), sectionsFromServer: process.server };
    },

    async mounted() {
      if (this.sectionsFromServer) {
        this.sections = await getSections(entryId);
      }
    },
  };
}

export default client;
