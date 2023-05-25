import { createReducer } from '@reduxjs/toolkit';
import { getPosts } from './actions';

export type Post = {
  title: string;
  author: string;
  genre: string;
  content: string;
};

export type State = {
  feed: {
    posts: Post[];
    total: number;
  };
};

const initialState = {
  feed: {
    posts: [],
    total: 0,
  },
};

const feed = createReducer({ ...initialState.feed }, {
  [getPosts.success.type]: (state, { payload }) => {
    const { items, total } = payload;

    state.posts = items;
    state.total = total;
  },
});

const reducers = {
  feed,
};

export default reducers;
