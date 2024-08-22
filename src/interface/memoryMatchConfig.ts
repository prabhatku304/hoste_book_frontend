import { IGameConfigAsset } from './base';
import { ICanvasElement } from './canvas';
import { IMedia } from './media';

interface IMemoryMatchConfig {
  _id: string;
  title?: string;
  description?: string;
  layout?: string;
  timer?: number;
  type?: string;
  assets: Array<IGameConfigAsset>;
  pairs: Array<IMemoryMatchPair>;
  elements?: Array<ICanvasElement>;
}

interface IMemeoryMatchAssetConfig {
  assets: Array<IGameConfigAsset>;
  pairs: Array<IMemoryMatchPair>;
  timer?: number;
  title?: string;
  type?: string;
  description?: string;
}
interface IMemoryMatchPair {
  first_content: IMemoryMatchParContent;
  second_content: IMemoryMatchParContent;
  is_ai?: boolean;
}
interface IMemoryMatchParContent {
  asset: IMedia;
}
export type {
  IMemoryMatchConfig,
  IMemoryMatchPair,
  IMemoryMatchParContent,
  IMemeoryMatchAssetConfig,
};
