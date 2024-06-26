import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGetTempComponent } from './data-get-temp.component';

describe('DataGetTempComponent', () => {
  let component: DataGetTempComponent;
  let fixture: ComponentFixture<DataGetTempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DataGetTempComponent]
    });
    fixture = TestBed.createComponent(DataGetTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
