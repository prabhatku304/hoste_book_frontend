import { IPrice } from './base';
import { ICasualGame, IPrizeDistribution, IThumbnail, IWinners } from './game';
import { IAuthor, IUser } from './user';

interface ITournamentState {
  isPrivateTournamentCreatePending: boolean;
  isPrivateTournamentUpdatePending: boolean;
  isTournamentGetPending: boolean;
  isTournamentRegisteredStatusGetPending: boolean;
  isGetPrivateTournamentPending: boolean;
  isUpdateTournamentShareLinkPending: boolean;
  isGameTournamentGetPending: boolean;
  isGameTournamentsGetPending: boolean;
  isGameTournamentStatusPending: boolean;
  isTournamentLeaderboardGetPending: boolean;
  tournament?: ITournament;
  privateTournament?: any;
  privateTournamentCreatedOrUpdated?: ITournament;
  gameTournament?: ITournament;
  gameTournaments?: ITournamentResponse;
  leaderboard: ITournamentLeaderboard;
  errorMessage: string;
  userHasAccess?: boolean;
}
interface IUserTournamentScore {
  score: number;
  rank: number;
}
interface ITournament {
  data: any;
  _id: string;
  name: string;
  start_date: number;
  end_date: number;
  levels?: number;
  filled_slot: number;
  slots: number;
  is_paid: boolean;
  type: string;
  entry_fees?: IPrice;
  prize_pool?: IPrice;
  prize_distribution?: Array<IPrizeDistribution>;
  thumbnail: IThumbnail;
  winner?: Array<IWinners>;
  status: string;
  game: string;
  casual_game: ICasualGame;
  author?: IAuthor;
  detail?: ITournamentDetail;
  share_link?: string;
  is_recurring?: boolean;
  duration?: number;
  createdAt?: string;
}
interface IPrivateTournamentCreateInput {
  name: string;
  game: string;
  end_date: number;
  game_type?: string;
  total_members?: number;
  prize_pool?: IPrice;
  is_recurring?: boolean;
  duration?: number;
}
interface IPrivateTournamentUpdateInput {
  status: string;
  tournament: string;
}
interface ITournamentRegisterInput {
  is_discord: boolean;
  game?: string;
  tournament: string;
  detail?: IUserToTournamentDetail;
}
interface IUserToTournamentDetail {
  team_name: string;
  team_description: string;
  mobile_number: string;
  discord_id?: string;
}
interface ITournamentDetail {
  is_private: boolean;
  game_url?: string;
  is_leaderboard: boolean;
}
interface ITournamentResponse {
  data?: Array<ITournament>;
  total_items?: number;
  page?: number;
  limit?: number;
  currentData?: Array<ITournament>;
}
interface ITournamentLeaderboard {
  data: Array<ILeaderboard>;
  total_items: number;
  page: number;
  limit: number;
  currentData: Array<ILeaderboard>;
}
interface ILeaderboard {
  _id: string;
  game: string;
  user: IUser;
  score: number;
}
interface IGameTournamentStatus {
  tournament: string;
  game: string;
}
interface ITournamentLeaderBoardQueryInput {
  tournament: string;
}
interface IUpdateUserGameScore {
  score: number;
  game: string;
  tournament: string;
}

export type {
  IUserTournamentScore,
  ITournamentState,
  IPrivateTournamentCreateInput,
  IPrivateTournamentUpdateInput,
  ITournamentRegisterInput,
  ITournament,
  IUserToTournamentDetail,
  ITournamentDetail,
  ITournamentResponse,
  IGameTournamentStatus,
  ITournamentLeaderBoardQueryInput,
  IUpdateUserGameScore,
  ITournamentLeaderboard,
  ILeaderboard,
};
