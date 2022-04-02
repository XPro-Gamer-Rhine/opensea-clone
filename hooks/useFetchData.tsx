import { useEffect, useState } from 'react';
import useGetContract from './useGetContract';
import axios from 'axios';
import { ethers } from 'ethers';

type UseFetchData = {
  nfts: any[];
  isLoading: boolean;
};
const useFetchData = (): UseFetchData => {
  const { PublicContract: contract } = useGetContract();
  const [nfts, setNfts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadNFTs = async () => {
    const data = await contract.fetchMarketItems();
    const items = await Promise.all(
      data.map(async (i: any) => {
        const tokenUri = await contract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(
          i.price.toString(),
          'ether'
        );
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );
    setNfts(items);
  };

  useEffect(() => {
    loadNFTs();
  }, []);
  return { nfts, isLoading };
};

export default useFetchData;
