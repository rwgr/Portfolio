<template>
  <div class="mt-10 mb-10 text-slate-100 p-2 rounded-xl" id="el-contact">
    <p
      class="p-2 border-b-2 border-slate-100 mb-2 text-center text-xl sm:text-2xl md:px-5 md:pb-6 ml-6 sm:ml-4 md:ml-0"
    >
      Please feel free to contact me via email
    </p>
    <div
      class="flex gap-2 flex-col md:flex-row justify-between ml-6 md:ml-0 px-0 lg:px-2 md:px-1"
    >
      <div class="flex items-center gap-2">
        <a href="mailto:rlinden91@gmail.com" title="Send Email">
          <EnvelopeIcon class="h-8 infoIcon"
        /></a>
        <div id="email">rlinden91@gmail.com</div>
      </div>
      <div class="flex items-center gap-2" title="Copy to Clipboard">
        <ClipboardDocumentIcon class="h-8 infoIcon" @click="copyEmail" />
        <div>Copy email to clipboard</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ClipboardDocumentIcon } from "@heroicons/vue/24/solid";
import { EnvelopeIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    ClipboardDocumentIcon,
    EnvelopeIcon,
  },
  setup() {
    // templateId: template_vfpvbac
    // serviceId: service_29qoj39
    // publickey: Ln9TeMFt0mDbjdVSH

    function copyEmail() {
      let email = document.getElementById("email").textContent;
      navigator.clipboard.writeText(email);
      alert("Copied: " + email);
    }
    return { copyEmail };
  },
};
</script>
