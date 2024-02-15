import { ActionReducer, createReducer, on } from '@ngrx/store';
import { TableInterface } from '../interfaces/table.interface';
import { HistoryInterface } from '../interfaces/history.interface';
import { back, next, setTable } from '../actions/set-table.actions';

const initialState: TableInterface = {} as TableInterface;

let appHistory: HistoryInterface<TableInterface> = {
  past: [],
  present: initialState,
  future: []
}// TODO MECHANISM FOR disallowing cloning history by spamming buttons
export const table: ActionReducer<TableInterface> = createReducer(
  initialState,
  on(back, () => {
    const back = appHistory.past.pop() as TableInterface;
    appHistory = {
      past: appHistory.past,
      present: back,
      future: [appHistory.present, ...appHistory.future]
    }
    return back;
  }),
  on(next, () => {
    const next = appHistory.future[0];
    appHistory = {
      past: [...appHistory.past, appHistory.present],
      present: next,
      future: appHistory.future.slice(1)
    }
    return next;
  }),
  on(setTable, (state, { table }) => {
    appHistory = {
      past: [...appHistory.past, appHistory.present ],
      present: table,
      future: []
    }
    return table;
  })
);
