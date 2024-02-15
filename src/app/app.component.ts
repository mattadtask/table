import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DataService } from './services/data.service';
import { TableInterface } from './interfaces/table.interface';
import { TableItemInterface } from './interfaces/tableItem.interface';
import { ItemTypeEnum } from './enums/item-type.enum';
import { next, back, setTable } from './actions/set-table.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private subs: Array<Subscription> = [];

  public itemType: string = '';
  public table?: TableInterface;
  public itemTypes = ItemTypeEnum;
  public meals: Array<TableItemInterface> = [];
  public tableWares: Array<TableItemInterface> = [];
  public currentSlot?: TableItemInterface;

  constructor(private store: Store<{ itemType: string, table: TableInterface }>, private data: DataService) {

    this.subs.push(this.store.select('itemType').subscribe(itemType => {
      this.itemType = itemType;
      this.currentSlot = undefined;
    }));
    this.subs.push(this.store.select('table').subscribe(table => {
      if (table?.url) {
        this.table = JSON.parse(JSON.stringify(table));
      }
    }));
    this.subs.push(this.data.getMeals().subscribe(meals => {
      this.meals = meals;
    }));
    this.subs.push(this.data.getTableWares().subscribe(tableWares => {
      this.tableWares = tableWares;
    }));
  }

  public setSlot(slot: TableItemInterface): void {
    this.currentSlot = slot;
    this.currentSlot.itemType = this.itemType;
  }

  public selectItemForSlot(s: string): void {// @ts-ignore can fire only when currentSlot is set
    this.currentSlot.url = s;
    this.store.dispatch(setTable({ table: this.table as TableInterface }));
    this.currentSlot = undefined;
  }

  public back(): void {
    this.store.dispatch(back());
  }
  public next(): void {
    this.store.dispatch(next());
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}
