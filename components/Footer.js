export const Footer = () => {
  return (
    <footer className="border-t border-neutral-300 bg-white bg-white px-6 py-8">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
        <p className="text-center text-lg italic md:text-left">
          © 2020 Todoapp-Powered by Prismic
        </p>
        <div className="grid grid-flow-col justify-center gap-8 md:justify-end">
          <img
            src="/images/facebook.png"
            alt="Facebook social icon"
            className="w-5"
          />
          <img
            src="/images/instagram.png"
            alt="Instagram social icon"
            className="w-5"
          />
          <img
            src="/images/twitter.png"
            alt="Twitter social icon"
            className="w-5"
          />
        </div>
      </div>
    </footer>
  );
};
