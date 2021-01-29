import { apiService } from "@/services/api.service";

export const userService = {
  getUsers(pageResults: number) {
    return apiService.get(`/?results=${pageResults}`);
  },
  getUsersByPage(pageNumber: number, results: number) {
    return apiService.get(`/?page=${pageNumber}&results=${results}&seed=set`);
  },
};
