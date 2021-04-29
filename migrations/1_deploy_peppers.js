module.exports = async function(deployer) {
  const Serrano = artifacts.require("Serrano");
  const Jalapeno = artifacts.require("Jalapeno");
  const Habanero = artifacts.require("Habanero");
  const Shishito = artifacts.require("Shishito");
  const Poblano = artifacts.require("Poblano");

  await deployer.deploy(Serrano, 1000);
  await deployer.deploy(Jalapeno, 1000 * 1000);
  await deployer.deploy(Habanero, 1000 * 1000 * 1000);
  await deployer.deploy(Shishito, 1000 * 1000 * 1000 * 1000);
  await deployer.deploy(Poblano, 1000 * 1000 * 1000 * 1000 * 1000);
};
