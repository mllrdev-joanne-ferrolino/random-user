<template>
  <div>
    <user-item
      v-for="(item, index) in data"
      :key="index"
      :user="item"
    ></user-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import UserItem from '@/user/components/user-item.vue';
import { IUser } from '@/models/IUser';

export default defineComponent({
  components: {
    UserItem,
  },
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
