export const getEnvVar = (key, defaultValue) => {
  const value = process.env[key] || defaultValue;
  if (!value) {
    throw new Error(`Environment variable ${key} is missing`);
  }
  return value;
};
