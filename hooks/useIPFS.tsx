import { create } from 'ipfs-http-client';
import { useEffect, useState } from 'react';

type UseIPFS = { client: any };

const useIPFS = (): UseIPFS => {
  const [client, setClient] = useState<any | null>(null);
  const IPFS = async () => {
    const client = await create({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
    });
    return client;
  };
  const fetchClient = async () => {
    const response = await IPFS();
    setClient(response);
  };
  useEffect(() => {
    fetchClient();
  }, []);
  return { client };
};

export default useIPFS;
