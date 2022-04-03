import React from 'react';

const ErrorPage = () => {
  return (
    <main className="pt-[5.5rem] lg:pt-24">
      <section className="relative py-16 dark:bg-jacarta-800 md:py-24">
        <picture className="absolute inset-0 pointer-events-none -z-10 dark:hidden">
          <img
            src="img/gradient_light.jpg"
            alt="gradient"
            className="w-full h-full"
          />
        </picture>
        <div className="container">
          <div className="max-w-lg mx-auto text-center">
            <img
              src="img/404.png"
              alt=""
              className="inline-block mb-16"
            />
            <h1 className="mb-6 text-4xl text-jacarta-700 font-display dark:text-white md:text-6xl">
              Page Not Found!
            </h1>
            <p className="mb-12 text-lg leading-normal dark:text-jacarta-300">
              Oops! The page you are looking for does not exist. It
              might have been moved or deleted.
            </p>
            <a
              href="index.html"
              className="inline-block px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark"
            >
              Navigate Back Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
