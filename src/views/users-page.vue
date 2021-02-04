<template>
  <div>
    <div v-if="isLoading" class="message">
      <p>Loading...</p>
    </div>
    <div v-if="error?.message" class="message">
      {{ error.name }}: {{ error.message }}
    </div>
    <div
      v-if="!isLoading && data?.length && !error.message"
      class="mx-auto  my-8 flex flex-col w-3/4 container space-y-4"
    >
      <div class="text-lg font-semibold text-left">Users</div>
      <user-list :data="data"></user-list>
    </div>
    <base-pagination
      v-model:page-items="itemsPerPage"
      :pages="3"
      @update-page="loadUsers"
    >
    </base-pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import UserList from "@/components/user-list.vue";
import BasePagination from "@/components/base-pagination.vue";
import useUsers from "@/composables/use-users";
import usePagination from "@/composables/use-pagination";

export default defineComponent({
  name: "UsersPage",
  components: {
    UserList,
    BasePagination,
  },
  setup() {
    const { isLoading, data, fetchUsers, error } = useUsers();
    const { itemsPerPage, currentPage } = usePagination();

    function loadUsers(pageNumber: number) {
      fetchUsers(pageNumber, itemsPerPage.value);
    }
    onMounted(() => {
      loadUsers(currentPage.value);
    });

    return {
      isLoading,
      data,
      itemsPerPage,
      loadUsers,
      error,
    };
  },
});
</script>

<style lang="postcss" scoped>
.message {
  @apply h-48 mx-auto flex flex-wrap content-center justify-center font-semibold;
}
</style>
