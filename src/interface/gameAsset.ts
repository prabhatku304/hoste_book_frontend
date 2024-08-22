interface IGameAsset {
  asset_type: string;
  sub_asset_type: string;
  url: string;
  _id?: string;
  is_ai?: boolean;
}

interface IGameAssetPaginateResponse {
  data: Array<IGameAsset>;
  page: number;
  limit: number;
  total_items: number;
}
export type { IGameAsset, IGameAssetPaginateResponse };
