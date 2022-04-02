import React from 'react';
import ArtistNfts from './artistNfts';

const ArtistPage = () => {
  return (
    <main className="pt-[5.5rem] lg:pt-24">
      <div className="relative">
        <img
          src="img/collections/collection_banner.jpg"
          alt="banner"
          className="h-[18.75rem] object-cover"
        />
      </div>
      <section className="relative pb-12 dark:bg-jacarta-800 bg-light-base pt-28">
        <div className="absolute top-0 z-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 left-1/2">
          <figure className="relative">
            <img
              src="img/collections/collection_avatar.jpg"
              alt="collection avatar"
              className="dark:border-jacarta-600 rounded-xl border-[5px] border-white"
            />
            <div
              className="absolute bottom-0 flex items-center justify-center w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 bg-green -right-3"
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
          </figure>
        </div>
        <div className="container">
          <div className="text-center">
            <h2 className="mb-2 text-4xl font-medium font-display text-jacarta-700 dark:text-white">
              NFT Funny Cat
            </h2>
            <div className="mb-8">
              <span className="text-sm font-bold text-jacarta-400">
                Created by
              </span>
              <a
                href="user.html"
                className="text-sm font-bold text-accent"
              >
                051_Hart
              </a>
            </div>
            <div className="inline-flex flex-wrap items-center justify-center mb-8 bg-white border dark:bg-jacarta-800 dark:border-jacarta-600 border-jacarta-100 rounded-xl">
              <a
                href="#"
                className="w-1/2 py-4 border-r dark:border-jacarta-600 border-jacarta-100 rounded-l-xl hover:shadow-md sm:w-32"
              >
                <div className="mb-1 text-base font-bold text-jacarta-700 dark:text-white">
                  7.2K
                </div>
                <div className="font-medium tracking-tight text-2xs dark:text-jacarta-400">
                  Items
                </div>
              </a>
              <a
                href="#"
                className="w-1/2 py-4 dark:border-jacarta-600 border-jacarta-100 hover:shadow-md sm:w-32 sm:border-r"
              >
                <div className="mb-1 text-base font-bold text-jacarta-700 dark:text-white">
                  5.3K
                </div>
                <div className="font-medium tracking-tight text-2xs dark:text-jacarta-400">
                  Owners
                </div>
              </a>
              <a
                href="#"
                className="w-1/2 py-4 border-r dark:border-jacarta-600 border-jacarta-100 hover:shadow-md sm:w-32"
              >
                <div className="flex items-center justify-center mb-1 text-base font-medium text-jacarta-700 dark:text-white">
                  <span
                    className="inline-block -mt-px"
                    data-tippy-content="ETH"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x={0}
                      y={0}
                      viewBox="0 0 1920 1920"
                      xmlSpace="preserve"
                      className="w-4 h-4"
                    >
                      <path
                        fill="#8A92B2"
                        d="M959.8 80.7L420.1 976.3 959.8 731z"
                      />
                      <path
                        fill="#62688F"
                        d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                      />
                      <path
                        fill="#454A75"
                        d="M959.8 1295.4l539.8-319.1L959.8 731z"
                      />
                      <path
                        fill="#8A92B2"
                        d="M420.1 1078.7l539.7 760.6v-441.7z"
                      />
                      <path
                        fill="#62688F"
                        d="M959.8 1397.6v441.7l540.1-760.6z"
                      />
                    </svg>
                  </span>
                  <span className="font-bold">2.55</span>
                </div>
                <div className="font-medium tracking-tight text-2xs dark:text-jacarta-400">
                  Floor Price
                </div>
              </a>
              <a
                href="#"
                className="w-1/2 py-4 border-jacarta-100 rounded-r-xl hover:shadow-md sm:w-32"
              >
                <div className="flex items-center justify-center mb-1 text-base font-medium text-jacarta-700 dark:text-white">
                  <span
                    className="inline-block -mt-px"
                    data-tippy-content="ETH"
                  >
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x={0}
                      y={0}
                      viewBox="0 0 1920 1920"
                      xmlSpace="preserve"
                      className="w-4 h-4"
                    >
                      <path
                        fill="#8A92B2"
                        d="M959.8 80.7L420.1 976.3 959.8 731z"
                      />
                      <path
                        fill="#62688F"
                        d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                      />
                      <path
                        fill="#454A75"
                        d="M959.8 1295.4l539.8-319.1L959.8 731z"
                      />
                      <path
                        fill="#8A92B2"
                        d="M420.1 1078.7l539.7 760.6v-441.7z"
                      />
                      <path
                        fill="#62688F"
                        d="M959.8 1397.6v441.7l540.1-760.6z"
                      />
                    </svg>
                  </span>
                  <span className="font-bold">17.2K</span>
                </div>
                <div className="font-medium tracking-tight text-2xs dark:text-jacarta-400">
                  Volume Traded
                </div>
              </a>
            </div>
            <p className="max-w-xl mx-auto text-lg dark:text-jacarta-300">
              Unique, fully 3D and built to unite the design
              multiverse. Designed and styled by Digimental.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2.5">
              <div className="bg-white border dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl">
                <div
                  className="js-likes relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-sm before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                  role="button"
                  data-tippy-content="Favorite"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                  </svg>
                </div>
              </div>
              <div className="bg-white border dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 text-sm dropdown-toggle"
                  role="button"
                  id="collectionShare"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-tippy-content="Share"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.514 3.514 0 0 1 0 1.458l5.11 2.787a3.5 3.5 0 1 1-.958 1.755z" />
                  </svg>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl"
                  aria-labelledby="collectionShare"
                >
                  <a
                    href="#"
                    className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook"
                      className="w-4 h-4 mr-2 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                    <span className="inline-block mt-1">
                      Facebook
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      className="w-4 h-4 mr-2 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                    <span className="inline-block mt-1">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="discord"
                      className="w-4 h-4 mr-2 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                    </svg>
                    <span className="inline-block mt-1">Discord</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="w-4 h-4 mr-2 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" />
                    </svg>
                    <span className="inline-block mt-1">Email</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="w-4 h-4 mr-2 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" />
                    </svg>
                    <span className="inline-block mt-1">Copy</span>
                  </a>
                </div>
              </div>
              <div className="bg-white border dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 text-sm dropdown-toggle"
                  role="button"
                  id="collectionActions"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    width={16}
                    height={4}
                    viewBox="0 0 16 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dark:fill-jacarta-200 fill-jacarta-500"
                  >
                    <circle cx={2} cy={2} r={2} />
                    <circle cx={8} cy={2} r={2} />
                    <circle cx={14} cy={2} r={2} />
                  </svg>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl"
                  aria-labelledby="collectionActions"
                >
                  <button className="block w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white">
                    New bid
                  </button>
                  <hr className="h-px mx-4 my-2 border-0 dark:bg-jacarta-600 bg-jacarta-100" />
                  <button className="block w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white">
                    Refresh Metadata
                  </button>
                  <button className="block w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white">
                    Share
                  </button>
                  <button className="block w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white">
                    Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24">
        <picture className="absolute inset-0 pointer-events-none -z-10 dark:hidden">
          <img
            src="img/gradient_light.jpg"
            alt="gradient"
            className="w-full h-full"
          />
        </picture>
        <div className="container">
          <ul
            className="flex items-center justify-center mb-12 border-b nav nav-tabs dark:border-jacarta-600 border-jacarta-100"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="relative flex items-center px-6 py-3 nav-link active hover:text-jacarta-700 text-jacarta-400 whitespace-nowrap dark:hover:text-white"
                id="items-tab"
                data-bs-toggle="tab"
                data-bs-target="#items"
                type="button"
                role="tab"
                aria-controls="items"
                aria-selected="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="w-5 h-5 mr-1 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z" />
                </svg>
                <span className="text-base font-medium font-display">
                  Items
                </span>
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="items"
              role="tabpanel"
              aria-labelledby="items-tab"
            >
              <ArtistNfts />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArtistPage;
