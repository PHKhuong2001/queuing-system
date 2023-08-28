export interface IActivity {
  key?: number;
  IP?: string;
  account?: string;
  executionTime?: string;
  operations?: string;
}

export interface InitialStateActivity<T> {
  dataListActivity: T[];
}
