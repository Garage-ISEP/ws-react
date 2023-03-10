import { useState } from 'react';
import { BlogCard } from './BlogCard';

export const BlogList = (props: any) => {
  const [data, setData] = useState(props.data);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState('');

  const addArticle = (e: any) => {
    e.preventDefault();
    if (
      newTitle.length >= 2 &&
      newDescription.length >= 2 &&
      newImage.length >= 2
    ) {
      const lastEl = data[data.length - 1];
      const newArticle = {
        id: lastEl.id + 1,
        title: newTitle,
        shortDescription:
          newDescription.substring(0, newDescription.length / 2) + '...',
        longDescription: newDescription,
        likes: 0,
        image: newImage,
      };
      const newData = [...data, { ...newArticle }];
      setData(newData);
    }
  };

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
      ))}{' '}
      <div className="w-1/3 text-lg mt-10 mb-10">
        <form onSubmit={addArticle}>
          <div className="mb-4">
            <label className="block font-bold mb-2 text-left">
              Ajouter un titre
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3"
              id="username"
              type="text"
              placeholder="Titre"
              onChange={(e) => setNewTitle(e.target.value)}
              value={newTitle}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2 text-left">
              Ajouter une image
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3"
              id="username"
              type="url"
              placeholder="Lien de l'image"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2 text-left">
              Ajouter une description
            </label>
            <textarea
              className="shadow border rounded w-full py-2 px-3 mb-3"
              placeholder="Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Ajouter un article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
