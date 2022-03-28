import React from 'react';

const Trending = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="mb-8 text-3xl text-center font-display text-jacarta-700 dark:text-white">
          <span
            className="inline-block w-6 h-6 mr-1 text-xl bg-center bg-contain"
            style={{
              backgroundImage:
                'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/26a1.png)',
            }}
          />
          Trending categories
        </h2>
        <div className="flex flex-wrap items-center justify-between mb-8">
          <ul className="flex flex-wrap items-center">
            <li className="my-1 mr-2.5">
              <a
                href="#"
                className="flex items-center justify-center px-4 text-sm font-semibold transition-colors rounded-lg dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent bg-jacarta-100 font-display text-jacarta-700 h-9 hover:border-transparent hover:text-white dark:text-white"
              >
                All
              </a>
            </li>
            <li className="my-1 mr-2.5">
              <a
                href="#"
                className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 h-9 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
                <span>Art</span>
              </a>
            </li>
            <li className="my-1 mr-2.5">
              <a
                href="#"
                className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 h-9 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4zm6.085 15a1.5 1.5 0 0 1 2.83 0H20v-2.968a4.5 4.5 0 0 1 0-8.064V5h-9.085a1.5 1.5 0 0 1-2.83 0H4v14h4.085zM9.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
                <span>Collectibles</span>
              </a>
            </li>
            <li className="my-1 mr-2.5">
              <a
                href="#"
                className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 h-9 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z" />
                </svg>
                <span>Domain</span>
              </a>
            </li>
            <li className="my-1 mr-2.5">
              <a
                href="#"
                className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 h-9 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z" />
                </svg>
                <span>Music</span>
              </a>
            </li>
            <li className="my-1 mr-2.5">
              <a
                href="#"
                className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 h-9 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z" />
                </svg>
                <span>Photography</span>
              </a>
            </li>
            <li className="my-1 mr-2.5">
              <a
                href="#"
                className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 h-9 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                </svg>
                <span>Virtual World</span>
              </a>
            </li>
          </ul>
          <div className="my-1 cursor-pointer dropdown">
            <div
              className="inline-flex items-center justify-between w-48 px-3 py-2 text-sm bg-white border rounded-lg dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 dark:text-white"
              role="button"
              id="categoriesSort"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="font-display">Recently Added</span>
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
              aria-labelledby="categoriesSort"
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
                    defaultChecked=""
                    className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none shadow-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:transition-all checked:bg-none checked:after:left-3.5 checked:after:bg-white focus:ring-transparent focus:ring-offset-0"
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
                    className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none shadow-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:transition-all checked:bg-none checked:after:left-3.5 checked:after:bg-white focus:ring-transparent focus:ring-offset-0"
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
                    className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none shadow-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:transition-all checked:bg-none checked:after:left-3.5 checked:after:bg-white focus:ring-transparent focus:ring-offset-0"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
          <article>
            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
              <figure className="relative">
                <a href="item.html">
                  <img
                    src="./img/products/item_5.jpg"
                    alt="item 5"
                    className="w-full rounded-[0.625rem]"
                    loading="lazy"
                  />
                </a>
                <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
                  <span
                    className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                    data-tippy-content="Favorite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red"
                    >
                      <path fill="none" d="M0 0H24V24H0z" />
                      <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                    </svg>
                  </span>
                  <span className="text-sm dark:text-jacarta-200">
                    15
                  </span>
                </div>
                <div className="absolute left-3 -bottom-3">
                  <div className="flex -space-x-2">
                    <a href="#">
                      <img
                        src="img/avatars/creator_1.png"
                        alt="creator"
                        className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                        data-tippy-content="Creator: Sussygirl"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="img/avatars/owner_1.png"
                        alt="owner"
                        className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                        data-tippy-content="Owner: Sussygirl"
                      />
                    </a>
                  </div>
                </div>
              </figure>
              <div className="flex items-center justify-between mt-7">
                <a href="item.html">
                  <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
                    Flourishing Cat #180
                  </span>
                </a>
                <div className="rounded-full dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle"
                    role="button"
                    id="itemActions"
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
                    aria-labelledby="itemActions"
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
              <div className="mt-2 text-sm">
                <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">
                  From 8.49 ETH
                </span>
                <span className="dark:text-jacarta-300 text-jacarta-500">
                  2/8
                </span>
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  className="text-sm font-semibold text-accent font-display"
                  data-bs-toggle="modal"
                  data-bs-target="#buyNowModal"
                >
                  Buy now
                </button>
                <a
                  href="item.html"
                  className="flex items-center group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                  </svg>
                  <span className="text-sm font-semibold group-hover:text-accent font-display dark:text-jacarta-200">
                    View History
                  </span>
                </a>
              </div>
            </div>
          </article>
          <article>
            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
              <figure className="relative">
                <a href="item.html">
                  <img
                    src="./img/products/item_4.jpg"
                    alt="item 4"
                    className="w-full rounded-[0.625rem]"
                    loading="lazy"
                  />
                </a>
                <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
                  <span
                    className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                    data-tippy-content="Favorite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red"
                    >
                      <path fill="none" d="M0 0H24V24H0z" />
                      <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                    </svg>
                  </span>
                  <span className="text-sm dark:text-jacarta-200">
                    188
                  </span>
                </div>
                <div className="absolute left-3 -bottom-3">
                  <div className="flex -space-x-2">
                    <a href="#">
                      <img
                        src="img/avatars/creator_2.png"
                        alt="creator"
                        className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                        data-tippy-content="Creator: Sussygirl"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="img/avatars/owner_2.png"
                        alt="owner"
                        className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                        data-tippy-content="Owner: Sussygirl"
                      />
                    </a>
                  </div>
                </div>
              </figure>
              <div className="flex items-center justify-between mt-7">
                <a href="item.html">
                  <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
                    Amazing NFT art
                  </span>
                </a>
                <div className="rounded-full dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle"
                    role="button"
                    id="itemActions2"
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
                    aria-labelledby="itemActions2"
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
              <div className="mt-2 text-sm">
                <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">
                  From 5.9 ETH
                </span>
                <span className="dark:text-jacarta-300 text-jacarta-500">
                  1/7
                </span>
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  className="text-sm font-semibold text-accent font-display"
                  data-bs-toggle="modal"
                  data-bs-target="#buyNowModal"
                >
                  Buy now
                </button>
                <a
                  href="item.html"
                  className="flex items-center group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                  </svg>
                  <span className="text-sm font-semibold group-hover:text-accent font-display dark:text-jacarta-200">
                    View History
                  </span>
                </a>
              </div>
            </div>
          </article>
          <article>
            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
              <figure className="relative">
                <a href="item.html">
                  <img
                    src="./img/products/item_7.jpg"
                    alt="item 7"
                    className="w-full rounded-[0.625rem]"
                    loading="lazy"
                  />
                </a>
                <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
                  <span
                    className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                    data-tippy-content="Favorite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red"
                    >
                      <path fill="none" d="M0 0H24V24H0z" />
                      <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                    </svg>
                  </span>
                  <span className="text-sm dark:text-jacarta-200">
                    160
                  </span>
                </div>
                <div className="absolute left-3 -bottom-3">
                  <div className="flex -space-x-2">
                    <a href="#">
                      <img
                        src="img/avatars/creator_3.png"
                        alt="creator"
                        className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                        data-tippy-content="Creator: Sussygirl"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="img/avatars/owner_3.png"
                        alt="owner"
                        className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                        data-tippy-content="Owner: Sussygirl"
                      />
                    </a>
                  </div>
                </div>
              </figure>
              <div className="flex items-center justify-between mt-7">
                <a href="item.html">
                  <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
                    SwagFox#133
                  </span>
                </a>
                <div className="rounded-full dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle"
                    role="button"
                    id="itemActions3"
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
                    aria-labelledby="itemActions3"
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
              <div className="mt-2 text-sm">
                <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">
                  0.078 ETH
                </span>
                <span className="dark:text-jacarta-300 text-jacarta-500">
                  1/3
                </span>
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  className="text-sm font-semibold text-accent font-display"
                  data-bs-toggle="modal"
                  data-bs-target="#buyNowModal"
                >
                  Buy now
                </button>
                <a
                  href="item.html"
                  className="flex items-center group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                  </svg>
                  <span className="text-sm font-semibold group-hover:text-accent font-display dark:text-jacarta-200">
                    View History
                  </span>
                </a>
              </div>
            </div>
          </article>
          <article>
            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
              <figure className="relative">
                <a href="item.html">
                  <img
                    src="./img/products/item_6.jpg"
                    alt="item 6"
                    className="w-full rounded-[0.625rem]"
                    loading="lazy"
                  />
                </a>
                <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
                  <span
                    className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                    data-tippy-content="Favorite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red"
                    >
                      <path fill="none" d="M0 0H24V24H0z" />
                      <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                    </svg>
                  </span>
                  <span className="text-sm dark:text-jacarta-200">
                    159
                  </span>
                </div>
                <div className="absolute left-3 -bottom-3">
                  <div className="flex -space-x-2">
                    <a href="#">
                      <img
                        src="img/avatars/creator_4.png"
                        alt="creator"
                        className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                        data-tippy-content="Creator: Sussygirl"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="img/avatars/owner_4.png"
                        alt="owner"
                        className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                        data-tippy-content="Owner: Sussygirl"
                      />
                    </a>
                  </div>
                </div>
              </figure>
              <div className="flex items-center justify-between mt-7">
                <a href="item.html">
                  <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
                    Splendid Girl
                  </span>
                </a>
                <div className="rounded-full dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle"
                    role="button"
                    id="itemActions4"
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
                    aria-labelledby="itemActions4"
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
              <div className="mt-2 text-sm">
                <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">
                  10 ETH
                </span>
                <span className="dark:text-jacarta-300 text-jacarta-500">
                  2/3
                </span>
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  className="text-sm font-semibold text-accent font-display"
                  data-bs-toggle="modal"
                  data-bs-target="#buyNowModal"
                >
                  Buy now
                </button>
                <a
                  href="item.html"
                  className="flex items-center group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                  </svg>
                  <span className="text-sm font-semibold group-hover:text-accent font-display dark:text-jacarta-200">
                    View History
                  </span>
                </a>
              </div>
            </div>
          </article>
          <article>
            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
              <figure className="relative">
                <a href="item.html">
                  <img
                    src="./img/products/item_8.jpg"
                    alt="item 8"
                    className="w-full rounded-[0.625rem]"
                    loading="lazy"
                  />
                </a>
                <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
                  <span
                    className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                    data-tippy-content="Favorite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red"
                    >
                      <path fill="none" d="M0 0H24V24H0z" />
                      <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                    </svg>
                  </span>
                  <span className="text-sm dark:text-jacarta-200">
                    32
                  </span>
                </div>
                <div className="absolute left-3 -bottom-3">
                  <div className="flex -space-x-2">
                    <a href="#">
                      <img
                        src="img/avatars/creator_3.png"
                        alt="creator"
                        className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                        data-tippy-content="Creator: Sussygirl"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="img/avatars/owner_5.png"
                        alt="owner"
                        className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                        data-tippy-content="Owner: Sussygirl"
                      />
                    </a>
                  </div>
                </div>
              </figure>
              <div className="flex items-center justify-between mt-7">
                <a href="item.html">
                  <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
                    Monkeyme#155
                  </span>
                </a>
                <div className="rounded-full dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle"
                    role="button"
                    id="itemActions5"
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
                    aria-labelledby="itemActions5"
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
              <div className="mt-2 text-sm">
                <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">
                  From 5 FLOW
                </span>
                <span className="dark:text-jacarta-300 text-jacarta-500">
                  1/1
                </span>
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  className="text-sm font-semibold text-accent font-display"
                  data-bs-toggle="modal"
                  data-bs-target="#buyNowModal"
                >
                  Buy now
                </button>
                <a
                  href="item.html"
                  className="flex items-center group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                  </svg>
                  <span className="text-sm font-semibold group-hover:text-accent font-display dark:text-jacarta-200">
                    View History
                  </span>
                </a>
              </div>
            </div>
          </article>
          <article>
            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
              <figure className="relative">
                <a href="item.html">
                  <img
                    src="./img/products/item_9.jpg"
                    alt="item 9"
                    className="w-full rounded-[0.625rem]"
                    loading="lazy"
                  />
                </a>
                <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
                  <span
                    className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                    data-tippy-content="Favorite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red"
                    >
                      <path fill="none" d="M0 0H24V24H0z" />
                      <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                    </svg>
                  </span>
                  <span className="text-sm dark:text-jacarta-200">
                    25
                  </span>
                </div>
                <div className="absolute left-3 -bottom-3">
                  <div className="flex -space-x-2">
                    <a href="#">
                      <img
                        src="img/avatars/creator_6.png"
                        alt="creator"
                        className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                        data-tippy-content="Creator: Sussygirl"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="img/avatars/owner_4.png"
                        alt="owner"
                        className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                        data-tippy-content="Owner: Sussygirl"
                      />
                    </a>
                  </div>
                </div>
              </figure>
              <div className="flex items-center justify-between mt-7">
                <a href="item.html">
                  <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
                    Jedidia#149
                  </span>
                </a>
                <div className="rounded-full dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle"
                    role="button"
                    id="itemActions6"
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
                    aria-labelledby="itemActions6"
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
              <div className="mt-2 text-sm">
                <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">
                  0.16 ETH
                </span>
                <span className="dark:text-jacarta-300 text-jacarta-500">
                  1/1
                </span>
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  className="text-sm font-semibold text-accent font-display"
                  data-bs-toggle="modal"
                  data-bs-target="#buyNowModal"
                >
                  Buy now
                </button>
                <a
                  href="item.html"
                  className="flex items-center group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                  </svg>
                  <span className="text-sm font-semibold group-hover:text-accent font-display dark:text-jacarta-200">
                    View History
                  </span>
                </a>
              </div>
            </div>
          </article>
          <article>
            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
              <figure className="relative">
                <a href="item.html">
                  <img
                    src="./img/products/item_10.jpg"
                    alt="item 10"
                    className="w-full rounded-[0.625rem]"
                    loading="lazy"
                  />
                </a>
                <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
                  <span
                    className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                    data-tippy-content="Favorite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red"
                    >
                      <path fill="none" d="M0 0H24V24H0z" />
                      <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                    </svg>
                  </span>
                  <span className="text-sm dark:text-jacarta-200">
                    55
                  </span>
                </div>
                <div className="absolute left-3 -bottom-3">
                  <div className="flex -space-x-2">
                    <a href="#">
                      <img
                        src="img/avatars/creator_2.png"
                        alt="creator"
                        className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                        data-tippy-content="Creator: Sussygirl"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="img/avatars/owner_7.png"
                        alt="owner"
                        className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                        data-tippy-content="Owner: Sussygirl"
                      />
                    </a>
                  </div>
                </div>
              </figure>
              <div className="flex items-center justify-between mt-7">
                <a href="item.html">
                  <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
                    Artof Eve
                  </span>
                </a>
                <div className="rounded-full dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle"
                    role="button"
                    id="itemActions7"
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
                    aria-labelledby="itemActions7"
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
              <div className="mt-2 text-sm">
                <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">
                  0.13 FLOW
                </span>
                <span className="dark:text-jacarta-300 text-jacarta-500">
                  1/1
                </span>
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  className="text-sm font-semibold text-accent font-display"
                  data-bs-toggle="modal"
                  data-bs-target="#buyNowModal"
                >
                  Buy now
                </button>
                <a
                  href="item.html"
                  className="flex items-center group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                  </svg>
                  <span className="text-sm font-semibold group-hover:text-accent font-display dark:text-jacarta-200">
                    View History
                  </span>
                </a>
              </div>
            </div>
          </article>
          <article>
            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 block rounded-[1.25rem] border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
              <figure className="relative">
                <a href="item.html">
                  <img
                    src="./img/products/item_11.gif"
                    alt="item 11"
                    className="w-full rounded-[0.625rem]"
                    loading="lazy"
                  />
                </a>
                <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
                  <span
                    className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                    data-tippy-content="Favorite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red"
                    >
                      <path fill="none" d="M0 0H24V24H0z" />
                      <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                    </svg>
                  </span>
                  <span className="text-sm dark:text-jacarta-200">
                    70
                  </span>
                </div>
                <div className="absolute left-3 -bottom-3">
                  <div className="flex -space-x-2">
                    <a href="#">
                      <img
                        src="img/avatars/creator_8.png"
                        alt="creator"
                        className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                        data-tippy-content="Creator: Sussygirl"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="img/avatars/owner_5.png"
                        alt="owner"
                        className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent"
                        data-tippy-content="Owner: Sussygirl"
                      />
                    </a>
                  </div>
                </div>
              </figure>
              <div className="flex items-center justify-between mt-7">
                <a href="item.html">
                  <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
                    Asuna #1649
                  </span>
                </a>
                <div className="rounded-full dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle"
                    role="button"
                    id="itemActions8"
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
                    aria-labelledby="itemActions8"
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
              <div className="mt-2 text-sm">
                <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">
                  0.8 ETH
                </span>
                <span className="dark:text-jacarta-300 text-jacarta-500">
                  1/1
                </span>
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  className="text-sm font-semibold text-accent font-display"
                  data-bs-toggle="modal"
                  data-bs-target="#buyNowModal"
                >
                  Buy now
                </button>
                <a
                  href="item.html"
                  className="flex items-center group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                  </svg>
                  <span className="text-sm font-semibold group-hover:text-accent font-display dark:text-jacarta-200">
                    View History
                  </span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Trending;
