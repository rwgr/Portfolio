<template>
  <div
    class="flex flex-col items-center gap-y-20 w-[95%] mt-20 px-6 ml-6 sm:ml-0"
  >
    <project-card
      class="bg-gray-900"
      prjLink="https://github.com/rwgr/Local-Crime-Checker"
      ytLink="https://www.youtube.com/watch?v=iwf1tJdDMwc"
      prjImg="/assets/project-ss/local-crime.webp"
      prjNo="1"
      prjName="Local Crime Checker"
      prj-Desc="Web application utilising the UK Police public crime API.  Allows a user to view crime data for an area, and offers comparisons with previous months or years allowing a user to see trends and changes in crime within the area specified."
      :prjRes="prj1Res"
    />
    <project-card
      class="bg-[#0f2e29]"
      prjLink="https://github.com/rwgr/Book-Collection-Manager"
      ytLink="https://www.youtube.com/watch?v=xIU1O3Cqcw4"
      prjImg="/assets/project-ss/book-collection.webp"
      prjNo="2"
      prjName="Book Collection Manager "
      prj-Desc="Create Read Update & Delete (CRUD) application designed to simplify the organisation of a user's book collection. Utilising Vue Router for routing, Vuex for state management, Vuelidate for form validation and the Open Library API for adding books via their identifiers."
      :prjRes="prj2Res"
    />
    <project-card
      class="bg-gray-900"
      prjLink="https://github.com/rwgr/ecoElectronics"
      ytLink="https://www.youtube.com/watch?v=M_DW04ho_G4"
      prjImg="/assets/project-ss/ecoelectronics.webp"
      prjNo="3"
      prjName="ecoElectronics Store Front Website"
      prj-Desc="Mock-up of a store front for a conceptual environmentally friendly online computer retailer using modern web design principles."
      :prjRes="prj3Res"
    />
    <project-card
      class="bg-[#0f2e29]"
      prjLink="https://github.com/rwgr/Full-Stack-Forum"
      ytLink="https://www.youtube.com/watch?v=Q7wpximrd9Q"
      prjImg="/assets/project-ss/fullstack-forum.webp"
      prjNo="4"
      prjName="Full Stack Forum"
      prj-Desc="A basic full stack forum project. Users can sign-up and login allowing them to create posts and leave comments.  Users can edit and delete their own posts and comments, change their password and view other users' posts and comments."
      :prjRes="prj4Res"
    />
    <project-card
      class="bg-gray-900"
      prjLink="https://github.com/rwgr/Coach-Finder"
      ytLink="https://www.youtube.com/watch?v=Vb4FmRDL3KA"
      prjImg="/assets/project-ss/coach-finder.webp"
      prjNo="5"
      prjName="Coach Finder"
      prj-Desc="Web application for facilitating contact between coaches advertising their services and their customers. Users can contact any coach via using the in-built messaging system.  A user can also register as a coach, and receive messages themselves. 
      (This project is a continuation of a tutorial project completed as part of a Udemy course, with additional features added)."
      :prjRes="prj5Res"
    />
    <project-card
      class="bg-[#0f2e29]"
      prjLink="https://github.com/rwgr/Portfolio"
      ytLink="https://www.youtube.com/watch?v=Vb4FmRDL3KA&feature=youtu.be"
      prjImg="/assets/project-ss/portfolio.webp"
      prjNo="6"
      prjName="Portfolio"
      prj-Desc="This portfolio project, utilises Tailwind CSS for styling and Three.js to create an animated background."
      :prjRes="prj6Res"
    />
  </div>
  <div
    id="border4"
    class="border-b-2 mt-20 border-slate-100 w-[95%] ml-10 sm:ml-8 md:ml-0"
  ></div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ref } from "vue";
export default {
  components: {
    ProjectCard,
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

    return { showImageOverlay, hideImageOverlay, loading };
  },
};
</script>
