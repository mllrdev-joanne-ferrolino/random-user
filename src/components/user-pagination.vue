<template>
  <div>
    <ul class="flex flex-row justify-center mr-5">
      <li class="page-header mr-5">
        <label class="mr-3 font-semibold">Results per page</label>
        <select v-model="selectedOption" @change="handlePageOptions">
          <option
            v-for="(option, index) in itemsPerPageOptions"
            :key="index"
            :value="option"
            >{{ option }}</option
          >
        </select>
      </li>
      <li class="page-header">
        <a class="flex items-center font-bold">
          Page {{ currentPage }} of {{ pageCount }}
        </a>
      </li>

      <li>
        <page-button :disabled="currentPage === 1" @click="handlePreviousPage"
          >Previous</page-button
        >
      </li>
      <li v-for="pageNumber in pageCount" :key="pageNumber">
        <page-button
          :selected="currentPage === pageNumber"
          @click="
            updatePageNumber(pageNumber);
            $emit('changeCurrentPage', currentPage);
          "
          >{{ pageNumber }}</page-button
        >
      </li>
      <li>
        <page-button
          :disabled="currentPage === pageCount"
          @click="handleNextPage(pageCount)"
          >Next</page-button
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import usePagination from "@/composables/use-pagination";
import PageButton from "@/components/page-button.vue";

export default defineComponent({
  name: "UserPagination",

  components: { PageButton },
  props: {
    changeCurrentPage: {
      type: Number,
      default: 1,
    },
    changePageOption: {
      type: Number,
      default: 5,
    },
    pages: {
      type: Number,
      default: 5,
    },
  },
  emits: ["changePageOption", "changeCurrentPage"],
  setup(props, { emit }) {
    const {
      currentPage,
      updatePageNumber,
      incrementPageNumber,
      decrementPageNumber,
      pageCount,
      itemsPerPage,
      itemsPerPageOptions,
    } = usePagination();
    const selectedOption = ref<number>(props.changePageOption);

    function handlePreviousPage() {
      if (currentPage.value > 1) {
        decrementPageNumber();
        emit("changeCurrentPage", currentPage.value);
      }
    }

    function handleNextPage(pageCount: number) {
      if (currentPage.value < pageCount) {
        incrementPageNumber();
        emit("changeCurrentPage", currentPage.value);
      }
    }

    function handlePageOptions() {
      currentPage.value = 1;
      emit("changePageOption", selectedOption.value);
      emit("changeCurrentPage", currentPage.value);
    }

    onMounted(() => {
      pageCount.value = props.pages;
    });

    return {
      updatePageNumber,
      currentPage,
      handlePreviousPage,
      handleNextPage,
      itemsPerPage,
      selectedOption,
      pageCount,
      handlePageOptions,
      itemsPerPageOptions,
    };
  },
});
</script>

<style lang="postcss" scoped>
.page-header {
  @apply px-3 py-2;
}
</style>
