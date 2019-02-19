import Vue from "vue";
import Vuex from "vuex";

import { topTracks, oneTrack } from "./backendEP";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heading: "Top 10 Tracks in Colombia",
    trackList: []
  },
  mutations: {
    setTrackList(state, payload) {
      state.trackList = payload;
    },
    setHeading(state, payload) {
      state.heading = payload;
    }
  },
  actions: {
    async getInitialTracks({ commit }) {
      const response = await fetch(topTracks);
      const json = await response.json();
      commit("setTrackList", json.message.body.track_list);
    },
    async searchTrack({ commit }, payload) {
      const response = await fetch(oneTrack.replace("$track_title", payload));
      const json = await response.json();
      commit("setTrackList", json.message.body.track_list);
    },
    setHeading({ commit }, payload) {
      commit("setHeading", `Search Results for "${payload}"`);
    }
  }
});
