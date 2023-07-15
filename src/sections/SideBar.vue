<template>
  <div id="el-sidebar" class="flex hide-el">
    <div
      class="h-full w-16 flex flex-col text-slate-100 shadow z-20 transition-all duration-300 ease-in"
      :class="bgControls ? 'bg-[#11312c]' : 'bg-[#1b363d]'"
    >
      <div class="mb-2 border-b-2 border-slate-100 relative">
        <div
          v-if="!bgControls"
          class="sidebar-icon group"
          @click.prevent="bgModeToggle"
        >
          <BoltSlashIcon @click="positioningControl" />
          <span class="sidebar-tooltip group-hover:scale-100"
            >Enable Background</span
          >
        </div>

        <div v-else class="sidebar-icon group">
          <BoltIcon @click.prevent="bgModeToggle" @click="resetPositioning" />
          <span class="sidebar-tooltip group-hover:scale-100"
            >Disable Background</span
          >
        </div>
      </div>
      <div
        class="sidebar-icon group"
        id="info"
        @click.prevent="scrollToElement"
      >
        <UserCircleIcon />
        <span class="sidebar-tooltip group-hover:scale-100"
          >My Information</span
        >
      </div>
      <div
        class="sidebar-icon group"
        id="skills"
        @click.prevent="scrollToElement"
      >
        <AcademicCapIcon />
        <span class="sidebar-tooltip group-hover:scale-100">Skills</span>
      </div>
      <div
        class="sidebar-icon group"
        id="proj-overview"
        @click.prevent="scrollToElement"
      >
        <ClipboardDocumentListIcon />
        <span class="sidebar-tooltip group-hover:scale-100"
          >Projects Overview</span
        >
      </div>
      <div
        class="sidebar-icon p-1.5 group"
        id="project-1"
        @click.prevent="scrollToElement"
      >
        <DocumentIcon />
        <span class="sidebar-tooltip group-hover:scale-100">
          <div>Project #1</div>
          <div>Local Crime Checker</div>
        </span>
      </div>
      <div
        class="sidebar-icon p-1.5 group"
        id="project-2"
        @click.prevent="scrollToElement"
      >
        <DocumentIcon />
        <span class="sidebar-tooltip group-hover:scale-100">
          <div>Project #2</div>
          <div>Book Collection Manager</div>
        </span>
      </div>
      <div
        class="sidebar-icon p-1.5 group"
        id="project-3"
        @click.prevent="scrollToElement"
      >
        <DocumentIcon />
        <span class="sidebar-tooltip group-hover:scale-100">
          <div>Project #3</div>
          <div>ecoElectronics</div>
        </span>
      </div>
      <div
        class="sidebar-icon p-1.5 group"
        id="project-4"
        @click.prevent="scrollToElement"
      >
        <DocumentIcon />
        <span class="sidebar-tooltip group-hover:scale-100">
          <div>Project #4</div>
          <div>Full Stack Forum</div>
        </span>
      </div>
      <div
        class="sidebar-icon p-1.5 group"
        id="project-5"
        @click.prevent="scrollToElement"
      >
        <DocumentIcon />
        <span class="sidebar-tooltip group-hover:scale-100">
          <div>Project #5</div>
          <div>Coach Finder</div>
        </span>
      </div>
      <div
        class="sidebar-icon p-1.5 group"
        id="project-6"
        @click.prevent="scrollToElement"
      >
        <DocumentIcon />
        <span class="sidebar-tooltip group-hover:scale-100">
          <div>Project #6</div>
          <div>Portfolio</div>
        </span>
      </div>
      <div
        class="sidebar-icon p-1.5 group"
        id="tutorial-projects"
        @click.prevent="scrollToElement"
      >
        <DocumentDuplicateIcon />
        <span class="sidebar-tooltip group-hover:scale-100"
          >Tutorial Projects</span
        >
      </div>
      <div
        class="sidebar-icon group"
        id="contact"
        @click.prevent="scrollToElement"
      >
        <AtSymbolIcon />
        <span class="sidebar-tooltip group-hover:scale-100">Contact</span>
      </div>
    </div>
  </div>
</template>

<script>
import { AcademicCapIcon } from "@heroicons/vue/24/solid";
import { AtSymbolIcon } from "@heroicons/vue/24/solid";
import { DocumentIcon } from "@heroicons/vue/24/solid";
import { DocumentDuplicateIcon } from "@heroicons/vue/24/solid";
import { ClipboardDocumentListIcon } from "@heroicons/vue/24/solid";
import { UserCircleIcon } from "@heroicons/vue/24/solid";
import { BoltIcon } from "@heroicons/vue/24/solid";
import { BoltSlashIcon } from "@heroicons/vue/24/solid";

import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: {
    AcademicCapIcon,
    AtSymbolIcon,
    ClipboardDocumentListIcon,
    DocumentIcon,
    DocumentDuplicateIcon,
    UserCircleIcon,
    BoltIcon,
    BoltSlashIcon,
  },
  setup() {
    const store = useStore();
    const bgControls = computed(() => store.getters.getBgControls);
    const positioningState = computed(() => store.getters.getPositioningState);
    const controlState = computed(() => store.getters.getControlState);
    const animateState = computed(() => store.getters.getAnimateState);
    

    function bgModeToggle(toggle) {
      store.dispatch("bgModeToggle", toggle);
    }

    function resetPositioning() {
      store.dispatch("resetPositioning");
      store.dispatch("postProcessingControl", "delete");
    }

    function positioningControl() {
      store.dispatch("positioningToggle");
    }

    function scrollToElement(e) {
      const id = "el-" + e.target.closest("div").id;
      if (id) {
        document.getElementById(id).scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    function animateControl() {
      store.dispatch("animateToggle");
    }

    // Control controls, toggle pointer
    function controlControl() {
      store.dispatch("controlToggle");
    }

    return {
      bgModeToggle,
      bgControls,
      scrollToElement,
      scrollToTop,
      positioningState,
      animateState,
      controlState,
      positioningControl,
      animateControl,
      controlControl,
      resetPositioning,
    };
  },
};
</script>
