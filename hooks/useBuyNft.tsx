import { ethers } from 'ethers';
import useGetContract from './useGetContract';

type UseBuyNft = [(nft: any) => void];

const useBuyNft = (): UseBuyNft => {
  const { Signer: contract } = useGetContract();
  const buyNft = async (nft: any) => {
    const price = ethers.utils.parseUnits(
      nft.price.toString(),
      'ether'
    );
    const transaction = await contract.createMarketSale(nft.tokenId, {
      value: price,
    });
    await transaction.wait();
  };
  return [buyNft];
};

export default useBuyNft;
