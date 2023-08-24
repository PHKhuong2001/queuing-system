import { Timestamp } from "firebase/firestore";
import moment from "moment";

export const handlerSplitRoute = (routeString: string) => {
  let route = "";
  if (routeString.includes("/detail") || routeString.includes("/update")) {
    const matchResult = routeString.match(/(\/[^/]+\/[^/]+)/);
    route = matchResult ? matchResult[0] : "";
  } else {
    route = routeString;
  }
  return route;
};

export const changeDate = (time: any) => {
  return moment.unix(time).format("DD/MM/YYYY");
};

export const changeTime = (time: any) => {
  return moment.unix(time).format("hh:mm");
};

export const getStartAndEndOfWeekInMonth = (year: any, month: any) => {
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDayOfMonth = new Date(year, month, 0);

  const weeksInMonth = [];
  let currentWeekStart = new Date(firstDayOfMonth);

  while (currentWeekStart <= lastDayOfMonth) {
    const currentWeekEnd = new Date(currentWeekStart);
    currentWeekEnd.setDate(currentWeekEnd.getDate() + 6);

    // Đảm bảo ngày cuối tuần không vượt quá ngày cuối cùng của tháng
    if (currentWeekEnd > lastDayOfMonth) {
      currentWeekEnd.setDate(lastDayOfMonth.getDate());
    }

    weeksInMonth.push({
      start: new Date(currentWeekStart),
      end: new Date(currentWeekEnd),
    });

    currentWeekStart.setDate(currentWeekStart.getDate() + 7);
  }

  return weeksInMonth;
};
export const splitDate = (date: String) => {
  const [day, month, year] = date.split("/").map(Number);

  return { day, month, year };
};

export const getCurrentDate = () => {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Lưu ý: Tháng trong JavaScript bắt đầu từ 0 (tháng 0 là tháng 1)
  const year = today.getFullYear();

  const currentDate = `${day}/${month}/${year}`;
  return currentDate;
};

export const getWeekDates = (year: number, month: number, day: number) => {
  const currentDate = moment(new Date(year, month - 1, day)); // month trong JavaScript là 0-indexed, nên trừ 1
  const startOfWeekDate = currentDate.startOf("isoWeek"); // Tuần bắt đầu từ thứ 2 (monday)

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const currentDate = startOfWeekDate.clone().add(i, "days");
    weekDates.push(currentDate.format("DD/MM/YYYY"));
  }

  return weekDates;
};

export const getDayOfWeek = (dateString: string) => {
  const [day, month, year] = dateString.split("/").map(Number);

  // Tạo một đối tượng Date từ các giá trị trên (lưu ý: tháng trong JavaScript bắt đầu từ 0)
  const dateObject = new Date(year, month - 1, day);

  // Lấy thứ trong tuần (0 = Chủ Nhật, 1 = Thứ 2, ..., 6 = Thứ 7)
  const dayOfWeek = dateObject.getDay();

  // Chuyển đổi thành tên thứ trong tuần (tùy chọn)
  const weekdays = [
    "Chủ Nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];
  const dayName = weekdays[dayOfWeek];

  return dayName; // Hoặc trả về dayOfWeek nếu bạn muốn lấy giá trị số thứ tự thay vì tên thứ
};

export const convertToTimestamp = (dateTimeString: string): Timestamp => {
  const [datePart, timePart] = dateTimeString.split(" ");
  const [day, month, year] = datePart.split("/");
  const [hour, minute, second] = timePart.split(":");

  const dateObj = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second)
  );

  return Timestamp.fromDate(dateObj);
};

export const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};
