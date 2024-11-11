---
title: ⚓ Developer Tools
sidebar_label: Developer Tools
---

## Overview <a id="Developer Tools"></a>

Kaia offers a variety of tools that can be useful in building metaverse applications. Whether you're an individual working on a metaverse smart contract for a hackathon project or an enterprise looking to explore new opportunities for branding, global reach, and revenue generation in the digital world, the following list of tools is a good place to start.


## Wallets <a id="Wallets"> </a>
A wallet is a digital software that stores private and public keys and keeps track of digital assets. It's primarily used for sending assets and interacting with smart contracts and decentralized applications (dApps). In the metaverse, a wallet is required for exploration and to perform various functions such as:

* **Managing ownership**: A wallet stores the assets you own in the metaverse.
* **Controlling assets**: Users can control, manage, buy, sell, or trade digital assets through their wallets. 
* **Executing transactions**: With a wallet, users can initiate any transactions in the metaverse by integrating with dApps. 

### Mobile Wallets <a id="Mobile Wallets"></a>
* [Klip](https://klipwallet.com/) - [Documentation](https://docs.klipwallet.com/)
* [D'CENT](https://dcentwallet.com/)
* [nBlocks](https://nblocks.io/)
* [Kaia Wallet](https://www.kaiawallet.io/)
* [Huobi Wallet](https://www.huobiwallet.com/en/)
* [Token Pocket](https://www.tokenpocket.pro/)
* [Biport](https://biport.io/)
* [Alphawallet](https://alphawallet.com/)
* [BitKeep](https://bitkeep.com/)
* [Trustkeys](https://trustkeys.network/)
* [Nest](https://nes.tech/)
* [Math Wallet](https://mathwallet.org/ko-kr/)


### Browser Extension Wallets <a id="Browser Extension Wallets"></a>

* [Kaia Wallet](https://www.kaiawallet.io/) - [Documentation](https://docs.kaiawallet.io/)
* [Metamask](https://docs.kaia.io/docs/build/tutorials/connecting-metamask/)
* [Dekey](https://chrome.google.com/webstore/detail/dekey/cekclnkpicopjiagjphfoahcinhmgbjp)
* [COIN98](https://chrome.google.com/webstore/detail/coin98-wallet/aeachknmefphepccionboohckonoeemg)
* [web3auth](https://web3auth.io/) - [Documentation](https://web3auth.io/docs/connect-blockchain/klaytn)
* [web3Modal](https://github.com/WalletConnect/web3modal/tree/V1/example)


### Hardware Wallets <a id="Hardware Wallets"></a>
* [D'CENT](https://dcentwallet.com/)

### Multisig Wallet <a id="MultiSig Wallet"></a>
* [Kaia Safe](https://safe.kaia.io/)

## Explorers <a id="Explorer"></a>

Blockchain explorers are web applications that allow users to search and view data such as blocks, transactions, addresses, and contracts. 

Kaia supports the following explorers: 

* [KaiaScan](https://kaiascan.io/)
* [Kaiascope](https://kaiascope.com/)
* [OKX Kaia Explorer](https://www.okx.com/web3/explorer/kaia)

### Open-Source Explorers

 In the Kaia ecosystem, there are open-source explorers that can be used as an alternative to closed-system explorers. These open-source explorers are community-driven and available for anyone to use, explore, and improve, making integration with other tools and platforms much easier, and allowing for a faster pace of evolution and improvement than a proprietary solution. 

* [Blockscout](https://github.com/blockscout/blockscout)

## SDKs and API Libraries <a id="SDKs and API Libraries"></a>
For your metaverse application to interact with the Kaia blockchain (i.e., read on-chain data or send transactions on-chain), it must be connected to a Kaia node. To connect to a Kaia node, Kaia provides several convenient libraries that will teach you how to do so: 

* [Kaia SDK](https://github.com/kaiachain/kaia-sdk)
* [Caver-js](https://github.com/kaiachain/caver-js)
* [Web3 js](https://web3js.readthedocs.io/en/v1.8.1/)
* [Tatum-js](https://github.com/tatumio/tatum-js)
* [web3.unity](https://github.com/ChainSafe/web3.unity)

## Integrated Development Environments <a id="Integrated Development Environment"></a>

* [Remix IDE](https://remix.ethereum.org/): is a browser-based IDE and powerful opensource tool that lets you test, deploy and execute smart contracts.
* [Visual Studio](https://code.visualstudio.com/download): Is one of the leading IDE used by developers

## Local Web3 Development Environments <a id="Local Web3 Development"> </a>
To deploy, test, and write smart contracts locally, Kaia supports the following smart contract development environments:

* [Hardhat](https://hardhat.org/)
* [Foundry](https://book.getfoundry.sh/)

## Decentralized Exchanges <a id="Decentralized Exchanges"></a>

The Kaia ecosystem provides an open-source DEX infrastructure that offers various functionalities like token swapping, staking, providing liquidity, decentralized governance, and monitoring exchange activities through open-source and decentralized dashboards. Additionally, developers can customize new features and visualizations based on their specific needs.  
 
Deployment is automated using Dockers and Kubernetes in the open-source DEX to easily spin up a DEX. Here are the different components of DEX: 

 * [Open Source Dex](https://dex.baobab.klaytn.net/)
    * [Dex Frontend](https://github.com/kaiachain/open-dex-frontend)
    * [Dex Dashboard](https://github.com/kaiachain/open-dex-dashboard)
    * [Dex Contracts](https://github.com/kaiachain/open-dex-contracts)
    * [Dex Subgraph](https://github.com/kaiachain/open-dex-subgraphs)

The DEX testnet is available for testing in the Kairos testnet without any installations. Feel free to play around [here](https://dex.baobab.klaytn.net/swap).

## Other Tools <a id="Other Tools"></a>

* [Kaia Online Toolkit](https://toolkit.kaia.io/): This toolkit provides code samples and pages to help you utilize the Kaia SDK(caver-js). With the Online Toolkit, you can derive the code to deploy your Kaia contracts using caver-js. This contract includes [KIP7](https://toolkit.kaia.ip/kct/KIP7Deploy), [KIP17](https://toolkit.kaia.io/kct/KIP17Deploy), [KIP37](https://toolkit.kaia.io/kct/KIP37Deploy) and other [KCT](https://toolkit.kaia.io/kct/KCTDetection). The online toolkit also gives users the functionality of interacting with deployed contracts given its ABI and contract address.
  
* [Sidechain](https://docs.kaia.io/nodes/service-chain/): This enables developers who wants to build a local private network with high TPS, minimal transaction fees or data privacy.
   
* [Kaia Wizard](https://wizard.kaia.io/): This is an interactive generator to bootstrap your smart contract and learn about [Kaia Contracts](https://github.com/kaiachain/kaia-contracts). This is based on [OpenZeppelin Wizard](https://wizard.openzeppelin.com/).


:::info
If you have any questions, please join our [Discord server](https://discord.gg/kaiachain), or send us an email at developers@kaia.io
:::


