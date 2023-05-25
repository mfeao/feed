import { PageHeader } from '@mfeao/uikit';
import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { PostCard } from '~/components';
import { useGetPosts } from '~/hooks';
import type { Post } from '~/redux';
import { selectPosts } from '~/redux';

const Feed: FunctionComponent = () => {
  useGetPosts();

  const posts: Post[] = useSelector(selectPosts);

  return (
    <div className="w-[992px] m-auto">
      <PageHeader title="Feed" />
      <div className="grid grid-cols-3 gap-x-8 gap-y-12">
        {posts.map((post, idx) => (
          <PostCard
            key={idx}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
