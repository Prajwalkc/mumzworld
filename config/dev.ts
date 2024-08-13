import {type IEnvironment} from './types';

import {BASE_API_DEV} from 'react-native-dotenv';

const dev: IEnvironment = {
  NODE_ENV: 'development',
  NODE_ENV_SHORT: 'dev',
  REDIRECT_URL: 'mumzworld.dev://',
  API_URL: BASE_API_DEV,
  BUNDLE_ID: 'com.mumzworld.dev',
};

export default dev;
