import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://randomuser.me/api",
  headers: {
    "Content-type": "application/json",
  },
});

export const apiService = {
  get(url: string, data?: Record<string, any>) {
    return httpClient.get(url, data).then((x) => {
      return {
        data: x.data,
      };
    });
  },
  post(url: string, data?: Record<string, any>) {
    return httpClient.post(url, data).then((x) => {
      return {
        status: x.status,
        data: x.data,
      };
    });
  },
};

// function getAll(pageNumber: number) {
//   return http.get(`/?results=${pageNumber}`);
// }

// export const apiService = { getAll };
