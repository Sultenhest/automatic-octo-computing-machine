import contentful from '~/plugins/contentful.js'

export const state = () => ({
  images: null,
  terms: null
});

export const mutations = {
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
      commit("setImages", response.fields.images);
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