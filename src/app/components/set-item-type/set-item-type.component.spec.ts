import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetItemTypeComponent } from './set-item-type.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('SetItemTypeComponent', () => {
  let component: SetItemTypeComponent;
  let fixture: ComponentFixture<SetItemTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetItemTypeComponent ],
      providers: [
        provideMockStore({})
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetItemTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
