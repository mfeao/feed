import { createSelector } from '@reduxjs/toolkit';
import { slug } from '../helpers';
import type { State } from './reducers';

const feedSlice = (state: State) => state.feed;

export const selectPosts = createSelector(
  [feedSlice],
  (feed) => feed.posts,
);

export const selectPostBySlug = (postSlug: string) => createSelector(
  [selectPosts],
  (posts) => posts.find(({ title }) => slug(title) === postSlug),
);
