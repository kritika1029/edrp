import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Finalreg2Component } from './Finalreg2.component';

describe('Finalreg2Component', () => {
  let component: Finalreg2Component;
  let fixture: ComponentFixture<Finalreg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Finalreg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Finalreg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
