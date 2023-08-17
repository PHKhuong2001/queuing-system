export interface IService {
  key?: number;
  id?: string;
  name?: string;
  describe?: string;
  activeStatus?: string;
  detail?: string;
  update?: string;
  from?: string;
  to?: string;
  createdAt?: string;
}

export interface InitialStateService {
  dataListService: IService[];
  dataServiceDetail: IService;
}
