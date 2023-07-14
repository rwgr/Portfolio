<template>
  <main class="flex-grow w-full">
    <div
      class="grid grid-cols-11 mt-10 max-h-fit gap-4 bg-[#318f70] mx-auto max-w-3xl min-w-3xl sm:max-w-5xl sm:min-w-5xl shadow-2xl shadow-gray-900"
    >
      <side-bar />
      <div class="col-span-5 flex flex-col gap-10 justify-center min-h-full">
        <div
          id="main-view"
          class="text-slate-100 flex flex-col items-center grow justify-start transition-all duration-300 ease-linear overflow-y-hidden overflow-x-hidden h-96 -ml-6 relative"
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

    // Main view start animation
    async function appear() {
      try {
        const tl = gsap.timeline();
        gsap.registerPlugin(ScrollTrigger);

        gsap.to("#intro9", {
          scrollTrigger: {
            trigger: "#intro9",
            start: "end center",
            scroller: "#main-view",
            toggleActions: "none play none none",
            onLeave: () => {
              const contact = document.querySelector("#intro-contact");
              contact.classList.remove("opacity-0");
            },
          },
          duration: 1,
          opacity: 0,
          x: 150,
        });

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
          },
          "-=1.5"
        );

        tl.from(
          "#intro9",
          {
            duration: 1,
            opacity: 0,
            ease: "power3",
            onComplete: () => {
              const main = document.querySelector("#main-view");
              main.classList.remove("overflow-y-hidden");
              main.classList.add("overflow-y-scroll");
            },
          },
          "-=1"
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

        tl.to("#intro9", {
          duration: 4,
          opacity: 0,
          ease: "slow.out",
        });
      } catch (err) {
        console.err(err);
        alert(err, "Please try again");
      }
    }

    onMounted(() => {
      appear();
    });
    return { showFullSize };
  },
};
</script>

<style scroped>
::-webkit-scrollbar {
  width: 0.2rem;
}

::-webkit-scrollbar-track {
  background: #383838;
}

::-webkit-scrollbar-thumb {
  background: white;
}
</style>
