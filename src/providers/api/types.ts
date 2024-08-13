import {type AxiosInstance} from 'axios';
import {createContext} from 'react';

const initLoadingContext: IAPIContext = {
  axiosInstance: null,
};

export const APIContext = createContext<IAPIContext | any>(initLoadingContext);

export const APIConsumer = APIContext.Consumer;

export enum APIMode {
  GET = 'GET',
  POST = 'POST',
}

export interface IAPIProviderProps {
  children: React.ReactNode;
}

export interface INetworkProviderProps {
  children: React.ReactNode;
}
export interface IAPIContext {
  axiosInstance: AxiosInstance | any;
}
