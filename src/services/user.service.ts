import { apiService } from "@/services/api.service";

async function fetchUsers(pageResults: number) {
  return await apiService.get(`/?results=${pageResults}`);
}

async function fetchUsersByPage(pageNumber: number, results: number) {
  return await apiService.get(
    `/?page=${pageNumber}&results=${results}&seed=set`
  );
}

export const userService = { fetchUsers, fetchUsersByPage };
