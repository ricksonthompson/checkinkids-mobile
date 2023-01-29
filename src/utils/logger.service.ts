import {consoleTransport, logger as log} from 'react-native-logs';

export const logger = log.createLogger({
  transport: consoleTransport,
  transportOptions: {
    colors: {
      info: "blueBright",
      warn: "yellowBright",
      error: "redBright",
    },
  },
});
