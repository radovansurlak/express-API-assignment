import dotenv from 'dotenv';

const ENV_VARS = ['MONGODB_URI', 'JWT_SECRET'] as const;

export type ENV_VALUES = {
  [K in typeof ENV_VARS[number]]: string;
};

function loadConfig() {
  dotenv.config();

  const config = ENV_VARS.reduce((acc, curr) => {
    const value = process.env[curr];
    if (!value) {
      throw new Error(`Missing ENV variable: ${curr}`);
    }
    acc[curr] = value;
    return acc;
  }, {} as ENV_VALUES);

  return config;
}

export const appConfig = loadConfig();
