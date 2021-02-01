import { ref } from "vue";
import { IUser } from "@/models/IUser";
import { userService } from "@/services/user.service";
import toUser from "@/factory/user.factory.ts";

export default () => {
  const isLoading = ref<boolean>(false);
  const data = ref<IUser[]>([]);
  const errorMessage = ref<string>("");
  const usersPerPage = ref<number>(5);
  const pageNumber = ref<number>(1);

  async function fetchUsers(pageNumber: number, results: number) {
    try {
      isLoading.value = true;
      const response = await userService.getUsersByPage(pageNumber, results);
      data.value = response.data.results.map(toUser);
    } catch (err) {
      console.log(err);
      errorMessage.value = err.message;
    } finally {
      isLoading.value = false;
    }
  }

  function updateUsers(option: number) {
    usersPerPage.value = option;
  }

  return {
    isLoading,
    data,
    fetchUsers,
    errorMessage,
    usersPerPage,
    updateUsers,
    pageNumber,
  };
};
