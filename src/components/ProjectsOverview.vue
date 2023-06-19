<template>
  <div
    id="el-proj-overview"
    class="flex flex-col items-center gap-5 w-[95%] py-2"
  >
    <div>
      <div
        id="intro7"
        class="pointer-events-none mt-5 text-center text-2xl sm:text-4xl ml-6 sm:ml-0"
      >
        Projects Overview
      </div>
    </div>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 mt-5 ml-4 sm:ml-0">
      <li
        id="over-proj-1"
        class="overview-project"
        @click.prevent="scrollToElement"
      >
        <div>
          <img
            src="../assets/project-ss/local-crime.webp"
            class="overview-project--img"
            alt="Local Crime Checker project screenshot"
          />
          <div class="text-lg -mt-32 p-2"></div>
        </div>
        <div class="px-2 flex flex-col">
          <div class="font-semibold">
            <span class="overview-project--no">#1</span> Local Crime Checker
          </div>
          <div>API app</div>
        </div>
      </li>
      <li
        id="over-proj-2"
        class="overview-project"
        @click.prevent="scrollToElement"
      >
        <div>
          <img
            class="overview-project--img"
            src="../assets/project-ss/book-collection.webp"
            alt="Book Collection Manager project screenshot"
          />
          <div class="text-lg -mt-32 p-2"></div>
        </div>
        <div class="px-2 flex flex-col">
          <div class="font-semibold">
            <span class="overview-project--no">#2</span> Book Collection
          </div>
          <div>CRUD app</div>
        </div>
      </li>
      <li
        id="over-proj-3"
        class="overview-project"
        @click.prevent="scrollToElement"
      >
        <div>
          <img
            class="overview-project--img"
            src="../assets/project-ss/ecoElectronics.webp"
            alt="ecoElectronics project screenshot"
          />
          <div class="text-lg -mt-32 p-2"></div>
        </div>
        <div class="px-2 flex flex-col">
          <div class="font-semibold">
            <span class="overview-project--no">#3</span>ecoElectronics
          </div>
          <div>E-commerce mockup</div>
        </div>
      </li>
      <li
        id="over-proj-4"
        class="overview-project"
        @click.prevent="scrollToElement"
      >
        <div>
          <img
            class="overview-project--img"
            src="../assets/project-ss/fullstack-forum.webp"
            alt="Full Stack Forum project screenshot"
          />
          <div class="text-lg -mt-32 p-2"></div>
        </div>
        <div class="px-2 flex flex-col">
          <div class="font-semibold">
            <span class="overview-project--no">#4</span>Basic Forum
          </div>
          <div>Full Stack forum app</div>
        </div>
      </li>
      <li
        id="over-proj-5"
        class="overview-project"
        @click.prevent="scrollToElement"
      >
        <div>
          <img
            class="overview-project--img"
            src="../assets/project-ss/coach-finder.webp"
            alt="Coach Finder project screenshot"
          />
          <div class="text-lg -mt-32 p-2"></div>
        </div>
        <div class="px-2 flex flex-col">
          <div class="font-semibold">
            <span class="overview-project--no">#5</span> Coach Finder
          </div>
          <div>Expanded tutorial project</div>
        </div>
      </li>
      <li
        id="over-proj-6"
        class="overview-project"
        @click.prevent="scrollToElement"
      >
        <div>
          <img
            class="overview-project--img"
            src="../assets/project-ss/portfolio.webp"
            alt="Portfolio  screenshot"
          />
          <div class="text-lg -mt-32 p-2"></div>
        </div>
        <div class="px-2 flex flex-col">
          <div class="font-semibold">
            <span class="overview-project--no">#6</span> Portfolio
          </div>
          <div>This portfolio</div>
        </div>
      </li>
    </ul>
    <div
      id="border3"
      class="border-b-2 border-slate-100 ml-10 -mr-1 ms:ml-0 sm:mr-10 w-56 sm:w-full"
    ></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  setup() {
    async function scrollAnimation() {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.defaults({
        toggleActions: "play none resume none",
        // markers: true,
        scroller: "#main-view",
      });

      gsap.from("#over-proj-1", {
        scrollTrigger: {
          trigger: "#over-proj-1",
          start: "-140px center",
        },
        duration: 1,
        opacity: 0,
        y: 150,
      });

      gsap.from("#over-proj-2", {
        scrollTrigger: {
          trigger: "#over-proj-2",
          start: "-150px center",
        },
        duration: 1,
        opacity: 0,
        y: 150,
      });

      gsap.from("#over-proj-3", {
        scrollTrigger: {
          trigger: "#over-proj-3",
          start: "-150px center",
        },
        duration: 1,
        opacity: 0,
        y: 150,
      });

      gsap.from("#over-proj-4", {
        scrollTrigger: {
          trigger: "#over-proj-4",
          start: "-150px center",
        },
        duration: 1,
        opacity: 0,
        y: 150,
      });

      gsap.from("#over-proj-5", {
        scrollTrigger: {
          trigger: "#over-proj-5",
          start: "-200px center",
        },
        duration: 1,
        opacity: 0,
        y: 150,
      });

      gsap.from("#over-proj-6", {
        scrollTrigger: {
          trigger: "#over-proj-6",
          start: "-200px center",
        },
        duration: 1,
        opacity: 0,
        y: 150,
      });

      gsap.from("#border3", {
        scrollTrigger: {
          trigger: "#border3",
          start: "-300px center",
        },
        duration: 1,
        opacity: 0,
      });
    }

    onMounted(() => {
      scrollAnimation();
    });

    function scrollToElement(e) {
      const no = e.target.closest("li").id.slice(-1);
      const id = "el-project-" + no;
      console.log(id);
      if (id) {
        document.getElementById(id).scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
    return { scrollToElement };
  },
};
</script>
