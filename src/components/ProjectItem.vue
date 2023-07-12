<template>
  <div
    class="flex flex-col justify-between h-full rounded-xl text-slate-100 main-border shadow-xl shadow-[#253331]"
    :id="`el-project-${prjNo}`"
    :class="isOdd(prjNo) ? 'z-odd' : 'z-even'"
  >
    <div class="flex flex-col gap-3 justify-evenly p-4 md:p-8">
      <span class="uppercase text-xs tracking-widest font-bold"
        >Project #{{ prjNo }}</span
      >
      <div class="flex justify-between align-middle flex-wrap gap-3">
        <ul class="flex h-10 items-center gap-3 p-0 md:p-2 -ml-2 sm:ml-0">
          <li v-for="skill in prjSkills" :key="skill">
            <img
              :src="skillLogo(skill)"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              :title="skill"
            />
          </li>
        </ul>
        <div class="flex gap-2 items-center -ml-2 sm:ml-0">
          <div v-if="prjDemo !== 'noDemo'">
            <a :href="prjDemo" title="View demo on YouTube" target="_blank">
              <YoutubeLogo class="hover:bg-[#f00]" />
            </a>
          </div>
          <div v-else></div>
          <div>
            <a :href="prjCode" title="View project on GitHub" target="_blank">
              <GithubLogo
                class="hover:fill-zinc-800 dark:hover:fill-gray-900"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="text-xl font-bold mt-2">{{ prjTitle }}</div>
      <div class="font-semibold text-sm sm:text-base">
        {{ prjDesc }}
      </div>
    </div>
    <div
      class="w-full self-center inline-block z-10 relative rounded-xl -mt-2 md:mt-0 p-2 sm:p-4 md:p-6"
    >
      <img
        :src="prjImg"
        alt="Project screenshot"
        class="border-2 border-solid border-[#155b26] rounded-xl cursor-pointer transition-all duration-300 ease-out hover:bg-slate-100 text-center w-full h-full"
        @mouseover="showImageOverlay"
        @mouseleave="hideImageOverlay"
        @click="showFullSize(prjTitle)"
      />

      <div
        class="absolute top-1/3 right-1/2 -translate-x-1/2 -translate-y-1/2 text-white dark:text-green-500 -z-10 text-xl font-bold flex gap-2 align-middle justify-center h-min w-80 translate-x-1/2 translate-y-1/4 sm:translate-y-1/2 p-2"
      >
        <ArrowsPointingOutIcon class="h-10" />
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import { ArrowsPointingOutIcon } from "@heroicons/vue/24/solid";
import GithubLogo from "./GithubLogo.vue";
import YoutubeLogo from "./YoutubeLogo.vue";
import htmlLogo from "../assets/learning/html-logo.svg";
import cssLogo from "../assets/learning/css-logo.svg";
import javascriptLogo from "../assets/learning/javascript-logo.svg";
import vueLogo from "../assets/learning/vue-logo.svg";
import nodejsLogo from "../assets/learning/nodejs-logo.svg";
import expressjsLogo from "../assets/learning/expressjs-logo.svg";
import mongodbLogo from "../assets/learning/mongodb-logo.svg";
import threejsLogo from "../assets/learning/threejs-logo.svg";
import tailwindLogo from "../assets/learning/tailwind-logo.svg";
import pugLogo from "../assets/learning/pug-logo.svg";

export default {
  components: {
    ArrowsPointingOutIcon,
    GithubLogo,
    YoutubeLogo,
  },
  props: {
    prjSkills: Array,
    prjNo: String,
    prjTitle: String,
    prjDesc: String,
    prjImg: String,
    prjDemo: String,
    prjCode: String,
  },

  setup() {
    function isOdd(num) {
      return num % 2 !== 0;
    }

    function showFullSize(prjImg) {
      console.log(prjImg);
      const fullsizeImage = prjImg.replace(/\s/g, "").toLowerCase();
      store.dispatch("showFullSize", fullsizeImage);
      console.log(fullsizeImage);
    }

    function showImageOverlay(e) {
      e.target.classList.add("show-overlay");
    }

    function hideImageOverlay(e) {
      e.target.classList.remove("show-overlay");
    }

    function skillLogo(skill) {
      return skill === "HTML"
        ? htmlLogo
        : skill === "CSS"
        ? cssLogo
        : skill === "JavaScript"
        ? javascriptLogo
        : skill === "Vue"
        ? vueLogo
        : skill === "NodeJs"
        ? nodejsLogo
        : skill === "ExpressJs"
        ? expressjsLogo
        : skill === "MongoDB"
        ? mongodbLogo
        : skill === "Pug"
        ? pugLogo
        : skill === "ThreeJs"
        ? threejsLogo
        : skill === "Tailwind"
        ? tailwindLogo
        : "";
    }

    return {
      isOdd,
      showFullSize,
      showImageOverlay,
      hideImageOverlay,
      htmlLogo,
      cssLogo,
      javascriptLogo,
      vueLogo,
      nodejsLogo,
      expressjsLogo,
      mongodbLogo,
      pugLogo,
      threejsLogo,
      tailwindLogo,
      skillLogo,
    };
  },
};
</script>
