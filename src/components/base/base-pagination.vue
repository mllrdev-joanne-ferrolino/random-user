<template>
  <div>
    <ul class="flex flex-row justify-center mr-5">
      <li class="page-header mr-5">
        <label class="mr-3 font-semibold">Results per page</label>
        <select v-model="selectedOption" @change="handleItemsPerPage">
          <option
            v-for="(option, index) in itemsPerPageOptions"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </li>
      <li class="page-header">
        <a class="flex items-center font-bold">
          Page {{ currentPage }} of {{ pageCount }}
        </a>
      </li>

      <li>
        <base-button
          :disabled="isButtonDisabled.previous"
          @click="handlePreviousPage"
        >
          Previous
        </base-button>
      </li>
      <li v-for="pageNumber in pageCount" :key="pageNumber">
        <base-button
          :selected="pageNumber === currentPage"
          @click="
            updatePageNumber(pageNumber);
            $emit('page-update', currentPage);
          "
        >
          {{ pageNumber }}
        </base-button>
      </li>
      <li>
        <base-button
          :disabled="isButtonDisabled.next"
          @click="handleNextPage(pageCount)"
        >
          Next
        </base-button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import usePagination from '@/composables/use-pagination';
import BaseButton from '@/components/base/base-button.vue';

export default defineComponent({
  name: 'UserPagination',

  components: { BaseButton },
  props: {
    pageItems: {
      type: Number,
      default: 5,
    },
    pages: {
      type: Number,
      default: 5,
    },
    page: {
      type: Number,
      default: 1,
    },
  },
  emits: ['page-update', 'update:pageItems'],
  setup(props, { emit }) {
    const {
      currentPage,
      updatePageNumber,
      incrementPageNumber,
      decrementPageNumber,
      pageCount,
      itemsPerPageOptions,
    } = usePagination();
    const isButtonDisabled = computed(() => ({
      previous: currentPage.value === 1,
      next: currentPage.value === pageCount.value,
    }));

    const selectedOption = ref<number>(props.pageItems);

    function handlePreviousPage() {
      if (currentPage.value > 1) {
        decrementPageNumber();
        emit('page-update', currentPage.value);
      }
    }

    function handleNextPage(pageCount: number) {
      if (currentPage.value < pageCount) {
        incrementPageNumber();
        emit('page-update', currentPage.value);
      }
    }

    function handleItemsPerPage() {
      currentPage.value = 1;
      emit('update:pageItems', selectedOption.value);
      emit('page-update', currentPage.value);
    }

    onMounted(() => {
      pageCount.value = props.pages;
    });

    return {
      updatePageNumber,
      handlePreviousPage,
      handleNextPage,
      selectedOption,
      pageCount,
      handleItemsPerPage,
      itemsPerPageOptions,
      currentPage,
      isButtonDisabled,
    };
  },
});
</script>

<style lang="postcss" scoped>
.page-header {
  @apply px-3 py-2;
}
</style>
