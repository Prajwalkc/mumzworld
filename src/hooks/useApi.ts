import type {AxiosResponse} from 'axios';
import {useCallback, useContext} from 'react';
import envConfig from '../../config';
import {APIContext, APIMode, IAPIContext} from '../providers/api/types';

interface IUseApiHook {
  makeApiCall: (
    url: string,
    apiMode: APIMode,
    params?: any,
    headersContent?: any,
  ) => Promise<AxiosResponse>;
}

const useApi = (): IUseApiHook => {
  const {axiosInstance} = useContext<IAPIContext | any>(APIContext);
  const makeGetApiCall = useCallback(
    async (apiUrl: string, params?: any) => {
      const response = await axiosInstance.get(apiUrl, {
        params,
      });
      return response;
    },
    [axiosInstance],
  );

  const makePostApiCall = useCallback(
    async (apiUrl: string, params: any, headersContent?: any) => {
      const response: AxiosResponse = await axiosInstance.post(apiUrl, params, {
        headers: headersContent !== undefined ? headersContent : {},
      });

      return response;
    },
    [axiosInstance],
  );

  const makeApiCall = async (
    url: string,
    apiMode: APIMode,
    params?: any,
    headersContent?: any,
  ): Promise<AxiosResponse> => {
    const apiUrl = envConfig.apiUrl + url;

    try {
      switch (apiMode) {
        case APIMode.GET: {
          const getResponse = await makeGetApiCall(apiUrl, params);
          return getResponse;
        }
        case APIMode.POST: {
          const postResponse = await makePostApiCall(
            apiUrl,
            params,
            headersContent,
          );
          // console.log('post response', postResponse)
          return postResponse;
        }
        default: {
          const postResponse = await makePostApiCall(apiUrl, params);
          // console.log('post response', postResponse)
          return postResponse;
        }
      }
    } catch (e: any) {
      console.log('error while making api call', e);
      const status = e?.status;
      if (status === 410) {
        // console.log('status is 410 for logout')
        //    replace('Auth')
      }
      throw e;
    }
  };

  return {
    makeApiCall,
  };
};

export default useApi;
