import { IUser } from '../user';

interface ITeamState {
  teamMembers?: Array<ITeamMember>;
  orgs?: Array<ITeamMember>;
  isEmailInvitePending: boolean;
  isDeleteMemberPending: boolean;
  isUpdateTeamAccessPending: boolean;
  isUpdateTeamMemberAccessPending: boolean;
}
interface ITeamMember {
  _id: string;
  invite_status: string;
  user: IUser;
  org: IUser;
}
interface IGameMemberPermission {
  has_access: boolean;
  _id: string;
}
interface IUpdateGameMemberPermission {
  game: string;
  members: Array<IGameMemberPermission>;
}
export type { ITeamState, ITeamMember, IUpdateGameMemberPermission };
