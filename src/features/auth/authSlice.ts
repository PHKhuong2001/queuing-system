import {
  FulfilledAction,
  PendingAction,
  RejectedAction,
} from "@/Shared/interfaces";
import {
  IAccount,
  InitialStateAuth,
} from "@/Shared/interfaces/AccountInterface";
import database, { storage } from "@/config/firebase-config";
import {
  collectionAuth,
  dataAccountDetail,
  dataAccountUpdate,
  dataListAccount,
} from "@/view/Page/AccountManagement/AccountColumn";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DocumentData,
  Query,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const initialState: InitialStateAuth = {
  dataListAccount,
  dataAccountDetail,
  dataAccountUpdate,
  loginValid: {
    account: true,
    password: true,
  },
  loading: false,
  success: false,
  loadingAvatar: {},
  loadingResetPassword: false,
};

export const loginAuth = createAsyncThunk(
  "auth/loginAuth",
  async (credentials: IAccount) => {
    const { account, password } = credentials;

    const q = query(
      collection(database, collectionAuth),
      where("account", "==", account),
      where("password", "==", password)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const data = querySnapshot.docs[0].data();
      const token = {
        name: data.name,
        phoneNumber: data.phoneNumber,
        email: data.email,
        role: data.role,
        status: data.status,
        account: data.account,
        password: data.password,
        image: data.image,
      };

      localStorage.setItem("token", JSON.stringify(token));
      return token;
    } else {
      // Handle case when account is not found or password is incorrect
      throw new Error("Invalid email or password");
    }
  }
);

export const forGotPassword = createAsyncThunk(
  "auth/forGotPassword",
  async (email: string) => {
    const q = query(
      collection(database, collectionAuth),
      where("email", "==", email)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const data = querySnapshot.docs[0].data();
      const token = {
        name: data.name,
        phoneNumber: data.phoneNumber,
        email: data.email,
        role: data.role,
        status: data.status,
        account: data.account,
        password: data.password,
        image: data.image,
      };
      return token;
    } else {
      // Handle case when account is not found or password is incorrect
      throw new Error("Invalid email or password");
    }
  }
);

export const updateAccountImage = createAsyncThunk(
  "auth/updateAccountImage",
  async ({ accountId, imageData }: { accountId: string; imageData: any }) => {
    const querySnapshot = await getDocs(collection(database, collectionAuth));
    const docRef = querySnapshot.docs.find((doc) => {
      return doc.data().account === accountId;
    });
    const storageRef = ref(storage, `images/${imageData.name}`);
    const uploadTask = uploadBytes(storageRef, imageData.originFileObj);
    await uploadTask;
    const imageUrl = await getDownloadURL(storageRef);
    const storedUser = localStorage.getItem("token");
    const user: IAccount = JSON.parse(storedUser || "");
    const token: IAccount = {
      name: user.name,
      phoneNumber: user.phoneNumber,
      email: user.email,
      role: user.role,
      status: user.status,
      account: user.account,
      password: user.password,
      image: imageUrl,
    };
    if (docRef) {
      await updateDoc(docRef.ref, {
        image: imageUrl, // Cập nhật trường image
      });
    }
    return token;
  }
);

export const emailFindChangePassword = createAsyncThunk(
  "auth/emailFindChangePassword",
  async (credentials: IAccount) => {
    const { email } = credentials;

    const q = query(
      collection(database, collectionAuth),
      where("email", "==", email)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const data = querySnapshot.docs[0].data();
      const token = {
        name: data.name,
        phoneNumber: data.phoneNumber,
        email: data.email,
        role: data.role,
        status: data.status,
        account: data.account,
        password: data.password,
      };

      localStorage.setItem("token", JSON.stringify(token));
      return token;
    } else {
      // Handle case when account is not found or password is incorrect
      throw new Error("Invalid email or password");
    }
  }
);

export const getAllAccount = createAsyncThunk(
  "auth/getAllAccount",
  async (_) => {
    let queryApi: Query<DocumentData> = collection(database, collectionAuth);

    // if (active) {
    //   queryApi = query(queryApi, where("activeStatus", "==", active));
    // }

    const response = await getDocs(queryApi);
    const data = response.docs.map<IAccount>((doc, index) => ({
      key: index + 1,
      account: doc.data().account,
      name: doc.data().name,
      phoneNumber: doc.data().phoneNumber,
      email: doc.data().email,
      role: doc.data().role,
      status: doc.data().status,
      update: doc.id,
    }));
    return data;
  }
);

export const addNewAccount = createAsyncThunk(
  "auth/addNewAccount",
  async (account: IAccount) => {
    const newAccount = {
      name: account.name,
      phoneNumber: account.phoneNumber,
      email: account.email,
      role: account.role,
      status: account.status,
      account: account.account,
      password: account.password,
    };

    try {
      const collectionRef = collection(database, collectionAuth);
      // Thêm dữ liệu mới vào Firestore
      await addDoc(collectionRef, newAccount);
    } catch (error) {
      throw error;
    }
  }
);

export const findAccount = createAsyncThunk(
  "auth/findAccount",
  async (accountId: string) => {
    const docRef = doc(database, collectionAuth, accountId);

    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      const result: IAccount = {
        name: data.name,
        phoneNumber: data.phoneNumber,
        email: data.email,
        role: data.role,
        status: data.status,
        account: data.account,
        password: data.password,
      };
      return result;
    } else {
      // Handle case when no account is found
      throw new Error("Account not found");
    }
  }
);

export const updateAccount = createAsyncThunk(
  "auth/updateAccount",
  async ({ account, accountId }: { account: IAccount; accountId: string }) => {
    const querySnapshot = await getDocs(collection(database, collectionAuth));

    const docRef = querySnapshot.docs.find((doc) => {
      return doc.id === accountId;
    });

    if (docRef) {
      await updateDoc(docRef.ref, {
        name: account.name,
        phoneNumber: account.phoneNumber,
        email: account.email,
        role: account.role,
        status: account.status,
        account: account.account,
        password: account.password,
      });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetForgot(state, action: PayloadAction<string>) {},
  },
  extraReducers(builder) {
    builder
      .addCase(getAllAccount.fulfilled, (state, action) => {
        state.dataListAccount = [...action.payload];
      })
      .addCase(forGotPassword.fulfilled, (state, action) => {
        state.loadingResetPassword = true;
      })
      .addCase(updateAccountImage.fulfilled, (state, action) => {
        localStorage.setItem("token", JSON.stringify(action.payload));
        const storedUser = localStorage.getItem("token");
        if (storedUser) {
          const user: IAccount = JSON.parse(storedUser || "");
          state.loadingAvatar = user;
        }
      })
      .addCase(findAccount.fulfilled, (state, action) => {
        state.dataAccountDetail = { ...action.payload };
      })
      .addCase(updateAccount.fulfilled, (state, action) => {
        state.dataAccountDetail = {};
      })
      .addCase(loginAuth.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginAuth.rejected, (state, action) => {
        state.loading = false;
        state.loginValid = {
          account: false,
          password: false,
        };
      })
      .addCase(loginAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
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

export default authSlice.reducer;
