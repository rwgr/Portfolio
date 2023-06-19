<template>
  <div
    class="absolute flex gap-4 h-[4.15rem] w-[95%] border-b-2 border-b-slate-100 transition-all duration-300 ease-in items-center z-50 justify-start lg:justify-evenly"
    v-if="bgControls"
  >
    <div class="flex flex-col ml-5 md:ml-0" title="Pause/Play">
      <PauseIcon
        v-if="animateState"
        class="controls-btn h-10 w-10"
        :class="{ paused: !animateState }"
        @click="animateControl"
      />
      <PlayIcon
        v-else
        class="controls-btn h-10 w-10"
        :class="{ paused: !animateState }"
        @click="animateControl"
      />
    </div>
    <div title="Pointer Control Toggle">
      <CursorArrowRippleIcon
        class="controls-btn h-10 w-10"
        :class="{ paused: !controlState }"
        @click="controlControl"
      />
    </div>
    <div
      class="grid grid-cols-4 gap-0 lg:gap-1 text-sm lg:text-base items-start mt-4 lg:mt-0 collapse md:visible"
    >
      <div id="post-rgb" class="w-6" @click="postProcessingControl('rgb')">
        <PlusCircleIcon class="controls-btn" />
      </div>
      <div class="-ml-2 sm:-ml-3 lg:-ml-7">
        RGB <span class="collapse lg:visible">Shift</span>
      </div>
      <div id="post-after" class="w-6" @click="postProcessingControl('after')">
        <PlusCircleIcon class="controls-btn" />
      </div>
      <div class="-ml-2 sm:-ml-3 lg:-ml-7">AfterImage</div>
      <div id="post-dots" class="w-6" @click="postProcessingControl('dots')">
        <PlusCircleIcon class="controls-btn" />
      </div>
      <div class="-ml-2 sm:-ml-3 lg:-ml-7">
        Dot <span class="collapse lg:visible">Screen</span>
      </div>
      <div id="post-bokeh" class="w-6" @click="postProcessingControl('bokeh')">
        <PlusCircleIcon class="controls-btn" />
      </div>
      <div class="-ml-2 sm:-ml-3 lg:-ml-7">Depth</div>
    </div>
    <div
      id="post-delete"
      class="w-6 collapse md:visible"
      title="Clear Effects"
      @click="postProcessingControl('delete')"
    >
      <MinusCircleIcon class="controls-btn h-8 w-10 lg:h-10" />
    </div>
    <div class="ml-1 flex flex-col collapse md:visible">
      <div>Clear</div>
      <div>Effects</div>
    </div>
  </div>
</template>

<script>
import { PauseIcon } from "@heroicons/vue/24/solid";
import { PlayIcon } from "@heroicons/vue/24/solid";
import { CursorArrowRippleIcon } from "@heroicons/vue/24/solid";
import { PlusCircleIcon } from "@heroicons/vue/24/solid";
import { MinusCircleIcon } from "@heroicons/vue/24/solid";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: {
    PauseIcon,
    PlayIcon,
    CursorArrowRippleIcon,
    PlusCircleIcon,
    MinusCircleIcon,
  },
  setup() {
    // Background controls
    const store = useStore();
    const bgControls = computed(() => store.getters.getBgControls);
    const positioningState = computed(() => store.getters.getPositioningState);
    const controlState = computed(() => store.getters.getControlState);
    const animateState = computed(() => store.getters.getAnimateState);

    function bgModeToggle() {
      store.dispatch("bgModeToggle");
    }
    function animateControl() {
      store.dispatch("animateToggle");
    }

    // Control controls, toggle pointer
    function controlControl() {
      store.dispatch("controlToggle");
    }

    function positioningControl() {
      store.dispatch("positioningToggle");
    }

    function postProcessingControl(effect) {
      store.dispatch("postProcessingControl", effect);

      const el = document.querySelector(`#post-${effect}`);

      if (effect === "delete") {
        const rgb = document.querySelector("#post-rgb");
        const after = document.querySelector("#post-after");
        const dots = document.querySelector("#post-dots");
        const bokeh = document.querySelector("#post-bokeh");

        rgb.classList.remove("paused");
        after.classList.remove("paused");
        dots.classList.remove("paused");
        bokeh.classList.remove("paused");
      }

      if (effect != "delete") {
        el.classList.add("paused");
      }
    }
    return {
      bgControls,
      bgModeToggle,
      positioningState,
      controlState,
      animateState,
      animateControl,
      controlControl,
      positioningControl,
      postProcessingControl,
    };
  },
};
</script>
