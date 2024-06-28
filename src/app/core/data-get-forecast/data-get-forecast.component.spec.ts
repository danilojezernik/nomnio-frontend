import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGetForecastComponent } from './data-get-forecast.component';

describe('DataGetForecastComponent', () => {
  let component: DataGetForecastComponent;
  let fixture: ComponentFixture<DataGetForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DataGetForecastComponent]
    });
    fixture = TestBed.createComponent(DataGetForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
