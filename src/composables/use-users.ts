import { ref } from "vue";
import { IUser } from "@/models/IUser";
import { userService } from "@/services/user.service";
import toUserViewModel from "@/factory/user.factory.ts";

export default () => {
  const isLoading = ref<boolean>(false);
  const data = ref<IUser[]>([]);
  const error = ref<Error>({ name: "", message: "", stack: "" });

  async function fetchUsers(pageNumber: number, itemsPerPage: number) {
    try {
      isLoading.value = true;
      const response = await userService.getUsersByPage(
        pageNumber,
        itemsPerPage
      );
      data.value = response.data.results.map(toUserViewModel);
    } catch (err) {
      error.value = { name: err.name, message: err.message, stack: err.stack };
    } finally {
      isLoading.value = false;
    }
  }

  return {
    isLoading,
    data,
    fetchUsers,
    error,
  };
};
