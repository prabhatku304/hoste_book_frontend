import { ICanvasElement } from './canvas';
import { IMedia } from './media';
import { IGameScreenCoupon } from './templateGames';

interface IAssessmentConfig {
  _id: string;
  slides: Array<IAssessmentSlide>;
  type: string;
  product_reco_screen?: IProductRecoScreen;
}
interface IProductRecoScreen {
  elements?: Array<ICanvasElement>;
  logic?: Array<IProductRecoLogic>;
  products?: Array<IRecoProducts>;
  coupon?: IGameScreenCoupon;
}
interface IProductRecoLogic {
  conditions?: Array<IProductRecoConditions>;
  product?: number;
}
interface IRecoProducts {
  asset?: IMedia;
  title?: string;
  description?: string;
  cta_btn?: ICtaBtn;
}
interface ICtaBtn {
  label?: string;
  style?: string;
  is_visible?: boolean;
  type?: string;
  redirect_url?: string;
}
interface IProductRecoConditions {
  options?: Array<number>;
  question: number;
}
interface IAssessmentSlide {
  _id?: string;
  background: IQuizAsset;
  options: Array<IQuizOptions>;
  title: string;
  type?: string;
  btn?: ISlideBtn;
  brand_logo?: IMedia;
  elements?: Array<ICanvasElement>;
}
interface ISlideBtn {
  label: string;
  style?: string;
}
interface IQuizOptions {
  _id?: string;
  index?: number;
  style?: string;
  value: IOptionValue;
  is_correct?: boolean;
}
interface IOptionValue {
  type: string;
  asset: IQuizAsset;
  content: string;
}
interface IQuizAsset {
  type: string;
  url: string;
  is_ai?: boolean;
}
interface IPollState {
  assessmentConfig?: IAssessmentConfig;
  assessmentFeeds?: IAssessmentFeeds;
  isGetAssessmentFeedPending: boolean;
  isQuizGeneratingPending: boolean;
}
interface IUpdateAssessmentInput {
  gameId: string;
  slide: ISlides;
  uid: string;
}
interface ISlides {
  option_id: string;
  slide_id: string;
}
interface IAssessmentFeeds {
  total_feed: number;
  option_feeds: Array<IFeeds>;
  user_option_id?: string;
}
interface IFeeds {
  total_feed: number;
  option_id: string;
}

interface IQuizResult {
  slideId: string;
  optionId: string;
  isCorrect: boolean;
}
interface ISelectedOption {
  optionIndex: number;
  slideId: string;
}
export type {
  IPollState,
  IUpdateAssessmentInput,
  ISlides,
  IAssessmentFeeds,
  IAssessmentConfig,
  IQuizOptions,
  IQuizAsset,
  IAssessmentSlide,
  IQuizResult,
  IRecoProducts,
  IProductRecoScreen,
  ISelectedOption,
};
