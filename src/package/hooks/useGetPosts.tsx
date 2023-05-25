import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '~/redux';

const useGetPosts: FunctionComponent<void> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts.request());

    // This effect needs to be run only on the component mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default useGetPosts;
