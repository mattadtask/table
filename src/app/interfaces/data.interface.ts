import { TableInterface } from './table.interface';
import { TableItemInterface } from './tableItem.interface';

export interface DataInterface {
  tables: Array<TableInterface>,
  tableWares: Array<TableItemInterface>,
  meals: Array<TableItemInterface>,
}

