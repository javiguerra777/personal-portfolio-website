const GetEnvironmentUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:4000/';
  }
  return process.env.REACT_APP_SERVER_URI;
};
export const EnvironmentBaseUrl = GetEnvironmentUrl();
export default {};
