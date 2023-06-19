<template>
  <div id="el-info" class="flex flex-col w-[95%] py-2">
    <div
      id="intro1"
      class="text-3xl lg:text-8xl md:text-6xl sm:text-4xl text-center"
    >
      Welcome!
    </div>
    <div
      id="intro2"
      class="lg:text-4xl lg:ml-0 lg:text-slate-100 pointer-events-none mb-5 ml-4 sm:ml-2 text-2xl sm:text-3xl text-center sm:align-baseline mt-12 sm:mt-14 md:mt-8 lg:mt-0"
    >
      I'm Robin, a Web Developer.
    </div>
    <div
      id="intro9"
      class="gap-2 flex font-semibold self-center items-center text-[#162234] pointer-events-none -mt-10 py-2 flex-col lg:flex-row mb-4 lg:mb-0"
    >
      <div class="flex flex-row gap-2">
        <ArrowDownCircleIcon class="h-6" />
        <div class="text-sm md:text-base">Scroll to view projects,</div>
      </div>
      <div class="flex flex-row gap-1 sm:gap-2 -mr-4 sm:mr-0">
        <div class="text-sm md:text-base">or use the sidebar to navigate</div>
        <ArrowLeftCircleIcon class="h-6" />
      </div>
    </div>
    <div
      id="intro-contact"
      class="gap-4 flex font-semibold self-center text-[#162234] opacity-0 pointer-events-none -mt-20 lg:-mt-10 md:-mt-14 py-2 text-base md:text-lg"
    >
      <ArrowRightCircleIcon class="h-7 opacity-0 md:opacity-100" />
      <div>Please feel free to contact me via email</div>
      <ArrowRightCircleIcon class="h-10 md:h-7" />
    </div>

    <div
      id="border1"
      class="border-b-2 border-slate-100 ml-6 mr-6 sm:ml-0 sm:mr-0 w-[95%] sm:w-full"
    ></div>
  </div>
</template>

<script>
import { ArrowDownCircleIcon } from "@heroicons/vue/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/vue/24/solid";
import { ArrowLeftCircleIcon } from "@heroicons/vue/24/solid";
export default {
  components: {
    ArrowDownCircleIcon,
    ArrowRightCircleIcon,
    ArrowLeftCircleIcon,
  },
};
</script>
