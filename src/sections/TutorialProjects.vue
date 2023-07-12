<template>
  <div
    class="flex flex-col mt-20 shadow-md w-[85%] sm:w-[95%] ml-6 md:ml-0 sm:ml-2"
    id="el-tutorial-projects"
  >
    <div
      class="bg-gray-900 p-2 text-slate-100 text-center rounded-t-xl main-border"
    >
      <div class="font-bold text-2xl md:text-3xl items-center mb-2">
        <div>Tutorial Projects</div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-4 bg-[#1d2d40] justify-evenly items-center p-4 text-slate-100"
    >
      <TutorialItem tutNo="1" tutTitle="Find A Coach" :tutImg="imgCoach" />
      <TutorialItem tutNo="2" tutTitle="Natours" :tutImg="imgNatours" />
      <TutorialItem tutNo="3" tutTitle="Forkify" :tutImg="imgFork" />
      <TutorialItem tutNo="4" tutTitle="Omnifood" :tutImg="imgOmni" />
    </div>
    <div
      class="bg-gray-900 p-2 text-slate-100 rounded-b-xl h-fit lg:h-44 text-start main-border text-base"
    >
      <TutorialDetails
        tutNo="0"
        :tutDesc="tut0Desc"
        v-if="activeTutorial === '0'"
      />
      <TutorialDetails
        tutNo="1"
        tutTitle="Find A Coach"
        tutCode="https://github.com/rwgr/Tutorial-Find-A-Coach"
        :tutDesc="tut1Desc"
        v-if="activeTutorial === '1'"
      />
      <TutorialDetails
        tutNo="2"
        tutTitle="Natours"
        tutCode="https://github.com/rwgr/Tutorial-Natours"
        :tutDesc="tut2Desc"
        v-if="activeTutorial === '2'"
      />
      <TutorialDetails
        tutNo="3"
        tutTitle="Forkify"
        tutCode="https://github.com/rwgr/Tutorial-Forkify"
        :tutDesc="tut3Desc"
        v-if="activeTutorial === '3'"
      />
      <TutorialDetails
        tutNo="4"
        tutTitle="Omnifood"
        tutCode="https://github.com/rwgr/Tutorial-Omnifood"
        :tutDesc="tut4Desc"
        v-if="activeTutorial === '4'"
      />
    </div>
  </div>
  <div
    id="border5"
    class="border-b-2 mt-20 border-slate-100 w-[95%] ml-10 sm:ml-8 md:ml-0"
  ></div>
</template>

<script>
import TutorialItem from "../components/TutorialItem.vue";
import TutorialDetails from "../components/TutorialDetails.vue";
import imgCoach from "../assets/project-ss/tutorial-findcoach.webp";
import imgNatours from "../assets/project-ss/tutorial-natours.webp";
import imgFork from "../assets/project-ss/tutorial-forkify.webp";
import imgOmni from "../assets/project-ss/tutorial-omnifood.webp";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: {
    TutorialItem,
    TutorialDetails,
  },
  data() {
    return {
      tut0Desc:
        "These Tutorial Projects were completed as part of various Udemy courses. Links to these courses can be found in the completed courses section.",
      tut1Desc:
        " Tutorial project completed as part of Vue Udemy Course, Find A Coach web app. Project #4 above is an expanded, remade version of this tutorial project, with additional features added.",
      tut2Desc:
        " Tutorial project completed as part of Node.js Udemy Course, a tour booking site. This is a RESTful API and web app with Node.js security and payments via Stripe. and Mongoose.",
      tut3Desc:
        "  Tutorial project completed as part of a JavaScript Udemy course. Web application connects to a Public API allowing users to search for recipes. Users can also upload their own recipes.",
      tut4Desc:
        "  Tutorial project completed as part of HTML & CSS Udemy Course. This is a responsive webpage built using modern design JavaScript and CSS.",
    };
  },
  setup() {
    function showFullSize(prjImg) {
      store.dispatch("showFullSize", prjImg);
    }
    const store = useStore();
    const activeTutorial = computed(() => store.getters.getActiveTutorial);

    function activeTutorialHandler(number) {
      store.dispatch("activateTutorial", number);
    }
    return {
      activeTutorial,
      activeTutorialHandler,
      showFullSize,
      imgCoach,
      imgNatours,
      imgFork,
      imgOmni,
    };
  },
};
</script>
