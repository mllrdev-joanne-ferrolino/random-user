import { userService } from "@/services/user.service";

export function useUsers() {
  const users = userService.retrieveUsers(10);
  return { users };
}
