import { dataListReport } from "@/view/Page/ProgressionPage/ProgressionColumn";
import {
  collectionProgression,
  dataDetailProgression,
} from "@/view/Page/ProgressionPage/ProgressionColumn";
import { changeDate, changeTime } from "@/Shared/helpers";
import {
  FulfilledAction,
  PendingAction,
  RejectedAction,
} from "@/Shared/interfaces";
import {
  IProgression,
  InitialStateProgression,
} from "@/Shared/interfaces/ProgressionInterface";
import database from "@/config/firebase-config";
import { dataListProgression } from "@/view/Page/ProgressionPage/ProgressionColumn";
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

const initialState: InitialStateProgression = {
  dataListProgression,
  dataDetailProgression,
  dataListReport,
};

export const gettAllProgression = createAsyncThunk(
  "progression/gettAllProgression",
  async (_) => {
    let queryApi: Query<DocumentData> = collection(
      database,
      collectionProgression
    );

    // if (active) {
    //   queryApi = query(queryApi, where("activeStatus", "==", active));
    // }

    // if (connect) {
    //   queryApi = query(queryApi, where("connectStatus", "==", connect));
    // }

    const response = await getDocs(queryApi);
    const data = response.docs.map<IProgression>((doc, index) => ({
      key: index + 1,
      stt: doc.data().ID,
      nameCustomer: doc.data().nameCustomer,
      nameService: doc.data().nameService,
      grantTime: `${changeTime(doc.data().grantTime.seconds)} - ${changeDate(
        doc.data().grantTime.seconds
      )}`,
      expiry: `${changeTime(doc.data().expiry.seconds)} - ${changeDate(
        doc.data().expiry.seconds
      )}`,
      status: doc.data().status,
      detail: doc.data().ID,
    }));
    return data;
  }
);

export const gettAllReport = createAsyncThunk(
  "progression/gettAllReport",
  async (_) => {
    let queryApi: Query<DocumentData> = collection(
      database,
      collectionProgression
    );

    // if (active) {
    //   queryApi = query(queryApi, where("activeStatus", "==", active));
    // }

    // if (connect) {
    //   queryApi = query(queryApi, where("connectStatus", "==", connect));
    // }

    const response = await getDocs(queryApi);
    const data = response.docs.map<IProgression>((doc, index) => ({
      stt: doc.data().ID,
      nameService: doc.data().nameService,
      grantTime: `${changeTime(doc.data().grantTime.seconds)} - ${changeDate(
        doc.data().grantTime.seconds
      )}`,
      status: doc.data().status,
      powerSupply: doc.data().powerSupply,
    }));
    return data;
  }
);

export const findProgression = createAsyncThunk(
  "progression/findProgression",
  async (progressionId: string) => {
    let queryApi: Query<DocumentData> = collection(
      database,
      collectionProgression
    );

    if (progressionId) {
      queryApi = query(queryApi, where("ID", "==", progressionId));
    }

    const querySnapshot = await getDocs(query(queryApi, limit(1)));

    const doc = querySnapshot.docs[0];
    const data = doc.data();
    console.log(data);

    const result: IProgression = {
      nameCustomer: data.nameCustomer,
      nameService: data.nameService,
      grantTime: `${changeTime(data.grantTime.seconds)} - ${changeDate(
        data.grantTime.seconds
      )}`,
      expiry: `${changeTime(data.expiry.seconds)} - ${changeDate(
        data.expiry.seconds
      )}`,
      emailCustomer: data.emailCustomer,
      phoneCustomer: data.phoneCustomer,
      powerSupply: data.powerSupply,
      status: data.status,
      id: data.ID,
    };
    console.log(result);

    return result;
    // return {};
  }
);

// export const findServiceUpdate = createAsyncThunk(
//   "service/findServiceUpdate",
//   async (serviceId: string) => {
//     let queryApi: Query<DocumentData> = collection(database, collectionService);

//     if (serviceId) {
//       queryApi = query(queryApi, where("ID", "==", serviceId));
//     }

//     const querySnapshot = await getDocs(query(queryApi, limit(1)));

//     const doc = querySnapshot.docs[0];
//     const data = doc.data();
//     const result: IService = {
//       id: data.ID,
//       name: data.name,
//       describe: data.describe,
//       activeStatus: data.activeStatus,
//       from: data.from,
//       to: data.to,
//     };
//     return result;
//   }
// );

const progressionSlice = createSlice({
  name: "progression",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(gettAllProgression.fulfilled, (state, action) => {
        state.dataListProgression = [...action.payload];
      })
      .addCase(gettAllReport.fulfilled, (state, action) => {
        state.dataListReport = [...action.payload];
      })
      .addCase(findProgression.fulfilled, (state, action) => {
        state.dataDetailProgression = { ...action.payload };
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
export default progressionSlice.reducer;
