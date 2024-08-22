import { IAssessmentConfig, IAssessmentSlide } from './assessment';
import { IBannerConfig } from './bannerConfig';
import { IAuthor } from './base';
import { ICanvasElement, IGameBackgroundCanvas } from './canvas';
import { IGameDetail } from './game';
import { IGameAsset } from './gameAsset';
import { IGameAudio } from './gameAudio';
import { IGameIntegration } from './gameIntegration';
import { IJigsawPuzzleConfig } from './jigsawConfig';
import { IAiMedia, IMedia } from './media';
import {
  IMemoryMatchConfig,
  IMemoryMatchPair,
  IMemeoryMatchAssetConfig,
} from './memoryMatchConfig';
import { IScratchGameConfig } from './scratchGameConfig';
import { ISpinTheWheelConfig } from './spinTheWheelConfig';

interface ITemplateGameState {
  templateGames?: ITemplateGamesData;
  templateGame?: ITemplateGame;
  selectedEndScreen?: IGameScreen;
  assetsConfig?: Array<IAssetsConfig>;
  assessmentConfig?: IAssessmentConfig;
  isGenerateQuizWithAiPending: boolean;
  selectedAssetsConfig?: Array<ISelectedAssetConfig>;
  previousSelectedAssetsConfig?: Array<ISelectedAssetConfig>;
  gameScreens: Array<IGameScreen>;
  gameLeadScreen?: IGameScreen;
  isGamePublishPending?: boolean;
  isGameAssetCreatePending: boolean;
  isGetGameAssetsPending: boolean;
  isGameTemplateGetPending: boolean;
  isAiImageGenerateGetPending: boolean;
  isPlaybleGameGeneratePending: boolean;
  isWebsiteAssetsPending: boolean;
  isUnsplashPending: boolean;
  unsplashAssets?: IUnsplashAssetLib;
  gameAssetsConfig?: IPuzzleGameConfig;
  gameConfig?: IGameConfig;
  spinTheWheelConfig?: ISpinTheWheelConfig;
  jigsawPuzzleConfig?: IJigsawPuzzleConfig;
  pilgrimBannerConfig?: IBannerConfig;
  memoryMatchConfig?: IMemoryMatchConfig;
  scratchGameConfig?: IScratchGameConfig;
  bannerConfig?: IBannerConfig;
  currentScreenIndex: number;
  swapAssetConfig?: ISwapAssetConfig;
  gameIntegration?: IGameIntegration;
  errorMessage: string;
  brandLogo?: string;
  websiteAssets?: IWebsiteAsset;
  aiAssets?: IAiAsset;
  skillGamesElements: Array<ICanvasElement | any>;
  isGameTemplatesGetPending: boolean;
  isGameTemplateCreatePending: boolean;
  isGameIntegrationGetPending: boolean;
  isGameIntegrationUpdatePending: boolean;
  startScreen?: IGameScreen;
  leadScreen?: IGameScreen;
  isSpinDrawer: boolean;
  isProdRecoDrawer: boolean;
  userAction?: string;
  gameAudio?: IGameAudio;
  isSeoUpdatePending?: boolean;
  seo?: ISeo;
  isScratchGameDrawer: boolean;
  gameStatus: string;
  isGameDetailGetPending: boolean;
  gameDetail?: IGameDetail;
  isGameDetailUpdatePending: boolean;
}

interface ICanvasConfig {
  oldCanvas: Array<ICanvas>;
  newCanvas: Array<ICanvas>;
}
interface ICanvas {
  _id: string;
  canvasRef?: any;
  type?: string;
  asset_path?: string;
  height?: number;
  asset_config?: string;
  asset_type?: string;
  sub_asset_type?: string;
  width?: number;
  elements?: Array<any>;
  config?: ICanvasAssetConfig;
}

interface ICanvasAssetConfig {
  asset_type: string;
  sub_asset_type: string;
}
type IConfig =
  | IGameConfig
  | IAssessmentConfig
  | ISpinTheWheelConfig
  | IJigsawPuzzleConfig
  | IMemoryMatchConfig
  | IMemeoryMatchAssetConfig
  | IBannerConfig
  | IInteractivePageConfig;
interface IInteractivePageConfig {
  widgets: Array<IWidget>;
  type?: string;
}
interface IWidget {
  parent_id?: string | null;
  id: string;
  text_content?: string;
  type?: string;
  src?: string;
  title?: string;
  attributes?: IAttributes;
}
interface IAttributes {
  links: Array<ILinks>;
}
interface ILinks {
  uri: string;
  label: string;
  new_window?: boolean;
  group_position?: string;
  thumbnail?: IMedia;
}

interface IPuzzleGameConfig {
  assets?: Array<ISelectedAssetConfig>;
  title?: string;
}
interface IWebsiteAsset {
  data: Array<IWebsiteAssestsData>;
  total_items: number;
  status: number;
}
interface IAiAsset {
  data: Array<IAiAssetData>;
}
interface IAiAssetData {
  url: string;
  is_ai: boolean;
}
interface IWebsiteAssestsData {
  url: string;
  type: string;
  is_ai?: boolean;
}
interface IUnsplashAssetLib {
  data?: Array<IUnsplashAsset>;
  total_items?: number;
  current_data?: Array<IUnsplashAsset>;
}
interface IUnsplashAsset {
  url: string;
  is_ai: boolean;
  creator: IUnsplashCreator;
}
interface IUnsplashCreator {
  name: string;
  profile_link: string;
}
interface IEndScreenBody {
  screen?: IGameScreen;
  isActive: boolean;
  screenIndex: number;
  isShow: boolean;
}
interface IGameScreen {
  _id?: string;
  btn?: IScreenBtn;
  restart_btn?: IScreenBtn;
  submit_btn?: IScreenBtn;
  redirect_url: string;
  link_target?: string;
  banner: IAiMedia;
  max_score?: number;
  min_score?: number;
  user_info?: Array<IScreenUserInfo>;
  type?: string;
  message?: string;
  coupon?: IGameScreenCoupon;
  thank_you_banner?: IMedia;
  brand_logo?: IMedia;
  isShow?: boolean;
  index?: number;
  position?: string;
  background_canvas?: string;
  checkout?: boolean;
  elements?: Array<ICanvasElement>;
  is_lead_screen?: boolean;
}
interface IScreenUserInfo {
  name: string;
  type: string;
  is_required: boolean;
  label: string;
  label_style: string;
  style?: string;
  placeholder_style: string;
  country_code?: string;
  tandc_uri?: string;
}
interface IGameScreenCoupon {
  title: string;
  code: string;
  style?: string;
  code_style?: string;
  title_style?: string;
}
interface ITemplateGamesData {
  data: Array<ITemplateGame>;
  limit: number;
  page: number;
  total_items: number;
}
interface ITemplateGame {
  _id: string;
  banner: IMedia;
  description: string;
  detail: ITemplateGameDetails;
  config: IConfig;
  is_private: boolean;
  name: string;
  path: string;
  root_game: string;
  category: string;
  type: string;
  url: string;
  status?: string;
  background_canvas?: Array<IGameBackgroundCanvas>;
  is_ai_generated?: boolean;
  author?: IAuthor;
  canvas_type?: string;
  has_watermark?: boolean;
}

interface IAssetsConfig {
  type: string;
  assets: Array<IAssetConfig>;
}

interface IGameConfig {
  assets: Array<IAssetConfig>;
  pairs?: Array<IMemoryMatchPair>;
  timer?: number;
  title?: string;
  description?: string;
  type?: string;
}
interface ISelectedAssetConfig {
  asset_type: string;
  sub_asset_type: string;
  preview: IPreviewConfig;
  url: string;
  _id?: string;
  elements?: Array<ICanvasElement>;
}
interface IAssetConfig {
  type: string;
  sub_type: string;
  upload: IUploadConfig;
  preview?: IPreviewConfig;
}

interface IUploadConfig {
  upload_file: IUploadFile;
  height: number;
  width: number;
  is_upload: boolean;
}

interface IUploadFile {
  url: string;
  extension: string;
}

interface IPreviewConfig {
  height: number;
  width: number;
  position: IAssetPosition;
  url: string;
}
interface ITemplateGameEndScreen {
  position: string;
  type: string;
  banner: IMedia;
  btn: IScreenBtn;
  redirect_url: string;
  is_active?: boolean;
  isShow?: boolean;
  min_score?: number;
  max_score?: number;
}
interface IScreenBtn {
  label?: string;
  style?: string;
  is_visible?: boolean;
}
interface ITemplateGameDetails {
  screens: Array<ITemplateGameEndScreen>;
  assets: Array<IGameAsset>;
  integration?: IGameIntegration;
  fb_pixel_id?: string;
  audio: Array<IGameAudio>;
  seo?: ISeo;
  game_play_limit: number;
  ln: string;
  social_share?: boolean;
  game_timer?: number;
  reset_time: number;
  background?: IBackground;
}

interface IBackground {
  uri: string;
}
interface ISeo {
  thumbnail?: string;
  title?: string;
  description?: string;
}

interface IAssetPosition {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

interface IGameEngagement {
  size?: number;
  type: string;
  time?: number;
}
interface IGameEngagementInput {
  gameId: string;
}

interface ICreateUserCustomGameInput {
  projectName: string;
  templateId: string;
  type?: string;
}
interface IupdateUserGame {
  name?: string;
  gameId: string;
  action_type: string;
  status?: string;
  end_date?: number;
}
interface IGameAssetsInput {
  root_game?: string;
  asset_type?: string;
  sub_asset_type?: string;
  game_type?: string;
}
interface UserGameAssetRemoveInput {
  asset: string;
}
interface ISaveCustomGameInput {
  projectId: string;
  assessment?: IAssessmentPublishInput;
  jigsawPuzzle?: IJigsawPuzzleConfig;
  memoryMatch?: IMemoryMatchConfig;
  spinTheWheel?: ISpinTheWheelConfig;
  scratchGame?: IScratchGameConfig;
  banner?: IBannerConfig;
  skillGame?: ISkillGameConfig;
  screens?: Array<IGameScreen>;
  background_canvas?: any;
  update_type: string;
  audio?: IGameAudio | [];
}
interface IAssessmentPublishInput {
  slides?: Array<IAssessmentSlide>;
}
interface ISkillGameConfig {
  assets: Array<string>;
}
interface ICreateGameAssetInput {
  root_game?: string;
  file_path?: string;
  asset_type: string;
  url: string;
  sub_asset_type?: string;
  game_type?: string;
  is_private?: boolean;
  name?: string;
}

interface ISwapAssetConfig {
  index?: number;
  type: string; // asset type
  optionIndex?: number;
}

interface IGenerateImage {
  data: Array<IImage>;
}
interface IImage {
  url: string;
}

interface IGenerateImageInput {
  prompt: string;
  width?: string;
  height?: string;
  variation?: string;
}

interface IUserGame {
  filter?: {
    name: string;
  };
  sort?: {
    name?: number;
    createdAt?: number;
  };
}
interface IGameDetailUpdateInput {
  game_play_limit?: number | null;
  gameId: string;
}
export type {
  ITemplateGame,
  ICreateUserCustomGameInput,
  IGameAssetsInput,
  IBackground,
  ISaveCustomGameInput,
  ICreateGameAssetInput,
  ITemplateGameState,
  ITemplateGamesData,
  IAssetsConfig,
  IAssetConfig,
  ISelectedAssetConfig,
  IGameScreen,
  IEndScreenBody,
  IGameEngagementInput,
  IGameEngagement,
  IPuzzleGameConfig,
  IGameConfig,
  IConfig,
  ISwapAssetConfig,
  IGenerateImage,
  IGenerateImageInput,
  IImage,
  IWebsiteAsset,
  IWebsiteAssestsData,
  IAiAsset,
  IAiAssetData,
  IUnsplashAssetLib,
  IUnsplashAsset,
  ICanvasConfig,
  ICanvas,
  IScreenUserInfo,
  ICanvasElement,
  IupdateUserGame,
  ISeo,
  IUserGame,
  UserGameAssetRemoveInput,
  IGameDetailUpdateInput,
  IWidget,
  IGameScreenCoupon,
};
