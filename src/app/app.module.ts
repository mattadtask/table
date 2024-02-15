import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TableSlotComponent } from './components/table-slot/table-slot.component';
import { NgOptimizedImage } from '@angular/common';
import { ImgLazyLoaderDirective } from './directives/img-lazy-loader.directive';
import { reducers } from './reducers/reducers';
import { SetItemTypeComponent } from './components/set-item-type/set-item-type.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ChooseItemForSlotComponent } from './components/choose-item-for-slot/choose-item-for-slot.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgLazyLoaderDirective,
    TableSlotComponent,
    SetItemTypeComponent,
    ChooseItemForSlotComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    NgOptimizedImage,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
