<template>
  <div :class="containerClass">
    <transition name="layout-sidebar">
      <div v-if="activeMenu" class="layout-sidebar  bg-blue-200"></div>
    </transition>
    <div class="layout-topbar  bg-green-200 block">
      <base-button
        icon="pi pi-bars"
        @click="onMenuToggle"
        class="text-left"
      ></base-button>
    </div>
    <div class="layout-main block">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

import BaseButton from './base-button.vue';

export default defineComponent({
  setup() {
    BaseButton;
    const activeMenu = ref<boolean>(true);
    const containerClass = computed(() => [
      'layout-wrapper',
      {
        'layout-menu-active': activeMenu.value,
      },
    ]);
    function onMenuToggle() {
      activeMenu.value = !activeMenu.value;
    }
    return { onMenuToggle, containerClass, activeMenu };
  },
});
</script>

<style lang="scss" scoped>
.layout-wrapper {
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  &.layout-menu-active {
    .layout-topbar {
      margin-left: 160px;
    }
    .layout-main {
      margin-left: 160px;
    }
  }
}

.layout-topbar {
  margin-left: 0;
  padding: 0.5em;
  transition: margin-left 0.5s;
}
.layout-main {
  margin-left: 0;
  position: absolute;
  margin-top: 60px;
  width: calc(100% - 160px);
}
.layout-sidebar {
  width: 160px;
  height: 100%;
  position: fixed;
}

.layout-sidebar-enter-active,
.layout-sidebar-leave-active {
  transition: transform 0.5s;
}

.layout-sidebar-enter-from,
.layout-sidebar-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
