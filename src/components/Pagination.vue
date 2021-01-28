<template>
  <div>
    <ul class="flex flex-row justify-center mr-5">
      <li class="page-header mr-5">
        <label class="mr-3 font-semibold">Results per page</label>
        <select
          v-model="selectedOption"
          @change="$emit('option', selectedOption)"
        >
          <option
            :value="option"
            v-for="(option, index) in options"
            :key="index"
            >{{ option }}</option
          >
        </select>
      </li>
      <li class="page-header">
        <a class="link"> Page {{ currentPage }} of {{ pageCount }} </a>
      </li>

      <li :class="currentPage === 1 ? 'disabled' : 'active'">
        <a class="link" @click="handlePreviousPage">
          <span class="mx-1"><slot name="previous"></slot></span>
        </a>
      </li>
      <li
        :class="currentPage === number ? 'selected' : 'active'"
        v-for="number in pageCount"
        :key="number"
      >
        <a
          class="font-bold"
          @click="
            updatePageNumber(number);
            $emit('pageNumber', currentPage);
          "
          >{{ number }}</a
        >
      </li>
      <li :class="currentPage === pageCount ? 'disabled' : 'active'">
        <a
          class="flex items-center font-bold"
          @click="handleNextPage(pageCount)"
        >
          <span class="mx-1"><slot name="next"></slot></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import usePagination from "@/composables/use-pagination";

export default defineComponent({
  name: "pagination",
  props: {
    totalRecords: {
      type: Number,
      default: 0,
    },
    pageNumber: {
      type: Number,
      default: 1,
    },
    option: {
      type: Number,
      default: 5,
    },
  },
  setup(props, { emit }) {
    const {
      currentPage,
      updatePageNumber,
      updateNextPage,
      updatePreviousPage,
      pageCount,
    } = usePagination();
    const options = [5, 10, 20];
    const selectedOption = ref<number>(props.option);

    function handlePreviousPage() {
      if (currentPage.value > 1) {
        updatePreviousPage();
        emit("pageNumber", currentPage.value);
      }
    }

    function handleNextPage(pageCount: number) {
      if (currentPage.value < pageCount) {
        updateNextPage();
        emit("pageNumber", currentPage.value);
      }
    }

    return {
      updatePageNumber,
      currentPage,
      handlePreviousPage,
      handleNextPage,
      options,
      selectedOption,
      pageCount,
    };
  },
});
</script>

<style lang="postcss" scoped>
.page-header {
  @apply px-3 py-2;
}
.page-button {
  @apply page-header mx-1 rounded-lg cursor-pointer text-sm;
}
.disabled {
  @apply page-button bg-gray-200 text-gray-500;
}

.active {
  @apply page-button bg-gray-200 hover:bg-blue-200 hover:text-gray-600;
}

.selected {
  @apply page-button bg-blue-200;
}

.link {
  @apply flex items-center font-bold;
}
</style>
