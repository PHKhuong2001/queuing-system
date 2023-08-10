import {
  DataEquimentState,
  FulfilledAction,
  IEquipment,
  PendingAction,
  RejectedAction,
} from "@/Shared/interfaces/EquipmentInterface";
import database from "@/config/firebase-config";
import {
  collectionEquipment,
  dataEquipmentDetail,
  dataEquipmentUpdate,
  dataListEquipment,
} from "@/view/Page/Equipment/EquipmentColumn";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DocumentData,
  Query,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

const initialState: DataEquimentState = {
  data: dataListEquipment,
  equipmentDetail: dataEquipmentDetail,
  equipmentUpdate: dataEquipmentUpdate,
};
export const getAllEquipment = createAsyncThunk(
  "equipment/getAllEquipment",
  async (_) => {
    let queryApi: Query<DocumentData> = collection(
      database,
      collectionEquipment
    );

    // if (packageName) {
    //   queryApi = query(queryApi, where("package", "==", packageName));
    // }

    const response = await getDocs(queryApi);
    const data = response.docs.map<IEquipment>((doc, index) => ({
      key: index + 1,
      maThietBi: doc.id,
      tenThietBi: doc.data().name,
      diaChiIP: doc.data().IP,
      trangThaiHoatDong: doc.data().activeStatus,
      trangThaiKetNoi: doc.data().connectStatus,
      dichVuSuDung: doc.data().service,
      chiTiet: doc.id,
      capNhat: doc.id,
    }));
    return data;
  }
);

export const findEquipment = createAsyncThunk(
  "equipment/findEquipment",
  async (equipmentId: string) => {
    const docRef = doc(collection(database, collectionEquipment), equipmentId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      const result: IEquipment = {
        maThietBi: docSnapshot.id,
        loaiThietBi: data.type,
        tenThietBi: data.name,
        dangNhap: data.signIn,
        ip: data.IP,
        password: data.password,
        dichVuSuDung: data.service,
      };
      return result;
    } else {
      throw new Error("Equipment not found");
    }
  }
);

const equipmentSlice = createSlice({
  name: "equipment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEquipment.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(findEquipment.fulfilled, (state, action) => {
        state.equipmentDetail = action.payload;
      })
      .addMatcher<RejectedAction>(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          console.log(action.error);
        }
      )
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          console.log("Pending");
        }
      )
      .addMatcher<FulfilledAction>(
        (action) => action.type.endsWith("/fullfilled"),
        (state, action) => {
          console.log(action.meta.requestId);
          console.log(action.payload);
        }
      );
  },
});

export default equipmentSlice.reducer;
