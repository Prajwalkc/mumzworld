import {Platform} from 'react-native';

import dev from './dev';
import prd from './prd';
import stg from './stg';

import {type IConfig, type IEnvironment} from './types';

const BuildConfig = require('react-native-build-config');

const getConfig = (): IConfig => {
  if (Platform.OS === 'ios') {
    if (BuildConfig?.default.CFBundleName !== undefined) {
      switch (BuildConfig.default.CFBundleName) {
        case 'MumzworldDev':
          return config(dev);
        case 'MumzworldStg':
          return config(stg);
        case 'mumzworld':
          return config(prd);
        default:
          return config(dev);
      }
    } else {
      return config(dev);
    }
  } else if (Platform.OS === 'android') {
    if (BuildConfig?.default?.FLAVOR !== undefined) {
      switch (BuildConfig.default.FLAVOR) {
        case 'development':
          return config(dev);
        case 'staging':
          return config(stg);
        case 'production':
          return config(prd);
        default:
          return config(prd);
      }
    } else {
      return config(dev);
    }
  } else {
    return config(dev);
  }
};

const config = (environment: IEnvironment): IConfig => {
  return {
    env: environment.NODE_ENV,
    envShort: environment.NODE_ENV_SHORT,
    redirectUrl: environment.REDIRECT_URL,
    bundleId: environment.BUNDLE_ID,
    buildId: 99999,
    apiUrl: environment.API_URL,
    isDev: environment.NODE_ENV === 'development',
    isStg: environment.NODE_ENV === 'staging',
    isPrd: environment.NODE_ENV === 'production',
  };
};

const envConfig: IConfig = getConfig();

export default envConfig;
