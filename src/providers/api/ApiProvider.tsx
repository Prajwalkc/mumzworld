import axios from 'axios';
import React from 'react';
import {APIContext, type IAPIProviderProps} from './types';

const ApiProvider: React.FC<IAPIProviderProps> = ({children}) => {
  const axiosInstance = axios.create();
  return (
    <APIContext.Provider value={{axiosInstance}}>
      {children}
    </APIContext.Provider>
  );
};

export default ApiProvider;
