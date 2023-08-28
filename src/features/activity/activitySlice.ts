import {
  collectionActivity,
  dataListActivity,
} from "@/view/Page/ActivityLog/ActivityColumn";
import {
  IActivity,
  InitialStateActivity,
} from "@/Shared/interfaces/ActivityInterface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DocumentData, Query, collection, getDocs } from "firebase/firestore";
import database from "@/config/firebase-config";
import {
  FulfilledAction,
  PendingAction,
  RejectedAction,
} from "@/Shared/interfaces";
import { changeDate, changeFullTime } from "@/Shared/helpers";
const initialState: InitialStateActivity<IActivity> = {
  dataListActivity,
};
export const getAllActivity = createAsyncThunk(
  "activity/getAllActivity",
  async (_) => {
    let queryApi: Query<DocumentData> = collection(
      database,
      collectionActivity
    );
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
