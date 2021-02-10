<template>
  <div>
    <!-- <button
      class="link"
      :class="disabled ? 'disabled' : selected ? 'selected' : 'active'"
    >
      <slot></slot>
    </button> -->
    <Button
      :icon="icon"
      :class="
        disabled ? 'disabled' : selected ? 'p-button-outlined' : 'p-button-text'
      "
    >
      <slot></slot>
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'primevue/button';

export default defineComponent({
  components: {
    Button,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
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
/* .disabled {
  @apply page-button bg-gray-200 text-gray-500 cursor-default;
} */

.active {
  @apply page-button bg-gray-200 hover:bg-blue-200 hover:text-gray-600 cursor-pointer;
}

.selected {
  @apply page-button bg-blue-200 cursor-pointer;
}

.link {
  @apply flex items-center font-bold focus:outline-none;
}
button {
  margin-right: 0.5rem;
}
</style>
