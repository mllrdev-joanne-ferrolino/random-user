import { ref } from "vue";
import { IUser } from "@/models/IUser";
import { userService } from "@/services/user.service";
import userFactory from "@/factory/user";

export default () => {
  const isLoading = ref<boolean>(false);
  const data = ref<IUser[]>([]);
  const error = ref<string>("");
  const { toModel } = userFactory();

  async function execute(pageNumber: number, results: number) {
    isLoading.value = true;
    try {
      const response = await userService.fetchUsersByPage(pageNumber, results);
      if (response) {
        data.value = response.data.results.map(toModel);
      }
    } catch (error) {
      console.log(error);
      error.value = error.message;
    }
    isLoading.value = false;
  }

  // const info = ref({});

  //   function onDone(callback: (data: ))

  // function onError(callback: (err: Error) => any) {

  // }

  return {
    isLoading,
    data,
    execute,
    error,
    //   onDone,
    //   onError
  };
};
