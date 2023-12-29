import axios, {
  Method,
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'https://randomuser.me/api/',
  headers: {
    Authorization: '',
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
};

const api: AxiosInstance = axios.create(config);

export const request = <T>(
  method: Method,
  url: string,
  data?: any,
  params?: object,
  headers?: AxiosRequestHeaders,
): Promise<AxiosResponse<T>> => {
  return api.request<T>({
    method,
    url,
    data,
    params,
    headers,
  });
};

export const updateAxiosHeaders = (token: string) => {
  axios.defaults.headers.common.Authorization = token;
};
