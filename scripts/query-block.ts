import {
  StargateClient,
} from "@cosmjs/stargate";
import { IChainInfo } from "../interfaces";
import { Tx, TxBody } from "cosmjs-types/cosmos/tx/v1beta1/tx";

/*
  How to call :

  INPUTS=<blockNumber> FUNCTION=queryBlock yarn script cosmoshub
  INPUTS=<blockNumber> FUNCTION=queryBlock yarn script cryptoorgchain
  INPUTS=<blockNumber> FUNCTION=queryBlock yarn script cronos
*/
export const queryBlock = async (inputs: string[], chainInfo: IChainInfo) => {
  const [blockNumber] = inputs;
  const client = await StargateClient.connect(chainInfo.rpcNodeUrl);
  const blockHeight = await client.getHeight();
  const block = await client.getBlock(blockNumber ? +blockNumber : blockHeight);
  console.log("block", block.id, block.header);
  for (const transaction of block.txs) {
    const decodedTransaction = Tx.decode(transaction);
    console.log("body: ", decodedTransaction.body);
    console.log("signatures: ", decodedTransaction.authInfo);
  }
};
