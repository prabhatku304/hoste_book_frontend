interface IShopfloData {
  merchant_id: string;
  items: Array<IShopfloItem>;
}

interface IShopfloItem {
  id: string;
  quantity: number;
  line_price: ILinePrice;
  banner?: string;
}

interface ILinePrice {
  sub_total: string;
}

export type { IShopfloData, IShopfloItem };
