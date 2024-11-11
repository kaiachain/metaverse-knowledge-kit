---
title: Gaming SDK
sidebar_label: Before you start
---

# 🔧 Before You Start <a id="Before you start with ChainSafe SDK"></a>

To get started, here are some details you should consider while reading the documentation.

## Kaia Gas Fee <a id="Kaia Gas Fee"></a>

Kaia has a fixed gas fee, so make sure to do the following steps to setting up your Metamask:

* Click on ***Turn on Enhanced Gas Fee UI*** in Settings to set gas fee
* Set the ***Enable Enhanced Gas Fee UI*** toggle to *ON* and exit Settings.
  
Click [here](https://docs.kaia.io/docs/build/tutorials/connecting-metamask/#step-4-send-klay-) for more details.

## Kaia RPC URL and Chain ID <a id="Kaia RPC URL and Chain ID"></a>

*Kaia mainnet: RPC URL* = https://public-en.node.kaia.io Chain ID = 8217

*Kaia testnet: RPC URL* = https://public-en-kairos.node.kaia.io Chain ID = 1001

## ABI formatting <a id="ABI Formatting"></a>
The ABI has a special formatting. Replace the " with \" , otherwise it will not be recognise by the SDK.

***Example***:

```java
string abi = "[ { \"inputs\": [ { \"internalType\": \"uint8\", \"name\": \"_myArg\", \"type\": \"uint8\" } ], \"name\": \"addTotal\", \"outputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"function\" }, { \"inputs\": [], \"name\": \"myTotal\", \"outputs\": [ { \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" } ], \"stateMutability\": \"view\", \"type\": \"function\" } ]";
```

## Solving Win32Exception <a id="Solving System.ComponentModel.Win32Exception Error"></a>

You may encounter this error: System.ComponentModel.Win32Exception (2): No such file or directory while building the project if you are using macOS. If it's the case, follow these steps:

* Install python 2.7
* Activate it in your project environment by running pyenv global 2.7.18 (to make it the default version everywhere) or pyenv local 2.7.18 (to make only the current directory use this version)
* Create a folder called Editor under Assets under Project window. Inside Editor, create a C# file called **PreBuildProcessing** and use the code below
* Restart and build your project

Please refer to this [link](https://forum.unity.com/threads/case-1412113-builderror-osx-12-3-and-unity-2020-3-constant-build-errors.1255419/) for more details: 

```java
 using UnityEditor;
 using UnityEditor.Build;
 using UnityEditor.Build.Reporting;
 using UnityEngine;
 
 public class PreBuildProcessing : IPreprocessBuildWithReport
 {
     public int callbackOrder => 1;
     public void OnPreprocessBuild(BuildReport report)
     {
         System.Environment.SetEnvironmentVariable("EMSDK_PYTHON", "/Library/Frameworks/Python.framework/Versions/2.7/bin/python");
     }
 }
```
## Solving the Newtonsoft Error <a id="Solving the Newtonsoft Error"></a>

Install [JSON.NET](https://assetstore.unity.com/packages/tools/input-management/json-net-for-unity-11347) to fix: The type or namespace name 'Newtonsoft' could not be found error.
After downloading the package you will need to import it into your project.

The steps for importing this package are as follows:
Window -> Package Manager -> My Assets -> [JSON.NET](http://json.net/) For Unity -> Import

![](/images/chainsafe/5_install_jsonnet.png)

:::info
If you have any questions, please join our [Discord server](https://discord.gg/kaiachain), or send us an email at developers@kaia.io
:::