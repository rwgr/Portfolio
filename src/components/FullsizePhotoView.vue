<template>
  <div
    class="bg-[#000000b3] w-full h-full fixed top-0 left-0 z-50"
    @click="closeFullSize"
  >
    <div
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full h-full p-2 md:p-4 lg:p-0 lg:w-4/6 lg:h-4/6"
    >
      <div
        class="flex justify-center items-center"
        v-if="showFullSize === 'localcrime'"
      >
        <img
          src="../assets/project-ss/local-crime.png"
          class="transition-all duration-300 ease-out"
        />
      </div>
      <div
        class="flex justify-center items-center"
        v-else-if="showFullSize === 'bookcollection'"
      >
        <img
          src="../assets/project-ss/book-collection.png"
          class="transition-all duration-300 ease-out"
        />
      </div>
      <div
        class="flex justify-center items-center"
        v-else-if="showFullSize === 'ecoelectronics'"
      >
        <img
          src="../assets/project-ss/ecoelectronics.png"
          class="transition-all duration-300 ease-out"
        />
      </div>
      <div
        class="flex justify-center items-center"
        v-else-if="showFullSize === 'fullstackforum'"
      >
        <img
          src="../assets/project-ss/fullstack-forum.png"
          class="transition-all duration-300 ease-out"
        />
      </div>
      <div
        class="flex justify-center items-center"
        v-else-if="showFullSize === 'coachfinder'"
      >
        <img
          src="../assets/project-ss/coach-finder.png"
          class="transition-all duration-300 ease-out"
        />
      </div>
      <div
        class="flex justify-center items-center"
        v-else-if="showFullSize === 'portfolio'"
      >
        <img
          src="../assets/project-ss/portfolio.png"
          class="transition-all duration-300 ease-out"
        />
      </div>
      <div
        class="flex justify-center items-center"
        v-else-if="showFullSize === 'tutorialcoach'"
      >
        <img
          src="../assets/project-ss/tutorial-findcoach.png"
          class="transition-all duration-300 ease-out"
        />
      </div>
      <div
        class="flex justify-center items-center"
        v-else-if="showFullSize === 'tutorialforkify'"
      >
        <img
          src="../assets/project-ss/tutorial-forkify.png"
          class="transition-all duration-300 ease-out"
        />
      </div>
      <div
        class="flex justify-center items-center"
        v-else-if="showFullSize === 'tutorialnatours'"
      >
        <img
          src="../assets/project-ss/tutorial-natours.png"
          class="transition-all duration-300 ease-out"
        />
      </div>
      <div
        class="flex justify-center items-center"
        v-else-if="showFullSize === 'tutorialomnifood'"
      >
        <img
          src="../assets/project-ss/tutorial-omnifood.png"
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

    return { closeFullSize, showFullSize };
  },
};
</script>

<style>
.overlay {
  background-color: #000000b3;
}
</style>
