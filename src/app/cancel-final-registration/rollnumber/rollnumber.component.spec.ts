import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollnumberComponent } from './rollnumber.component';

describe('RollnumberComponent', () => {
  let component: RollnumberComponent;
  let fixture: ComponentFixture<RollnumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollnumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
