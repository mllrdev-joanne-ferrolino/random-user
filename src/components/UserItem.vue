<template>
  <div
    class="bg-white hover:bg-blue-100 w-full flex p-2 rounded-xl shadow border"
    v-for="(item, index) in data"
    :key="index"
  >
    <!-- <router-link
      :to="{ name: 'ProfilePage', params: { name: data.item.login.username } }"
    > -->
    <div class="flex space-x-4 p-3">
      <img :src="item.picture.thumbnail" class="rounded-full" />
    </div>
    <div class="flex-grow p-3 items-start">
      <div class="font-semibold">
        {{ formatName(item.name.first, item.name.last) }}
      </div>
      <div class="text-sm text-gray-500">
        {{ item.login.username }}
      </div>
    </div>
    <!-- </router-link> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "user-item",
  props: {
    data: {
      type: Array as any,
      default: [],
    },
  },
  setup() {
    function formatName(firstName: string, lastName: string) {
      return [firstName, lastName].join(" ");
    }

    return { formatName };
  },
});
</script>

<style scoped></style>
