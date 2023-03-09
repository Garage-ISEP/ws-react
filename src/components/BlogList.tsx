import { useState } from 'react';
import { BlogCard } from './BlogCard';

export const BlogList = (props: any) => {
  const [data, setData] = useState(props.data);
  console.log(data);
  return (
    <div className="grid place-items-center mb-12">
      {data.map((item: any) => (
        <BlogCard
          id={item.id}
          title={item.title}
          shortDescription={item.shortDescription}
          longDescription={item.longDescription}
          likes={item.likes}
          image={item.image}
          key={item.id}
        />
      ))}
    </div>
  );
};
