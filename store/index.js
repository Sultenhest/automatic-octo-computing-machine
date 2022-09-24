import contentful from '~/plugins/contentful.js'

export const state = () => ({
  images: null,
});

export const mutations = {
  setImages: (state, images) => {
    state.images = images;
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
  }
};

export const getters = {
  images(state) {
    return state.images
  }
};
