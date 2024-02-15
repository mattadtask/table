import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-slot',
  templateUrl: './table-slot.component.html',
  styleUrls: ['./table-slot.component.scss']
})
export class TableSlotComponent {
  @Input()
  public imgSrc: string = '';
  @Input()
  public active: boolean = true;
}
