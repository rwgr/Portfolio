<template>
  <div
    class="flex flex-col items-center gap-y-20 w-[95%] mt-20 px-6 ml-6 sm:ml-0"
  >
    <div
      class="flex flex-col justify-between h-full rounded-xl text-slate-100 main-border shadow-xl shadow-[#253331] bg-gray-900"
      id="el-project-1"
    >
      <div
        class="flex flex-col gap-3 justify-evenly p-4 md:p-8"
        :class="isOdd(1) ? 'z-odd' : 'z-even'"
      >
        <span class="uppercase text-xs tracking-widest font-bold"
          >Project #1</span
        >
        <div class="flex justify-between align-middle flex-wrap gap-3">
          <div class="flex h-10 items-center gap-3 p-0 md:p-2 -ml-2 sm:ml-0">
            <img
              src="../assets/learning/html-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="HTML5"
            />
            <img
              src="../assets/learning/css-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="CSS"
            />
            <img
              src="../assets/learning/javascript-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="JavaScript"
            />
            <img
              src="../assets/learning/vue-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="Vue"
            />
          </div>
          <div class="flex gap-2 items-center -ml-2 sm:ml-0">
            <div>
              <a
                href="https://www.youtube.com/watch?v=iwf1tJdDMwc"
                title="View demo on YouTube"
                target="_blank"
              >
                <YoutubeLogo class="hover:bg-[#f00]" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/rwgr/Local-Crime-Checker"
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
        <div class="text-xl font-bold mt-2">Local Crime Checker</div>
        <div class="font-semibold text-sm sm:text-base">
          Web application utilising the UK Police public crime API. Allows a
          user to view crime data for an area, and offers comparisons with
          previous months or years allowing a user to see trends and changes in
          crime within the area specified.
        </div>
      </div>
      <div
        class="w-full self-center inline-block z-10 relative rounded-xl -mt-2 md:mt-0 p-2 sm:p-4 md:p-6"
        :class="isOdd(1) ? 'z-odd-img' : 'z-even-img'"
      >
        <img
          src="../assets/project-ss/local-crime.webp"
          alt="Project screenshot"
          class="border-2 border-solid border-[#155b26] rounded-xl cursor-pointer transition-all duration-300 ease-out hover:bg-slate-100 text-center w-full h-full"
          @mouseover="showImageOverlay"
          @mouseleave="hideImageOverlay"
          @click="showFullSize('localcrime')"
        />

        <div
          class="absolute top-1/3 right-1/2 -translate-x-1/2 -translate-y-1/2 text-white dark:text-green-500 -z-10 text-xl font-bold flex gap-2 align-middle justify-center h-min w-80 translate-x-1/2 translate-y-1/4 sm:translate-y-1/2 p-2"
        >
          <ArrowsPointingOutIcon class="h-10" />
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-between h-full rounded-xl text-slate-100 main-border shadow-xl shadow-[#253331] bg-[#0f2e29]"
      id="el-project-2"
    >
      <div
        class="flex flex-col gap-3 justify-evenly p-4 md:p-8"
        :class="isOdd(2) ? 'z-odd' : 'z-even'"
      >
        <span class="uppercase text-xs tracking-widest font-bold"
          >Project #2</span
        >
        <div class="flex justify-between align-middle flex-wrap gap-3">
          <div class="flex h-10 items-center gap-3 p-0 md:p-2 -ml-2 sm:ml-0">
            <img
              src="../assets/learning/html-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="HTML5"
            />
            <img
              src="../assets/learning/css-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="CSS"
            />
            <img
              src="../assets/learning/javascript-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="JavaScript"
            />
            <img
              src="../assets/learning/vue-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="Vue"
            />
          </div>
          <div class="flex gap-2 items-center -ml-2 sm:ml-0">
            <div>
              <a
                href="https://www.youtube.com/watch?v=xIU1O3Cqcw4"
                title="View demo on YouTube"
                target="_blank"
              >
                <YoutubeLogo class="hover:bg-[#f00]" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/rwgr/Book-Collection-Manager"
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
        <div class="text-xl font-bold mt-2">Book Collection Manager</div>
        <div class="font-semibold text-sm sm:text-base">
          Create Read Update & Delete (CRUD) application designed to simplify
          the organisation of a user's book collection. Utilising Vue Router for
          routing, Vuex for state management, Vuelidate for form validation and
          the Open Library API for adding books via their identifiers.
        </div>
      </div>
      <div
        class="w-full self-center inline-block z-10 relative rounded-xl -mt-2 md:mt-0 p-2 sm:p-4 md:p-6"
        :class="isOdd(2) ? 'z-odd-img' : 'z-even-img'"
      >
        <img
          src="../assets/project-ss/book-collection.webp"
          alt="Project screenshot"
          class="border-2 border-solid border-[#155b26] rounded-xl cursor-pointer transition-all duration-300 ease-out hover:bg-slate-100 text-center w-full h-full"
          @mouseover="showImageOverlay"
          @mouseleave="hideImageOverlay"
          @click="showFullSize('bookcollection')"
        />

        <div
          class="absolute top-1/3 right-1/2 -translate-x-1/2 -translate-y-1/2 text-white dark:text-green-500 -z-10 text-xl font-bold flex gap-2 align-middle justify-center h-min w-80 translate-x-1/2 translate-y-1/4 sm:translate-y-1/2 p-2"
        >
          <ArrowsPointingOutIcon class="h-10" />
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-between h-full rounded-xl text-slate-100 main-border shadow-xl shadow-[#253331] bg-gray-900"
      id="el-project-3"
    >
      <div
        class="flex flex-col gap-3 justify-evenly p-4 md:p-8"
        :class="isOdd(3) ? 'z-odd' : 'z-even'"
      >
        <span class="uppercase text-xs tracking-widest font-bold"
          >Project #3</span
        >
        <div class="flex justify-between align-middle flex-wrap gap-3">
          <div class="flex h-10 items-center gap-3 p-0 md:p-2 -ml-2 sm:ml-0">
            <img
              src="../assets/learning/html-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="HTML5"
            />
            <img
              src="../assets/learning/css-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="CSS"
            />
            <img
              src="../assets/learning/javascript-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="JavaScript"
            />
            <img
              src="../assets/learning/vue-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="Vue"
            />
          </div>
          <div class="flex gap-2 items-center -ml-2 sm:ml-0">
            <div>
              <a
                href="https://www.youtube.com/watch?v=M_DW04ho_G4"
                title="View demo on YouTube"
                target="_blank"
              >
                <YoutubeLogo class="hover:bg-[#f00]" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/rwgr/ecoElectronics"
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
        <div class="text-xl font-bold mt-2">
          ecoElectronics Store Front Website
        </div>
        <div class="font-semibold text-sm sm:text-base">
          Mock-up of a store front for a conceptual environmentally friendly
          online computer retailer using modern web design principles.
        </div>
      </div>
      <div
        class="w-full self-center inline-block z-10 relative rounded-xl -mt-2 md:mt-0 p-2 sm:p-4 md:p-6"
        :class="isOdd(3) ? 'z-odd-img' : 'z-even-img'"
      >
        <img
          src="../assets/project-ss/ecoelectronics.webp"
          alt="Project screenshot"
          class="border-2 border-solid border-[#155b26] rounded-xl cursor-pointer transition-all duration-300 ease-out hover:bg-slate-100 text-center w-full h-full"
          @mouseover="showImageOverlay"
          @mouseleave="hideImageOverlay"
          @click="showFullSize('ecoelectronics')"
        />

        <div
          class="absolute top-1/3 right-1/2 -translate-x-1/2 -translate-y-1/2 text-white dark:text-green-500 -z-10 text-xl font-bold flex gap-2 align-middle justify-center h-min w-80 translate-x-1/2 translate-y-1/4 sm:translate-y-1/2 p-2"
        >
          <ArrowsPointingOutIcon class="h-10" />
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-between h-full rounded-xl text-slate-100 main-border shadow-xl shadow-[#253331] bg-[#0f2e29]"
      id="el-project-4"
    >
      <div
        class="flex flex-col gap-3 justify-evenly p-4 md:p-8"
        :class="isOdd(4) ? 'z-odd' : 'z-even'"
      >
        <span class="uppercase text-xs tracking-widest font-bold"
          >Project #4</span
        >
        <div class="flex justify-between align-middle flex-wrap gap-3">
          <div class="flex h-10 items-center gap-3 p-0 md:p-2 -ml-2 sm:ml-0">
            <img
              src="../assets/learning/nodejs-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="Node.Js"
            />
            <img
              src="../assets/learning/expressjs-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="Express"
            />
            <img
              src="../assets/learning/mongodb-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="MongoDB"
            />
            <img
              src="../assets/learning/pug-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="Pug"
            />
          </div>
          <div class="flex gap-2 items-center -ml-2 sm:ml-0">
            <div>
              <a
                href="https://www.youtube.com/watch?v=Q7wpximrd9Q"
                title="View demo on YouTube"
                target="_blank"
              >
                <YoutubeLogo class="hover:bg-[#f00]" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/rwgr/Full-Stack-Forum"
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
        <div class="text-xl font-bold mt-2">Full Stack Forum</div>
        <div class="font-semibold text-sm sm:text-base">
          A basic full stack forum project. Users can sign-up and login allowing
          them to create posts and leave comments. Users can edit and delete
          their own posts and comments, change their password and view other
          users' posts and comments.
        </div>
      </div>
      <div
        class="w-full self-center inline-block z-10 relative rounded-xl -mt-2 md:mt-0 p-2 sm:p-4 md:p-6"
        :class="isOdd(4) ? 'z-odd-img' : 'z-even-img'"
      >
        <img
          src="../assets/project-ss/fullstack-forum.webp"
          alt="Project screenshot"
          class="border-2 border-solid border-[#155b26] rounded-xl cursor-pointer transition-all duration-300 ease-out hover:bg-slate-100 text-center w-full h-full"
          @mouseover="showImageOverlay"
          @mouseleave="hideImageOverlay"
          @click="showFullSize('fullstackforum')"
        />

        <div
          class="absolute top-1/3 right-1/2 -translate-x-1/2 -translate-y-1/2 text-white dark:text-green-500 -z-10 text-xl font-bold flex gap-2 align-middle justify-center h-min w-80 translate-x-1/2 translate-y-1/4 sm:translate-y-1/2 p-2"
        >
          <ArrowsPointingOutIcon class="h-10" />
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-between h-full rounded-xl text-slate-100 main-border shadow-xl shadow-[#253331] bg-gray-900"
      id="el-project-5"
    >
      <div
        class="flex flex-col gap-3 justify-evenly p-4 md:p-8"
        :class="isOdd(5) ? 'z-odd' : 'z-even'"
      >
        <span class="uppercase text-xs tracking-widest font-bold"
          >Project #5</span
        >
        <div class="flex justify-between align-middle flex-wrap gap-3">
          <div class="flex h-10 items-center gap-3 p-0 md:p-2 -ml-2 sm:ml-0">
            <img
              src="../assets/learning/html-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="HTML5"
            />
            <img
              src="../assets/learning/css-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="CSS"
            />
            <img
              src="../assets/learning/javascript-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="JavaScript"
            />
            <img
              src="../assets/learning/vue-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="Vue"
            />
          </div>
          <div class="flex gap-2 items-center -ml-2 sm:ml-0">
            <div>
              <a
                href="https://www.youtube.com/watch?v=Vb4FmRDL3KA"
                title="View demo on YouTube"
                target="_blank"
              >
                <YoutubeLogo class="hover:bg-[#f00]" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/rwgr/Coach-Finder"
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
        <div class="text-xl font-bold mt-2">Coach Finder</div>
        <div class="font-semibold text-sm sm:text-base">
          Web application for facilitating contact between coaches advertising
          their services and their customers. Users can contact any coach via
          using the in-built messaging system. A user can also register as a
          coach, and receive messages themselves. (This project is a
          continuation of a tutorial project completed as part of a Udemy
          course, with additional features added).
        </div>
      </div>
      <div
        class="w-full self-center inline-block z-10 relative rounded-xl -mt-2 md:mt-0 p-2 sm:p-4 md:p-6"
        :class="isOdd(5) ? 'z-odd-img' : 'z-even-img'"
      >
        <img
          src="../assets/project-ss/coach-finder.webp"
          alt="Project screenshot"
          class="border-2 border-solid border-[#155b26] rounded-xl cursor-pointer transition-all duration-300 ease-out hover:bg-slate-100 text-center w-full h-full"
          @mouseover="showImageOverlay"
          @mouseleave="hideImageOverlay"
          @click="showFullSize('coachfinder')"
        />

        <div
          class="absolute top-1/3 right-1/2 -translate-x-1/2 -translate-y-1/2 text-white dark:text-green-500 -z-10 text-xl font-bold flex gap-2 align-middle justify-center h-min w-80 translate-x-1/2 translate-y-1/4 sm:translate-y-1/2 p-2"
        >
          <ArrowsPointingOutIcon class="h-10" />
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-between h-full rounded-xl text-slate-100 main-border shadow-xl shadow-[#253331] bg-[#0f2e29]"
      id="el-project-6"
    >
      <div
        class="flex flex-col gap-3 justify-evenly p-4 md:p-8"
        :class="isOdd(6) ? 'z-odd' : 'z-even'"
      >
        <span class="uppercase text-xs tracking-widest font-bold"
          >Project #6</span
        >
        <div class="flex justify-between align-middle flex-wrap gap-3">
          <div class="flex h-10 items-center gap-3 p-0 md:p-2 -ml-2 sm:ml-0">
            <img
              src="../assets/learning/vue-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="Vue"
            />
            <img
              src="../assets/learning/tailwind-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="Tailwind CSS"
            />
            <img
              src="../assets/learning/threejs-logo.svg"
              class="grayscale h-7 md:h-8 w-7 md:w-8"
              title="Three.Js"
            />
          </div>
          <div class="flex gap-2 items-center -ml-2 sm:ml-0">
            <div>
              <a
                href="https://github.com/rwgr/Portfolio"
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
        <div class="text-xl font-bold mt-2">Portfolio</div>
        <div class="font-semibold text-sm sm:text-base">
          This portfolio project, utilises Tailwind CSS for styling and Three.js
          to create an animated background.
        </div>
      </div>
      <div
        class="w-full self-center inline-block z-10 relative rounded-xl -mt-2 md:mt-0 p-2 sm:p-4 md:p-6"
        :class="isOdd(6) ? 'z-odd-img' : 'z-even-img'"
      >
        <img
          src="../assets/project-ss/portfolio.webp"
          alt="Project screenshot"
          class="border-2 border-solid border-[#155b26] rounded-xl cursor-pointer transition-all duration-300 ease-out hover:bg-slate-100 text-center w-full h-full"
          @mouseover="showImageOverlay"
          @mouseleave="hideImageOverlay"
          @click="showFullSize('portfolio')"
        />

        <div
          class="absolute top-1/3 right-1/2 -translate-x-1/2 -translate-y-1/2 text-white dark:text-green-500 -z-10 text-xl font-bold flex gap-2 align-middle justify-center h-min w-80 translate-x-1/2 translate-y-1/4 sm:translate-y-1/2 p-2"
        >
          <ArrowsPointingOutIcon class="h-10" />
        </div>
      </div>
    </div>
  </div>
  <div
    id="border4"
    class="border-b-2 mt-20 border-slate-100 w-[95%] ml-10 sm:ml-8 md:ml-0"
  ></div>
</template>

<script>
import { ArrowsPointingOutIcon } from "@heroicons/vue/24/solid";
import GithubLogo from "./GithubLogo.vue";
import YoutubeLogo from "./YoutubeLogo.vue";
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ref } from "vue";
import store from "../store";
export default {
  components: {
    ArrowsPointingOutIcon,
    GithubLogo,
    YoutubeLogo,
  },
  data() {
    return {
      prj1Res: ["html", "css", "javascript", "vue"],
      prj2Res: ["html", "css", "javascript", "vue"],
      prj3Res: ["html", "css", "javascript", "vue"],
      prj4Res: ["nodejs", "expressjs", "mongodb", "pug"],
      prj5Res: ["html", "css", "javascript", "vue"],
      prj6Res: ["vue", "threejs", "tailwind"],
    };
  },
  setup() {
    const loading = ref(true);

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
      store.dispatch("showFullSize", prjImg);
    }

    async function scrollAnimation() {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.defaults({
        toggleActions: "play none resume none",
        // markers: true,
        scroller: "#main-view",
      });

      gsap.from("#el-project-1", {
        scrollTrigger: {
          trigger: "#el-project-1",
          start: "top center",
        },
        duration: 3,
        opacity: 0,
        ease: "back.out",
      });
      gsap.from("#el-project-2", {
        scrollTrigger: {
          trigger: "#el-project-2",
          start: "60px center",
        },
        duration: 3,
        opacity: 0,
        ease: "back.out",
      });
      gsap.from("#el-project-3", {
        scrollTrigger: {
          trigger: "#el-project-3",
          start: "60px center",
        },
        duration: 3,
        opacity: 0,
        ease: "back.out",
      });
      gsap.from("#el-project-4", {
        scrollTrigger: {
          trigger: "#el-project-4",
          start: "60px center",
        },
        duration: 3,
        opacity: 0,
        ease: "back.out",
      });
      gsap.from("#el-project-5", {
        scrollTrigger: {
          trigger: "#el-project-5",
          start: "60px center",
        },
        duration: 3,
        opacity: 0,
        ease: "back.out",
      });
      gsap.from("#el-project-6", {
        scrollTrigger: {
          trigger: "#el-project-6",
          start: "60px center",
        },
        duration: 3,
        opacity: 0,
        ease: "back.out",
      });
      gsap.from("#border4", {
        scrollTrigger: {
          trigger: "#border4",
          start: "-250px center",
        },
        duration: 1,
        opacity: 0,
      });
      gsap.from("#el-tutorial-projects", {
        scrollTrigger: {
          trigger: "#el-tutorial-projects",
          start: "60px center",
        },
        duration: 3,
        opacity: 0,
        ease: "back.out",
      });
      gsap.from("#border5", {
        scrollTrigger: {
          trigger: "#border5",
          start: "-350px center",
        },
        duration: 3,
        opacity: 0,
      });
    }

    onMounted(() => {
      scrollAnimation();
    });

    return { showImageOverlay, hideImageOverlay, loading, isOdd, showFullSize };
  },
};
</script>
