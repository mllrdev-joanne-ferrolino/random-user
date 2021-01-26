import { IUser } from "@/models/IUser";
import { apiService } from "@/services/api.service";

function mapUser(result: any) {
  const user: IUser = {
    name: [result.name.first, result.name.last].join(" "),
    email: result.email,
    picture: result.picture.thumbnail,
    login: result.login.username,
  };
  return user;
}

function fetchUsers(pageResults: number) {
  return apiService.get(`/?results=${pageResults}`);
}

function fetchUsersByPage(pageNumber: number, results: number) {
  return apiService.get(`/?page=${pageNumber}&results=${results}&seed=set`);
}

export const userService = { mapUser, fetchUsers, fetchUsersByPage };
