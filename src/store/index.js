import { createStore } from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

const store = createStore({
  state() {
    return {
      bgControls: false,
      activeTutorial: null,
      positioningState: true,
      controlState: true,
      animateState: true,
      resetPositioning: false,
      postProcessing: null,
      webGLAvailable: true,
      showFullSize: null,
    };
  },
  mutations,
  actions,
  getters,
});

export default store;
