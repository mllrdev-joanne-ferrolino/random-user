import { ref } from "vue";

export default () => {
  const currentPage = ref<number>(1);
  const pageCount = ref<number>(5);
  const resultsOptions = [5, 10, 20];

  function updatePageNumber(pageNumber: number) {
    currentPage.value = pageNumber;
  }

  function updateNextPage() {
    currentPage.value += 1;
  }

  function updatePreviousPage() {
    currentPage.value -= 1;
  }

  return {
    pageCount,
    currentPage,
    updatePageNumber,
    updateNextPage,
    updatePreviousPage,
    resultsOptions,
  };
};
