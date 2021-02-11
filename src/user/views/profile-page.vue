<template>
  <div>
    profile page
  </div>
</template>

<script lang="ts">
// import baseLayout from '@/shared/base/base-layout.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  // components: { baseLayout },
  setup() {
    const show = ref<boolean>(true);
    return { show };
  },
});
</script>

<style scoped>
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-5px);
  opacity: 0;
}
</style>
