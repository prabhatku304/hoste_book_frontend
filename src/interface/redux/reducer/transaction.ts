import { ITransaction } from '../../transaction';

interface ITransactionState {
  isCashfreeCashDepositPending: boolean;
  payment_link?: any;
  isCashfreePaymentVerificationPending: boolean;
  isUserTransactionPending: boolean;
  transactions?: Array<ITransaction>;
}

export type { ITransactionState };
