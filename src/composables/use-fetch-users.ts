import { apiService } from "@/services/api.service";
import { ref } from "vue";
import { IUser } from "@/models/IUser";
import { userService } from "@/services/user.service";

export default () => {
  const isLoading = ref<boolean>(false);
  const data = ref<IUser[]>([]);
  const error = ref<string>("");

  //   function onDone(callback: (data: ))

  //   function onError(callback: (err: Error) => any) {
  //       callback();
  //   }

  function execute(pageNumber: number) {
    isLoading.value = true;
    apiService
      .get(`/?results=${pageNumber}`)
      .then((res) => {
        data.value = res.data.results.map(userService.normalizeUser);
        console.log(data.value);
      })
      .catch((err) => {
        console.log(err);
        error.value = err.message;
      })
      .finally(() => {
        isLoading.value = false;
      });
  }

  return {
    isLoading,
    data,
    execute,
    error,
    //   onDone,
    //   onError
  };
};
