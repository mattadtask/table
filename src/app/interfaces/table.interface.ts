import { DimensionsInterface } from './dimensions.interface';
import { TableItemInterface } from './tableItem.interface';

export interface TableInterface {
  url: string,
  size: DimensionsInterface,
  sits: Array<TableItemInterface>,
  meals: Array<TableItemInterface>
}

