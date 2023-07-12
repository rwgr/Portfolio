<template>
  <div class="flex flex-col items-center gap-2 learning-grid">
    <div class="text-xs sm:text-base pr-1">{{ skill }}</div>
    <img
      :src="image"
      class="grayscale h-10 sm:h-12 w-10 sm:w-12 justify-self-center"
      :title="`${skill}`"
      :alt="`${skill} logo`"
    />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    skill: String,
    image: String,
  },
};
</script>

<SkillItem skill="HTML" />
