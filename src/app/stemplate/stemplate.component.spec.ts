import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StemplateComponent } from './stemplate.component';

describe('StemplateComponent', () => {
  let component: StemplateComponent;
  let fixture: ComponentFixture<StemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
