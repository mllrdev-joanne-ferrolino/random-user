<template>
  <div>
    <user-card></user-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import UserCard from "@/components/UserCard.vue";
import { IUser } from "@/models/IUser";

export default defineComponent({
  components: { UserCard },
  name: "ProfilePage",
  component: {
    UserCard,
  },
  props: {
    name: {
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
