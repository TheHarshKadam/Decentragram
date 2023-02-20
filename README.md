# Decentragram
- Decentragram is a Decentralized Instagram Clone developed using Solidity, Web3.js, React Native, IPFS. 
- User can Tip the images in the feed. 
- The most tipped image will be at the top of the feed. 
- The author (who is uploading the image) will have to pay some gas fees. 
- This whole project is on Ethereum Blockchain

<img src =  "https://user-images.githubusercontent.com/77354987/219971087-978bb506-a206-416e-bc80-5fc98fdea1c4.png" alt = "DEMO" width="880" height="480">

## About File Storage System - 

- The file storage system used is [Interplanetary File Storage System (IPFS)](https://www.infura.io/)
- Enter the login credentials and ```create a new project```
- Copy the ```Project ID``` and ```API key```
- Just replace the following code in ```src/components/App.js``` with your own project and api key

``` const auth = 'Basic ' + Buffer.from("your-project-id : api-key").toString('base64');```

## Getting Started 

A few resources to get you started if this is your first Blockchain project:

- [Ganache - Private Ethereum blockchain environment](https://trufflesuite.com/ganache/) 
- [Truffle - Testing framework for developing blockchain applications.](https://trufflesuite.com/) 
- [IPFS - Distributed file storage protocol](https://www.infura.io/)
- [Node.js - JavaScript backend environment](https://nodejs.org/en/download/) 
- [React Native - To create Web/Mobile dApps](https://reactnative.dev/) 
- [Solidity  - Programming language for constructing and designing smart contracts](https://docs.soliditylang.org/en/v0.8.9/installing-solidity.html)
- [Metamask -  A decentralized wallet ](https://metamask.io/download/)

### NOTE
- Frontend is not updated yet for better user experience
