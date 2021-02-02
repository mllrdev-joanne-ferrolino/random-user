import { ref } from "vue";

export default () => {
  const currentPage = ref<number>(1);
  const pageCount = ref<number>(5);
  const itemsPerPageOptions = [5, 10, 20];
  const itemsPerPage = ref<number>(5);

  function updatePageNumber(pageNumber: number) {
    currentPage.value = pageNumber;
  }

  function incrementPageNumber() {
    currentPage.value += 1;
  }

  function decrementPageNumber() {
    currentPage.value -= 1;
  }

  function changeItemsPerPage(itemsPerPageOption: number) {
    itemsPerPage.value = itemsPerPageOption;
  }

  return {
    pageCount,
    currentPage,
    updatePageNumber,
    incrementPageNumber,
    decrementPageNumber,
    itemsPerPageOptions,
    changeItemsPerPage,
    itemsPerPage,
  };
};
