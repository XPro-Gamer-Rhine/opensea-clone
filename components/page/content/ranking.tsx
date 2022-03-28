import React from 'react';

const Ranking = () => {
  return (
    <section className="relative py-24 dark:bg-jacarta-800">
      <picture className="absolute inset-0 pointer-events-none -z-10 dark:hidden">
        <img
          src="img/gradient_light.jpg"
          alt="gradient"
          className="h-full"
        />
      </picture>
      <div className="container">
        <div className="mb-12 text-3xl text-center font-display text-jacarta-700 dark:text-white">
          <h2 className="inline">Top collections over</h2>
          <div className="inline cursor-pointer dropdown">
            <button
              className="inline-flex items-center dropdown-toggle text-accent"
              type="button"
              id="collectionSort"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              last 7 days
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="w-8 h-8 fill-accent"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
              </svg>
            </button>
            <div
              className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl"
              aria-labelledby="collectionSort"
            >
              <a
                className="block px-5 py-2 text-sm transition-colors dropdown-item dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl"
                href="#"
              >
                Last 24 Hours
              </a>
              <a
                className="block px-5 py-2 text-sm transition-colors dropdown-item dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl"
                href="#"
              >
                Last 7 Days
              </a>
              <a
                className="block px-5 py-2 text-sm transition-colors dropdown-item dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl"
                href="#"
              >
                Last 30 Days
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4">
          <div className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
            <figure className="mr-4 shrink-0">
              <a href="collection.html" className="relative block">
                <img
                  src="img/avatars/avatar_1.jpg"
                  alt="avatar 1"
                  className="rounded-2lg"
                  loading="lazy"
                />
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                  1
                </div>
                <div
                  className="dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                  data-tippy-content="Verified Collection"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="h-[.875rem] w-[.875rem] fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                </div>
              </a>
            </figure>
            <div>
              <a href="collection.html" className="block">
                <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                  NFT Funny Cat
                </span>
              </a>
              <span className="text-sm dark:text-jacarta-300">
                7,080.95 ETH
              </span>
            </div>
          </div>
          <div className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
            <figure className="mr-4 shrink-0">
              <a href="collection.html" className="relative block">
                <img
                  src="img/avatars/avatar_2.jpg"
                  alt="avatar 2"
                  className="rounded-2lg"
                  loading="lazy"
                />
                <div className="absolute flex items-center justify-center w-6 h-6 text-sm text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                  2
                </div>
                <div
                  className="dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                  data-tippy-content="Verified Collection"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="h-[.875rem] w-[.875rem] fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                </div>
              </a>
            </figure>
            <div>
              <a href="collection.html" className="block">
                <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                  Cryptopank
                </span>
              </a>
              <span className="text-sm dark:text-jacarta-300">
                6,548,133 ETH
              </span>
            </div>
          </div>
          <div className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
            <figure className="mr-4 shrink-0">
              <a href="collection.html" className="relative block">
                <img
                  src="img/avatars/avatar_3.jpg"
                  alt="avatar 3"
                  className="rounded-2lg"
                  loading="lazy"
                />
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                  3
                </div>
              </a>
            </figure>
            <div>
              <a href="collection.html" className="block">
                <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                  Prince Ape Planet
                </span>
              </a>
              <span className="text-sm dark:text-jacarta-300">
                4,823,927 ETH
              </span>
            </div>
          </div>
          <div className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
            <figure className="mr-4 shrink-0">
              <a href="collection.html" className="relative block">
                <img
                  src="img/avatars/avatar_4.jpg"
                  alt="avatar 4"
                  className="rounded-2lg"
                  loading="lazy"
                />
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                  4
                </div>
              </a>
            </figure>
            <div>
              <a href="collection.html" className="block">
                <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                  Hey Mrsmeseks
                </span>
              </a>
              <span className="text-sm dark:text-jacarta-300">
                3,186 ETH
              </span>
            </div>
          </div>
          <div className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
            <figure className="mr-4 shrink-0">
              <a href="collection.html" className="relative block">
                <img
                  src="img/avatars/avatar_5.jpg"
                  alt="avatar 5"
                  className="rounded-2lg"
                  loading="lazy"
                />
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                  5
                </div>
              </a>
            </figure>
            <div>
              <a href="collection.html" className="block">
                <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                  Bored Bunny
                </span>
              </a>
              <span className="text-sm dark:text-jacarta-300">
                3,027 ETH
              </span>
            </div>
          </div>
          <div className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
            <figure className="mr-4 shrink-0">
              <a href="collection.html" className="relative block">
                <img
                  src="img/avatars/avatar_6.gif"
                  alt="avatar 6"
                  className="rounded-2lg"
                  loading="lazy"
                />
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                  6
                </div>
              </a>
            </figure>
            <div>
              <a href="collection.html" className="block">
                <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                  Wow Frens
                </span>
              </a>
              <span className="text-sm dark:text-jacarta-300">
                2,586 ETH
              </span>
            </div>
          </div>
          <div className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
            <figure className="mr-4 shrink-0">
              <a href="collection.html" className="relative block">
                <img
                  src="img/avatars/avatar_7.jpg"
                  alt="avatar 7"
                  className="rounded-2lg"
                  loading="lazy"
                />
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                  7
                </div>
                <div
                  className="dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                  data-tippy-content="Verified Collection"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="h-[.875rem] w-[.875rem] fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                </div>
              </a>
            </figure>
            <div>
              <a href="collection.html" className="block">
                <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                  Origin Morish
                </span>
              </a>
              <span className="text-sm dark:text-jacarta-300">
                2,347.85 ETH
              </span>
            </div>
          </div>
          <div className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
            <figure className="mr-4 shrink-0">
              <a href="collection.html" className="relative block">
                <img
                  src="img/avatars/avatar_8.jpg"
                  alt="avatar 8"
                  className="rounded-2lg"
                  loading="lazy"
                />
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                  8
                </div>
                <div
                  className="dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                  data-tippy-content="Verified Collection"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="h-[.875rem] w-[.875rem] fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                </div>
              </a>
            </figure>
            <div>
              <a href="collection.html" className="block">
                <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                  Superdo
                </span>
              </a>
              <span className="text-sm dark:text-jacarta-300">
                2,115.71 ETH
              </span>
            </div>
          </div>
          <div className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
            <figure className="mr-4 shrink-0">
              <a href="collection.html" className="relative block">
                <img
                  src="img/avatars/avatar_9.jpg"
                  alt="avatar 9"
                  className="rounded-2lg"
                  loading="lazy"
                />
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                  9
                </div>
              </a>
            </figure>
            <div>
              <a href="collection.html" className="block">
                <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                  NFT stars
                </span>
              </a>
              <span className="text-sm dark:text-jacarta-300">
                2,027 ETH
              </span>
            </div>
          </div>
          <div className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
            <figure className="mr-4 shrink-0">
              <a href="collection.html" className="relative block">
                <img
                  src="img/avatars/avatar_10.jpg"
                  alt="avatar 10"
                  className="rounded-2lg"
                  loading="lazy"
                />
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                  10
                </div>
                <div
                  className="dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                  data-tippy-content="Verified Collection"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="h-[.875rem] w-[.875rem] fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                </div>
              </a>
            </figure>
            <div>
              <a href="collection.html" className="block">
                <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                  Asumitsu
                </span>
              </a>
              <span className="text-sm dark:text-jacarta-300">
                1,989.70 ETH
              </span>
            </div>
          </div>
          <div className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
            <figure className="mr-4 shrink-0">
              <a href="collection.html" className="relative block">
                <img
                  src="img/avatars/avatar_11.jpg"
                  alt="avatar 11"
                  className="rounded-2lg"
                  loading="lazy"
                />
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                  11
                </div>
              </a>
            </figure>
            <div>
              <a href="collection.html" className="block">
                <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                  Pank Skull
                </span>
              </a>
              <span className="text-sm dark:text-jacarta-300">
                1,726.70 ETH
              </span>
            </div>
          </div>
          <div className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
            <figure className="mr-4 shrink-0">
              <a href="collection.html" className="relative block">
                <img
                  src="img/avatars/avatar_12.jpg"
                  alt="avatar 12"
                  className="rounded-2lg"
                  loading="lazy"
                />
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                  12
                </div>
              </a>
            </figure>
            <div>
              <a href="collection.html" className="block">
                <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                  Lazy Panda
                </span>
              </a>
              <span className="text-sm dark:text-jacarta-300">
                1,589.03 ETH
              </span>
            </div>
          </div>
          <div className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
            <figure className="mr-4 shrink-0">
              <a href="collection.html" className="relative block">
                <img
                  src="img/avatars/avatar_13.jpg"
                  alt="avatar 13"
                  className="rounded-2lg"
                  loading="lazy"
                />
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                  13
                </div>
                <div
                  className="dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                  data-tippy-content="Verified Collection"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="h-[.875rem] w-[.875rem] fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                </div>
              </a>
            </figure>
            <div>
              <a href="collection.html" className="block">
                <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                  Arcahorizons
                </span>
              </a>
              <span className="text-sm dark:text-jacarta-300">
                1,157 ETH
              </span>
            </div>
          </div>
          <div className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
            <figure className="mr-4 shrink-0">
              <a href="collection.html" className="relative block">
                <img
                  src="img/avatars/avatar_14.jpg"
                  alt="avatar 14"
                  className="rounded-2lg"
                  loading="lazy"
                />
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                  14
                </div>
              </a>
            </figure>
            <div>
              <a href="collection.html" className="block">
                <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                  Sussygirl
                </span>
              </a>
              <span className="text-sm dark:text-jacarta-300">
                1,030 ETH
              </span>
            </div>
          </div>
          <div className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
            <figure className="mr-4 shrink-0">
              <a href="collection.html" className="relative block">
                <img
                  src="img/avatars/avatar_15.jpg"
                  alt="avatar 15"
                  className="rounded-2lg"
                  loading="lazy"
                />
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                  15
                </div>
                <div
                  className="dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                  data-tippy-content="Verified Collection"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="h-[.875rem] w-[.875rem] fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                </div>
              </a>
            </figure>
            <div>
              <a href="collection.html" className="block">
                <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                  Smilebin
                </span>
              </a>
              <span className="text-sm dark:text-jacarta-300">
                999.51 ETH
              </span>
            </div>
          </div>
          <div className="border-jacarta-100 dark:bg-jacarta-700 flex rounded-[1.25rem] border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
            <figure className="mr-4 shrink-0">
              <a href="collection.html" className="relative block">
                <img
                  src="img/avatars/avatar_16.jpg"
                  alt="avatar 16"
                  className="rounded-2lg"
                  loading="lazy"
                />
                <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                  16
                </div>
              </a>
            </figure>
            <div>
              <a href="collection.html" className="block">
                <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                  Pankysmoke
                </span>
              </a>
              <span className="text-sm dark:text-jacarta-300">
                875.65 ETH
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <a
            href="rankings.html"
            className="inline-block px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark"
          >
            Go to Rankings
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ranking;
