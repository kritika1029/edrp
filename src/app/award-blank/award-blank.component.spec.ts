import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardBlankComponent } from './award-blank.component';

describe('AwardBlankComponent', () => {
  let component: AwardBlankComponent;
  let fixture: ComponentFixture<AwardBlankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardBlankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
