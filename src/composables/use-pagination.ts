import { ref } from "vue";

export default () => {
  const currentPage = ref<number>(1);

  function handlePageNumber(pageNumber: number) {
    currentPage.value = pageNumber;
  }

  function handleNextPage(pageCount: number) {
    if (currentPage.value < pageCount) {
      currentPage.value += 1;
    }
  }

  function handlePreviousPage() {
    if (currentPage.value > 1) {
      currentPage.value -= 1;
    }
  }

  return { currentPage, handlePageNumber, handleNextPage, handlePreviousPage };
};
