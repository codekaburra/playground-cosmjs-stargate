import { scriptFunctions } from "./index";
import * as fs from "fs";
import { IChainInfo } from "../interfaces";

const main = async () => {
  const npmConfigArgv: { [key: string]: string[] } = JSON.parse(`${process.env.npm_config_argv}`);
  const [npmScriptCommand, chainName, network] = npmConfigArgv.original;
  const chainConfig: { [key: string]: any } = JSON.parse(
    fs.readFileSync(`node_modules/chain-registry/${chainName}/chain.json`).toString(),
  );
  const rpcNodeUrl = chainConfig.apis.rpc[0].address;
  const feeTokenDenom = chainConfig.fees.fee_tokens[0].denom;
  const chainInfo: IChainInfo = { chainName, network, rpcNodeUrl, feeTokenDenom };
  console.log(`Going to connect ${rpcNodeUrl} ... `, chainInfo);

  const inputs = process.env.INPUTS ? process.env.INPUTS.split(",") : [];
  const targetScriptFunction: string = `${process.env.FUNCTION}`;
  console.log(`Going to ${targetScriptFunction} ... with inputs`, inputs);
  await scriptFunctions[targetScriptFunction](inputs, chainInfo);
};

main();
