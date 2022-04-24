import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'WhizcatCapital',
  tokenName: 'whiz',
  tokenSymbol: 'WCAP',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 50,
  whitelistSale: {
    price: 0.0005,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.0007,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.00009,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xe373F296fF8738F4862C7aE0ebc1bac595C14FEC",
  marketplaceIdentifier: 'whizcatcapital',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
