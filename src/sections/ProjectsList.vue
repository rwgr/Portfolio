<template>
  <div
    class="flex flex-col items-center gap-y-20 w-[95%] mt-20 px-6 ml-6 sm:ml-0"
  >
    <ProjectItem
      prjNo="1"
      :prjSkills="prj1Skills"
      prjDemo="https://www.youtube.com/watch?v=iwf1tJdDMwc"
      prjCode="https://github.com/rwgr/Local-Crime-Checker"
      prjTitle="Local Crime Checker"
      :prjDesc="prj1Desc"
      :prjImg="prj1Img"
    />
    <ProjectItem
      prjNo="2"
      :prjSkills="prj2Skills"
      prjDemo="https://www.youtube.com/watch?v=xIU1O3Cqcw4"
      prjCode="https://github.com/rwgr/Book-Collection-Manager"
      prjTitle="Book Collection Manager"
      :prjDesc="prj3Desc"
      :prjImg="prj3Img"
    />
    <ProjectItem
      prjNo="3"
      :prjSkills="prj3Skills"
      prjDemo="https://www.youtube.com/watch?v=M_DW04ho_G4"
      prjCode="https://github.com/rwgr/ecoElectronics"
      prjTitle="ecoElectronics Store Front Website"
      :prjDesc="prj3Desc"
      :prjImg="prj3Img"
    />
    <ProjectItem
      prjNo="4"
      :prjSkills="prj4Skills"
      prjDemo="https://www.youtube.com/watch?v=Q7wpximrd9Q"
      prjCode="https://github.com/rwgr/Full-Stack-Forum"
      prjTitle="Full Stack Forum"
      :prjDesc="prj4Desc"
      :prjImg="prj4Img"
    />
    <ProjectItem
      prjNo="5"
      :prjSkills="prj5Skills"
      prjDemo="https://www.youtube.com/watch?v=Vb4FmRDL3KA"
      prjCode="https://github.com/rwgr/Coach-Finder"
      prjTitle="Coach Finder"
      :prjDesc="prj5Desc"
      :prjImg="prj5Img"
    />
    <ProjectItem
      prjNo="6"
      :prjSkills="prj6Skills"
      prjDemo="noDemo"
      prjCode="https://github.com/rwgr/Portfolio"
      prjTitle="Portfolio"
      :prjDesc="prj6Desc"
      :prjImg="prj6Img"
    />
  </div>
  <div
    id="border4"
    class="border-b-2 mt-20 border-slate-100 w-[95%] ml-10 sm:ml-8 md:ml-0"
  ></div>
</template>

<script>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ref } from "vue";
import store from "../store";
import ProjectItem from "../components/ProjectItem.vue";
import prj1Img from "../assets/project-ss/local-crime.webp";
import prj2Img from "../assets/project-ss/book-collection.webp";
import prj3Img from "../assets/project-ss/ecoelectronics.webp";
import prj4Img from "../assets/project-ss/fullstack-forum.webp";
import prj5Img from "../assets/project-ss/coach-finder.webp";
import prj6Img from "../assets/project-ss/portfolio.webp";
export default {
  components: {
    ProjectItem,
  },
  data() {
    return {
      prj1Skills: ["HTML", "CSS", "JavaScript", "Vue"],
      prj2Skills: ["HTML", "CSS", "JavaScript", "Vue"],
      prj3Skills: ["HTML", "CSS", "JavaScript", "Vue"],
      prj4Skills: ["NodeJs", "ExpressJs", "MongoDB", "Pug"],
      prj5Skills: ["HTML", "CSS", "JavaScript", "Vue"],
      prj6Skills: ["Vue", "ThreeJs", "Tailwind"],
      prj1Desc:
        " Web application utilising the UK Police public crime API. Allows a user to view crime data for an area, and offers comparisons with previous months or years allowing a user to see trends and changes in crime within the area specified.",
      prj2Desc:
        "Create Read Update & Delete (CRUD) application designed to simplify the organisation of a user's book collection. Utilising Vue Router for routing, Vuex for state management, Vuelidate for form validation and the Open Library API for adding books via their identifiers.",
      prj3Desc:
        "Mock-up of a store front for a conceptual environmentally friendly online computer retailer using modern web design principles.",
      prj4Desc:
        "A basic full stack forum project. Users can sign-up and login allowing them to create posts and leave comments. Users can edit and delete their own posts and comments, change their password and view other users' posts and comments.",
      prj5Desc:
        "Web application for facilitating contact between coaches advertising their services and their customers. Users can contact any coach via using the in-built messaging system. A user can also register as a coach, and receive messages themselves. (This project is a continuation of a tutorial project completed as part of a Udemy course, with additional features added).",
      prj6Desc:
        "This portfolio project. Made using Vue, utilising Tailwind CSS for styling and Three.js to create the animated background that can be enabled in the sidebar.",
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
      const fullsizeImage = prjImg.trim();
      store.dispatch("showFullSize", fullsizeImage);
    }

    // Scroll Animation for project list and tutorial projects sections, items appear on scroll
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

    return {
      showImageOverlay,
      hideImageOverlay,
      loading,
      isOdd,
      showFullSize,
      prj1Img,
      prj2Img,
      prj3Img,
      prj4Img,
      prj5Img,
      prj6Img,
    };
  },
};
</script>
