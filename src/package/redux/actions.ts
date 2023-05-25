import { createAsyncAction } from '~/helpers';

const namespace = '@@FEED';

export const getPosts = createAsyncAction(`${namespace}/REQUEST_POSTS`);
