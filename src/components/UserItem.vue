<template>
  <div
    class="bg-white hover:bg-blue-100 w-full flex p-2 rounded-xl shadow border"
  >
    <div class="flex space-x-4 p-3">
      <img :src="user.picture" class="rounded-full" />
    </div>
    <div class="flex-grow p-3">
      <div class="font-semibold text-left">
        {{ user.name }}
      </div>
      <div class="text-sm text-gray-500 text-left">
        {{ user.login }}
      </div>
      <div class="text-sm text-gray-500 text-left">
        {{ user.email }}
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
    user: {
      type: Object as PropType<IUser>,
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<style scoped></style>
