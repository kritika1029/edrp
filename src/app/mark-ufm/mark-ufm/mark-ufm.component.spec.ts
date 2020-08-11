import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkUfmComponent } from './mark-ufm.component';

describe('MarkUfmComponent', () => {
  let component: MarkUfmComponent;
  let fixture: ComponentFixture<MarkUfmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkUfmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkUfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
