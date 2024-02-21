import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 5000,
});

const name = "izhar";

//request intercept
api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Salman ` + name;
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//response intercept
api.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (err) => {
    if (err.response) {
      //error come from server
      err.message = `Error from server : status: ${err.response.status} - massage: ${err.response.statusText}`;
    }
    return Promise.reject(err);
  }
);

export default api;
