const path = require("path");

// Configure Chains
exports.Chains = {
  // Ganache
  development: {
    name: "development",
    rpc: "http://localhost:9933",
    chainId: 2021,
    account: process.env.PICO_DEVELOPMENT,
  },
  // Local (Edgeware Local Node)
  local: {
    name: "local",
    rpc: "http://localhost:9933",
    chainId: 2021,
    account: process.env.PICO_LOCAL,
  },
  // Rinkeby 
  rinkeby: {
    name: 'rinkeby',
    rpc: 'https://rinkeby.infura.io/v3/' + process.env.PICO_INFURA,
    chainId: 4,
    account: process.env.PICO_RINKEBY,
    wedgAddress: undefined,
    factoryAddress: undefined
  },
  // Beresheet (Edgeware Testnet)
  beresheet: {
    name: "beresheet",
    rpc: "http://beresheet1.edgewa.re:9933",
    chainId: 2021,
    account: process.env.PICO_BERESHEET,
  },
  // Edgeware
  edgeware: {
    name: "edgeware",
    rpc: "http://mainnet1.edgewa.re:9933",
    chainId: 2021,
    account: process.env.PICO_EDGEWARE,
  },
};

// Points to hardhat compiled contracts
const CONTRACT_PATH = path.join(__dirname, "/artifacts/contracts");
exports.ContractABIs = {
  UniswapV2Factory: require(CONTRACT_PATH +
    "/uniswapv2/UniswapV2Factory.sol/UniswapV2Factory.json"),
  UniswapV2Router02: require(CONTRACT_PATH +
    "/uniswapv2/UniswapV2Router02.sol/UniswapV2Router02.json"),
};
