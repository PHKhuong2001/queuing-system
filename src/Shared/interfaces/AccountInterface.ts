export interface IAccount {
  key?: number;
  account?: string;
  name?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  status?: string;
  role?: string;
  image?: string;
  update?: string;
}
export interface InitialStateAuth {
  dataListAccount: IAccount[];
  dataAccountDetail: IAccount;
  dataAccountUpdate: IAccount;
  loading: boolean;
  success: boolean;
  loginValid: {
    account: boolean;
    password: boolean;
  };
  loadingAvatar: IAccount;
}
