export interface IRole {
  key?: number;
  nameRole?: string;
  describe?: string;
  userNumber?: string;
  update?: string;
}

export interface InitialStateRole {
  dataListRole: IRole[];
  dataDetailRole: IRole;
  roleUpdate: IRole;
}
