interface IUser {
  name: string;
  thumbnail: string;
  username: string;
  mobile_number: string;
  email: string;
  country_code: string;
  is_verified: boolean;
  has_password: boolean;
  wallet_address: string;
  brand: IBrandDetail;
  _id: string;
}

interface IBrandDetail {
  name: string;
  website_url: string;
}
interface IRegisterData {
  email: string;
  password: string;
}
interface IEmailLoginInput {
  email: string;
  password: string;
}

interface IVerifyEmailInput {
  email: string;
  code: string;
}
interface ISendEmailVerificationInput {
  email: string;
}
interface IRestPassword {
  email: string;
}
interface IRestPasswordInput {
  email: string;
  code: string;
  password: string;
  type?: string;
}
interface IUserOtpVerify {
  country_code: string;
  mobile_number: string;
  otp: number;
}

interface IUserSendOtp {
  country_code: string;
  mobile_number: string;
}
interface IGoogleAuthVerfiy {
  tokenId?: string;
  code?: string;
  type?: string;
  redirectUri: string;
}
interface IDiscordAuthVerfiy {
  code: string;
  redirect_uri: string;
}
interface IUserUpdate {
  username?: string;
  email?: string;
  wallet_address?: string;
  name?: string;
}
interface IUserUpdateInfo {
  name: string;
  brand: IBrandInput;
  thumbnail: string;
}
interface IUpasswordUpdate {
  newpassword: string;
  currentpassword?: string;
}
interface IBrandInput {
  website_url: string;
  name: string;
}
interface IAuthor {
  _id: string;
  name?: string;
}
export type {
  IUserOtpVerify,
  IUserSendOtp,
  IUserUpdate,
  IUser,
  IGoogleAuthVerfiy,
  IDiscordAuthVerfiy,
  IAuthor,
  IUserUpdateInfo,
  IEmailLoginInput,
  IRegisterData,
  IVerifyEmailInput,
  ISendEmailVerificationInput,
  IRestPassword,
  IRestPasswordInput,
  IUpasswordUpdate,
};
