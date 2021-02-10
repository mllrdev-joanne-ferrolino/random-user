<template>
  <!-- <div>
    <base-button icon="pi pi-bars" @click="visibleLeft = true"></base-button>
    <Sidebar v-model:visible="visibleLeft">
      Content
    </Sidebar>
    <slot></slot>
  </div> -->
  <div class="layout-wrapper flex layout-static">
    <div class="layout-topbar  bg-green-500">
      topbar
    </div>
    <transition name="layout-sidebar">
      <div class="layout-sidebar w-40 fixed h-full bg-blue-500">
        sidebar
      </div>
    </transition>
    <div class="layout-main ml-40">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import Sidebar from 'primevue/sidebar';
import BaseButton from './base-button.vue';

export default defineComponent({
  // components: {
  //   Sidebar,
  // },
  setup() {
    BaseButton;
    const visibleLeft = ref<boolean>(false);
    return { visibleLeft };
  },
});
</script>

<style lang="postcss" scoped>
.layout-wrapper {
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  .layout-static {
    .layout-topbar {
      left: 0;
    }
    .layout-main {
      margin-left: 250px;
    }
    .layout-sidebar {
      width: 250px;
      height: 100%;
    }
  }
}
</style>
