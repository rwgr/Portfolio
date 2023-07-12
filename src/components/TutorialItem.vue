<template>
  <div
    class="h-36 w-44 cursor-pointer flex flex-col border-2 p-2 transform transition-all duration-700 ease-linear hover:bg-zinc-900"
    :class="activeTutorial === tutNo ? 'activeContainer' : 'notActiveContainer'"
    @click.prevent="activeTutorialHandler(tutNo)"
  >
    <h3 class="text-center font-semibold">{{ tutTitle }}</h3>
    <img
      :src="tutImg"
      :alt="`${tutTitle} tutorial screenshot`"
      :title="tutTitle"
      class="w-full h-full transform transition-all duration-300 ease-linear"
      :class="activeTutorial === tutNo ? 'activeImage' : 'notActiveImage'"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  props: {
    tutNo: String,
    tutTitle: String,
    tutImg: String,
  },
  setup() {
    const store = useStore();
    const activeTutorial = computed(() => store.getters.getActiveTutorial);

    function activeTutorialHandler(number) {
      store.dispatch("activeTutorialHandler", number);
    }
    return { activeTutorial, activeTutorialHandler };
  },
};
</script>
