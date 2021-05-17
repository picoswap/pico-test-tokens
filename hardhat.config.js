require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16",
      },
    ],
  },
  networks: {
    hardhat: {},
  },
};
