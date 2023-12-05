const GetEnvironmentUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:4000/';
  }
  return 'https://api.localhost.com/'; // TODO: change to production url
};
export const EnvironmentBaseUrl = GetEnvironmentUrl();
export default {};
