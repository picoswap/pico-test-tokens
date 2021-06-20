const path = require("path");

// Configure Chains
exports.Chains = {
  // Ganache
  ganache: {
    name: "ganache",
    rpc: "http://localhost:9933",
    chainId: 1337,
    account: process.env.PICO_GANACHE,
  },
  // Local (Edgeware Local Node)
  local: {
    name: "local",
    rpc: "http://localhost:9933",
    chainId: 2021,
    account: '1111111111111111111111111111111111111111111111111111111111111111',
    // account: process.env.PICO_LOCAL,
  },
  // Beresheet (Edgeware Testnet)
  beresheet: {
    name: "beresheet",
    rpc: "http://beresheet1.edgewa.re:9933",
    chainId: 2022,
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
  Habanero: require(CONTRACT_PATH + "/Habanero.sol/Habanero.json"),
  Jalapeno: require(CONTRACT_PATH + "/Jalapeno.sol/Jalapeno.json"),
  Poblano: require(CONTRACT_PATH + "/Poblano.sol/Poblano.json"),
  Serrano: require(CONTRACT_PATH + "/Serrano.sol/Serrano.json"),
  Shishito: require(CONTRACT_PATH + "/Shishito.sol/Shishito.json"),
};
