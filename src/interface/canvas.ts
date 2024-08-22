interface ICanvasState {
  selectedElementConfig?: ISelectedElementConfig;
  selectedCanvasElementId: string;
  canvas: ICanvas;
  skillGameBackgroundCanvas: Array<IGameBackgroundCanvas>;
  copiedElement?: ICanvasElement;
  selectedCanvas?: ISelectedCanvas;
  selectedQuill: any;
  canvasDimension: ICanvasDimension;
  userCanvasScale: number;
  canvasScale: number;
}

interface ISelectedCanvas {
  canvasId: string;
}
interface IGameBackgroundCanvas {
  asset_type: string;
  sub_asset_type?: string;
  elements: Array<ICanvasElement>;
}
interface ICanvas {
  asset_type?: string;
  sub_asset_type?: string;
  background_src?: string;
  elements: Array<IElement | any>;
}
interface IBackgroundCanvasInput {
  game: string;
  canvasId?: string;
  asset_type?: string;
  sub_asset_type?: string;
  gameCategory?: string;
}
interface IElement {
  type?: string;
  id?: string;
  width?: number;
  height?: number;
  rotation?: number;
  opacity?: number;
  src?: string;
  x?: number;
  y?: number;
}

interface ICanvasDimension {
  HEIGHT: number;
  WIDTH: number;
}
interface ICanvasElement {
  canvasId?: string;
  id?: string;
  align?: string;
  alwaysOnTop?: boolean;
  backgroundColor?: string;
  backgroundCornerRadius?: number;
  backgroundEnabled?: boolean;
  backgroundOpacity?: number;
  blurEnabled?: boolean;
  blurRadius?: number;
  brightness?: number;
  brightnessEnabled?: boolean;
  borderWidth?: number;
  borderColor?: string;
  borderStyle?: string;
  fill?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: string;
  fontWeight?: string;
  letterSpacing?: number;
  lineHeight?: number;
  grayscaleEnabled?: boolean;
  height?: number;
  width?: number;
  x?: number;
  y?: number;
  rotation?: number;
  opacity?: number;
  resizable?: boolean;
  shadowBlur?: number;
  shadowColor?: string;
  shadowEnabled?: boolean;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  shadowOpacity?: number;
  stroke?: string;
  strokeWidth?: number;
  textDecoration?: string;
  type?: string;
  src?: string;
  verticalAlign?: string;
  borderRadius?: number;
  text?: string;
  content?: string;
  redirectUrl?: string;
  version?: string;
  link_target?: string;
}

interface ISelectedElementConfig {
  type: string;
  elementId: string;
  canvasId: string;
}

export type {
  ICanvasState,
  IBackgroundCanvasInput,
  ICanvasElement,
  IElement,
  ICanvas,
  IGameBackgroundCanvas,
  ISelectedCanvas,
  ICanvasDimension,
  ISelectedElementConfig,
};
