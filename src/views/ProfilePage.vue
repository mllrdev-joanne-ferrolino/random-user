<template>
  <div>
    <user-card></user-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserCard from "@/components/UserCard.vue";

export default defineComponent({
  components: { UserCard },
  name: "ProfilePage",
  component: {
    UserCard,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
