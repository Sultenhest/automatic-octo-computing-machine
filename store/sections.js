import contentful from '~/plugins/contentful.js'

export const state = () => ({
  sections: {
    section: {}
  }
});

export const mutations = {
  setSections: (state, sections) => {
    state.sections = sections;
  }
};

export const actions = {
  async getSections({ commit }, { entryId }) {
    try {
      if (!contentful) return;
      const response = await contentful.getEntry( entryId );
      commit("setSections", response.fields);
    } catch (err) {
      console.error(err);
    }
  }
};

export const getters = {
  sections(state) {
    return state.sections;
  }
};
