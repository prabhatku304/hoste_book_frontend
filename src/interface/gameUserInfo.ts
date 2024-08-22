interface IGameUserInfoInput {
  game: string;
  score?: number;
  email?: string;
  mobile_number?: string;
  instagram_id?: string;
  uid?: string;
  detail?: IGameUserInfoDetail;
  action_type?: string;
  category?: string;
}
interface IGameUserInfoDetail {
  coupon?: string;
  campaign_source?: string;
}
export type { IGameUserInfoInput, IGameUserInfoDetail };
