interface IMedia {
  type: string;
  url: string;
  style?: string;
}
interface IAiMedia {
  type: string;
  url: string;
  is_ai?: boolean;
}
export type { IMedia, IAiMedia };
