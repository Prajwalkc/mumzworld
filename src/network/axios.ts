import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';
import envConfig from '../../config';
import log from '../utils/logs';
import {ERROR_STATUS_CODES} from './types';

const axiosInstance = axios.create({
  baseURL: envConfig.apiUrl,
});

const logout = () => {
  log.info('logging out');
};

const token = 'old token';

const handleErrorResponse = async (
  response: AxiosResponse,
): Promise<AxiosResponse | AxiosError> => {
  const status = response?.request?.status;
  if (status === ERROR_STATUS_CODES.FORBIDDN) {
    // since the user is forbidden we need to implement the log out
  }
  if (status === ERROR_STATUS_CODES.UNAUTHORIZED) {
    // if the user is unauthorized, get a token and call api again
    try {
      const newToken = 'new token';
      const newConfig: AxiosRequestConfig = {
        ...response.config,
        headers: {
          Authorization: `Bearer ${newToken}`,
        },
      };
      return axiosInstance.request(newConfig);
    } catch (refreshError) {
      await logout();
      return refreshError as AxiosError;
    }
  } else {
    return response;
  }
};

const handleResponse = async (
  response: AxiosResponse,
): Promise<AxiosResponse> => {
  return response;
};

axiosInstance.interceptors.response.use(handleResponse, handleErrorResponse);
axiosInstance.interceptors.request.use(async config => {
  config.headers.Authorization =
    config.headers.Authorization ?? `Bearer ${token}`;
  return config;
});

export default axiosInstance;
