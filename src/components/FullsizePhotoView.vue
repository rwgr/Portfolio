<template>
  <div
    class="bg-[#000000b3] w-full h-full fixed top-0 left-0 z-50"
    @click="closeFullSize"
  >
    <div
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full h-full p-2 md:p-4 lg:p-0 lg:w-4/6 lg:h-4/6"
    >
      <div class="flex justify-center items-center">
        <img :src="showFullSize" class="transition-all duration-300 ease-out" />
      </div>
    </div>
    <div>
      <xMarkIcon
        class="fixed top-2 right-2 fill-white h-10 hover:p-1 hover:fill-slate-300 transition-all duration-300 ease-out cursor-pointer"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    XMarkIcon,
  },
  setup() {
    const store = useStore();
    const showFullSize = computed(() => store.getters.getShowFullSize);

    function closeFullSize() {
      store.dispatch("closeFullSize");
    }

    return { closeFullSize, showFullSize };
  },
};
</script>

<style>
.overlay {
  background-color: #000000b3;
}
</style>
