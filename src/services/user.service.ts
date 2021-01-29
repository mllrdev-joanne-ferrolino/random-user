import { apiService } from "@/services/api.service";

export const userService = {
  fetchUsers(pageResults: number) {
    return apiService.get(`/?results=${pageResults}`);
  },
  fetchUsersByPage(pageNumber: number, results: number) {
    return apiService.get(`/?page=${pageNumber}&results=${results}&seed=set`);
  },
};
