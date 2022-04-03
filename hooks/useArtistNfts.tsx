import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useGetContract from './useGetContract';

type UseArtistNfts = {
  nfts: any[];
};
const useArtistNfts = (): UseArtistNfts => {
  const [nfts, setNfts] = useState<any[]>([]);
  const { Signer: contract, account } = useGetContract();
  const loadNFTs = async () => {
    try {
      const data = await contract.fetchMyNFTs();
      const items = await Promise.all(
        data.map(async (i: any) => {
          const tokenURI = await contract.tokenURI(i.tokenId);
          const meta = await axios.get(tokenURI);
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
            tokenURI,
          };
          return item;
        })
      );
      setNfts(items);
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadNFTs();
  }, [contract.signer]);

  return { nfts };
};

export default useArtistNfts;
