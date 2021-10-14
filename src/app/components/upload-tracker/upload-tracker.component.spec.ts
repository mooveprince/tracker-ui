import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTrackerComponent } from './upload-tracker.component';

describe('UploadTrackerComponent', () => {
  let component: UploadTrackerComponent;
  let fixture: ComponentFixture<UploadTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
