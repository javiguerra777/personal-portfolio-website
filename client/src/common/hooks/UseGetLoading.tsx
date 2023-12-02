import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../../app/store/hooks';

const UseGetLoading = () => {
  const loading = useAppSelector(
    (state) => state.loading,
    shallowEqual,
  );
  return loading;
};

export default UseGetLoading;
