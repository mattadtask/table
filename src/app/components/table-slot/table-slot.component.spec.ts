import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSlotComponent } from './table-slot.component';

describe('TableSlotComponent', () => {
  let component: TableSlotComponent;
  let fixture: ComponentFixture<TableSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
