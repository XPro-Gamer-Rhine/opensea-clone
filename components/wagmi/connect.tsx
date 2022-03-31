import React, { useState } from 'react';
import Image from 'next/image';
import { useConnect } from 'wagmi';
import Modal from '../utils/modal';

const Connect = () => {
  const [{ data, error }, connect] = useConnect();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          className="w-4 h-4 transition-colors fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:fill-sky-100"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
        </svg>
      </button>
      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(!modalOpen)}
          title={'Connect Wallet'}
        >
          <div className="p-2 lg:p-6 modal-body">
            <div className="flex items-center justify-between mb-2">
              <div className="modal-content">
                {data.connectors.map((x) => (
                  <button
                    className="flex flex-col justify-center p-6 py-5 transition-colors btn btn-primary-alta mt--20 dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50"
                    key={x.id}
                    onClick={() => connect(x)}
                    data-bs-dismiss="modal"
                  >
                    {x.name == 'MetaMask' ? (
                      <Image
                        src="/metamask.svg"
                        width="50"
                        height="50"
                        alt="Metamask Logo"
                        className="justify-center"
                      />
                    ) : x.name == 'WalletConnect' ? (
                      <Image
                        src="/wallet-connect.svg"
                        width="50"
                        height="50"
                        alt="Metamask Logo"
                      />
                    ) : (
                      <Image
                        src="/coinbase.svg"
                        width="80"
                        height="80"
                        alt="Metamask Logo"
                      />
                    )}
                    <div className="mt-1 text-center">
                      <h2 className="text-xl font-semibold lg:text-2xl dark:text-gray-900">
                        {x.name} Connect
                      </h2>
                    </div>
                    {!x.ready && ' (unsupported)'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Connect;
