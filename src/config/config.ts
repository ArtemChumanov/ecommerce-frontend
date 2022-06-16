import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://nestjs-boilerplate-test.herokuapp.com/api/v1/",
});

axios.defaults.withCredentials = true;

apiClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const newConfigs = { ...config };
    // const token: string | null = localStorage.getItem("access_token");
    // if (token) {
    //   // @ts-ignore
    //   newConfigs?.headers.Authorization = `Bearer ${token}`;
    // }
    return newConfigs;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
