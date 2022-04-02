import { ethers, Signer } from 'ethers';
import { useEffect, useState } from 'react';
import { useAccount, useContract, useProvider } from 'wagmi';
import config from '../config/env-vars';
import { marketplaceAddress } from '../config';
const { NFT_MARKET, API_URL } = config;
const useGetContract = () => {
  const [{ data: account }] = useAccount({
    fetchEns: true,
  });
  const [contractSigner, setContractSigner] = useState<Signer>();
  const contractProvider = useProvider();

  // get signer
  useEffect(() => {
    (async () => {
      try {
        const res = await account?.connector?.getSigner();
        setContractSigner(res);
      } catch (e) {
        setContractSigner(undefined);
      }
    })();
  }, [account?.connector]);

  // instantiate contract
  const Signer = useContract({
    addressOrName: marketplaceAddress,
    contractInterface: NFT_MARKET,
    signerOrProvider: contractSigner,
  });
  const Provider = useContract({
    addressOrName: marketplaceAddress,
    contractInterface: NFT_MARKET,
    signerOrProvider: contractProvider,
  });

  const publicProvider = new ethers.providers.JsonRpcProvider(
    API_URL
  );
  const PublicContract = new ethers.Contract(
    marketplaceAddress,
    NFT_MARKET,
    publicProvider
  );

  return {
    Signer,
    Provider,
    PublicContract,
    account,
  };
};
export default useGetContract;
