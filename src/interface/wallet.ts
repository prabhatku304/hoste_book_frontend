import { IPrice } from './base';

interface IWallet {
  balance?: IPrice;
  earnings?: IPrice;
  deposit?: IPrice;
  crypto?: ICryptoWallet;
}

interface ICryptoWallet {
  balance?: IPrice;
  earnings?: IPrice;
}

interface IWithdrawlInput {
  upi: string;
  to_address: string;
  amount: number;
}

interface IvalidateBalance {
  amount?: string;
  to_address?: string;
}

interface IFormikInitialState {
  amount?: string;
}

export type {
  IWallet,
  ICryptoWallet,
  IWithdrawlInput,
  IvalidateBalance,
  IFormikInitialState,
};
