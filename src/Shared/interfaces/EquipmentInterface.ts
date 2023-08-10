import { AsyncThunk } from "@reduxjs/toolkit";

export type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
export type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
export type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;
export type FulfilledAction = ReturnType<GenericAsyncThunk["fulfilled"]>;

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
