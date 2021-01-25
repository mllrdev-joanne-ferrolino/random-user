import { IUser } from "@/models/IUser";
import { apiService } from "@/services/api.service";
import { ref } from "vue";

function fetchUsers() {
  apiService.get;
}

function normalizeUser(result: any) {
  const user: IUser = {
    name: [result.name.first, result.name.last].join(" "),
    email: result.email,
    picture: result.picture.thumbnail,
    login: result.login.username,
  };
  return user;
}

function retrieveUsers(pageResults: number) {
  // const data = ref([]);
  // apiService
  //   .getAll(pageResults)
  //   .then((response) => {
  //     data.value = response.data.results.map(normalizeUser);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
  // return data;
}

export const userService = { normalizeUser, retrieveUsers };
