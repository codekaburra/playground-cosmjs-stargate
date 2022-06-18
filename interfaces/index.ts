export interface IChainInfo {
  chainName: string;
  network: string;
  rpcNodeUrl: string;
  feeTokenDenom: string;
}
export interface ISampleData {
  userAddress: string;
  transactionHash: {[type: string]: string};
  delegatorAddress: string;
  validatorAddress: string;
}
