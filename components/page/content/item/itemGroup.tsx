import React from 'react';
import useBuyNft from '../../../../hooks/useBuyNft';
import useFetchData from '../../../../hooks/useFetchData';
import useGetContract from '../../../../hooks/useGetContract';
import SingleItem from './singleItem';

const ItemGroup = () => {
  const { nfts } = useFetchData();
  const { account } = useGetContract();
  const [buyNft] = useBuyNft();

  if (!nfts.length)
    return (
      <h1 className="px-20 py-10 text-3xl">
        No items in marketplace
      </h1>
    );
  return (
    <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
      {nfts.map((nft, i) => (
        <SingleItem
          name={nft.name}
          price={nft.price}
          image={nft.image}
          account={account}
          buyNft={buyNft}
          nft={nft}
          key={i} owner={''}        />
      ))}
    </div>
  );
};

export default ItemGroup;
