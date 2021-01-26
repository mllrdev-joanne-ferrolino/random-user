import { ref } from "vue";
import { IUser } from "@/models/IUser";
import { userService } from "@/services/user.service";
import useFormatUsers from "@/composables/use-format-users";

export default () => {
  const isLoading = ref<boolean>(false);
  const data = ref<IUser[]>([]);
  const error = ref<string>("");
  const { mapUser } = useFormatUsers();

  function execute(pageNumber: number, results: number) {
    isLoading.value = true;
    userService
      .fetchUsersByPage(pageNumber, results)
      .then((res: any) => {
        data.value = res.data.results.map(mapUser);
      })
      .catch((err: Error) => {
        console.log(err);
        error.value = err.message;
      })
      .finally(() => {
        isLoading.value = false;
      });
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
