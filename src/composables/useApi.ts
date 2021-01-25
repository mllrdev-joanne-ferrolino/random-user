import { ref } from "vue";
import axios from "axios";

export function useApi() {
  const loading = ref(true);
  const data = ref(null);

  function fetchData() {
    return fetch("https://randomuser.me/api/?results=20", {
      method: "get",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        // if (res.ok) {
        //   console.log(res.json);
        //   return res.json();
        // } else {
        //   console.log(
        //     "Server returned: " + res.status + " : " + res.statusText
        //   );
        // }

        if (!res.ok) {
          const error = new Error(res.statusText);
          throw error;
        }

        console.log(data);
        return res.json();
      })
      .then((json) => {
        data.value = json.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        loading.value = false;
      });

    // return axios.get('https://randomuser.me/api/?results=10').then(response => {
    //     data.value = response
    // });
  }

  return { loading, data, fetchData };
}
