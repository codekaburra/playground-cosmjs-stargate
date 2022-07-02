import { stringifyWithFormat } from "../utils/print-util";

import {
  Coin,
  StargateClient,
} from "@cosmjs/stargate";
import { IChainInfo } from "../interfaces";
import { sampleData } from "../sample/sample";

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
};
