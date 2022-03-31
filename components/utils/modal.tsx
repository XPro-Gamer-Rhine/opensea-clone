import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  shouldCloseModalOnClickOutside?: boolean;
}
const Modal: React.FC<Props> = ({
  isOpen,
  children,
  onClose,
  shouldCloseModalOnClickOutside = true,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => onClose()}
      >
        <div className="min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-2xl overflow-hidden text-left align-middle transition-all transform shadow-xl modal-dialog rounded-2xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="placeBidLabel">
                    Place a bid
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => onClose()}
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
                <div className="p-6 modal-body">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold font-display text-jacarta-700 dark:text-white">
                      Price
                    </span>
                  </div>
                  <div className="relative flex items-center mb-2 overflow-hidden border rounded-lg dark:border-jacarta-600 border-jacarta-100">
                    <div className="flex items-center self-stretch flex-1 px-2 border-r border-jacarta-100 bg-jacarta-50">
                      <span>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x={0}
                          y={0}
                          viewBox="0 0 1920 1920"
                          xmlSpace="preserve"
                          className="w-5 h-5 mr-1"
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
                      <span className="text-sm font-display text-jacarta-700">
                        ETH
                      </span>
                    </div>
                    <input
                      type="text"
                      className="focus:ring-accent h-12 w-full flex-[3] border-0 focus:ring-inset"
                      placeholder="Amount"
                      defaultValue="0.05"
                    />
                    <div className="flex self-stretch justify-end flex-1 border-l bg-jacarta-50 border-jacarta-100">
                      <span className="self-center px-2 text-sm">
                        $130.82
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm dark:text-jacarta-400">
                      Balance: 0.0000 WETH
                    </span>
                  </div>
                  <div className="flex items-center mt-4 space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="self-start w-5 h-5 rounded checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 focus:ring-offset-0"
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm dark:text-jacarta-200"
                    >
                      By checking this box, I agree to Xhibiter
                      <a href="#" className="text-accent">
                        Terms of Service
                      </a>
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      type="button"
                      className="px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark"
                    >
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
