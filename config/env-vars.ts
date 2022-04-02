const NFT_MARKET = require('../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json');

const envVars = {
  API_URL: String(process.env.NEXT_PUBLIC_NETWORK_NAME),
  NEXT_PUBLIC_ALCHEMY_ID: String(process.env.NEXT_PUBLIC_ALCHEMY_ID),
  NEXT_PUBLIC_INFURA_ID: String(process.env.NEXT_PUBLIC_INFURA_ID),
  NEXT_PUBLIC_ETHERSCAN_API_KEY: String(
    process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY
  ),
  NFT_MARKET: NFT_MARKET.abi,
  DEPLOY_ADDRESS: String(process.env.NEXT_PUBLIC_DEPLOY_ADDRESS),
};

export default envVars;
