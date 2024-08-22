import { IGameConfigAsset } from './base';
import { ICanvasElement } from './canvas';

interface IJigsawPuzzleConfig {
  _id: string;
  title?: string;
  description?: string;
  layout?: string;
  type?: string;
  assets: Array<IGameConfigAsset>;
  elements?: Array<ICanvasElement>;
}

export type { IJigsawPuzzleConfig };
