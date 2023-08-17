import {
  dataListService,
  dataServiceDetail,
} from "./../../view/Page/ServicePage/ServiceColumn";
import {
  FulfilledAction,
  PendingAction,
  RejectedAction,
} from "@/Shared/interfaces";
import {
  IService,
  InitialStateService,
} from "@/Shared/interfaces/ServiceInterface";
import database from "@/config/firebase-config";
import { collectionService } from "@/view/Page/ServicePage/ServiceColumn";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DocumentData,
  Query,
  collection,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";

const initialState: InitialStateService = {
  dataListService,
  dataServiceDetail,
};

export const gettAllService = createAsyncThunk(
  "service/gettAllService",
  async (_) => {
    let queryApi: Query<DocumentData> = collection(database, collectionService);

    // if (active) {
    //   queryApi = query(queryApi, where("activeStatus", "==", active));
    // }

    // if (connect) {
    //   queryApi = query(queryApi, where("connectStatus", "==", connect));
    // }

    const response = await getDocs(queryApi);
    const data = response.docs.map<IService>((doc, index) => ({
      key: index + 1,
      id: doc.data().ID,
      name: doc.data().name,
      describe: doc.data().describe,
      activeStatus: doc.data().activeStatus,
      detail: doc.data().ID,
      update: doc.data().ID,
    }));
    return data;
  }
);

export const findService = createAsyncThunk(
  "service/findService",
  async (serviceId: string) => {
    let queryApi: Query<DocumentData> = collection(database, collectionService);

    if (serviceId) {
      queryApi = query(queryApi, where("ID", "==", serviceId));
    }

    const querySnapshot = await getDocs(query(queryApi, limit(1)));

    const doc = querySnapshot.docs[0];
    const data = doc.data();
    const result: IService = {
      id: data.ID,
      name: data.name,
      describe: data.describe,
      activeStatus: data.activeStatus,
      from: data.from,
      to: data.to,
    };
    return result;
  }
);

export const findServiceUpdate = createAsyncThunk(
  "service/findServiceUpdate",
  async (serviceId: string) => {
    let queryApi: Query<DocumentData> = collection(database, collectionService);

    if (serviceId) {
      queryApi = query(queryApi, where("ID", "==", serviceId));
    }

    const querySnapshot = await getDocs(query(queryApi, limit(1)));

    const doc = querySnapshot.docs[0];
    const data = doc.data();
    const result: IService = {
      id: data.ID,
      name: data.name,
      describe: data.describe,
      activeStatus: data.activeStatus,
      from: data.from,
      to: data.to,
    };
    return result;
  }
);

export const serviceSlice = createSlice({
  name: "serivce",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(gettAllService.fulfilled, (state, action) => {
        state.dataListService = [...action.payload];
      })
      .addCase(findService.fulfilled, (state, action) => {
        state.dataServiceDetail = { ...action.payload };
      })
      .addCase(findServiceUpdate.fulfilled, (state, action) => {
        state.dataServiceDetail = { ...action.payload };
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

export default serviceSlice.reducer;
