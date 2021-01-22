import http from "../http-common";

async function getAll() {
  return await http.get("/?results=20");
}

export const userService = { getAll };
