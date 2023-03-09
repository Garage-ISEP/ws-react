import { FC, useState } from 'react';

interface Props {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  likes: number;
  image: string;
}

export const BlogCard: FC<Props> = ({
  id,
  title,
  shortDescription,
  longDescription,
  likes,
  image,
}) => {
  const [likesPost, setLikes] = useState(likes);
  const [liked, setIsLiked] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const likeButton = () => {
    setLikes(liked ? likesPost - 1 : likesPost + 1);
    setIsLiked(!liked);
  };

  const showMoreButton = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="px-4 bg-gray-300 mb-8 w-1/3 rounded py-4 shadow-lg text-left">
      <img
        src={image}
        alt={title}
        className="rounded h-60 w-full object-cover"
      />
      <h1 className="font-bold mt-3 mb-4 text-xl">{title}</h1>
      <p>{showMore ? longDescription : shortDescription}</p>
      <div className="flex justify-between mt-6 items-center">
        <div className="flex items-center">
          <img
            src={`/images/${liked ? 'liked' : '/notliked'}.png`}
            alt="like"
            className="h-6 mr-2 cursor-pointer"
            onClick={() => likeButton()}
          />
          <p className="text-black text-lg font-semibold text-blue-800">
            {likesPost}
          </p>
        </div>
        <p
          className="underline text-sm cursor-pointer"
          onClick={() => showMoreButton()}
        >
          {showMore ? 'Voir moins' : 'Voir plus'}
        </p>
      </div>
    </div>
  );
};
