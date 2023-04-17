import React from 'react';
import { useAppSelector } from '../../app/store/hooks';
import { shallowEqual } from 'react-redux';

const UseGetLoading = () => {
  const loading = useAppSelector((state) => state.loading, shallowEqual);
  return loading;
}

export default UseGetLoading;