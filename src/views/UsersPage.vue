<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div
      v-if="!loading && data && data.length"
      class="mx-auto flex flex-col w-1/4 container space-y-4"
    >
      <user-item :data="data"></user-item>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { userService } from "@/services/user.service";
import UserItem from "@/components/UserItem.vue";

export default defineComponent({
  name: "UsersPage",
  components: {
    UserItem,
  },
  setup() {
    const data = ref([]);
    const loading = ref(true);

    // ref: https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
    function retrieveUsers() {
      userService
        .getAll()
        .then((response) => {
          data.value = response.data.results;
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => (loading.value = false));
    }

    onMounted(() => {
      retrieveUsers();
    });

    return { data, loading, retrieveUsers };
  },
});
</script>

<style lang="scss" scoped></style>
