<template>
  <div
    class="flex flex-col mt-20 shadow-md w-[85%] sm:w-[95%] ml-6 md:ml-0 sm:ml-2"
    id="el-tutorial-projects"
  >
    <div
      class="bg-gray-900 p-2 text-slate-100 text-center rounded-t-xl main-border"
    >
      <div class="font-bold text-2xl md:text-4xl items-center mb-2">
        <div>Tutorial Projects</div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-4 bg-[#1d2d40] justify-evenly items-center p-4 text-slate-100"
    >
      <div
        class="h-36 w-44 cursor-pointer flex flex-col border-2 p-2 transform transition-all duration-700 ease-linear hover:bg-zinc-900"
        :class="activeTutorial === 1 ? 'activeContainer' : 'notActiveContainer'"
        @click.prevent="activateTutorial(1)"
      >
        <h3 class="text-center font-semibold">Find A Coach</h3>
        <img
          src="../assets/project-ss/tutorial-findcoach.webp"
          alt="Find A Coach tutorial screenshot"
          class="w-full h-full transform transition-all duration-300 ease-linear"
          :class="activeTutorial === 1 ? 'activeImage' : 'notActiveImage'"
        />
      </div>
      <div
        class="h-36 w-44 cursor-pointer flex flex-col border-2 p-2 transform transition-all duration-700 ease-linear hover:bg-zinc-900"
        :class="activeTutorial === 2 ? 'activeContainer' : 'notActiveContainer'"
        @click.prevent="activateTutorial(2)"
      >
        <h3 class="text-center font-semibold">Natours</h3>
        <img
          src="../assets/project-ss/tutorial-natours.webp"
          alt="Natours tutorial screenshot"
          class="w-full h-full transform transition-all duration-300 ease-linear"
          :class="activeTutorial === 2 ? 'activeImage' : 'notActiveImage'"
        />
      </div>
      <div
        class="h-36 w-44 cursor-pointer flex flex-col border-2 p-2 transform transition-all duration-700 ease-linear hover:bg-zinc-900"
        :class="activeTutorial === 3 ? 'activeContainer' : 'notActiveContainer'"
        @click.prevent="activateTutorial(3)"
      >
        <h3 class="text-center font-semibold">Forkify</h3>
        <img
          src="../assets/project-ss/tutorial-forkify.webp"
          alt="Forkify tutorial screenshot"
          class="w-full h-full transform transition-all duration-300 ease-linear"
          :class="activeTutorial === 3 ? 'activeImage' : 'notActiveImage'"
        />
      </div>
      <div
        class="h-36 w-44 cursor-pointer flex flex-col border-2 p-2 transform transition-all duration-700 ease-linear hover:bg-zinc-900"
        :class="activeTutorial === 4 ? 'activeContainer' : 'notActiveContainer'"
        @click.prevent="activateTutorial(4)"
      >
        <h3 class="text-center font-semibold">Omnifood</h3>
        <img
          src="../assets/project-ss/tutorial-omnifood.webp"
          alt="Omnifood tutorial screenshot"
          class="w-full h-full transform transition-all duration-300 ease-linear"
          :class="activeTutorial === 4 ? 'activeImage' : 'notActiveImage'"
        />
      </div>
    </div>
    <div
      class="bg-gray-900 p-2 text-slate-100 rounded-b-xl h-fit lg:h-44 text-start main-border text-base"
    >
      <div v-if="activeTutorial === null">
        <p class="p-2 text-base">
          Tutorial Projects completed as part of the courses which are listed in
          the completed courses section.
        </p>
      </div>
      <div v-if="activeTutorial === 1" class="p-2">
        <div class="flex align-middle items-center justify-between">
          <div class="text-lg font-bold">
            <span class="font-normal text-base">Tutorial #1:</span> Find A Coach
          </div>
          <div class="flex gap-4" title="View full-size screenshot">
            <ArrowsPointingOutIcon
              class="h-8 infoIcon"
              @click="showFullSize('tutorialcoach')"
            />
            <div>
              <a
                href="https://github.com/rwgr/Tutorial-Find-A-Coach"
                title="View project on GitHub"
                target="_blank"
              >
                <GithubLogo
                  class="hover:fill-zinc-800 dark:hover:fill-gray-900"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="mt-2 mb-2 border-b-2 border-slate-100 w-[95%]"></div>
        <p>
          Tutorial project completed as part of Vue Udemy Course, Find A Coach
          web app. Project #4 above is an expanded, remade version of this
          tutorial project, with additional features added.
        </p>
      </div>

      <div v-if="activeTutorial === 2" class="p-2">
        <div class="flex align-middle items-center justify-between">
          <div class="text-lg font-bold">
            <span class="font-normal text-base">Tutorial #2:</span> Natours
          </div>
          <div class="flex gap-4" title="View full-size screenshot">
            <ArrowsPointingOutIcon
              class="h-8 infoIcon"
              @click="showFullSize('tutorialnatours')"
            />
            <div>
              <a
                href="https://github.com/rwgr/Tutorial-Natours"
                title="View project on GitHub"
                target="_blank"
              >
                <GithubLogo
                  class="hover:fill-zinc-800 dark:hover:fill-gray-900"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="mt-2 mb-2 border-b-2 border-slate-100 w-[95%]"></div>
        <p>
          Tutorial project completed as part of Node.js Udemy Course, a tour
          booking site. This is a RESTful API and web app with authentication,
          Node.js security and payments via Stripe. Utilises: Express, MongoDB
          and Mongoose.
        </p>
      </div>

      <div v-if="activeTutorial === 3" class="p-2">
        <div class="flex align-middle items-center justify-between">
          <div class="text-lg font-bold">
            <span class="font-normal text-base">Tutorial #3:</span> Forkify
          </div>
          <div class="flex gap-4" title="View full-size screenshot">
            <ArrowsPointingOutIcon
              class="h-8 infoIcon"
              @click="showFullSize('tutorialforkify')"
            />
            <div>
              <a
                href="https://github.com/rwgr/Tutorial-Forkify"
                title="View project on GitHub"
                target="_blank"
              >
                <GithubLogo
                  class="hover:fill-zinc-800 dark:hover:fill-gray-900"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="mt-2 mb-2 border-b-2 border-slate-100 w-[95%]"></div>
        <p>
          Tutorial project completed as part of a JavaScript Udemy course. Web
          application connects to a Public API allowing users to search for
          recipes. Users can also upload their own recipes.
        </p>
      </div>

      <div v-if="activeTutorial === 4" class="p-2">
        <div class="flex align-middle items-center justify-between">
          <div class="text-lg font-bold">
            <span class="font-normal text-base">Tutorial #4:</span> Omnifood
          </div>
          <div class="flex gap-4" title="View full-size screenshot">
            <ArrowsPointingOutIcon
              class="h-8 infoIcon"
              @click="showFullSize('tutorialomnifood')"
            />

            <div>
              <a
                href="https://github.com/rwgr/Tutorial-Omnifood"
                title="View project on GitHub"
                target="_blank"
              >
                <GithubLogo
                  class="hover:fill-zinc-800 dark:hover:fill-gray-900"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="mt-2 mb-2 border-b-2 border-slate-100 w-[95%]"></div>
        <p>
          Tutorial project completed as part of HTML & CSS Udemy Course. This is
          a responsive webpage built using modern design principles, HTML,
          JavaScript and CSS.
        </p>
      </div>
    </div>
  </div>
  <div
    id="border5"
    class="border-b-2 mt-20 border-slate-100 w-[95%] ml-10 sm:ml-8 md:ml-0"
  ></div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import GithubLogo from "../components/GithubLogo.vue";
import { ArrowsPointingOutIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    GithubLogo,
    ArrowsPointingOutIcon,
  },
  setup() {
    const store = useStore();
    const activeTutorial = computed(() => store.getters.getActiveTutorial);

    function activateTutorial(number) {
      store.dispatch("activateTutorial", number);
    }
    function showFullSize(prjImg) {
      store.dispatch("showFullSize", prjImg);
    }
    return {
      activeTutorial,
      activateTutorial,
      showFullSize,
    };
  },
};
</script>
