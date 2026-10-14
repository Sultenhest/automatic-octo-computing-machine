const contentful = require('contentful');

const config = {
  space: process.env.NUXT_ENV_CONTENTFUL_SPACE,
  accessToken: process.env.NUXT_ENV_CONTENTFUL_ACCESS_TOKEN,
};

const client = contentful.createClient(config);

// Returns null when the request fails, so callers can keep content they already have
export async function getSections(entryId) {
  try {
    const response = await client.getEntry(entryId);
    return response.fields.section || [];
  } catch (err) {
    console.error(err);
    return null;
  }
}

// Fisher-Yates shuffle, so every image is equally likely (sorting with a random
// comparator favours the start of the array)
function pickRandom(items, count) {
  const pool = [...(items || [])];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

// Page mixin: renders Contentful sections into the generated HTML, then refetches
// in the browser so content edits show up without a redeploy. With `sideImages`,
// it also picks that many random gallery images once per page load; doing it in
// asyncData keeps the server's pick, so the photos don't swap after hydration.
export function sectionsPage(entryId, { sideImages = 0 } = {}) {
  return {
    async asyncData({ store }) {
      return {
        sections: (await getSections(entryId)) || [],
        sectionsFromServer: process.server,
        sideImages: pickRandom(store.getters.images, sideImages),
      };
    },

    async mounted() {
      if (!this.sectionsFromServer) return;
      const sections = await getSections(entryId);
      if (sections) {
        this.sections = sections;
      }
    },
  };
}

export default client;
