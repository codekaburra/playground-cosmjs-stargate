import { stringifyWithFormat } from "../utils/print-util";

import {
  StargateClient,
} from "@cosmjs/stargate";
import { IChainInfo } from "../interfaces";
import { sampleData } from "../sample/sample";
import { IndexedTx } from "@cosmjs/stargate/build/stargateclient";
import { decodeTxRaw } from "@cosmjs/proto-signing";
/*
  How to call :

  yarn script cosmoshub mainnet queryTransaction AA5B24070C7B36340E377900292737266CC88591246EF664A7851EE0449755FD
  yarn script cryptoorgchain mainnet queryTransaction DAD56DB82717E8C99A03523ACF5353ABF5B6F434909C5F3C8056643A61033417
  yarn script evmos mainnet queryTransaction 7897BB417582F3E9AED08BB3BDAC6C05AB8A2876D3D854DF4FA08312DAB6EBC9
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
  console.log(JSON.stringify(transaction));
};
