<template>
  <div
    class="grid grid-rows-2 justify-center gap-10 text-slate-100 p-8 font-semibold bg-[#162234] max-h-[300px] m:max-h-[350px] rounded-t-xl -mt-8 border-t-2 border-[#155b26] hide-el text-xs sm:text-sm overflow-scroll overflow-x-hidden md:overflow-auto"
    id="el-learning"
  >
    <div class="divide-y-4 divide-[#155b26] -mt-4">
      <div
        class="text-md font-sm uppercase font-bold tracking-wider text-right text-[#155b26] pointer-events-none"
      >
        Completed courses
      </div>
      <ul class="flex flex-col justify-between">
        <li class="flex gap-2 mt-5">
          <a
            href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/"
            target="_blank"
            ><LinkIcon class="h-8 infoIcon"
          /></a>
          <span class="self-center"
            >Build Responsive Real-World Websites with HTML and CSS</span
          >
        </li>
        <li class="flex gap-2 mt-2">
          <a
            href="https://www.udemy.com/course/advanced-css-and-sass/"
            target="_blank"
            ><LinkIcon class="h-8 infoIcon"
          /></a>
          <span>
            Advanced CSS and Sass: Flexbox, Grid, Animations and More!</span
          >
        </li>
        <li class="flex gap-2 mt-2">
          <a
            href="https://www.udemy.com/course/the-complete-javascript-course/"
            target="_blank"
            ><LinkIcon class="h-8 infoIcon"
          /></a>
          <span>
            The Complete JavaScript Course 2023: From Zero to Expert!</span
          >
        </li>
        <li class="flex gap-2 mt-2">
          <a
            href="https://www.udemy.com/course/vuejs-2-the-complete-guide/"
            target="_blank"
            ><LinkIcon class="h-8 infoIcon"
          /></a>
          <span>
            Vue - The Complete Guide (incl. Router & Composition API)</span
          >
        </li>
        <li class="flex gap-2 mt-2">
          <a
            href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
            target="_blank"
            ><LinkIcon class="h-8 infoIcon"
          /></a>
          <span>
            Node.js, Express, MongoDB & More: The Complete Bootcamp 2023</span
          >
        </li>
        <li class="flex gap-2 mt-2">
          <a
            href="https://www.udemy.com/course/nextjs-react-the-complete-guide/"
            target="_blank"
            ><LinkIcon class="h-8 infoIcon"
          /></a>
          <span class="mb-2 sm:mb-0">
            Next.js & React - The Complete Guide (incl. Two Paths!)</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { LinkIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    LinkIcon,
  },
};
</script>
