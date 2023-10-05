# OpenSea Metadata Refresher

A simple node.js script that can be used for refreshing OpenSea metadata for a range of tokenIds in a collection on any supported network. 721 and 1155 NFTs are both supported.

ENV Vars:

- CONTRACT_ADDRESS - NFT contract address
- NETWORK - Select network name from the list [here](https://docs.opensea.io/reference/supported-chains)
- API_KEY - Get an OpenSea API key [here](https://docs.opensea.io/reference/api-keys)
- TOKEN_ID_START - The tokenId to start at
- TOKEN_ID_END - The last tokenId to refresh
