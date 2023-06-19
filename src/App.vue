<template>
  <div class="grid grid-cols-6">
    <div class="fixed top-0 bottom-0 left-0 right-0 mt-5">
      <router-view v-slot="slotProps">
        <component :is="slotProps.Component"></component>
      </router-view>
    </div>
    <AnimatedBackground v-if="webGLAvailability" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import AnimatedBackground from "./views/AnimatedBackground.vue";
import { onMounted } from "vue";
import WebGL from "../src/assets/webgl";

export default {
  components: { AnimatedBackground },
  setup() {
    const store = useStore();
    const darkMode = computed(() => store.getters.getDarkMode);
    const webGLAvailability = computed(() => store.getters.getWebGLAvailable);

    onMounted(() => {
      if (WebGL.isWebGLAvailable()) {
        store.dispatch("webGLCheck", true);
      } else {
        store.dispatch("webGLCheck", false);
      }
    });

    return { darkMode, webGLAvailability };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
