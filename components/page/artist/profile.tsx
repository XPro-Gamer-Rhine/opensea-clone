import React from 'react';
import ItemGroup from '../content/item/itemGroup';

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
            <li className="nav-item" role="presentation">
              <button
                className="relative flex items-center px-6 py-3 nav-link hover:text-jacarta-700 text-jacarta-400 whitespace-nowrap dark:hover:text-white"
                id="activity-tab"
                data-bs-toggle="tab"
                data-bs-target="#activity"
                type="button"
                role="tab"
                aria-controls="activity"
                aria-selected="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="w-5 h-5 mr-1 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.793 6.793L13 8h5v5l-1.793-1.793-3.864 3.864-2.121-2.121-2.829 2.828-1.414-1.414 4.243-4.243 2.121 2.122 2.45-2.45z" />
                </svg>
                <span className="text-base font-medium font-display">
                  Activity
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
              <div className="flex flex-wrap items-center justify-between mb-8">
                <div className="flex flex-wrap items-center">
                  <div className="my-1 mr-2.5">
                    <button
                      className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 h-9 hover:border-transparent hover:text-white dark:text-white"
                      id="blockchainFilter"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2v8zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2h2zM4 4v2h2V4H4zm0 14v2h2v-2H4zM18 4v2h2V4h-2zm0 14v2h2v-2h-2z" />
                      </svg>
                      <span>Blockchain</span>
                    </button>
                    <div
                      className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl"
                      aria-labelledby="blockchainFilter"
                    >
                      <ul className="flex flex-col flex-wrap">
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            <span className="text-jacarta-700 dark:text-white">
                              Ethereum
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width={24}
                              height={24}
                              className="fill-accent mb-[3px] h-4 w-4"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Polygon
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Flow
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Tezos
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="my-1 mr-2.5">
                    <button
                      className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 h-9 hover:border-transparent hover:text-white dark:text-white"
                      id="categoriesFilter"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z" />
                      </svg>
                      <span>Category</span>
                    </button>
                    <div
                      className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl"
                      aria-labelledby="categoriesFilter"
                    >
                      <ul className="flex flex-col flex-wrap">
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            <span className="text-jacarta-700 dark:text-white">
                              All
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width={24}
                              height={24}
                              className="fill-accent mb-[3px] h-4 w-4"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Art
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Collectibles
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Domain
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Music
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Photography
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Virtual World
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="my-1 mr-2.5">
                    <button
                      className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 h-9 hover:border-transparent hover:text-white dark:text-white"
                      type="button"
                      id="propertiesFilter"
                      data-bs-toggle="modal"
                      data-bs-target="#propertiesModal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17z" />
                      </svg>
                      <span>Properties</span>
                    </button>
                    <div
                      className="modal fade"
                      id="propertiesModal"
                      tabIndex={-1}
                      aria-labelledby="propertiesModalLabel"
                      aria-hidden="true"
                    >
                      <div className="max-w-md modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="propertiesModalLabel"
                            >
                              Properties
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                className="w-6 h-6 fill-jacarta-700 dark:fill-white"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                              </svg>
                            </button>
                          </div>
                          <div className="modal-body">
                            <div
                              className="accordion"
                              id="accordionProps"
                            >
                              <div className="border-b accordion-item dark:border-jacarta-600 border-jacarta-100">
                                <h2
                                  className="accordion-header"
                                  id="prop-heading-1"
                                >
                                  <button
                                    className="relative flex items-center justify-between w-full px-6 py-5 bg-white accordion-button collapsed dark:bg-jacarta-700 font-display text-jacarta-700 dark:text-white"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#prop-background"
                                    aria-expanded="false"
                                    aria-controls="prop-background"
                                  >
                                    <span>Background</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width={24}
                                      height={24}
                                      className="w-4 h-4 transition-transform accordion-arrow fill-jacarta-700 dark:fill-white"
                                    >
                                      <path
                                        fill="none"
                                        d="M0 0h24v24H0z"
                                      />
                                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                    </svg>
                                  </button>
                                </h2>
                                <div
                                  id="prop-background"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="prop-heading-1"
                                  data-bs-parent="#accordionProps"
                                >
                                  <div className="px-2 pb-4 accordion-body">
                                    <div className="flex flex-col">
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Red</span>
                                        <span>14</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Green</span>
                                        <span>56</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Blue</span>
                                        <span>11</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>White</span>
                                        <span>25</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="border-b accordion-item dark:border-jacarta-600 border-jacarta-100">
                                <h2
                                  className="accordion-header"
                                  id="prop-heading-2"
                                >
                                  <button
                                    className="relative flex items-center justify-between w-full px-6 py-5 bg-white accordion-button collapsed dark:bg-jacarta-700 font-display text-jacarta-700 dark:text-white"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#prop-eyes"
                                    aria-expanded="false"
                                    aria-controls="prop-eyes"
                                  >
                                    <span>Eyes</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width={24}
                                      height={24}
                                      className="w-4 h-4 transition-transform accordion-arrow fill-jacarta-700 dark:fill-white"
                                    >
                                      <path
                                        fill="none"
                                        d="M0 0h24v24H0z"
                                      />
                                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                    </svg>
                                  </button>
                                </h2>
                                <div
                                  id="prop-eyes"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="prop-heading-2"
                                  data-bs-parent="#accordionProps"
                                >
                                  <div className="px-2 pb-4 accordion-body">
                                    <div className="flex flex-col">
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Red</span>
                                        <span>14</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Green</span>
                                        <span>56</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Blue</span>
                                        <span>11</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>White</span>
                                        <span>25</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="prop-heading-3"
                                >
                                  <button
                                    className="relative flex items-center justify-between w-full px-6 py-5 bg-white accordion-button collapsed dark:bg-jacarta-700 font-display text-jacarta-700 dark:text-white"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#prop-face"
                                    aria-expanded="false"
                                    aria-controls="prop-face"
                                  >
                                    <span>Face</span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width={24}
                                      height={24}
                                      className="w-4 h-4 transition-transform accordion-arrow fill-jacarta-700 dark:fill-white"
                                    >
                                      <path
                                        fill="none"
                                        d="M0 0h24v24H0z"
                                      />
                                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                    </svg>
                                  </button>
                                </h2>
                                <div
                                  id="prop-face"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="prop-heading-3"
                                  data-bs-parent="#accordionProps"
                                >
                                  <div className="px-2 pb-4 accordion-body">
                                    <div className="flex flex-col">
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Red</span>
                                        <span>14</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Green</span>
                                        <span>56</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Blue</span>
                                        <span>11</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>White</span>
                                        <span>25</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <div className="flex items-center justify-center space-x-4">
                              <button
                                type="button"
                                className="px-8 py-3 font-semibold text-center transition-all bg-white rounded-full text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 hover:text-white"
                              >
                                Clear All
                              </button>
                              <button
                                type="button"
                                className="px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark w-36"
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl"
                      aria-labelledby="propertiesFilter"
                    >
                      <ul className="flex flex-col flex-wrap">
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            <span className="text-jacarta-700 dark:text-white">
                              All
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width={24}
                              height={24}
                              className="fill-accent mb-[3px] h-4 w-4"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Art
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Collectibles
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Domain
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Music
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Photography
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Virtual World
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="my-1 mr-2.5">
                    <button
                      className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 h-9 hover:border-transparent hover:text-white dark:text-white"
                      id="saleTypeFilter"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM13 10V5l-5 7h3v5l5-7h-3z" />
                      </svg>
                      <span>Sale type</span>
                    </button>
                    <div
                      className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl"
                      aria-labelledby="saleTypeFilter"
                    >
                      <ul className="flex flex-col flex-wrap">
                        <li>
                          <a
                            href="#"
                            className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            <span className="text-jacarta-700 dark:text-white">
                              Timed auction
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width={24}
                              height={24}
                              className="fill-accent mb-[3px] h-4 w-4"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Fixed price
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Not for sale
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white"
                          >
                            Open for offers
                          </a>
                        </li>
                      </ul>
                      <div className="flex items-center justify-center pt-4 mt-4 -ml-2 -mr-2 space-x-3 border-t dark:border-jacarta-600 border-jacarta-100 px-7">
                        <button
                          type="button"
                          className="flex-1 px-6 py-2 text-sm font-semibold text-center transition-all bg-white rounded-full text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume hover:text-white"
                        >
                          Clear
                        </button>
                        <button
                          type="button"
                          className="flex-1 px-6 py-2 text-sm font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="my-1 mr-2.5">
                    <button
                      className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 h-9 hover:border-transparent hover:text-white dark:text-white"
                      id="priceRangeFilter"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM5.003 8L5 20h10V8H5.003zM7 16h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 1 1 0-5H9V9h2v1h2v2H8.5a.5.5 0 1 0 0 1h3a2.5 2.5 0 1 1 0 5H11v1H9v-1H7v-2z" />
                      </svg>
                      <span>Price Range</span>
                    </button>
                    <div
                      className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl"
                      aria-labelledby="priceRangeFilter"
                    >
                      <div className="px-5 pt-2 mb-4 cursor-pointer dropdown">
                        <div
                          className="dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 flex items-center justify-between rounded-lg border py-3.5 px-3 text-sm dark:text-white"
                          role="button"
                          id="filterPriceBlockchain"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="flex items-center font-display">
                            <img
                              src="img/chains/ETH.png"
                              alt="eth"
                              className="w-5 h-5 mr-2 rounded-full"
                            />
                            ETH
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            className="w-4 h-4 fill-jacarta-500 dark:fill-white"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                          </svg>
                        </div>
                        <div
                          className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[252px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl"
                          aria-labelledby="filterPriceBlockchain"
                        >
                          <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            <span className="flex items-center">
                              <img
                                src="img/chains/ETH.png"
                                alt="eth"
                                className="w-5 h-5 mr-2 rounded-full"
                              />
                              ETH
                            </span>
                          </button>
                          <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            <span className="flex items-center">
                              <img
                                src="img/chains/FLOW.png"
                                alt="flow"
                                className="w-5 h-5 mr-2 rounded-full"
                              />
                              FLOW
                            </span>
                          </button>
                          <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            <span className="flex items-center">
                              <img
                                src="img/chains/FUSD.png"
                                alt="fusd"
                                className="w-5 h-5 mr-2 rounded-full"
                              />
                              FUSD
                            </span>
                          </button>
                          <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            <span className="flex items-center">
                              <img
                                src="img/chains/XTZ.png"
                                alt="xtz"
                                className="w-5 h-5 mr-2 rounded-full"
                              />
                              XTZ
                            </span>
                          </button>
                          <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            <span className="flex items-center">
                              <img
                                src="img/chains/DAI.png"
                                alt="dai"
                                className="w-5 h-5 mr-2 rounded-full"
                              />
                              DAI
                            </span>
                          </button>
                          <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            <span className="flex items-center">
                              <img
                                src="img/chains/RARI.png"
                                alt="rari"
                                className="w-5 h-5 mr-2 rounded-full"
                              />
                              RARI
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center px-5 pb-2 space-x-3">
                        <input
                          type="number"
                          placeholder="From"
                          className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full max-w-[7.5rem] rounded-lg border py-[0.6875rem] px-4 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                        />
                        <input
                          type="number"
                          placeholder="To"
                          className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full max-w-[7.5rem] rounded-lg border py-[0.6875rem] px-4 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                        />
                      </div>
                      <div className="flex items-center justify-center pt-4 mt-4 -ml-2 -mr-2 space-x-3 border-t dark:border-jacarta-600 border-jacarta-100 px-7">
                        <button
                          type="button"
                          className="flex-1 px-6 py-2 text-sm font-semibold text-center transition-all bg-white rounded-full text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume hover:text-white"
                        >
                          Clear
                        </button>
                        <button
                          type="button"
                          className="flex-1 px-6 py-2 text-sm font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-1 cursor-pointer dropdown">
                  <div
                    className="inline-flex items-center justify-between w-48 px-3 py-2 text-sm bg-white border rounded-lg dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 dark:text-white"
                    role="button"
                    id="sort"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="font-display">
                      Recently Added
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="w-4 h-4 fill-jacarta-500 dark:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                    </svg>
                  </div>
                  <div
                    className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl"
                    aria-labelledby="sort"
                  >
                    <span className="block px-5 py-2 text-sm font-semibold font-display text-jacarta-300">
                      Sort By
                    </span>
                    <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                      Recently Added
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="fill-accent mb-[3px] h-4 w-4"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                      </svg>
                    </button>
                    <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                      Price: Low to High
                    </button>
                    <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                      Price: High to Low
                    </button>
                    <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                      Auction ending soon
                    </button>
                    <span className="block px-5 py-2 text-sm font-semibold font-display text-jacarta-300">
                      Options
                    </span>
                    <div className="block w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                      <span className="flex items-center justify-between">
                        <span>Verified Only</span>
                        <input
                          type="checkbox"
                          defaultValue="checkbox"
                          name="check"
                          className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:transition-all checked:bg-none checked:after:left-3.5 checked:after:bg-white focus:ring-transparent focus:ring-offset-0"
                        />
                      </span>
                    </div>
                    <div className="block w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                      <span className="flex items-center justify-between">
                        <span>NFSW Only</span>
                        <input
                          type="checkbox"
                          defaultValue="checkbox"
                          name="check"
                          className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:transition-all checked:bg-none checked:after:left-3.5 checked:after:bg-white focus:ring-transparent focus:ring-offset-0"
                        />
                      </span>
                    </div>
                    <div className="block w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                      <span className="flex items-center justify-between">
                        <span>Show Lazy Minted</span>
                        <input
                          type="checkbox"
                          defaultValue="checkbox"
                          name="check"
                          className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:transition-all checked:bg-none checked:after:left-3.5 checked:after:bg-white focus:ring-transparent focus:ring-offset-0"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <ItemGroup />
            </div>
            <div
              className="tab-pane fade"
              id="activity"
              role="tabpanel"
              aria-labelledby="activity-tab"
            >
              <div className="flex flex-wrap items-center mb-16">
                <select className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mr-8 min-w-[12rem] rounded-lg py-3.5 text-sm dark:text-white">
                  <option value="7-days">Last 7 Days</option>
                  <option value="14-days">Last 14 Days</option>
                  <option value="30-days">Last 30 Days</option>
                  <option value="60-days">Last 60 Days</option>
                  <option value="90-days">Last 90 Days</option>
                  <option value="last-year">Last Year</option>
                  <option value="all-time">All Time</option>
                </select>
                <div className="py-2">
                  <span className="inline-block mr-4 align-middle">
                    <span className="block text-sm font-bold dark:text-white">
                      90 Day Avg. Price:
                    </span>
                    <span className="block text-sm font-bold text-green">
                      Ξ7.0633
                    </span>
                  </span>
                  <span className="inline-block align-middle">
                    <span className="block text-sm font-bold dark:text-white">
                      90 Day Volume:
                    </span>
                    <span className="block text-sm font-bold text-green">
                      Ξ24,085.6957
                    </span>
                  </span>
                </div>
              </div>
              <div className="relative w-full mb-24 chart-container h-80">
                <canvas id="activityChart" />
              </div>
              <div className="lg:flex">
                <div className="mb-10 space-y-5 shrink-0 basis-8/12 lg:mb-0 lg:pr-10">
                  <a
                    href="item.html"
                    className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 relative flex items-center rounded-[1.25rem] border bg-white p-8 transition-shadow hover:shadow-lg"
                  >
                    <figure className="self-start mr-5">
                      <img
                        src="img/avatars/avatar_2.jpg"
                        alt="avatar 2"
                        className="rounded-2lg"
                        loading="lazy"
                      />
                    </figure>
                    <div>
                      <h3 className="mb-1 text-base font-semibold font-display text-jacarta-700 dark:text-white">
                        Lazyone Panda
                      </h3>
                      <span className="block mb-3 text-sm text-jacarta-500">
                        sold for 1.515 ETH
                      </span>
                      <span className="block text-xs text-jacarta-300">
                        30 minutes 45 seconds ago
                      </span>
                    </div>
                    <div className="p-3 ml-auto border rounded-full dark:border-jacarta-600 border-jacarta-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="fill-jacarta-700 dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z" />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="item.html"
                    className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 relative flex items-center rounded-[1.25rem] border bg-white p-8 transition-shadow hover:shadow-lg"
                  >
                    <figure className="self-start mr-5">
                      <img
                        src="img/products/item_21_sm.jpg"
                        alt="item 2"
                        className="rounded-2lg"
                        loading="lazy"
                      />
                    </figure>
                    <div>
                      <h3 className="mb-1 text-base font-semibold font-display text-jacarta-700 dark:text-white">
                        NFT Funny Cat
                      </h3>
                      <span className="block mb-3 text-sm text-jacarta-500">
                        listed by 051_Hart .08095 ETH
                      </span>
                      <span className="block text-xs text-jacarta-300">
                        40 minutes 36 seconds ago
                      </span>
                    </div>
                    <div className="p-3 ml-auto border rounded-full dark:border-jacarta-600 border-jacarta-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="fill-jacarta-700 dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="item.html"
                    className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 relative flex items-center rounded-[1.25rem] border bg-white p-8 transition-shadow hover:shadow-lg"
                  >
                    <figure className="self-start mr-5">
                      <img
                        src="img/products/item_22_sm.jpg"
                        alt="item 3"
                        className="rounded-2lg"
                        loading="lazy"
                      />
                    </figure>
                    <div>
                      <h3 className="mb-1 text-base font-semibold font-display text-jacarta-700 dark:text-white">
                        Prince Ape Planet
                      </h3>
                      <span className="block mb-3 text-sm text-jacarta-500">
                        tranferred from 027ab52
                      </span>
                      <span className="block text-xs text-jacarta-300">
                        1 hour 15 minutes ago
                      </span>
                    </div>
                    <div className="p-3 ml-auto border rounded-full dark:border-jacarta-600 border-jacarta-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="fill-jacarta-700 dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z" />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="item.html"
                    className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 relative flex items-center rounded-[1.25rem] border bg-white p-8 transition-shadow hover:shadow-lg"
                  >
                    <figure className="self-start mr-5">
                      <img
                        src="img/products/item_23_sm.jpg"
                        alt="item 3"
                        className="rounded-2lg"
                        loading="lazy"
                      />
                    </figure>
                    <div>
                      <h3 className="mb-1 text-base font-semibold font-display text-jacarta-700 dark:text-white">
                        Origin Morish
                      </h3>
                      <span className="block mb-3 text-sm text-jacarta-500">
                        bid cancelled by 0397fd
                      </span>
                      <span className="block text-xs text-jacarta-300">
                        1 hour 55 minutes ago
                      </span>
                    </div>
                    <div className="p-3 ml-auto border rounded-full dark:border-jacarta-600 border-jacarta-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="fill-jacarta-700 dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z" />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="item.html"
                    className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 relative flex items-center rounded-[1.25rem] border bg-white p-8 transition-shadow hover:shadow-lg"
                  >
                    <figure className="self-start mr-5">
                      <img
                        src="img/products/item_24_sm.jpg"
                        alt="item 3"
                        className="rounded-2lg"
                        loading="lazy"
                      />
                    </figure>
                    <div>
                      <h3 className="mb-1 text-base font-semibold font-display text-jacarta-700 dark:text-white">
                        Portrait Gallery#029
                      </h3>
                      <span className="block mb-3 text-sm text-jacarta-500">
                        liked by Trina_more
                      </span>
                      <span className="block text-xs text-jacarta-300">
                        2 hours 24 minutes ago
                      </span>
                    </div>
                    <div className="p-3 ml-auto border rounded-full dark:border-jacarta-600 border-jacarta-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="fill-jacarta-700 dark:fill-white"
                      >
                        <path fill="none" d="M0 0H24V24H0z" />
                        <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                      </svg>
                    </div>
                  </a>
                </div>
                <aside className="basis-4/12 lg:pl-5">
                  <form
                    action="search"
                    className="relative block mb-12"
                  >
                    <input
                      type="search"
                      className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                      placeholder="Search"
                    />
                    <button
                      type="submit"
                      className="absolute top-0 left-0 flex items-center justify-center w-12 h-full rounded-2xl"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="w-4 h-4 fill-jacarta-500 dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                      </svg>
                    </button>
                  </form>
                  <h3 className="mb-4 font-semibold font-display text-jacarta-500 dark:text-white">
                    Filters
                  </h3>
                  <div className="flex flex-wrap">
                    <button className="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="w-4 h-4 mr-2 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />
                      </svg>
                      <span className="font-medium text-2xs">
                        Listing
                      </span>
                    </button>
                    <button className="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="w-4 h-4 mr-2 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z" />
                      </svg>
                      <span className="font-medium text-2xs">
                        Bids
                      </span>
                    </button>
                    <button className="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="w-4 h-4 mr-2 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z" />
                      </svg>
                      <span className="font-medium text-2xs">
                        Transfer
                      </span>
                    </button>
                    <button className="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="w-4 h-4 mr-2 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                      >
                        <path fill="none" d="M0 0H24V24H0z" />
                        <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                      </svg>
                      <span className="font-medium text-2xs">
                        Likes
                      </span>
                    </button>
                    <button className="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="w-4 h-4 mr-2 fill-jacarta-700 group-hover:fill-white dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z" />
                      </svg>
                      <span className="font-medium text-2xs">
                        Purchases
                      </span>
                    </button>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArtistPage;
