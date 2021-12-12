import contentful from '~/plugins/contentful.js'

export const state = () => ({
  images: null,
  sections: null
});

export const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
  setSections: (state, sections) => {
    state.sections = sections;
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

  async getAboutPage({ commit }) {
    try {
      if (!contentful) return;
      const response = await contentful.getEntry('2f0zj0mrh9p5aTkGUtpJje');
      commit("setSections", response.fields);
    } catch (err) {
      console.error(err);
    }
  }
};