export default {
  bgModeToggle(state) {
    state.bgControls = !state.bgControls;
  },
  activeTutorialHandler(state, payload) {
    state.activeTutorial = payload;
  },
  positioningToggle(state) {
    state.positioningState = !state.positioningState;
  },
  controlToggle(state) {
    state.controlState = !state.controlState;
  },
  animateToggle(state) {
    state.animateState = !state.animateState;
  },
  resetPositioning(state) {
    state.resetPositioning = !state.resetPositioning;
  },
  postProcessingControl(state, payload) {
    state.postProcessing = payload;
  },
  resetPost(state) {
    state.postProcessing = null;
  },
  webGLCheck(state, payload) {
    state.webGLAvailable = payload;
  },
  showFullSize(state, payload) {
    state.showFullSize = payload;
  },
  closeFullSize(state) {
    state.showFullSize = null;
  },
  setMediaQuerySize(state, payload) {
    state.mediaQuerySize = payload;
  },
};
