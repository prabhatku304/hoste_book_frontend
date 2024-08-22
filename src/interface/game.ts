import { IGameAsset } from './gameAsset';
import { IGameAudio } from './gameAudio';
import { IGameIntegration } from './gameIntegration';
import { IMedia } from './media';
import { IGameConfig, IGameScreen, ITemplateGame } from './templateGames';

interface IGameState {
  isUserGamesGetPending: boolean;
  isGamePending: boolean;
  isGetGamePending: boolean;

  isGamesGetPending: boolean;
  isGameUserInfoSubmitPending: boolean;
  isCreateUserGamePenging: boolean;
  isDeleteUserGamePenging: boolean;
  errorMessage: string;
  games?: Array<ICasualGame>;
  selectedGame?: ICasualGame;
  userGames: ICasualGamePaginateResponse;
  templateGame?: ITemplateGame;
  game?: ITemplateGame;
  puzzleGame?: ITemplateGame;
  isGameDomainsGetPending?: boolean;
  isGameDomainsUpdatePending: boolean;
  isGameDomainsRemovePending: boolean;
  isUserGameUpdatePending: boolean;
  isLeaderboardGetPending?: boolean;
  leaderboard?: ILeaderboardPaginateResponse;
}

interface ICasualGame {
  _id: string;
  name: string;
  description?: string;
  path: string;
  banner?: IMedia;
  config?: IGameConfig;
  type?: string;
  url?: string;
  is_private?: boolean;
  createdAt?: string;
  updatedAt?: string;
  detail?: IGameDetail;
  status?: string;
  is_ai_generated?: boolean;
  has_watermark?: boolean;
  end_date?: number;
}

interface IGameDetail {
  screens: Array<IGameScreen>;
  assets: Array<IGameAsset>;
  fb_pixel_id?: string;
  integration: IGameIntegration;
  audio: Array<IGameAudio>;
}

interface IWinners {
  thumbnail: IThumbnail;
  team_name: string;
  rank: string;
  reward: IPrice;
}

interface IThumbnail {
  banner: IMedia;
  banner_sm?: IMedia;
  completed_banner?: IMedia;
  completed_banner_sm?: IMedia;
}

interface IPrice {
  amount: number;
  currency: string;
}

interface ICasualGamePaginateResponse {
  data: Array<ICasualGame>;
  total_items: number;
  page: number;
  limit: number;
  currentData: Array<ICasualGame>;
}

interface IPrizeDistribution {
  reward: IReward;
  rank: string;
}

interface IReward {
  currency: string;
  amount: number;
}

interface IRhymGamePaidTournamentRegister {
  tournament: string;
}

interface ICreateGameAssetInput {
  root_game: string;
  is_private?: boolean;
  file_path?: string;
  asset_type: string;
  url: string;
  sub_asset_type?: string;
}
interface IUserGameCreateInput {
  uid: string;
  file: any;
  templateId: string;
  screens?: Array<IGameScreenInput>;
}
interface IGameScreenInput {
  btn_text?: string;
  banner?: IMedia;
  type?: string;
  redirect_url?: string;
}

interface IGameDomain {
  domain: string;
  _id: string;
}
interface ILeaderboardPaginateResponse {
  leaderboard?: Array<ILeaderboard>;
  user_position: number;
}
interface ILeaderboard {
  score: number;
  name: string;
  _id: string;
}
export type {
  IPrizeDistribution,
  IRhymGamePaidTournamentRegister,
  ICasualGame,
  IMedia,
  IThumbnail,
  IWinners,
  ICasualGamePaginateResponse,
  IGameDetail,
  ICreateGameAssetInput,
  IUserGameCreateInput,
  IGameState,
  IGameDomain,
  ILeaderboardPaginateResponse,
  ILeaderboard,
};
