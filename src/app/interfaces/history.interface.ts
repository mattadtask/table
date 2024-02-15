export interface HistoryInterface<T> {
  past: Array<T>;
  present: T;
  future: Array<T>;
}
