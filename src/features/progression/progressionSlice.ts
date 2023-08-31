import {
  dataListReport,
  dataChart,
  dataDetailProgression,
  collectionProgression,
  dataListProgression,
  dataListProgressionOfService,
} from "@/view/Page/ProgressionPage/ProgressionColumn";
import {
  changeDate,
  changeTime,
  convertToTimestamp,
  getStartAndEndOfWeekInMonth,
  getWeekDates,
  splitDate,
} from "@/Shared/helpers";
import {
  FulfilledAction,
  PendingAction,
  RejectedAction,
} from "@/Shared/interfaces";
import {
  ChartMonth,
  IProgression,
  InitialStateProgression,
} from "@/Shared/interfaces/ProgressionInterface";
import database from "@/config/firebase-config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DocumentData,
  Query,
  Timestamp,
  addDoc,
  collection,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
import moment from "moment";

const initialState: InitialStateProgression = {
  dataListProgression,
  dataDetailProgression,
  dataListReport,
  dataChart,
  dataListProgressionOfService,
};

export const getAllProgression = createAsyncThunk(
  "progression/getAllProgression",
  async ({
    from,
    to,
    progresion,
  }: {
    from?: string;
    to?: string;
    progresion: IProgression;
  }) => {
    let queryApi: Query<DocumentData> = collection(
      database,
      collectionProgression
    );

    const { nameService, status, powerSupply } = progresion;
    if (nameService) {
      queryApi = query(queryApi, where("nameService", "==", nameService));
    }

    if (status) {
      queryApi = query(queryApi, where("status", "==", status));
    }

    if (powerSupply) {
      queryApi = query(queryApi, where("powerSupply", "==", powerSupply));
    }

    if (from && to) {
      const startTimestamp = Timestamp.fromMillis(
        moment(from, "DD/MM/YYYY").startOf("day").valueOf()
      );
      const endTimestamp = Timestamp.fromMillis(
        moment(to, "DD/MM/YYYY").endOf("day").valueOf()
      );

      queryApi = query(
        queryApi,
        where("grantTime", ">=", startTimestamp),
        where("grantTime", "<=", endTimestamp)
      );
    }

    const response = await getDocs(queryApi);
    const sortData = response.docs.sort((a, b) => {
      const idA = parseInt(
        (a.data().ID ?? "0").slice(-(a.data().ID.length + 1))
      );
      const idB = parseInt(
        (b.data().ID ?? "0").slice(-(b.data().ID.length + 1))
      );
      return idA - idB;
    });
    const data = sortData.map<IProgression>((doc, index) => ({
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

export const addNewProgression = createAsyncThunk(
  "progression/addNewProgression",
  async ({
    service,
    serviceId,
    currentTime,
  }: {
    service: string;
    serviceId: string;
    currentTime: string;
  }) => {
    const querySnapshot = await getDocs(
      collection(database, collectionProgression)
    );
    const docRef = querySnapshot.docs.map((doc) => {
      return doc.data().ID;
    });
    const findById = docRef.filter((item) => item.includes(serviceId));

    const sortRef = findById.sort();
    const maxId = Math.max(
      ...sortRef.map((item) => parseInt(item.slice(-serviceId.length)))
    );

    const powerSupply: string[] = ["Kiosk", "Hệ thống"];
    const randomPowerSupply = Math.floor(
      Math.random() * (powerSupply.length + 1)
    );
    const status: string[] = ["Đã sử dụng", "Đang chờ", "Bỏ qua"];
    const randomStatus = Math.floor(Math.random() * (status.length + 1));
    const nameCustomer: string[] = [
      "Lê Huỳnh Ái Vân",
      "Huỳnh Ái Vân",
      "Lê Ái Vân",
      "Nguyễn Ái Vân",
      "Lê Huỳnh Nghĩa",
      "Lê Huỳnh Đức",
      "Phạm Văn Mạnh",
      "Lê Thị Cẩm Tiên",
    ];
    const randomNameCustomer = Math.floor(
      Math.random() * (nameCustomer.length + 1)
    );
    const newEquipment = {
      emailCustomer: "minhnhat@gmail.com",
      ID:
        findById.length === 0
          ? `${serviceId}0001`
          : `${serviceId}${(maxId + 1)
              .toString()
              .padStart(serviceId.length + 1, "0")}`,
      nameService: service,
      phoneCustomer: "038212385",
      powerSupply: powerSupply[randomPowerSupply],
      status: status[randomStatus],
      nameCustomer: nameCustomer[randomNameCustomer],
      expiry: convertToTimestamp(currentTime),
      grantTime: convertToTimestamp(currentTime),
    };
    console.log(newEquipment);

    try {
      const collectionRef = collection(database, collectionProgression);
      await addDoc(collectionRef, newEquipment);
    } catch (error) {
      throw error;
    }
  }
);

export const getAllProgressionOfService = createAsyncThunk(
  "progression/getAllProgressionOfService",
  async (nameService: string) => {
    let queryApi: Query<DocumentData> = collection(
      database,
      collectionProgression
    );

    if (nameService) {
      queryApi = query(queryApi, where("nameService", "==", nameService));
    }

    const response = await getDocs(queryApi);
    const data = response.docs.map<IProgression>((doc, index) => ({
      key: index + 1,
      stt: doc.data().ID,
      nameService: doc.data().nameService,
      status: doc.data().status,
    }));
    data.sort();
    return data;
  }
);

export const getAllReport = createAsyncThunk(
  "progression/getAllReport",
  async ({ from, to }: { from: string; to: string }) => {
    let queryApi: Query<DocumentData> = collection(
      database,
      collectionProgression
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
        where("grantTime", ">=", startTimestamp),
        where("grantTime", "<=", endTimestamp)
      );
    }

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
  }
);

export const getDataByMonth = createAsyncThunk(
  "progression/getDataByMonth",
  async ({ dateString }: { dateString: string }) => {
    const { month, year } = splitDate(dateString);

    const weeksInMonth = getStartAndEndOfWeekInMonth(year, month);
    const allProgressions: ChartMonth[] = [];

    // Giới hạn việc lặp lại để chỉ lấy 4 tuần
    const numberOfWeeksToProcess = Math.min(weeksInMonth.length, 4);

    for (let i = 0; i < numberOfWeeksToProcess; i++) {
      const week = weeksInMonth[i];
      const querySnapshot = await getDocs(
        query(
          collection(database, collectionProgression),
          where("grantTime", ">=", Timestamp.fromDate(week.start)),
          where("grantTime", "<=", Timestamp.fromDate(week.end))
        )
      );

      const progressionCountInWeek = querySnapshot.docs.length;

      // Thêm vào danh sách
      allProgressions.push({
        weekNumber: i + 1,
        startDate: changeDate(week.start.getTime() / 1000),
        endDate: changeDate(week.end.getTime() / 1000),
        progressionCount: progressionCountInWeek,
      });
    }

    return allProgressions;
  }
);

export const getWeeklyData = createAsyncThunk(
  "progression/getWeeklyData",
  async ({ dateString }: { dateString: string }) => {
    const { day, month, year } = splitDate(dateString);

    const weekDates = getWeekDates(year, month, day);

    const allProgressions: ChartMonth[] = [];

    for (const date of weekDates) {
      const querySnapshot = await getDocs(
        query(
          collection(database, collectionProgression),
          where(
            "grantTime",
            ">=",
            Timestamp.fromDate(moment(date, "DD/MM/YYYY").toDate())
          ),
          where(
            "grantTime",
            "<",
            Timestamp.fromDate(
              moment(date, "DD/MM/YYYY").add(1, "days").toDate()
            )
          )
        )
      );

      const progressionCountInDate = querySnapshot.docs.length;

      // Thêm vào danh sách
      allProgressions.push({
        date,
        progressionCount: progressionCountInDate,
      });
    }

    return allProgressions;
  }
);

const progressionSlice = createSlice({
  name: "progression",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllProgression.fulfilled, (state, action) => {
        state.dataListProgression = [...action.payload];
      })
      .addCase(getAllProgressionOfService.fulfilled, (state, action) => {
        state.dataListProgressionOfService = [...action.payload];
      })
      .addCase(getAllReport.fulfilled, (state, action) => {
        state.dataListReport = [...action.payload];
      })
      .addCase(findProgression.fulfilled, (state, action) => {
        state.dataDetailProgression = { ...action.payload };
      })
      .addCase(getDataByMonth.fulfilled, (state, action) => {
        state.dataChart = action.payload;
      })
      .addCase(getWeeklyData.fulfilled, (state, action) => {
        state.dataChart = action.payload;
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
