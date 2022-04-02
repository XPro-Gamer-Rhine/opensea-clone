import React from 'react';
import ItemGroup from './item/itemGroup';

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
          Trending
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
        </div>
        <ItemGroup />
      </div>
    </section>
  );
};

export default Trending;
