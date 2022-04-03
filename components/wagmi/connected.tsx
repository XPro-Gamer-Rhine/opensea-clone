import React from 'react';
import { useAccount, useBalance } from 'wagmi';
import Davatar from '@davatar/react';
import Connect from './connect';
import AddressCompressor from '../utils/addressCompressor';

const Connected = () => {
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });
  const [{ data }] = useBalance({
    addressOrName: accountData?.address,
    formatUnits: 'ether',
  });

  if (accountData) {
    return (
      <div className="relative js-nav-dropdown group-dropdown">
        <button
          className="dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
          id="profileDropdown"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          aria-label="profile"
        >
          <Davatar
            size={20}
            address={accountData.address}
            generatedAvatarType="jazzicon" // optional, 'jazzicon' or 'blockies'
          />
        </button>
        <div
          className="border-2 dark:border-gray-400 border-gray-500 dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl"
          aria-labelledby="profileDropdown"
        >
          <button
            className="flex items-center px-5 my-4 leading-none select-none js-copy-clipboard font-display text-jacarta-700 whitespace-nowrap dark:text-white"
            data-tippy-content="Copy"
          >
            <span className="max-w-[10rem] overflow-hidden text-ellipsis">
              {accountData.ens?.name ? (
                accountData.ens?.name
              ) : (
                <AddressCompressor address={accountData.address} />
              )}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="w-4 h-4 mb-px ml-1 dark:fill-jacarta-300 fill-jacarta-500"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z" />
            </svg>
          </button>
          <div className="p-4 mx-5 mb-6 border rounded-lg dark:border-jacarta-600 border-jacarta-100">
            <span className="text-sm font-medium tracking-tight dark:text-jacarta-200">
              Balance
            </span>
            <div className="flex items-center">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x={0}
                y={0}
                viewBox="0 0 1920 1920"
                xmlSpace="preserve"
                className="-ml-1 mr-1 h-[1.125rem] w-[1.125rem]"
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
              <span className="text-lg font-bold text-green">
                {parseFloat(data?.formatted || '').toFixed(2)} -{' '}
                {data?.symbol}
              </span>
            </div>
          </div>
          <a
            href={'/artist'}
            className="flex items-center px-5 py-2 space-x-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="w-4 h-4 transition-colors fill-jacarta-700 dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
            </svg>
            <span className="mt-1 text-sm font-display text-jacarta-700 dark:text-white">
              My Profile
            </span>
          </a>
          <button
            onClick={disconnect}
            className="flex items-center px-5 py-2 space-x-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="w-4 h-4 transition-colors fill-jacarta-700 dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z" />
            </svg>
            <span className="mt-1 text-sm font-display text-jacarta-700 dark:text-white">
              Sign out
            </span>
          </button>
        </div>
      </div>
    );
  } else {
    return <Connect />;
  }
};

export default Connected;
