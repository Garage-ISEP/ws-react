import { BlogList } from '../components/BlogList';
import { BlogData } from '../data/data';

export const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline mt-10 mb-10">Home</h1>
      <BlogList data={BlogData} />
    </div>
  );
};
