import {
  FulfilledAction,
  PendingAction,
  RejectedAction,
} from "@/Shared/interfaces";
import {
  DataEquimentState,
  IEquipment,
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
  addDoc,
  collection,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

const initialState: DataEquimentState = {
  data: dataListEquipment,
  equipmentDetail: dataEquipmentDetail,
  equipmentUpdate: dataEquipmentUpdate,
};
export const getAllEquipment = createAsyncThunk(
  "equipment/getAllEquipment",
  async ({ active, connect }: { active: string; connect: string }) => {
    let queryApi: Query<DocumentData> = collection(
      database,
      collectionEquipment
    );

    if (active) {
      queryApi = query(queryApi, where("activeStatus", "==", active));
    }

    if (connect) {
      queryApi = query(queryApi, where("connectStatus", "==", connect));
    }

    const response = await getDocs(queryApi);
    const data = response.docs.map<IEquipment>((doc, index) => ({
      key: index + 1,
      maThietBi: doc.data().ID,
      tenThietBi: doc.data().name,
      diaChiIP: doc.data().IP,
      trangThaiHoatDong: doc.data().activeStatus,
      trangThaiKetNoi: doc.data().connectStatus,
      dichVuSuDung: doc.data().service,
      chiTiet: doc.data().ID,
      capNhat: doc.data().ID,
    }));
    return data;
  }
);

export const findEquipment = createAsyncThunk(
  "equipment/findEquipment",
  async (equipmentId: string) => {
    let queryApi: Query<DocumentData> = collection(
      database,
      collectionEquipment
    );

    if (equipmentId) {
      queryApi = query(queryApi, where("ID", "==", equipmentId));
    }

    const querySnapshot = await getDocs(query(queryApi, limit(1)));

    const doc = querySnapshot.docs[0];
    const data = doc.data();
    const result: IEquipment = {
      maThietBi: data.ID,
      loaiThietBi: data.type,
      tenThietBi: data.name,
      dangNhap: data.signIn,
      ip: data.IP,
      password: data.password,
      dichVuSuDung: data.service,
    };
    return result;
  }
);

export const findEquipmentUpdate = createAsyncThunk(
  "equipment/findEquipmentUpdate",
  async (equipmentId: string) => {
    let queryApi: Query<DocumentData> = collection(
      database,
      collectionEquipment
    );

    if (equipmentId) {
      queryApi = query(queryApi, where("ID", "==", equipmentId));
    }

    const querySnapshot = await getDocs(query(queryApi, limit(1)));

    const doc = querySnapshot.docs[0];
    const data = doc.data();
    const result: IEquipment = {
      maThietBi: data.ID,
      loaiThietBi: data.type,
      tenThietBi: data.name,
      dangNhap: data.signIn,
      ip: data.IP,
      password: data.password,
      dichVuSuDung: data.service,
    };
    return result;
  }
);

export const addNewEquipment = createAsyncThunk(
  "equipment/addNewEquipment",
  async (equiment: IEquipment) => {
    const connect: string[] = ["Mất kết nối", "Kết nối"];
    const randomConnect = Math.floor(Math.random() * (connect.length + 1));
    const active: string[] = ["Ngưng hoạt động", "Hoạt động"];
    const randomActive = Math.floor(Math.random() * (active.length + 1));
    console.log(equiment);
    const newEquipment = {
      ID: equiment.maThietBi,
      type: equiment.loaiThietBi,
      name: equiment.tenThietBi,
      signIn: equiment.dangNhap,
      IP: equiment.ip,
      password: equiment.password,
      service: equiment.dichVuSuDung,
      connectStatus: connect[randomConnect],
      activeStatus: active[randomActive],
    };
    console.log(newEquipment);

    try {
      const collectionRef = collection(database, collectionEquipment);

      // Thêm dữ liệu mới vào Firestore
      await addDoc(collectionRef, newEquipment);
    } catch (error) {
      throw error;
    }
  }
);

export const updateEquipment = createAsyncThunk(
  "equipment/updateEquipment",
  async ({
    equiment,
    equipmentId,
  }: {
    equiment: IEquipment;
    equipmentId: string;
  }) => {
    const querySnapshot = await getDocs(
      collection(database, collectionEquipment)
    );

    const docRef = querySnapshot.docs.find((doc) => {
      return doc.data().ID === equipmentId;
    });

    if (docRef) {
      await updateDoc(docRef.ref, {
        ID: equiment.maThietBi,
        type: equiment.loaiThietBi,
        name: equiment.tenThietBi,
        signIn: equiment.dangNhap,
        IP: equiment.ip,
        password: equiment.password,
        service: equiment.dichVuSuDung,
      });
    }
  }
);

const equipmentSlice = createSlice({
  name: "equipment",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllEquipment.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(findEquipment.fulfilled, (state, action) => {
        state.equipmentDetail = action.payload;
      })
      .addCase(addNewEquipment.fulfilled, (state, action) => {})
      .addCase(findEquipmentUpdate.fulfilled, (state, action) => {
        state.equipmentUpdate = action.payload;
      })
      .addCase(updateEquipment.fulfilled, (state, action) => {
        state.equipmentUpdate = {};
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
