import { useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function UseDisplayServerError(error: any) {
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
