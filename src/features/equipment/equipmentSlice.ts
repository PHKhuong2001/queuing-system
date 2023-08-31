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
      ID: doc.data().ID,
      name: doc.data().name,
      IP: doc.data().IP,
      activeStatus: doc.data().activeStatus,
      connectStatus: doc.data().connectStatus,
      service: doc.data().service,
      detail: doc.data().ID,
      update: doc.data().ID,
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
      ID: data.ID,
      type: data.type,
      name: data.name,
      signIn: data.signIn,
      ip: data.IP,
      password: data.password,
      service: data.service,
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
      ID: data.ID,
      type: data.type,
      name: data.name,
      signIn: data.signIn,
      ip: data.IP,
      password: data.password,
      service: data.service,
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
      ID: equiment.ID,
      type: equiment.type,
      name: equiment.name,
      signIn: equiment.signIn,
      IP: equiment.ip,
      password: equiment.password,
      service: equiment.service,
      connectStatus: connect[randomConnect],
      activeStatus: active[randomActive],
    };

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
        ID: equiment.ID,
        type: equiment.type,
        name: equiment.name,
        signIn: equiment.signIn,
        IP: equiment.ip,
        password: equiment.password,
        service: equiment.service,
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
