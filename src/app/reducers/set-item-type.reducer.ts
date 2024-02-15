import { ActionReducer, createReducer, on } from '@ngrx/store';
import { ItemTypeEnum } from '../enums/item-type.enum';
import { setItem, reset } from '../actions/set-item-type.actions';

const initialState: string = ItemTypeEnum.CUTLERY;

export const itemType: ActionReducer<string> = createReducer(
  initialState,
  on(setItem, (state, { itemType }) => itemType),
  on(reset, () => ItemTypeEnum.CUTLERY)
);
