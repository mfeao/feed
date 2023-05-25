import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { slug, truncate } from '~/helpers';

type Props = {
  post: {
    title: string;
    author: string;
    genre: string;
    content: string;
  };
};

const PostCard: FunctionComponent<Props> = ({ post }) => (
  <Link to={slug(post.title)} className="group flex flex-col px-4 py-8 transition-colors hover:bg-gray-50 hover:shadow">
    <div className="flex items-center space-x-4 mb-2">
      <span className="text-xs">{new Date().toDateString()}</span>
      <span className="rounded-lg px-2 py-1 text-xs font-medium bg-gray-100">{post.genre}</span>
    </div>
    <div className="mb-4 font-medium text-lg text-gray-900 transition-colors group-hover:text-primary">{post.title}</div>
    <div className="grow mb-4 text-sm">{truncate(post.content)}</div>
    <div className="border-l-2 border-gray-900 pl-2 py-1 text-sm text-gray-900 font-medium italic">{post.author}</div>
  </Link>
);

export default PostCard;
