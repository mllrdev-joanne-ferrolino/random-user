<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div
      v-if="!loading && data && data.length"
      class="mx-auto flex flex-col w-1/4 container space-y-4"
    >
      <user-item :data="data"></user-item>
    </div>
    <pagination
      :totalRecords="totalRecords"
      @pageNumber="loadUsers"
    ></pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import UserItem from "@/components/UserItem.vue";
import Pagination from "@/components/Pagination.vue";
import useFetchUsers from "@/composables/use-fetch-users";
// import useToggleState from "@/composables/use-toggle-state";

export default defineComponent({
  name: "UsersPage",
  components: {
    UserItem,
    Pagination,
  },
  setup() {
    const totalRecords = 10;
    const pageNumber = 1;
    const {
      isLoading: loading,
      data,
      error,
      execute: fetchUsers,
    } = useFetchUsers();

    function loadUsers(pageNumber: number) {
      if (!error.value) {
        fetchUsers(pageNumber, totalRecords);
      } else {
        console.log(error);
      }
    }

    onMounted(() => {
      loadUsers(pageNumber);
    });

    // const { state: showM, toggle, open, close } = useToggleState();

    // onDone(() => {

    // })

    // onError(() => {
    //   show toaster
    // })

    return { loading, data, error, totalRecords, loadUsers };
  },
});
</script>

<style lang="scss" scoped></style>
