<template>
  <div
    class="bg-[#000000b3] w-full h-full fixed top-0 left-0 z-50"
    @click="closeFullSize"
  >
    <div
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full h-full p-2 md:p-4 lg:p-0 lg:w-4/6 lg:h-4/6"
    >
      <div class="flex justify-center items-center">
        <img
          :src="fullsizeImageHandler()"
          class="transition-all duration-300 ease-out"
        />
      </div>
    </div>
    <div>
      <xMarkIcon
        class="fixed top-2 right-2 fill-white h-10 hover:p-1 hover:fill-slate-300 transition-all duration-300 ease-out cursor-pointer"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import localCrime from "../assets/project-ss/local-crime.png";
import bookCollection from "../assets/project-ss/book-collection.png";
import ecoelectronics from "../assets/project-ss/ecoelectronics.png";
import fullstackForum from "../assets/project-ss/fullstack-forum.png";
import coachFinder from "../assets/project-ss/coach-finder.png";
import portfolio from "../assets/project-ss/portfolio.png";
import tutorialCoach from "../assets/project-ss/tutorial-findcoach.png";
import tutorialForkify from "../assets/project-ss/tutorial-forkify.png";
import tutorialNatours from "../assets/project-ss/tutorial-natours.png";
import tutorialOmnifood from "../assets/project-ss/tutorial-omnifood.png";

export default {
  components: {
    XMarkIcon,
  },
  setup() {
    const store = useStore();
    const showFullSize = computed(() => store.getters.getShowFullSize);

    function closeFullSize() {
      store.dispatch("closeFullSize");
    }

    function fullsizeImageHandler() {
      return showFullSize.value === "localcrimechecker"
        ? localCrime
        : showFullSize.value === "bookcollectionmanager"
        ? bookCollection
        : showFullSize.value === "ecoelectronicsstorefrontwebsite"
        ? ecoelectronics
        : showFullSize.value === "fullstackforum"
        ? fullstackForum
        : showFullSize.value === "coachfinder"
        ? coachFinder
        : showFullSize.value === "portfolio"
        ? portfolio
        : showFullSize.value === "findacoach"
        ? tutorialCoach
        : showFullSize.value === "forkify"
        ? tutorialForkify
        : showFullSize.value === "natours"
        ? tutorialNatours
        : showFullSize.value === "omnifood"
        ? tutorialOmnifood
        : null;
    }

    return { closeFullSize, showFullSize, fullsizeImageHandler };
  },
};
</script>

<style>
.overlay {
  background-color: #000000b3;
}
</style>
