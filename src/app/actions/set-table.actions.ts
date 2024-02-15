import { createAction, props } from '@ngrx/store';
import { TableInterface } from '../interfaces/table.interface';


export const setTable = createAction(`Set table`, props<{ table: TableInterface }>());
export const back = createAction(`Go back`);
export const next = createAction(`Go next`);
