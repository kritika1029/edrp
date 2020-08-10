import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropadddetailComponent } from './dropadddetail.component';

describe('DropadddetailComponent', () => {
  let component: DropadddetailComponent;
  let fixture: ComponentFixture<DropadddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropadddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropadddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
