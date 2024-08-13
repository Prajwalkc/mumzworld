import {type IEnvironment} from './types';

import {BASE_API_STG} from 'react-native-dotenv';

const stg: IEnvironment = {
  NODE_ENV: 'staging',
  NODE_ENV_SHORT: 'stg',
  REDIRECT_URL: 'mumzworld.stg://',
  API_URL: BASE_API_STG,
  BUNDLE_ID: 'com.mumzworld.stg',
};

export default stg;
