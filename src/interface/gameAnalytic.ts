interface IGameAnalyticState {
  isGameAnalyticUpdatePending: boolean;
  gamePlaysChartData?: Array<IGameChartData>;
  gameUsersChartData?: Array<IGameChartData>;
  gameScoreDistribution?: Array<IScoreDistribution>;
  gameAssessmentScoreDistribution?: Array<IAssessmentDistribution>;
  gameCTAClickkPlaysChartData?: Array<IGameChartData>;
  gameLeads: IGameLeadsData;
  gameEngagement?: IGameEngagementData[];
  isGetGameLeadsPending: boolean;
  isGetGameEngagementPending: boolean;
  isGamesExportPending: boolean;
  isCustomGameLeaderboardGetPending: boolean;
  isGameScoreDistributionGetPending: boolean;
  customGameLeaderboard?: ICustomGameLeaderboard;
  orgUsage?: IOrgUsage;
  isOrgUsageGetPending?: boolean;
}

interface IOrgUsage {
  views: number;
  views_limit: number;
  storage: number;
  storage_limit: number;
}
interface IAssessmentDistribution {
  _id: string;
  options: Array<IAssessmentOptions>;
  title: string;
}

interface IAssessmentOptions {
  option_id: string;
  option_text: string;
  value: number;
}

interface IScoreDistribution {
  score: string;
  value: number;
}

interface ICustomGameLeaderboard {
  leaderboard: Array<ILeaderboard>;
  user_score?: ILeaderboard;
}
interface ILeaderboard {
  score: number;
  uid?: string;
}
interface IGameAnalyticInput {
  game: string;
  score?: number;
  type: string;
  uid: string;
  session_id: string;
  detail?: IGameAnalyticDetailInput;
  time?: number;
}

interface IGameEngagementData {
  size?: number;
  type: string;
  time?: number;
}

interface IGameLeadsData {
  data: Array<IGameLeads>;
  currentData: Array<IGameLeads>;
  limit: number;
  page: number;
  total_items: number;
}

interface IGameLeads {
  _id: string;
  email: string;
  game: string;
  mobile_number: string;
  name: string;
  score: string;
}

interface IGameAnalyticDetailInput {
  game_screen?: object;
  assessment?: IGameAnalyticAssessmentFeed;
  campaign_source?: string;
}

interface IGameAnalyticAssessmentFeed {
  slide_id?: string;
  option_id?: string;
  reco_products?: string;
}
interface IGameAnalyticChartDetailInput {
  gameId: string;
  period: string;
}
interface IGameChartData {
  size: number;
  date: string;
}

interface IGamePlays {
  date: string;
  total_gameplay: number;
  total_user: number;
}
interface IGameLeadsInput {
  game: string;
}
export type {
  IGameLeadsInput,
  IGameAnalyticState,
  IGameLeadsData,
  IGameLeads,
  IGameAnalyticInput,
  IScoreDistribution,
  IGameAnalyticDetailInput,
  IGameAnalyticChartDetailInput,
  IAssessmentDistribution,
  IGameChartData,
  IGamePlays,
  ICustomGameLeaderboard,
  ILeaderboard,
  IAssessmentOptions,
  IOrgUsage,
};
