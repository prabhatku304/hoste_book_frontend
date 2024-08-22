interface ICashfreeDepositCash {
  price: IPrice;
  cashfreeRedirectUrl: string;
}

interface ICashfreePaymentVerification {
  orderId: string;
  type: string;
}
interface IPrice {
  currency: string;
  amount: number;
}

interface ITransaction {
  amount: number;
  description: string;
  updatedAt: string;
  status: string;
}

export type {
  ICashfreeDepositCash,
  ICashfreePaymentVerification,
  ITransaction,
};
