export interface AuthLoginRequestData {
  email: string;
  password: string;
}



export interface AuthLoginResponseData {
  id: string;
  name: string;
  surname: string;
  img: string;
  phone: string;
  email: string;
  token: string;
  tokenExpirationDate: string; // ISO format (string)
  role: UserRole;
}

export interface AuthRegisterRequestData extends AuthLoginRequestData {
  terms: boolean;
  sms: boolean;
}

export interface AuthRegisterResponseData extends AuthLoginResponseData {}

export interface IUserProfilePasswordSettings {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}

export interface IUser extends AuthLoginResponseData {
  shortName: string;
}

export type UserRole = 'user' | 'artist';
export enum UserRoleEnum {
  USER = 'user',
  ARTIST = 'artist',
}

export class User implements IUser {
  public id;
  public name: string;
  public surname: string;
  public shortName: string;
  public img: string;
  public email: string;
  public token: string; // TODO revise implementation after real backend
  public tokenExpirationDate: string; // ISO format (string) // TODO revise implementation after real backend
  public phone: string;
  public role: UserRole;
  constructor(userData: AuthLoginResponseData) {
    this.id = userData.id;
    this.name = userData.name;
    this.surname = userData.surname;
    this.shortName = userData.name[0];
    this.img = userData.img;
    this.email = userData.email;
    this.token = userData.token;
    this.tokenExpirationDate = userData.tokenExpirationDate;
    this.phone = userData.phone;
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
