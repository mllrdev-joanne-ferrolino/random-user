<template>
  <div
    class="bg-white hover:bg-blue-100 w-full flex p-2 rounded-xl shadow border"
    v-for="(item, index) in data"
    :key="index"
  >
    <div class="flex space-x-4 p-3">
      <img :src="item.picture" class="rounded-full" />
    </div>
    <div class="flex-grow p-3 items-start">
      <div class="font-semibold">
        {{ item.name }}
      </div>
      <div class="text-sm text-gray-500">
        {{ item.login }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IUser } from "@/models/IUser";

export default defineComponent({
  name: "user-item",
  props: {
    data: {
      type: Array as PropType<IUser[]>,
      default: [],
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
