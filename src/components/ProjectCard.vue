<template>
  <div
    class="flex flex-col justify-between h-full rounded-xl text-slate-100 main-border shadow-xl shadow-[#253331]"
    :id="`el-project-${prjNo}`"
  >
    <div
      class="flex flex-col gap-3 justify-evenly p-4 md:p-8"
      :class="isOdd(prjNo) ? 'z-odd' : 'z-even'"
    >
      <span class="uppercase text-xs tracking-widest font-bold"
        >Project #{{ prjNo }}</span
      >
      <div class="flex justify-between align-middle flex-wrap gap-3">
        <div class="flex h-10 items-center gap-3 p-0 md:p-2 -ml-2 sm:ml-0">
          <img
            v-for="res in prjRes"
            :key="res"
            :src="`../src/assets/learning/${res}-logo.svg`"
            class="grayscale h-7 md:h-8 w-7 md:w-8"
            :title="
              res === 'javascript'
                ? 'JavaScript'
                : res === 'html'
                ? 'HTML5'
                : res === 'vue'
                ? 'Vue'
                : res === 'tailwind'
                ? 'Tailwind'
                : res === 'css'
                ? 'CSS'
                : res === 'nodejs'
                ? 'Node.Js'
                : res === 'threejs'
                ? 'Three.Js'
                : res === 'expressjs'
                ? 'Express'
                : res === 'mongodb'
                ? 'MongoDB'
                : res === 'pug'
                ? 'pug'
                : null
            "
          />
        </div>
        <div class="flex gap-2 items-center -ml-2 sm:ml-0">
          <div v-if="prjNo != 6">
            <a :href="`${ytLink}`" title="View demo on YouTube" target="_blank">
              <YoutubeLogo class="hover:bg-[#f00]" />
            </a>
          </div>
          <div>
            <a
              :href="`${prjLink}`"
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
      <div class="text-xl font-bold mt-2">{{ prjName }}</div>
      <div class="font-semibold text-sm sm:text-base">
        {{ prjDesc }}
      </div>
    </div>
    <div
      class="w-full self-center inline-block z-10 relative rounded-xl -mt-2 md:mt-0 p-2 sm:p-4 md:p-6"
      :class="isOdd(prjNo) ? 'z-odd-img' : 'z-even-img'"
    >
      <img
        :src="`../${prjImg}`"
        alt="Project screenshot"
        class="border-2 border-solid border-[#155b26] rounded-xl cursor-pointer transition-all duration-300 ease-out hover:bg-slate-100 text-center w-full h-full"
        @mouseover="showImageOverlay"
        @mouseleave="hideImageOverlay"
        @click="showFullSize(prjImg)"
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
import { ArrowsPointingOutIcon } from "@heroicons/vue/24/solid";
import GithubLogo from "./GithubLogo.vue";
import YoutubeLogo from "./YoutubeLogo.vue";
import store from "../store";

export default {
  props: {
    prjLink: String,
    ytLink: String,
    prjImg: String,
    prjNo: String,
    prjName: String,
    prjDesc: String,
    prjRes: Array,
  },
  components: {
    ArrowsPointingOutIcon,
    GithubLogo,
    YoutubeLogo,
  },
  setup() {
    function showImageOverlay(e) {
      e.target.classList.add("show-overlay");
    }

    function hideImageOverlay(e) {
      e.target.classList.remove("show-overlay");
    }

    function isOdd(num) {
      return num % 2 !== 0;
    }

    function showFullSize(prjImg) {
      const pngImg = prjImg.split(".")[0] + ".png";
      store.dispatch("showFullSize", pngImg);
    }

    return { showImageOverlay, hideImageOverlay, isOdd, showFullSize };
  },
};
</script>
