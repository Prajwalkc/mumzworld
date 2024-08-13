export interface IEnvironment {
  NODE_ENV: 'development' | 'staging' | 'production';
  NODE_ENV_SHORT: 'dev' | 'stg' | 'prd';
  REDIRECT_URL: 'mumzworld.dev://' | 'mumzworld.stg://' | 'mumzworld.prd://';
  BUNDLE_ID: 'com.mumzworld.dev' | 'com.mumzworld.stg' | 'com.mumzworld';
  API_URL: string;
}

export interface IConfig {
  env: 'development' | 'staging' | 'production';
  envShort: 'dev' | 'stg' | 'prd';
  redirectUrl:
    | 'mumzworld.dev://'
    | 'mumzworld.stg://'
    | 'mumzworld.prd://'
    | 'mumzworld://';
  bundleId: 'com.mumzworld.dev' | 'com.mumzworld.stg' | 'com.mumzworld';
  buildId: number;
  apiUrl: string;
  isDev: boolean;
  isStg: boolean;
  isPrd: boolean;
}
