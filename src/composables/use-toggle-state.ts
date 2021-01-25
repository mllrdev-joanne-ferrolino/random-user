import { ref } from "vue";

export default () => {
  const state = ref<boolean>(false);

  function toggle() {
    state.value = !state.value;
  }

  function open() {
    state.value = true;
  }

  function close() {
    state.value = false;
  }

  return {
    state,
    toggle,
    open,
    close,
  };
};
