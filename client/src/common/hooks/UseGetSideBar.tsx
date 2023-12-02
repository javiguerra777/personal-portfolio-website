import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../../app/store/hooks';

const UseGetSideBar = () => {
  const sidebar = useAppSelector(
    (state) => state.sidebar,
    shallowEqual,
  );
  return sidebar;
};

export default UseGetSideBar;
