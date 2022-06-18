import lodash = require("lodash");
import BigNumber from "bignumber.js";
import { GWEI_TO_WEI_MULTIPLIRER, ETH_TO_WEI_MULTIPLIRER } from "../constants/enum";

export const gweiToWei = (gwei: BigNumber | string | number): BigNumber => {
  return toSmallerUnit(gwei, GWEI_TO_WEI_MULTIPLIRER);
};

export const weiToGwei = (wei: BigNumber | string | number): BigNumber => {
  return toLaggerUnit(wei, GWEI_TO_WEI_MULTIPLIRER);
};

export const ethToWei = (gwei: BigNumber): BigNumber => {
  return toSmallerUnit(gwei, ETH_TO_WEI_MULTIPLIRER);
};

export const weiToEth = (wei: BigNumber | string | number): BigNumber => {
  return toLaggerUnit(wei, ETH_TO_WEI_MULTIPLIRER);
};

export const toSmallerUnit = (
  amount: BigNumber | string | number,
  multiplier: BigNumber | string | number,
): BigNumber => {
  if (lodash.isNil(multiplier)) {
    throw new Error("[convertToNormalUnit] process.env.BASE_UNIT_TO_NORMAL_UNIT_MULTIPLIER not exist");
  }
  return new BigNumber(amount).multipliedBy(`1E${multiplier}`);
};

export const toLaggerUnit = (
  amount: BigNumber | string | number,
  multiplier: BigNumber | string | number,
): BigNumber => {
  if (lodash.isNil(multiplier)) {
    throw new Error("[convertToNormalUnit] process.env.BASE_UNIT_TO_NORMAL_UNIT_MULTIPLIER not exist");
  }
  return new BigNumber(amount).dividedBy(`1E${multiplier}`);
};

export const roundUpNumberToInteger = (amount: BigNumber | string): BigNumber => {
  return new BigNumber(amount).integerValue(BigNumber.ROUND_CEIL);
};
