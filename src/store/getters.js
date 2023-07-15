export default {
  getBgControls(state) {
    return state.bgControls;
  },
  getActiveTutorial(state) {
    return state.activeTutorial;
  },
  getPositioningState(state) {
    return state.positioningState;
  },
  getControlState(state) {
    return state.controlState;
  },
  getAnimateState(state) {
    return state.animateState;
  },
  getResetPositioning(state) {
    return state.resetPositioning;
  },
  getPostProcessing(state) {
    return state.postProcessing;
  },
  getWebGLAvailable(state) {
    return state.webGLAvailable;
  },
  getShowFullSize(state) {
    return state.showFullSize;
  },
  getMediaQuerySize(state) {
    return state.mediaQuerySize;
  },
  getAnimationActive(state) {
    return state.animationActive;
  },
};
