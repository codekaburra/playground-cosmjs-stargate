import { stringifyWithFormat } from "../utils/print-util";

import {
  Coin,
  StargateClient,
} from "@cosmjs/stargate";
import { IndexedTx } from "@cosmjs/stargate/build/stargateclient";
import { IChainInfo } from "../interfaces";
import { sampleData } from "../const/sample";

/*
  How to call :

  FUNCTION=playground yarn script cosmoshub
  FUNCTION=playground yarn script cryptoorgchain
  FUNCTION=playground yarn script cronos
*/
export const playground = async (inputs: string[], chainInfo: IChainInfo) => {
  const client = await StargateClient.connect(chainInfo.rpcNodeUrl);
  const data = sampleData[chainInfo.chainName];
  const { userAddress, delegatorAddress, validatorAddress } = data;
  const trasnsactionHash = data.transactionHash.send;
  const results = {
    getChainId: await client.getChainId(),
    getHeight: await client.getHeight(),
    getAccount: await client.getAccount(userAddress),
    getSequence: await client.getSequence(userAddress),
    getBlock: await client.getBlock(await client.getHeight()),
    getBalance: await client.getBalance(userAddress, chainInfo.feeTokenDenom),
    getAllBalances: await client.getAllBalances(userAddress),
    getBalanceStaked: await client.getBalanceStaked(userAddress),
  };
  console.log("results", stringifyWithFormat(results));
  const getDelegation: Coin | null = await client.getDelegation(
    delegatorAddress,
    validatorAddress,
  );
  const transaction: IndexedTx | null = await client.getTx(trasnsactionHash);
  if (transaction) {
    // console.log("-", stringifyWithFormat(transaction.tx));
    // console.log("rawLog -", stringifyWithFormat(JSON.parse(transaction.rawLog)));
    console.log("hash -", stringifyWithFormat(transaction.hash));
    console.log("code -", stringifyWithFormat(transaction.code));
    console.log("gasUsed -", stringifyWithFormat(transaction.gasUsed));
    console.log("gasWanted -", stringifyWithFormat(transaction.gasWanted));
  }
};

export const getNode = async (inputs: string[]) => {

};
