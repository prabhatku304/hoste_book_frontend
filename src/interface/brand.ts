interface IBrandWaitListInput {
  brand_name: string;
  email?: string | undefined;
  mobile_number?: string | undefined;
  name: string;
  website_url?: string | undefined;
}

interface IBrandCouponInput {
  uid: string;
  game: string;
  sms?: boolean;
  score?: number;
}

export type { IBrandWaitListInput, IBrandCouponInput };
