import { ref, computed } from "vue";

export default () => {
  const currentPage = ref<number>(1);
  const pageCount = ref<number>(5);
  const itemsPerPageOptions = [5, 10, 20];
  const itemsPerPage = ref<number>(5);
  const isButtonDisabled = computed(() => ({
    previous: currentPage.value === 1,
    next: currentPage.value === pageCount.value,
  }));

  function updatePageNumber(pageNumber: number) {
    currentPage.value = pageNumber;
  }

  function incrementPageNumber() {
    currentPage.value += 1;
  }

  function decrementPageNumber() {
    currentPage.value -= 1;
  }

  function isButtonSelected(pageNumber: number) {
    return currentPage.value === pageNumber;
  }

  return {
    pageCount,
    currentPage,
    updatePageNumber,
    incrementPageNumber,
    decrementPageNumber,
    itemsPerPageOptions,
    itemsPerPage,
    isButtonDisabled,
    isButtonSelected,
  };
};
