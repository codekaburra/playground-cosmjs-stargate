import { stringifyWithFormat } from "../utils/print-util";

import {
  StargateClient,
} from "@cosmjs/stargate";
import { IChainInfo } from "../interfaces";
import { sampleData } from "../const/sample";
import { IndexedTx } from "@cosmjs/stargate/build/stargateclient";
import { decodeTxRaw } from "@cosmjs/proto-signing";
/*
  How to call :

  INPUTS=<transactionHash> FUNCTION=queryTransaction yarn script cosmoshub
  INPUTS=<transactionHash> FUNCTION=queryTransaction yarn script cryptoorgchain
  INPUTS=<transactionHash> FUNCTION=queryTransaction yarn script cronos
*/
export const queryTransaction = async (inputs: string[], chainInfo: IChainInfo) => {
  const [transactionHash] = inputs;
  const client = await StargateClient.connect(chainInfo.rpcNodeUrl);
  const data = sampleData[chainInfo.chainName];
  if (transactionHash) {
    printIndexedTx(await client.getTx(transactionHash));
    return;
  }

  for (const transactionType of Object.keys(data.transactionHash)) {
    const transactionHash = data.transactionHash[transactionType];
    console.log(`------------ ${transactionType} : ${transactionHash} ------------ `);
    printIndexedTx(await client.getTx(transactionHash));
  }
};

export const printIndexedTx = (transaction: IndexedTx | null) => {
  if (transaction) {
    console.log("tx : ", decodeTxRaw(transaction.tx));
    console.log("rawLog : ", transaction.code <= 1 ? stringifyWithFormat(JSON.parse(transaction.rawLog)) : transaction.rawLog);
    console.log(
      "hash : ", transaction.hash,
      "height : ", transaction.height,
      "code : ", transaction.code,
      "gasWanted : ", transaction.gasWanted,
      "gasUsed : ", transaction.gasUsed);
  }
};
