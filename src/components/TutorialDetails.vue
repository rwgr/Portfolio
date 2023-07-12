<template>
  <div class="p-6" v-if="activeTutorial === '0'">
    <p class="p-2 text-base">{{ tutDesc }}</p>
  </div>
  <div class="p-2" v-else>
    <div class="flex align-middle items-center justify-between">
      <div class="text-lg font-bold">
        <span class="font-normal text-base">Tutorial #{{ tutNo }}</span>
        {{ tutTitle }}
      </div>
      <div class="flex gap-4" title="View full-size screenshot">
        <ArrowsPointingOutIcon
          class="h-8 infoIcon"
          @click="showFullSize(tutTitle)"
        />
        <div>
          <a :href="tutCode" title="View project on GitHub" target="_blank">
            <GithubLogo class="hover:fill-zinc-800 dark:hover:fill-gray-900" />
          </a>
        </div>
      </div>
    </div>
    <div class="mt-2 mb-2 border-b-2 border-slate-100 w-[95%]"></div>
    <p>
      {{ tutDesc }}
    </p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import GithubLogo from "../components/GithubLogo.vue";
import { ArrowsPointingOutIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    GithubLogo,
    ArrowsPointingOutIcon,
  },
  props: {
    tutNo: String,
    tutTitle: String,
    tutCode: String,
    tutDesc: String,
  },
  setup() {
    const store = useStore();
    const activeTutorial = computed(() => store.getters.getActiveTutorial);

    function showFullSize(tutTitle) {
      const fullsizeImage = tutTitle.replace(/\s/g, "").toLowerCase();
      store.dispatch("showFullSize", fullsizeImage);
    }

    return {
      activeTutorial,
      showFullSize,
    };
  },
};
</script>
