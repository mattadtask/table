import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseItemForSlotComponent } from './choose-item-for-slot.component';

describe('ChooseItemForSlotComponent', () => {
  let component: ChooseItemForSlotComponent;
  let fixture: ComponentFixture<ChooseItemForSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseItemForSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseItemForSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
