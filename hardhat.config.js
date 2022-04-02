require('dotenv').config();
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');

const {
    KOVAN_PRIVATE_KEY,
    ETHERSCAN_API_KEY,
    COIN_MARKETCAP_API_KEY,
    NEXT_PUBLIC_NETWORK_NAME_KOVAN,
} = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task(
    'accounts',
    'Prints the list of accounts',
    async(taskArgs, hre) => {
        const accounts = await hre.ethers.getSigners();

        for (const account of accounts) {
            console.log(account.address);
        }
    }
);

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    gasReporter: {
        currency: 'USD',
        coinmarketcap: COIN_MARKETCAP_API_KEY,
        url: 'https://eth-mainnet.alchemyapi.io/v2/GBjvplStTQ2x1FiAa5-5Qdyv2_8ZBuwe',
    },
    solidity: {
        version: '0.8.4',
        settings: {
            optimizer: {
                enabled: true,
                runs: 1000,
            },
        },
    },
    paths: {
        artifacts: './artifacts',
    },
    networks: {
        hardhat: {
            chainId: 1337,
        },
        kovan: {
            url: String(NEXT_PUBLIC_NETWORK_NAME_KOVAN),
            accounts: [`0x${KOVAN_PRIVATE_KEY}`],
        },
    },
    etherscan: { apiKey: ETHERSCAN_API_KEY },
};