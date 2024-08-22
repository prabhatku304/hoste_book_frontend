import { ICanvasElement } from './canvas';
import { IMedia } from './media';

interface IScratchGameConfig {
  _id: string;
  title?: string;
  description?: string;
  cover_slide: IScratchGameCover;
  offers_slide: Array<IScratchGameOffer>;
}
interface IScratchGameCover {
  thumbnail: IMedia;
  elements?: Array<ICanvasElement>;
}
interface IScratchGameCoupon {
  code?: string;
  style?: string;
}
interface IScratchGameOffer {
  thumbnail: IMedia;
  probability: number;
  elements?: Array<ICanvasElement>;
  coupon?: IScratchGameCoupon;
}

export type { IScratchGameConfig, IScratchGameOffer, IScratchGameCover };
