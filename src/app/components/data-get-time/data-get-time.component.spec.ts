import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGetTimeComponent } from './data-get-time.component';

describe('DataGetTimeComponent', () => {
  let component: DataGetTimeComponent;
  let fixture: ComponentFixture<DataGetTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DataGetTimeComponent]
    });
    fixture = TestBed.createComponent(DataGetTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
