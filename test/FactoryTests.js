const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DatumendoFactory", function () {
  it("Test contract deplyment", async function () {

    const OnchainArt = await ethers.getContractFactory("DatumendoFactory", {
    });
    const onchainArt = await OnchainArt.deploy(
    );
    await onchainArt.deployed();
  });
});
