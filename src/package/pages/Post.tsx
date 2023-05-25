import { Button, Note, PageHeader } from '@mfeao/uikit';
import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetPosts } from '~/hooks';
import type { Post as PostType } from '~/redux';
import { selectPostBySlug } from '~/redux';

const Post: FunctionComponent = () => {
  useGetPosts();

  const { postSlug } = useParams();
  const post: PostType | undefined = useSelector(selectPostBySlug(postSlug as string));

  if (!post) {
    return null;
  }

  return (
    <div className="w-[992px] m-auto">
      <PageHeader title={post.title} />
      <div className="flex items-center space-x-4 mb-2">
        <span className="text-xs">Published at {new Date().toDateString()} by {post.author}</span>
        <span className="rounded-lg px-2 py-1 text-xs font-medium bg-gray-100">{post.genre}</span>
      </div>
      <Note>
        <p>{post.content}</p>
      </Note>
      <div className="flex items-center justify-between mt-8">
        <Button text="< Prev" type="outline" variant="secondary" />
        <Button text="Next >" type="outline" variant="primary" />
      </div>
    </div>
  );
};

export default Post;
