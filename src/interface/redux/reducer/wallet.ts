import { IWallet } from '../../wallet';

interface IWalletState {
  isGetUserWalletPending: boolean;
  isUPIWithdrawlPending: boolean;
  isCryptoWithdrawlPending: boolean;
  wallet?: IWallet;
  defaultProfilePics?: Array<string>;
}

export type { IWalletState };
