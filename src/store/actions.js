export default {
  bgModeToggle(context) {
    context.commit("bgModeToggle");
  },
  activeTutorialHandler(context, payload) {
    context.commit("activeTutorialHandler", payload);
  },
  positioningToggle(context) {
    context.commit("positioningToggle");
  },
  controlToggle(context) {
    context.commit("controlToggle");
  },
  animateToggle(context) {
    context.commit("animateToggle");
  },
  resetPositioning(context) {
    context.commit("resetPositioning");
  },
  postProcessingControl(context, payload) {
    context.commit("postProcessingControl", payload);
  },
  resetPost(context) {
    context.commit("resetPost");
  },
  webGLCheck(context, payload) {
    context.commit("webGLCheck", payload);
  },
  showFullSize(context, payload) {
    context.commit("showFullSize", payload);
  },
  closeFullSize(context) {
    context.commit("closeFullSize");
  },
  setMediaQuerySize(context, payload) {
    context.commit("setMediaQuerySize", payload);
  },
};
