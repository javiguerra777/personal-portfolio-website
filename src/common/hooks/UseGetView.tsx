import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../../app/store/hooks';

const UseGetView = () => {
  const view = useAppSelector((state) => state.view, shallowEqual);
  return view;
};

export default UseGetView;
