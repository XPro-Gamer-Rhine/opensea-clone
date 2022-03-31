import { Signer } from 'ethers';
import { useEffect, useState } from 'react';
import { useAccount, useContract, useProvider } from 'wagmi';
import config from '../config/env-vars';
import { marketplaceAddress } from '../config';
const { NFT_MARKET } = config;

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

  return {
    Signer,
    Provider,
    account,
  };
};
export default useGetContract;
