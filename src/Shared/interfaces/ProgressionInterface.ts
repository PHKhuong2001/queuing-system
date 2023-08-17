export interface IProgression {
  key?: number;
  stt?: string;
  id?: string;
  emailCustomer?: string;
  expiry?: string;
  grantTime?: string;
  nameCustomer?: string;
  nameService?: string;
  phoneCustomer?: string;
  powerSupply?: string;
  status?: string;
  detail?: string;
}

export interface InitialStateProgression {
  dataListProgression: IProgression[];
  dataDetailProgression: IProgression;
}