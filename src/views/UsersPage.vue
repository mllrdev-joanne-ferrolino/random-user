<template>
  <div>
    <div v-if="loading" class="message">
      <p>Loading...</p>
    </div>
    <div v-if="error" class="message">Error: {{ error }}</div>
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
    <pagination @pageNumber="loadUsers" @option="updateUsers">
      <template #previous>Previous</template>
      <template #next>Next</template>
    </pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import UserItem from "@/components/UserItem.vue";
import Pagination from "@/components/Pagination.vue";
import useFetchUsers from "@/composables/use-users";

export default defineComponent({
  name: "UsersPage",
  components: {
    UserItem,
    Pagination,
  },
  setup() {
    const {
      isLoading: loading,
      data,
      error,
      fetchUsers,
      usersPerPage,
      updateUsers,
      pageNumber,
    } = useFetchUsers();

    function loadUsers(pageNumber: number) {
      fetchUsers(pageNumber, usersPerPage.value);
    }
    onMounted(() => {
      loadUsers(pageNumber.value);
    });

    return {
      loading,
      data,
      error,
      usersPerPage,
      loadUsers,
      updateUsers,
    };
  },
});
</script>

<style lang="postcss" scoped>
.message {
  @apply h-48 mx-auto flex flex-wrap content-center justify-center font-semibold;
}
</style>
