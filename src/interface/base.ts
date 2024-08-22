import { IAiMedia } from './media';

interface IPrice {
  amount: number;
  currency: string;
}
interface IGameConfigAsset {
  asset: IAiMedia;
  type: string;
  content?: string;
}
interface IAuthor {
  _id: string;
  name?: string;
}
interface IButton {
  is_visible?: boolean;
  label?: string;
  style?: string;
  type?: string;
}
export type { IPrice, IGameConfigAsset, IAuthor, IButton };
