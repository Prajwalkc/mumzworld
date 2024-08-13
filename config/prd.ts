import {type IEnvironment} from './types';

import {BASE_API_PRD} from 'react-native-dotenv';

const prd: IEnvironment = {
  NODE_ENV: 'development',
  NODE_ENV_SHORT: 'dev',
  REDIRECT_URL: 'mumzworld.prd://',
  API_URL: BASE_API_PRD,
  BUNDLE_ID: 'com.mumzworld',
};

export default prd;
