import { DimensionsInterface } from './dimensions.interface';
import { PositionInterface } from './position.interface';

export interface TableItemInterface extends DimensionsInterface, PositionInterface {
  url?: string;
  itemType?: string;
}
