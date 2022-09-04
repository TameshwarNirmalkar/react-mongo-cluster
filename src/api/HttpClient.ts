import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_ENDPOINT}/api/`,
  timeout: 3600,
});

axios.defaults.headers.common["Authorization"] = `Bearer `;

instance.interceptors.request.use(
  (req) => {
    if (axios.defaults.headers.common["Authorization"]) {
      return req;
    } else {
      throw new Error("Authorization token is not available");
    }
  },
  (error) => Promise.reject(error.req)
);

instance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: { response: AxiosResponse }) => Promise.reject(error.response)
);

interface ConfigInterfaceI {
  headers?: {
    Authorization?: string;
    Accept?: string;
  };
}

class HttpClient {
  getAccessToken() {
    return `Bearer `;
  }

  getClientInfo() {
    let data: any = "null";
    return JSON.parse(data);
  }

  async get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: ConfigInterfaceI
  ) {
    return await instance.request<AxiosRequestConfig>({
      method: "GET",
      url,
      headers: { Authorization: this.getAccessToken() },
      ...config,
    });
  }

  async post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: ConfigInterfaceI
  ) {
    return await instance.request<AxiosRequestConfig>({
      method: "POST",
      url,
      data,
      headers: { Authorization: this.getAccessToken() },
      ...config,
    });
  }

  async put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: ConfigInterfaceI
  ) {
    return await instance.request<AxiosRequestConfig>({
      method: "PUT",
      url,
      data,
      headers: { Authorization: this.getAccessToken() },
      ...config,
    });
  }

  async patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: ConfigInterfaceI
  ) {
    return await instance.request<AxiosRequestConfig>({
      method: "PATCH",
      url,
      data,
      headers: { Authorization: this.getAccessToken() },
      ...config,
    });
  }

  async delete<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: ConfigInterfaceI
  ) {
    return await instance.request<AxiosRequestConfig>({
      method: "DELETE",
      url,
      data,
      headers: { Authorization: this.getAccessToken() },
      ...config,
    });
  }
}

export default new HttpClient();
