<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error }}</div>
    <div
      v-if="!loading && data && data.length && !error"
      class="mx-auto flex flex-col w-3/4 container space-y-4"
    >
      <div class="text-lg font-semibold text-left">Users</div>
      <user-item
        v-for="(item, index) in data"
        :key="index"
        :user="item"
      ></user-item>
    </div>
    <pagination
      :totalRecords="resultsPerPage"
      @pageNumber="loadUsers"
      @option="getOption"
    >
      <template #previous>Previous</template>
      <template #next>Next</template>
    </pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import UserItem from "@/components/UserItem.vue";
import Pagination from "@/components/Pagination.vue";
import useFetchUsers from "@/composables/use-fetch-users";

export default defineComponent({
  name: "UsersPage",
  components: {
    UserItem,
    Pagination,
  },
  setup() {
    const pageNumber = ref<number>(1);
    const {
      isLoading: loading,
      data,
      error,
      execute: fetchUsers,
      resultsPerPage,
    } = useFetchUsers();

    function loadUsers(pageNumber: number) {
      fetchUsers(pageNumber, resultsPerPage.value);
    }
    function getOption(option: number) {
      resultsPerPage.value = option;
      fetchUsers(pageNumber.value, resultsPerPage.value);
    }
    onMounted(() => {
      loadUsers(pageNumber.value);
    });

    return {
      loading,
      data,
      error,
      resultsPerPage,
      loadUsers,
      getOption,
    };
  },
});
</script>

<style lang="scss" scoped></style>
