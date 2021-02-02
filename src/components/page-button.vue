<template>
  <div>
    <button
      class="link"
      :class="disabled ? 'disabled' : selected ? 'selected' : 'active'"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="postcss" scoped>
.page-button {
  @apply px-3 py-2 mx-1 rounded-lg  text-sm;
}
.disabled {
  @apply page-button bg-gray-200 text-gray-500 cursor-default;
}

.active {
  @apply page-button bg-gray-200 hover:bg-blue-200 hover:text-gray-600 cursor-pointer;
}

.selected {
  @apply page-button bg-blue-200 cursor-pointer;
}

.link {
  @apply flex items-center font-bold focus:outline-none;
}
</style>
