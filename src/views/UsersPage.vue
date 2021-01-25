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
    <pagination class="mx-auto"></pagination>
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
    const pageResults = 10;
    const { isLoading: loading, data, error, execute } = useFetchUsers();

    // const { state: showM, toggle, open, close } = useToggleState();

    // onDone(() => {

    // })

    // onError(() => {
    //   show toaster
    // })

    onMounted(() => {
      execute(pageResults);
    });
    return { loading, data, error };
  },
});
</script>

<style lang="scss" scoped></style>
