import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableItemInterface } from '../../interfaces/tableItem.interface';

@Component({
  selector: 'app-choose-item-for-slot',
  templateUrl: './choose-item-for-slot.component.html',
  styleUrls: ['./choose-item-for-slot.component.scss']
})
export class ChooseItemForSlotComponent {
  @Output() selectedUrl = new EventEmitter<string>();
  @Input() public items: Array<TableItemInterface> = [];

  public choose(url?: string): void {
    this.selectedUrl.emit(url);
  }
}
