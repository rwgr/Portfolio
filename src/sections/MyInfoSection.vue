<template>
  <div
    class="flex flex-col gap-5 justify-items-center bg-[#1d2d40] text-slate-100 font-semibold dark:bg-gray-800 hide-el text-sm sm:text-base pl-4 pr-4 py-8"
    id="el-myinfo"
  >
    <div class="flex gap-6">
      <div>
        <ul class="flex flex-col gap-2">
          <li class="flex gap-2" title="Name">
            <UserCircleIcon class="h-8" /><span class="self-center">
              Robin Wilschere-Green</span
            >
          </li>
          <li class="flex gap-2" title="Location">
            <MapPinIcon class="h-8" /><span class="self-center">
              Devon, England</span
            >
          </li>
          <li class="flex gap-2" title="Email">
            <a href="mailto:rlinden91@gmail.com">
              <EnvelopeIcon class="h-8 infoIcon"
            /></a>
            <span class="self-center">rlinden91@gmail.com</span>
          </li>
          <li class="flex gap-2" title="GitHub">
            <a href="https://github.com/rwgr" target="_blank">
              <GithubLogo />
            </a>
            <span class="self-center">https://github.com/rwgr</span>
          </li>
        </ul>
      </div>
      <div class="flex justify-center w-full items-center" v-if="mediaQuery">
        <img
          src="/avatar.webp"
          alt="Robin avatar"
          title="Robin avatar"
          class="rounded-full border-2 border-slate-100 w-28 h-28 object-contain"
        />
      </div>
      <div
        class="flex justify-center w-full items-center invisible lg:visible"
        v-else
      >
        <img
          src="/avatar.webp"
          alt="Robin avatar"
          title="Robin avatar"
          class="rounded-full border-2 border-slate-100 w-36 h-36 object-contain"
        />
      </div>
    </div>
    <div class="flex flex-col py-4 divide-y-4 divide-[#318f70] -mt-4">
      <div
        class="text-sm uppercase font-bold tracking-wider text-right text-[#318f70] pointer-events-none"
      >
        Introduction
      </div>
      <div class="flex flex-col gap-4">
        <p class="mt-3">
          I'm a self-taught web developer currently looking for a junior
          position in this role.
        </p>
        <p>
          I've completed a variety of Udemy courses providing me with a strong
          foundation in HTML, CSS, JavaScript, Vue, React, Next.js and Node.js.
          I have subsequently gained experience building responsive websites
          from scratch using these tools.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { EnvelopeIcon } from "@heroicons/vue/24/solid";
import { UserCircleIcon } from "@heroicons/vue/24/solid";
import { MapPinIcon } from "@heroicons/vue/24/solid";
import GithubLogo from "../components/GithubLogo.vue";

export default {
  props: {
    mediaQuery: String,
  },
  components: {
    EnvelopeIcon,
    UserCircleIcon,
    MapPinIcon,
    GithubLogo,
  },
};
</script>
