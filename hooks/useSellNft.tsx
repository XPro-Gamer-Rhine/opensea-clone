import { ethers } from 'ethers';
import useGetContract from './useGetContract';

type UseSellNft = [(nft: any, id: number) => void];

const useSellNft = (): UseSellNft => {
  const { Signer: contract } = useGetContract();
  const sellNft = async (nft: any, id: number) => {
    const priceFormatted = ethers.utils.parseUnits(
      nft.price,
      'ether'
    );
    console.log(nft);
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();
    let transaction = await contract.resellToken(id, priceFormatted, {
      value: listingPrice,
    });
    await transaction.wait();
  };
  return [sellNft];
};

export default useSellNft;
