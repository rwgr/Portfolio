<template>
  <main class="flex flex-grow w-full min-w-[33.5em]">
    <div
      class="grid grid-cols-11 mt-10 max-h-fit gap-4 bg-[#318f70] mx-auto max-w-3xl min-w-3xl sm:max-w-5xl sm:min-w-5xl shadow-2xl shadow-gray-900"
      v-if="!mediaQuerySize"
    >
      <side-bar />
      <div class="col-span-5 flex flex-col gap-10 justify-center min-h-full">
        <div
          id="main-view"
          class="text-slate-100 flex flex-col items-center grow justify-start transition-all duration-300 ease-linear h-96 -ml-6 relative overflow-y-scroll overflow-x-hidden scrollbar"
        >
          <BackgroundControls />
          <IntroSection />
          <SkillsSection />
          <ProjectsOverview />
          <ProjectsList />
          <TutorialProjects />
          <ContactSection />
        </div>
      </div>
      <div class="col-span-5 -ml-4">
        <MyInfoSection />
        <LearningList />
      </div>
      <transition name="fade" appear>
        <FullSizePhoto
          class="transition-all ease-out duration-700"
          v-if="showFullSize"
        />
      </transition>
    </div>
    <div
      v-if="mediaQuerySize"
      class="mt-10 flex flex-col bg-[#318f70] shadow-2xl shadow-gray-900 max-w-[640px]"
    >
      <div class="flex flex-col gap-10 w-[400px]">
        <div
          id="main-view"
          class="text-slate-100 flex flex-col items-center grow justify-start transition-all duration-300 ease-linear h-screen relative overflow-y-scroll overflow-x-hidden scrollbar self-start w-[95%]"
        >
          <MyInfoSection mediaQuery="mediaQuerySize" />
          <LearningList />
          <SkillsSection class="-ml-6" />
          <ProjectsOverview class="-ml-6" />
          <ProjectsList />
          <TutorialProjects class="-ml-6" />
          <ContactSection class="-ml-6" />
        </div>
      </div>
      <transition name="fade" appear>
        <FullSizePhoto
          class="transition-all ease-out duration-700"
          v-if="showFullSize"
        />
      </transition>
    </div>
  </main>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import MyInfoSection from "../sections/MyInfoSection.vue";
import SideBar from "../sections/SideBar.vue";
import LearningList from "../sections/LearningList.vue";
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import ProjectsList from "../sections/ProjectsList.vue";
import TutorialProjects from "../sections/TutorialProjects.vue";
import ProjectsOverview from "../sections/ProjectsOverview.vue";
import ContactSection from "../sections/ContactSection.vue";

import BackgroundControls from "../sections/BackgroundControls.vue";
import IntroSection from "../sections/IntroSection.vue";
import SkillsSection from "../sections/SkillsSection.vue";
import FullSizePhoto from "../components/FullsizePhoto.vue";

export default {
  components: {
    MyInfoSection,
    SideBar,
    LearningList,
    ProjectsList,
    TutorialProjects,
    ProjectsOverview,
    ContactSection,
    BackgroundControls,
    IntroSection,
    SkillsSection,
    FullSizePhoto,
  },
  setup() {
    const store = useStore();
    const showFullSize = computed(() => store.getters.getShowFullSize);
    const mediaQuerySize = computed(() => store.getters.getMediaQuerySize);

    // less than 600px use a 400px-wide mobile-like layout.
    // 600px and 999px use a 600px-wide tablet-like layout.
    // Greater than 1,000px use a 1000px-wide desktop-like layout.

    // Main view start animation
    async function appear() {
      try {
        const tl = gsap.timeline();
        gsap.registerPlugin(ScrollTrigger);

        tl.from("#intro1", {
          duration: 2,
          opacity: 0,
          y: -110,
          ease: "back",
        });

        tl.from(
          "#intro2",
          {
            duration: 1,
            opacity: 0,
            ease: "back",
          },
          "-=1"
        );

        tl.from(
          "#el-myinfo",
          {
            duration: 1.5,
            x: 950,
            ease: "back.inOut",
          },
          "-=1"
        );

        tl.from(
          "#border1",
          {
            duration: 1,
            opacity: 0,
            ease: "back",
          },
          "-=1"
        );

        tl.from(
          "#intro4",
          {
            duration: 1,
            opacity: 0,
            ease: "back",
          },
          "-=0.5"
        );

        tl.from(
          ".learning-grid",
          {
            duration: 0.5,
            opacity: 0,
            ease: "power3.inOut",

            scale: 0.1,
            stagger: {
              amount: 0.5,
              grid: "auto",
              from: "end",
            },
          },
          "-=0.5"
        );

        tl.from(
          "#el-learning",
          {
            duration: 1.5,
            opacity: 100,
            y: 500,
            ease: "bounce.out",
          },
          "-=0.5"
        );

        tl.from(
          "#border2",
          {
            duration: 1,
            opacity: 0,
            ease: "back",
          },
          "-=1"
        );

        tl.from(
          "#intro7",
          {
            duration: 1,
            opacity: 0,
            ease: "back",
          },
          "-=0.5"
        );

        tl.to(
          "#intro1",
          {
            duration: 2,
            opacity: 0,
            y: -150,
            ease: "back",
          },
          "-=2.5"
        );

        tl.to(
          "#intro2",
          {
            duration: 1,
            y: -30,
            ease: "power1",
            onComplete: () => {
              const main = document.querySelector("#main-view");
              main.classList.remove("overflow-y-hidden");
              main.classList.add("overflow-y-scroll");
            },
          },
          "-=1.5"
        );

        tl.from(
          "#el-sidebar",
          {
            duration: 1.5,
            opacity: 100,
            y: -1000,
            ease: "power2.out",
          },
          "-=1.5"
        );
      } catch (err) {
        console.err(err);
        alert(err, "Please try again");
      }
    }

    onMounted(() => {
      appear();

      // Media query to render app for mobile sizes, 640px same as tailwind "sm"
      let mql = window.matchMedia("(max-width: 640px)").matches;
      store.dispatch("setMediaQuerySize", mql);

      if (!mql) {
        const learningListSelect = document.querySelector("#el-learning");
        learningListSelect.classList.add("learning-scrollbar");
      }

      if (mql) {
        const skillsSectionSelect = document.querySelector("#intro5");
        skillsSectionSelect.classList.add("mobile-margin");

        // const infoSectionSelect = document.querySelector("#el-myinfo");
        // infoSectionSelect.classList.add("mobile-padding");
      }
    });
    return { showFullSize, mediaQuerySize };
  },
};
</script>
