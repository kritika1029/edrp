import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupLayout } from './setup-layout.component';

describe('SetupLayout', () => {
  let component: SetupLayout;
  let fixture: ComponentFixture<SetupLayout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupLayout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
