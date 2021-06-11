const ethers = require("ethers");
const { argv } = require("yargs");

const { Chains, ContractABIs } = require("../constants");

async function deploy_core(network) {
  if (Chains[network]["account"] == undefined) {
    throw new Error(
      "Deployment account is undefined, please define in env variables, see constants.js for: " +
        network
    );
  }

  const provider = new ethers.providers.JsonRpcProvider(
    Chains[network]["rpc"],
    {
      chainId: Chains[network]["chainId"],
      name: Chains[network]["name"],
    }
  );
  let deployerWallet = new ethers.Wallet(Chains[network]["account"], provider);

  console.log("Attempting to deploy from account: " + deployerWallet.address);

  // deploy peppers
  const Habanero = new ethers.ContractFactory(
    ContractABIs.Habanero.abi,
    ContractABIs.Habanero.bytecode,
    deployerWallet
  );
  const Jalapeno = new ethers.ContractFactory(
    ContractABIs.Jalapeno.abi,
    ContractABIs.Jalapeno.bytecode,
    deployerWallet
  );
  const Poblano = new ethers.ContractFactory(
    ContractABIs.Poblano.abi,
    ContractABIs.Poblano.bytecode,
    deployerWallet
  );
  const Serrano = new ethers.ContractFactory(
    ContractABIs.Serrano.abi,
    ContractABIs.Serrano.bytecode,
    deployerWallet
  );
  const Shishito = new ethers.ContractFactory(
    ContractABIs.Shishito.abi,
    ContractABIs.Shishito.bytecode,
    deployerWallet
  );

  const serrano = await Serrano.deploy('1000000000000000000');
  await serrano.deployed();
  const jalapeno = await Jalapeno.deploy('1000000000000000000');
  await jalapeno.deployed();
  const habanero = await Habanero.deploy('1000000000000000000');
  await habanero.deployed();
  const shishito = await Shishito.deploy('1000000000000000000');
  await shishito.deployed();
  const poblano = await Poblano.deploy('1000000000000000000');
  await poblano.deployed();

  console.log("Serrano address:              ", serrano.address);
  console.log("Jalapeno address:             ", jalapeno.address);
  console.log("Habanero address:             ", habanero.address);
  console.log("Shishito address:             ", shishito.address);
  console.log("Poblano address:              ", poblano.address);
}

deploy_core(argv.network);
