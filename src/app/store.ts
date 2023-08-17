import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import equipmentReducer from "../features/equipment/equipmentSlice";
import serviceReducer from "../features/serviceSlice/serviceSlice";
import progressionReducer from "../features/progression/progressionSlice";
import roleReducer from "../features/role/roleSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    equipment: equipmentReducer,
    service: serviceReducer,
    progression: progressionReducer,
    role: roleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
