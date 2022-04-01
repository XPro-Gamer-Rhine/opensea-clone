import React, { useState } from 'react';
import { create } from 'ipfs-http-client';
import useGetContract from '../hooks/useGetContract';
import { ethers } from 'ethers';
const Upload = () => {
  const [formInput, updateFormInput] = useState({
    price: '',
    name: '',
    description: '',
  });
  const { Signer: contract } = useGetContract();

  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const client = create('https://ipfs.infura.io:5001/api/v0');

  async function onImageChange(e: any) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;

      setFileUrl(url);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }

  async function uploadToIPFS() {
    const { name, description, price } = formInput;
    if (!name || !description || !price || !fileUrl) return;
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    });
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      /* after file is uploaded to IPFS, return the URL to use it in the transaction */
      console.log(url);
      return url;
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }

  async function listNFTForSale() {
    const url = await uploadToIPFS();
    const price = ethers.utils.parseUnits(formInput.price, 'ether');
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();
    let transaction = await contract.createToken(url, price, {
      value: listingPrice,
    });
    const response = await transaction.wait();
  }

  return (
    <section className="relative py-24">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <img
          src="img/gradient_light.jpg"
          alt="gradient"
          className="h-full w-full"
        />
      </picture>
      <div className="container">
        <h1 className="font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white">
          Create
        </h1>
        <div className="mx-auto max-w-[48.125rem]">
          <div className="mb-6">
            <label className="font-display text-jacarta-700 mb-2 block dark:text-white">
              Image, Video, Audio, or 3D Model
              <span className="text-red">*</span>
            </label>
            <p className="dark:text-jacarta-300 text-2xs mb-3">
              Drag or choose your file to upload
            </p>
            <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white py-20 px-5 text-center">
              <div className="relative z-10 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="fill-jacarta-500 mb-4 inline-block dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z" />
                </svg>
                <p className="dark:text-jacarta-300 mx-auto max-w-xs text-xs">
                  JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB,
                  GLTF. Max size: 100 MB
                </p>
              </div>
              <div className="dark:bg-jacarta-600 bg-jacarta-50 absolute inset-4 cursor-pointer rounded opacity-0 group-hover:opacity-100" />
              <input
                type="file"
                accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf"
                id="file-upload"
                className="absolute inset-0 z-20 cursor-pointer opacity-0"
                onChange={onImageChange}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="item-name"
              className="font-display text-jacarta-700 mb-2 block dark:text-white"
            >
              Asset Name<span className="text-red">*</span>
            </label>
            <input
              type="text"
              id="item-name"
              className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white"
              placeholder="Asset Name"
              onChange={(e) =>
                updateFormInput({
                  ...formInput,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="item-name"
              className="font-display text-jacarta-700 mb-2 block dark:text-white"
            >
              Asset Description<span className="text-red">*</span>
            </label>
            <input
              type="text"
              id="item-name"
              className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white"
              placeholder="Asset Description"
              onChange={(e) =>
                updateFormInput({
                  ...formInput,
                  description: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="item-name"
              className="font-display text-jacarta-700 mb-2 block dark:text-white"
            >
              Asset Price<span className="text-red">*</span>
            </label>
            <input
              type="text"
              id="item-name"
              className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 hover:ring-2 dark:text-white"
              placeholder="Asset Price"
              onChange={(e) =>
                updateFormInput({
                  ...formInput,
                  price: e.target.value,
                })
              }
            />
          </div>
          <button
            onClick={listNFTForSale}
            className="bg-accent-lighter rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
          >
            Create
          </button>
        </div>
      </div>
    </section>
  );
};

export default Upload;
