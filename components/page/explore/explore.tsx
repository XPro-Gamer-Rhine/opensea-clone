import React from 'react';
import ItemGroup from '../content/item/itemGroup';

const Explore = () => {
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
              src="./img/products/item_11.gif"
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
              <ItemGroup />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Explore;
