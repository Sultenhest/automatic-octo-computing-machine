import contentful from '~/plugins/contentful.js'

export const state = () => ({
  instagram: null,
  images: null,
  terms: null
});

export const mutations = {
  setInstagram: (state, instagram) => {
    state.instagram = instagram;
  },
  setImages: (state, images) => {
    state.images = images;
  },
  setTerms: (state, terms) => {
    state.terms = terms;
  }
};

export const actions = {
  async getFrontpage({ commit }) {
    try {
      if (!contentful) return;
      const response = await contentful.getEntry('29HZzUSFfN81hc2NjQxCw9');
      if (response.fields.name === 'Frontpage') {
        if (response.fields.instagram) commit("setInstagram", response.fields.instagram);
        if (response.fields.images) commit("setImages", response.fields.images);
      }
    } catch (err) {
      console.error(err);
    }
  },

  async getTermsPage({ commit }) {
    try {
      if (!contentful) return;
      const response = await contentful.getEntry('2f0zj0mrh9p5aTkGUtpJje');
      commit("setTerms", response.fields);
    } catch (err) {
      console.error(err);
    }
  }
};