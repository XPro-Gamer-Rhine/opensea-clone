import React from 'react';

const Banner = () => {
  return (
    <section className="relative pb-10 pt-20 md:pt-32 lg:h-[88vh]">
      <picture className="absolute inset-x-0 top-0 pointer-events-none -z-10 dark:hidden">
        <img src="img/gradient.jpg" alt="gradient" />
      </picture>
      <picture className="absolute inset-x-0 top-0 hidden pointer-events-none -z-10 dark:block">
        <img src="img/gradient_dark.jpg" alt="gradient dark" />
      </picture>
      <div className="container h-full">
        <div className="grid items-center h-full gap-4 md:grid-cols-12">
          <div className="flex flex-col items-center justify-center h-full col-span-6 py-10 md:items-start md:py-20 xl:col-span-4">
            <h1 className="mb-6 text-5xl text-center text-jacarta-700 font-display dark:text-white md:text-left lg:text-6xl xl:text-7xl">
              Buy, sell and collect NFTs.
            </h1>
            <p className="mb-8 text-lg text-center dark:text-jacarta-300 md:text-left">
              The world's largest digital marketplace for crypto
              collectibles and non-fungible tokens
            </p>
            <div className="flex space-x-4">
              <a
                href="create.html"
                className="px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark w-36"
              >
                Upload
              </a>
              <a
                href="collections.html"
                className="px-8 py-3 font-semibold text-center transition-all bg-white rounded-full text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 hover:text-white"
              >
                Explore
              </a>
            </div>
          </div>
          <div className="col-span-6 xl:col-span-8">
            <div className="relative text-center md:pl-8 md:text-right">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]"
              >
                <defs>
                  <clipPath
                    id="clipping"
                    clipPathUnits="userSpaceOnUse"
                  >
                    <path
                      d="
              M 0, 100
              C 0, 17.000000000000004 17.000000000000004, 0 100, 0
              S 200, 17.000000000000004 200, 100
                  183, 200 100, 200
                  0, 183 0, 100
          "
                      fill="#9446ED"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#clipping)">
                  <image
                    href="img/hero/hero.jpg"
                    width={200}
                    height={200}
                    clipPath="url(#clipping)"
                  />
                </g>
              </svg>
              <img
                src="img/hero/3D_elements.png"
                alt=""
                className="animate-fly absolute top-0 md:-right-[10%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
