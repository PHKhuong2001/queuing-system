import { ITimestamp } from "./index";
export interface IActivity {
  key?: number;
  IP?: string;
  account?: string;
  executionTime?: string | ITimestamp;
  operations?: string;
}

export interface InitialStateActivity<T> {
  dataListActivity: T[];
}
