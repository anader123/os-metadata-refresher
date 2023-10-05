require("dotenv").config();
const axios = require("axios");

const { NETWORK, CONTRACT_ADDRESS, API_KEY, TOKEN_ID_START, TOKEN_ID_END } =
  process.env;
const tokenIdStart = parseInt(TOKEN_ID_START); // tokenId start at 0 or 1
const tokenIdEnd = parseInt(TOKEN_ID_END); // Will run inclusive of this id

const refreshNFTData = async (tokenId) => {
  const endpoint = `https://api.opensea.io/v2/chain/${NETWORK}/contract/${CONTRACT_ADDRESS}/nfts/${tokenId}/refresh`;
  try {
    const config = {
      headers: {
        "x-api-key": API_KEY,
      },
    };

    const response = await axios.post(endpoint, {}, config);
    return response.data;
  } catch (error) {
    console.error(`Error calling OS API: ${error.message}`);
    return null;
  }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const main = async () => {
  for (let i = tokenIdStart; i <= tokenIdEnd; i++) {
    const data = await refreshNFTData(i);
    console.log(`Call for TokenId ${i} data:`, data);
    if (i < tokenIdEnd - 1) {
      await delay(1500); // 1.5 second delay for rate limited keys
    }
  }
};

main();
