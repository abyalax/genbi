import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { envServer } from '~/common/env/server';

export const axiosRequest: AxiosRequestConfig = {
  baseURL: envServer.BASE_URL_API,
  withCredentials: true,
};

export const api = axios.create(axiosRequest);
