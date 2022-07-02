import { stringifyWithFormat } from "../utils/print-util";

import {
  StargateClient,
} from "@cosmjs/stargate";
import { IChainInfo } from "../interfaces";
import { sampleData } from "../sample/sample";

/*
  How to call :

  yarn script cosmoshub mainnet queryAddress address
  yarn script cryptoorgchain mainnet queryAddress address
  yarn script cronos mainnet queryAddress address
*/
export const queryAddress = async (inputs: string[], chainInfo: IChainInfo) => {
  const client = await StargateClient.connect(chainInfo.rpcNodeUrl);
  const data = sampleData[chainInfo.chainName];
  const [userAddress] = inputs;
  const results = {
    getAccount: await client.getAccount(userAddress),
    getSequence: await client.getSequence(userAddress),
    getBalance: await client.getBalance(userAddress, chainInfo.feeTokenDenom),
    getAllBalances: await client.getAllBalances(userAddress),
    getBalanceStaked: await client.getBalanceStaked(userAddress),
  };
  console.log("results", stringifyWithFormat(results));
};
