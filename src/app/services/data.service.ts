import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataInterface } from '../interfaces/data.interface';
import { TableItemInterface } from '../interfaces/tableItem.interface';
import { Store } from '@ngrx/store';
import { setTable } from '../actions/set-table.actions';

@Injectable({
  providedIn: 'root'
})// TODO service should be used by ngrx effects
export class DataService {
  private meals: BehaviorSubject<TableItemInterface[]> = new BehaviorSubject<TableItemInterface[]>([]);
  private tableWares: BehaviorSubject<TableItemInterface[]> = new BehaviorSubject<TableItemInterface[]>([]);

  constructor(private http: HttpClient, private store: Store) {
    this.http.get<DataInterface>('./assets/conf/table.json')
      .subscribe(d => {

        this.store.dispatch(setTable({ table: d.tables[0] }))

        this.meals.next(d.meals);
        this.tableWares.next(d.tableWares);
      });
  }

  public getMeals(): Observable<TableItemInterface[]> {
    return this.meals.asObservable();
  }

  public getTableWares(): Observable<TableItemInterface[]> {
    return this.tableWares.asObservable();
  }
}
