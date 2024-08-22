import { IPrice } from './base';

interface IUserPlans {
  plan: IUserPlans;
  detail: IUserPlanDetail;
  topup: IUserTopup;
}

interface IUserTopup {
  feature: ITopupFeature;
}
interface ITopupFeature {
  game_views: ITopupLimit;
  custom_domain: ITopupLimit;
  storage: ITopupLimit;
}
interface ITopupLimit {
  remaining_limit: number;
  limit: number;
}
interface IUserPlans {
  _id: string;
  description: string;
  features: Array<IUserPlansFeatures>;
  name: string;
  price: IPrice;
  validity: string;
}
interface IUserPlanDetail {
  invoice_ids: Array<string>;
}
interface IUserPlansFeatures {
  description?: string;
  limit?: number;
  name?: string;
  type?: string;
}

export type {
  IUserPlans,
  IUserPlansFeatures,
  IUserPlanDetail,
  IUserTopup,
  ITopupFeature,
};
