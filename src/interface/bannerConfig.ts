import { ICanvasElement } from './canvas';
import { IAiMedia } from './media';
import { IMedia } from './media';

interface IBannerConfig {
  _id?: string;
  background: IAiMedia;
  screens: Array<IScreenBannerConfig>;
  type: string;
  title: string;
}

interface IScreenBannerConfig {
  _id: string;
  type: string;
  title: string;
  tab: IBannerTab;
  btn: IBannerButton;
  assets: Array<IBannerAsset>;
  tooltip: IScreenBannerTooltip;
  elements: Array<ICanvasElement>;
}
interface IScreenBannerTooltip {
  content: Array<IScreenBannerContent>;
  text: string;
}

interface IScreenBannerContent {
  image: IMedia;
  text: string;
}
interface IBannerTab {
  _id: string;
  name: string;
  description: string;
  background: string;
  style: string;
}
interface IBannerButton {
  label: string;
  redirect_url: string;
  style: string;
}
interface IBannerAsset {
  asset: IMedia;
  type: string;
}
export type {
  IBannerConfig,
  IScreenBannerConfig,
  IScreenBannerContent,
  IScreenBannerTooltip,
  IBannerTab,
};
