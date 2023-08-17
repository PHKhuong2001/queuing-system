import {
  dataListRole,
  dataDetailRole,
  collectionRole,
} from "@/view/Page/RoleManagement/RoleColumn";
import { IRole, InitialStateRole } from "@/Shared/interfaces/RoleInterface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DocumentData, Query, collection, getDocs } from "firebase/firestore";
import database from "@/config/firebase-config";
import {
  FulfilledAction,
  PendingAction,
  RejectedAction,
} from "@/Shared/interfaces";

const initialState: InitialStateRole = {
  dataListRole,
  dataDetailRole,
};

export const gettAllRole = createAsyncThunk("role/gettAllRole", async (_) => {
  let queryApi: Query<DocumentData> = collection(database, collectionRole);

  // if (active) {
  //   queryApi = query(queryApi, where("activeStatus", "==", active));
  // }

  // if (connect) {
  //   queryApi = query(queryApi, where("connectStatus", "==", connect));
  // }

  const response = await getDocs(queryApi);
  const data = response.docs.map<IRole>((doc, index) => ({
    key: index + 1,
    nameRole: doc.data().nameRole,
    userNumber: `${index + 1}`,
    describe: doc.data().nameRole,
    update: doc.id,
  }));
  return data;
});

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(gettAllRole.fulfilled, (state, action) => {
        state.dataListRole = [...action.payload];
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

export default roleSlice.reducer;
