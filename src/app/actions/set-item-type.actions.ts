import { createAction, props } from '@ngrx/store';

const componentName: string = 'Set Item Type Component';

export const setItem = createAction(`[${componentName}] Set item`, props<{ itemType: string }>());
export const reset = createAction(`[${componentName}] Reset`);
