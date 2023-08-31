export interface DataEquimentState {
  data: IEquipment[];
  equipmentDetail: IEquipment;
  equipmentUpdate: IEquipment;
}

export interface IEquipment {
  key?: number;
  ID?: string;
  name?: string;
  IP?: string;
  activeStatus?: string;
  connectStatus?: string;
  service?: string;
  detail?: string;
  update?: string;
  type?: string;
  ip?: string;
  signIn?: string;
  password?: string;
}
