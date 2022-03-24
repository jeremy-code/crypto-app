require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.13",
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL,
      accounts: [process.env.ROPSTEN_ACCOUNT],
    },
  },
};
