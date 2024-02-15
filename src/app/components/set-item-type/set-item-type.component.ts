import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setItem } from '../../actions/set-item-type.actions';
import { ItemTypeEnum } from '../../enums/item-type.enum';

@Component({
  selector: 'app-set-item-type',
  templateUrl: './set-item-type.component.html',
  styleUrls: ['./set-item-type.component.scss']
})
export class SetItemTypeComponent {

  constructor(private store: Store<{ itemType: string }>) {}

  cutlery(): void {
    this.store.dispatch(setItem({ itemType: ItemTypeEnum.CUTLERY }));
  }

  meal(): void {
    this.store.dispatch(setItem({ itemType: ItemTypeEnum.MEAL }))
  }
}
