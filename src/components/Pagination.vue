<template>
  <div>
    <ul class="mx-auto flex">
      <li class="px-3 py-2">
        <a class="flex items-center font-bold">
          Page {{ currentPage }} of {{ pageCount }}
        </a>
      </li>
      <li :class="currentPage === 1 ? 'disabled link' : 'active link'">
        <a
          class="flex items-center font-bold"
          @click="
            handlePreviousPage();
            $emit('pageNumber', currentPage);
          "
        >
          <span class="mx-1">Previous</span>
        </a>
      </li>
      <li
        :class="currentPage === number ? 'selected link' : 'active link'"
        v-for="number in pageCount"
        :key="number"
      >
        <a
          class="font-bold"
          @click="
            handlePageNumber(number);
            $emit('pageNumber', currentPage);
          "
          >{{ number }}</a
        >
      </li>
      <li :class="currentPage === pageCount ? 'disabled link' : 'active link'">
        <a
          class="flex items-center font-bold"
          @click="
            handleNextPage(pageCount);
            $emit('pageNumber', currentPage);
          "
        >
          <span class="mx-1">Next</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
  },
  setup() {
    const pageCount = 5;
    const {
      currentPage,
      handlePageNumber,
      handleNextPage,
      handlePreviousPage,
    } = usePagination();

    return {
      pageCount,
      handlePageNumber,
      handleNextPage,
      currentPage,
      handlePreviousPage,
    };
  },
});
</script>

<style lang="postcss" scoped>
.link {
  @apply px-3 py-2 mx-1 rounded-lg cursor-pointer;
}
.disabled {
  @apply bg-gray-200 text-gray-500;
}

.active {
  @apply bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200;
}

.selected {
  @apply bg-gray-700 text-gray-200;
}
</style>
