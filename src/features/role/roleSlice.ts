import {
  dataListRole,
  dataDetailRole,
  collectionRole,
} from "@/view/Page/RoleManagement/RoleColumn";
import { IRole, InitialStateRole } from "@/Shared/interfaces/RoleInterface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DocumentData,
  Query,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import database from "@/config/firebase-config";
import {
  FulfilledAction,
  PendingAction,
  RejectedAction,
} from "@/Shared/interfaces";

const initialState: InitialStateRole = {
  dataListRole,
  dataDetailRole,
  roleUpdate: {},
};

export const gettAllRole = createAsyncThunk("role/gettAllRole", async (_) => {
  let queryApi: Query<DocumentData> = collection(database, collectionRole);

  const response = await getDocs(queryApi);
  const data = response.docs.map<IRole>((doc, index) => ({
    key: index + 1,
    nameRole: doc.data().nameRole,
    userNumber: `${index + 1}`,
    describe: doc.data().describe,
    update: doc.id,
  }));
  return data;
});

export const addNewRole = createAsyncThunk(
  "role/addNewRole",
  async (role: IRole) => {
    const { describe, nameRole } = role;
    const newRole: IRole = {
      describe: describe,
      nameRole: nameRole,
    };

    try {
      const collectionRef = collection(database, collectionRole);

      await addDoc(collectionRef, newRole);
    } catch (error) {
      throw error;
    }
  }
);

export const findRoleById = createAsyncThunk(
  "role/findRoleById",
  async (roleId: string) => {
    const roleDocRef = doc(database, collectionRole, roleId);

    const docSnapshot = await getDoc(roleDocRef);

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      const result: IRole = {
        nameRole: data.nameRole,
        describe: data.describe,
      };
      return result;
    } else {
      throw new Error("Role not found");
    }
  }
);
export const updateRole = createAsyncThunk(
  "role/updateRole",
  async ({ role, roleId }: { role: IRole; roleId: string }) => {
    const querySnapshot = await getDocs(collection(database, collectionRole));

    const docRef = querySnapshot.docs.find((doc) => {
      return doc.id === roleId;
    });

    if (docRef) {
      await updateDoc(docRef.ref, {
        describe: role.describe,
        nameRole: role.nameRole,
      });
    }
  }
);

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(gettAllRole.fulfilled, (state, action) => {
        state.dataListRole = [...action.payload];
      })
      .addCase(findRoleById.fulfilled, (state, action) => {
        state.roleUpdate = { ...action.payload };
      })
      .addCase(updateRole.fulfilled, (state, action) => {
        state.roleUpdate = {};
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
