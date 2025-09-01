export interface AuthLoginRequestData {
  email: string;
  password: string;
}

export interface AuthAdditionalUserDataRequest {
  name: string;
  surname: string;
  phone?: string;
  birthdate?: string;
  country?: string;
  gender?: string;
}

export interface AuthLoginResponseData extends AuthAdditionalUserDataRequest {
  id: string;
  email: string;
  token: string;
  isVerified: boolean;
  tokenExpirationDate?: string; // ISO format (string)
  img?: string;
  connection?: {
    status: string;
    organization: string;
  };
  role: UserRole;
}

export interface AuthRegisterRequestData extends AuthLoginRequestData {
  terms: boolean;
  privacy: boolean;
}

export interface AuthRegisterResponseData extends AuthLoginResponseData {}

export interface IUserProfilePasswordSettings {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}

export interface IUser extends AuthLoginResponseData {}

export type connectionStatus = 'pending' | 'accepted';
export enum ConnectionStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
}
export type UserRole = 'client' | 'expert';
export enum UserRoleEnum {
  CLIENT = 'client',
  EXPERT = 'expert',
}

export interface IConnection {
  status: connectionStatus;
  organization: string;
}

export class User implements IUser {
  public id;
  public name: string;
  public surname: string;
  public email: string;
  public token: string;
  public isVerified: boolean;
  public tokenExpirationDate?: string; // ISO format (string)
  public phone?: string;
  public birthdate?: string;
  public country?: string;
  public gender?: string;
  public img?: string;
  public connection?: IConnection | undefined;
  public role: UserRole;
  constructor(userData: AuthLoginResponseData) {
    this.id = userData.id;
    this.name = userData.name;
    this.surname = userData.surname;
    this.email = userData.email;
    this.token = userData.token;
    this.tokenExpirationDate = userData.tokenExpirationDate!;
    this.isVerified = userData.isVerified;
    this.phone = userData.phone;
    this.birthdate = userData.birthdate;
    this.country = userData.country;
    this.gender = userData.gender;
    this.img = userData.img;
    this.connection = userData.connection
      ? {
          status: userData.connection?.status as connectionStatus,
          organization: userData.connection?.organization,
        }
      : undefined;
    this.role = userData.role;
  }
  // AUTO LOGOUT START
  // ---------------
  // get tokenExpirationDate() {
  //   const locale = Date.parse(this.tokenExpirationDate);
  //   console.log(
  //     '🚀 ~ file: auth.model.ts:68 ~ User ~ gettokenExpirationDate ~ this.tokenExpirationDate:',
  //     this.tokenExpirationDate,
  //   );
  //   return locale;
  // }

  get tokenDuration() {
    const maxDuration = 864000000; // 10days
    if (
      !this.tokenExpirationDate ||
      typeof this.tokenExpirationDate !== 'string'
    ) {
      return maxDuration; // 10days
    }
    let duration =
      new Date(this.tokenExpirationDate).getTime() - new Date().getTime();
    if (duration > maxDuration) duration = maxDuration; // safe integer
    if (!this.token) {
      return -1;
    }
    return duration;
  }
  // ---------------
  // AUTO LOGOUT END
}
