<template>
  <div>
    <base-button icon="pi pi-bars" @click="visibleLeft = true"></base-button>
    <Sidebar v-model:visible="visibleLeft">
      Content
    </Sidebar>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Sidebar from 'primevue/sidebar';
import BaseButton from './base-button.vue';

export default defineComponent({
  components: {
    Sidebar,
  },
  setup() {
    BaseButton;
    const visibleLeft = ref<boolean>(false);
    return { visibleLeft };
  },
});
</script>

<style scoped></style>
