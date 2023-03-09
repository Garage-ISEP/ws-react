import { useNavigate } from 'react-router-dom';

export const About = () => {
  const navigate = useNavigate();

  return (
    <div className="grid place-items-center mx-20">
      <div className="w-1/2">
        <h1 className="text-3xl font-bold underline mt-10 mb-16">About us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          gravida volutpat ligula, in varius urna tincidunt sit amet. Ut sed
          consectetur nisi. Nunc non eros luctus, luctus libero maximus, cursus
          tortor. Aliquam lacus velit, dapibus sit amet interdum et, imperdiet
          at lorem. Quisque et faucibus massa. Sed aliquet lacinia mauris,
          luctus laoreet justo sodales quis. Nullam nibh lorem, finibus et
          turpis eget, dignissim cursus ex. Nam at pharetra libero. Donec ex
          velit, egestas a varius in, volutpat ornare est. Phasellus neque mi,
          finibus eget aliquam id, feugiat a orci. Nunc nec imperdiet nibh.
          Aliquam volutpat non justo ut condimentum. Maecenas auctor urna
          tristique, gravida elit vel, iaculis odio. Sed rutrum felis eu
          ultricies porttitor.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20"
          onClick={() => navigate('/')}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};
