import {
  collectionActivity,
  dataListActivity,
} from "@/view/Page/ActivityLog/ActivityColumn";
import {
  IActivity,
  InitialStateActivity,
} from "@/Shared/interfaces/ActivityInterface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DocumentData,
  Query,
  Timestamp,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import database from "@/config/firebase-config";
import {
  FulfilledAction,
  PendingAction,
  RejectedAction,
} from "@/Shared/interfaces";
import { changeDate, changeFullTime } from "@/Shared/helpers";
import moment from "moment";
const initialState: InitialStateActivity<IActivity> = {
  dataListActivity,
};
export const getAllActivity = createAsyncThunk(
  "activity/getAllActivity",
  async ({ from, to }: { from: string; to: string }) => {
    let queryApi: Query<DocumentData> = collection(
      database,
      collectionActivity
    );

    if (from && to) {
      const startTimestamp = Timestamp.fromMillis(
        moment(from, "DD/MM/YYYY").startOf("day").valueOf()
      );
      const endTimestamp = Timestamp.fromMillis(
        moment(to, "DD/MM/YYYY").endOf("day").valueOf()
      );

      queryApi = query(
        queryApi,
        where("executionTime", ">=", startTimestamp),
        where("executionTime", "<=", endTimestamp)
      );
    }

    const response = await getDocs(queryApi);
    const data = response.docs.map<IActivity>((doc, index) => ({
      key: index,
      account: doc.data().account,
      executionTime: `${changeDate(
        doc.data().executionTime.seconds
      )} ${changeFullTime(doc.data().executionTime.seconds)}`,
      IP: doc.data().IP,
      operations: doc.data().operations,
    }));
    return data;
  }
);

export const addNewActivity = createAsyncThunk(
  "activity/addNewActivity",
  async (activity: IActivity) => {
    const newActivity: IActivity = {
      IP: "192.168.3.1",
      account: activity.account,
      executionTime: activity.executionTime,
      operations: activity.operations,
    };

    try {
      const collectionRef = collection(database, collectionActivity);

      // Thêm dữ liệu mới vào Firestore
      await addDoc(collectionRef, newActivity);
    } catch (error) {
      throw error;
    }
  }
);
const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllActivity.fulfilled, (state, action) => {
        state.dataListActivity = [...action.payload];
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

export default activitySlice.reducer;
