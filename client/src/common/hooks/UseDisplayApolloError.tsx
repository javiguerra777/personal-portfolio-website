import { useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ApolloError } from '@apollo/client';

export default function UseDisplayApolloError(
  error: ApolloError | undefined,
) {
  const toastError = useCallback(() => {
    if (error) {
      toast.error(error.message, {
        position: 'top-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  }, [error]);
  useEffect(() => {
    toastError();
  }, [toastError]);
}
