import { IUserPlans } from '../../plans';
import { IUser } from '../../user';

interface IUserState {
  isAuthenticated: boolean;
  isUserGetPending?: boolean;
  isSendOtpPending: boolean;
  isOtpVerifyPending: boolean;
  isUserRegisteredStatus: boolean;
  isUserUpdatePending: boolean;
  isGoogleAuthVerifyPending: boolean;
  isDiscordAuthVerifyPending: boolean;
  user?: IUser;
  isSendRestPasswordPending: boolean;
  isEmailRegisterPending: boolean;
  isEmailLoginPending: boolean;
  isEmailVerifyPending?: boolean;
  isResetPasswordPending: boolean;
  isUserPlanGetPending?: boolean;
  validateUserCodePending?: boolean;
  verifyAccountError?: string;
  userPlans?: IUserPlans;
}

export type { IUserState };
