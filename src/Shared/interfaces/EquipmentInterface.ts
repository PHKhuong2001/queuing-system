import { AsyncThunk } from "@reduxjs/toolkit";

export interface DataEquimentState {
  data: IEquipment[];
  equipmentDetail: IEquipment;
  equipmentUpdate: IEquipment;
}

export interface IEquipment {
  key?: number;
  maThietBi?: string;
  tenThietBi?: string;
  diaChiIP?: string;
  trangThaiHoatDong?: string;
  trangThaiKetNoi?: string;
  dichVuSuDung?: string;
  chiTiet?: string;
  capNhat?: string;
  loaiThietBi?: string;
  ip?: string;
  dangNhap?: string;
  password?: string;
}
