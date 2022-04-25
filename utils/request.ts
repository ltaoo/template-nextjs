import axios from "axios";

const requ = axios.create({
  timeout: 12000,
});

let cachedToken: null | string = null;
function getToken(): string {
  // read cookie？
  return "";
}
export function refreshToken() {
  cachedToken = getToken();
}
getToken();

requ.interceptors.request.use(
  (config) => {
    if (cachedToken) {
      config.headers = config.headers || {};
      config.headers["authorization"] = `Bearer ${cachedToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

requ.interceptors.response.use(
  (response) => {
    const { code } = response.data;
    if (code === 401) {
      // console.log("登录状态已过期");
      return Promise.reject({
        code: response.data.code,
        message: response.data.msg,
      });
    }
    if (code !== 0) {
      return Promise.reject({
        code: response.data.code,
        message: response.data.msg,
      });
    }
    return response.data.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const request = {
  get: (url: string, options?: Record<string, any>) => {
    return requ.get(url, {
      params: options,
    }) as Promise<unknown>;
  },
  post: (url: string, body?: Record<string, any>) => {
    return requ.post(url, body) as Promise<unknown>;
  },
};
export default request;

// export default request;
