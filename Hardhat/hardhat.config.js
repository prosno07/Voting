require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
  sourcify: {
  enabled: true
}
};

//VotingModule#Voting - 0x4A9E4Ee86B40d76f1B0f2d61AfB03057d1064822
//- https://sepolia.etherscan.io/address/0x4A9E4Ee86B40d76f1B0f2d61AfB03057d1064822#code