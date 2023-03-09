export const Header = () => {
  return (
    <header className="grid place-items-center mb-5 mt-5">
      <div className="w-1/2">
        <div className="flex justify-between items-center	">
          <img
            className="object-scale-down h-20 mr-60"
            src="https://cdn.devdojo.com/tails/images/QL2K5DTLLktLTeLfDOZ5ub5wDfXvf1NciZC15uNo.png"
            alt="logo"
          />
          <div>
            <a
              href="/"
              className="mr-5 underline text-lg font-semibold hover:text-gray-600"
            >
              Home
            </a>
            <a
              href="/about"
              className="underline text-lg font-semibold hover:text-gray-600"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
