<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div
      v-if="!loading && data && data.length"
      class="mx-auto flex flex-col w-1/4 container space-y-4"
    >
      <user-item
        v-for="(item, index) in data"
        :key="index"
        :user="item"
      ></user-item>
    </div>
    <pagination
      :totalRecords="resultsPerPage"
      @pageNumber="loadUsers"
      :pageCount="pageCount"
    ></pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
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
    const resultsPerPage = 10;
    const defaultPageNumber = 1;
    const pageCount = 6;
    const {
      isLoading: loading,
      data,
      error,
      execute: fetchUsers,
    } = useFetchUsers();

    function loadUsers(pageNumber: number) {
      console.log(pageNumber);
      if (!error.value || pageNumber < 1 || pageNumber < pageCount) {
        fetchUsers(pageNumber, resultsPerPage);
      } else {
        console.log(error);
      }
    }

    onMounted(() => {
      loadUsers(defaultPageNumber);
    });

    return { loading, data, error, resultsPerPage, loadUsers, pageCount };
  },
});
</script>

<style lang="scss" scoped></style>
