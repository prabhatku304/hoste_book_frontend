import { IButton, IGameConfigAsset } from './base';
import { ICanvasElement } from './canvas';

interface ISpinTheWheelConfig {
  _id?: string;
  title?: string;
  type?: string;
  description?: string;
  layout?: string;
  sections: Array<ISpinWheelConfigAssets>;
  elements?: Array<ICanvasElement>;
  assets?: Array<IGameConfigAsset>;
  start_btn: IButton;
}

interface ISpinWheelConfigAssets {
  type?: string;
  asset?: { type: string; url: string };
  content?: string;
  background?: { style: string };
  probability?: number;
}

interface IWheels {
  text: string;
  minDeg: number;
  maxDeg: number;
  score: number;
  probability: number;
}
export type { ISpinTheWheelConfig, ISpinWheelConfigAssets, IWheels };
