<template>
  <div>
    <base-layout>
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
        <router-link :to="{ name: $routeName.PROFILE }">Profile</router-link>
        <div class="text-lg font-semibold text-left">Users</div>
        <user-list :data="data"></user-list>
      </div>
      <base-pagination
        v-model:page-items="itemsPerPage"
        :pages="3"
        :page="currentPage"
        @page-update="loadUsers"
      ></base-pagination>
    </base-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import UserList from '@/user/components/user-list.vue';
import useUsers from '../composables/use-users';
import usePagination from '@/composables/use-pagination';

export default defineComponent({
  name: 'UsersPage',
  components: {
    UserList,
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
      currentPage,
    };
  },
});
</script>

<style lang="postcss" scoped>
.message {
  @apply h-48 mx-auto flex flex-wrap content-center justify-center font-semibold;
}
</style>
