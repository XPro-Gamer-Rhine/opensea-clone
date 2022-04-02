import useGetContract from './useGetContract';
import { ethers } from 'ethers';
import { useState } from 'react';
import useIPFS from './useIPFS';

type UseUpload = [() => void];
const useUpload = (file: any, formData: any): UseUpload => {
  const { Signer: contract } = useGetContract();
  const { client } = useIPFS();

  const UploadToIPFS = async () => {
    let imgUrl = '';
    try {
      const added = await client.add(file, {
        progress: (prog: any) => console.log(`received: ${prog}`),
      });
      imgUrl = `https://ipfs.infura.io/ipfs/${added.path}`;
    } catch (error) {
      console.log('Error uploading file: ', error);
    }

    const { name, description, price } = formData;

    if (!name || !description || !price || !imgUrl) {
      return;
    } else {
      const formattedData = JSON.stringify({
        name,
        description,
        image: imgUrl,
      });
      try {
        const added = await client.add(formattedData);
        const url = `https://ipfs.infura.io/ipfs/${added.path}`;
        return url;
      } catch (error) {
        console.log('Error uploading file: ', error);
      }
    }
  };

  const upload = async () => {
    const url = await UploadToIPFS();
    const price = ethers.utils.parseUnits(formData.price, 'ether');
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();
    let transaction = await contract.createToken(url, price, {
      value: listingPrice,
    });
    await transaction.wait();
  };

  return [upload];
};

export default useUpload;
