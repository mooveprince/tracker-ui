import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrackerComponent } from './add-tracker.component';

describe('AddTrackerComponent', () => {
  let component: AddTrackerComponent;
  let fixture: ComponentFixture<AddTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
