<template>
  <div id="el-skills" class="flex flex-col items-center gap-5 w-[95%]">
    <div id="intro4" class="mt-5 pointer-events-none text-2xl sm:text-4xl">
      My Skills
    </div>
    <div
      id="intro5"
      class="grid grid-cols-4 gap-y-2 p-1 ml-6 sm:p-4 w-full text-center font-semibold tracking-wide"
    >
      <SkillItem skill="HTML" :image="htmlLogo" />
      <SkillItem skill="CSS" :image="cssLogo" />
      <SkillItem skill="JavaScript" :image="javascriptLogo" />
      <SkillItem skill="Vue" :image="vueLogo" />
      <SkillItem skill="NodeJs" :image="nodejsLogo" />
      <SkillItem skill="ExpressJs" :image="expressjsLogo" />
      <SkillItem skill="MongoDB" :image="mongodbLogo" />
      <SkillItem skill="Sass" :image="sassLogo" />
      <SkillItem skill="React" :image="reactLogo" />
      <SkillItem skill="NextJs" :image="nextjsLogo" />
      <SkillItem skill="ThreeJs" :image="threejsLogo" />
      <SkillItem skill="Tailwind" :image="tailwindLogo" />
    </div>
    <div
      id="border2"
      class="border-b-2 border-slate-100 ml-10 -mr-1 ms:ml-0 sm:mr-10 w-[95%] sm:w-full"
    ></div>
  </div>
</template>

<script>
import htmlLogo from "../assets/learning/html-logo.svg";
import cssLogo from "../assets/learning/css-logo.svg";
import javascriptLogo from "../assets/learning/javascript-logo.svg";
import vueLogo from "../assets/learning/vue-logo.svg";
import nodejsLogo from "../assets/learning/nodejs-logo.svg";
import expressjsLogo from "../assets/learning/expressjs-logo.svg";
import mongodbLogo from "../assets/learning/mongodb-logo.svg";
import sassLogo from "../assets/learning/sass-logo.svg";
import reactLogo from "../assets/learning/react-logo.svg";
import nextjsLogo from "../assets/learning/nextjs-logo.svg";
import threejsLogo from "../assets/learning/threejs-logo.svg";
import tailwindLogo from "../assets/learning/tailwind-logo.svg";

import SkillItem from "../components/SkillItem.vue";
export default {
  components: {
    SkillItem,
  },
  setup() {
    return {
      htmlLogo,
      cssLogo,
      javascriptLogo,
      vueLogo,
      nodejsLogo,
      expressjsLogo,
      mongodbLogo,
      sassLogo,
      reactLogo,
      nextjsLogo,
      threejsLogo,
      tailwindLogo,
    };
  },
};
</script>
