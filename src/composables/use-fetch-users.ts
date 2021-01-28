import { ref } from "vue";
import { IUser } from "@/models/IUser";
import { userService } from "@/services/user.service";
import toUser from "@/factory/user";

export default () => {
  const isLoading = ref<boolean>(false);
  const data = ref<IUser[]>([]);
  const error = ref<string>("");
  const resultsPerPage = ref<number>(5);

  async function execute(pageNumber: number, results: number) {
    isLoading.value = true;
    try {
      const response = await userService.fetchUsersByPage(pageNumber, results);
      if (response) {
        data.value = response.data.results.map(toUser);
      }
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
    isLoading.value = false;
  }

  return {
    isLoading,
    data,
    execute,
    error,
    resultsPerPage,
  };
};