import {
  consoleTransport,
  logger,
  type configLoggerType,
  type transportFunctionType,
} from 'react-native-logs';

type primitiveType = string | number | boolean | null | undefined;
export interface Log {
  debug: (message: string, ...args: primitiveType[]) => void;
  info: (message: string, ...args: primitiveType[]) => void;
  warn: (message: string, ...args: primitiveType[]) => void;
  error: (message: string, ...args: primitiveType[]) => void;
}

const transports: transportFunctionType = (props: any) => {
  consoleTransport(props);
};

const config: configLoggerType = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  severity: 'debug',
  transport: transports,
  transportOptions: {
    colors: {
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
  async: true,
  dateFormat: 'iso',
  printDate: true,
  enabled: true,
};

const createdLogger = logger.createLogger(config);

const debug = (m: string, ...args: primitiveType[]): void => {
  const message = `${m}`;
  if (__DEV__) {
    createdLogger.debug(message, ...args);
  }
};

const info = (m: string, ...args: primitiveType[]): void => {
  const message = `ℹ️ ${m}`;
  if (__DEV__) {
    createdLogger.info(message, ...args);
  }
};

const warn = (m: string, ...args: primitiveType[]): void => {
  const message = `😕 ${m}`;
  if (__DEV__) {
    createdLogger.warn(message, ...args);
  }
};

const error = (m: string, ...args: primitiveType[]): void => {
  const message = `🔴 ${m}`;
  if (__DEV__) {
    createdLogger.error(message, ...args);
  }
};

const log: Log = {debug, info, warn, error};

export default log;
