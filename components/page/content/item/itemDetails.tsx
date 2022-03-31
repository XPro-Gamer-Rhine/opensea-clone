import React from 'react';

interface Props {
  setModalOpen: (boolean: boolean) => void;
}
const ItemDetails: React.FC<Props> = ({ setModalOpen }) => {
  return (
    <section className="relative pt-12 pb-24 lg:py-24">
      <picture className="absolute inset-0 pointer-events-none -z-10 dark:hidden">
        <img
          src="img/gradient_light.jpg"
          alt="gradient"
          className="h-full"
        />
      </picture>
      <div className="container">
        <div className="md:flex md:flex-wrap">
          <figure className="mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-1/2">
            <img
              src="img/products/item_single_large.jpg"
              alt="item"
              className="cursor-pointer rounded-[1.25rem]"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
            />
            <div
              className="modal fade"
              id="imageModal"
              tabIndex={-1}
              aria-labelledby="buyNowModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog !my-0 flex h-full items-center justify-center p-4">
                <img
                  src="img/products/item_single_full.jpg"
                  alt="item"
                />
              </div>
              <button
                type="button"
                className="absolute btn-close top-6 right-6"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="w-6 h-6 fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button>
            </div>
          </figure>
          <div className="md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]">
            <div className="flex mb-3">
              <div className="flex items-center">
                <a
                  href="collection.html"
                  className="mr-2 text-sm font-bold text-accent"
                >
                  CryptoGuysNFT
                </a>
                <span
                  className="inline-flex items-center justify-center w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 bg-green"
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
                </span>
              </div>
              <div className="flex ml-auto space-x-2">
                <div className="flex items-center px-4 py-2 space-x-1 bg-white border dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-xl">
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
            <h1 className="mb-4 text-4xl font-semibold font-display text-jacarta-700 dark:text-white">
              TSARÉVNA
            </h1>
            <div className="flex items-center mb-8 space-x-4 whitespace-nowrap">
              <div className="flex items-center">
                <span className="-ml-1" data-tippy-content="ETH">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x={0}
                    y={0}
                    viewBox="0 0 1920 1920"
                    xmlSpace="preserve"
                    className="w-4 h-4 mr-1"
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
                <span className="text-sm font-medium tracking-tight text-green">
                  4.7 ETH
                </span>
              </div>
              <span className="text-sm dark:text-jacarta-300 text-jacarta-400">
                Highest bid
              </span>
              <span className="text-sm dark:text-jacarta-300 text-jacarta-400">
                1/1 available
              </span>
            </div>
            <p className="mb-10 dark:text-jacarta-300">
              Neque aut veniam consectetur magnam libero, natus eius
              numquam reprehenderit hic at, excepturi repudiandae
              magni optio odio doloribus? Facilisi lobortisal morbi
              fringilla urna amet sed ipsum.
            </p>
            <div className="flex flex-wrap mb-8">
              <div className="flex mb-4 mr-8">
                <figure className="mr-4 shrink-0">
                  <a href="user.html" className="relative block">
                    <img
                      src="img/avatars/avatar_7.jpg"
                      alt="avatar 7"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div
                      className="dark:border-jacarta-600 bg-green absolute -right-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
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
                <div className="flex flex-col justify-center">
                  <span className="block text-sm text-jacarta-400 dark:text-white">
                    Creator <strong>10% royalties</strong>
                  </span>
                  <a href="user.html" className="block text-accent">
                    <span className="text-sm font-bold">
                      @creative_world
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex mb-4">
                <figure className="mr-4 shrink-0">
                  <a href="user.html" className="relative block">
                    <img
                      src="img/avatars/avatar_1.jpg"
                      alt="avatar 1"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div
                      className="dark:border-jacarta-600 bg-green absolute -right-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
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
                <div className="flex flex-col justify-center">
                  <span className="block text-sm text-jacarta-400 dark:text-white">
                    Owned by
                  </span>
                  <a href="user.html" className="block text-accent">
                    <span className="text-sm font-bold">
                      @051_Hart
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white border dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-2lg">
              <div className="mb-8 sm:flex sm:flex-wrap">
                <div className="sm:w-1/2 sm:pr-4 lg:pr-8">
                  <div className="block overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="text-sm dark:text-jacarta-300 text-jacarta-400">
                      Highest bid by{' '}
                    </span>
                    <a
                      href="user.html"
                      className="text-sm font-bold text-accent"
                    >
                      0x695d2ef170ce69e794707eeef9497af2de25df82
                    </a>
                  </div>
                  <div className="flex mt-3">
                    <figure className="mr-4 shrink-0">
                      <a href="user.html" className="relative block">
                        <img
                          src="img/avatars/avatar_4.jpg"
                          alt="avatar"
                          className="rounded-2lg"
                          loading="lazy"
                        />
                      </a>
                    </figure>
                    <div>
                      <div className="flex items-center whitespace-nowrap">
                        <span
                          className="-ml-1"
                          data-tippy-content="ETH"
                        >
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x={0}
                            y={0}
                            viewBox="0 0 1920 1920"
                            xmlSpace="preserve"
                            className="w-5 h-5"
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
                        <span className="text-lg font-medium leading-tight tracking-tight text-green">
                          4.7 ETH
                        </span>
                      </div>
                      <span className="text-sm dark:text-jacarta-300 text-jacarta-400">
                        ~10,864.10
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 dark:border-jacarta-600 sm:border-jacarta-100 sm:mt-0 sm:w-1/2 sm:border-l sm:pl-4 lg:pl-8">
                  <span className="text-sm js-countdown-ends-label text-jacarta-400 dark:text-jacarta-300">
                    Auction ends in
                  </span>
                  <div
                    className="flex mt-3 space-x-4 js-countdown-single-timer"
                    data-countdown="2022-09-07T19:40:30"
                    data-expired="This auction has ended"
                  >
                    <span className="countdown-days text-jacarta-700 dark:text-white">
                      <span className="js-countdown-days-number text-lg font-medium lg:text-[1.5rem]" />
                      <span className="block text-xs font-medium tracking-tight">
                        Days
                      </span>
                    </span>
                    <span className="countdown-hours text-jacarta-700 dark:text-white">
                      <span className="js-countdown-hours-number text-lg font-medium lg:text-[1.5rem]" />
                      <span className="block text-xs font-medium tracking-tight">
                        Hrs
                      </span>
                    </span>
                    <span className="countdown-minutes text-jacarta-700 dark:text-white">
                      <span className="js-countdown-minutes-number text-lg font-medium lg:text-[1.5rem]" />
                      <span className="block text-xs font-medium tracking-tight">
                        Min
                      </span>
                    </span>
                    <span className="countdown-seconds text-jacarta-700 dark:text-white">
                      <span className="js-countdown-seconds-number text-lg font-medium lg:text-[1.5rem]" />
                      <span className="block text-xs font-medium tracking-tight">
                        Sec
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-block w-full px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark"
              >
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetails;
