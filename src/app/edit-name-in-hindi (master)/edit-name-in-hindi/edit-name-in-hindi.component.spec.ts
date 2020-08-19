import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNameInHindiComponent } from './edit-name-in-hindi.component';

describe('EditNameInHindiComponent', () => {
  let component: EditNameInHindiComponent;
  let fixture: ComponentFixture<EditNameInHindiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNameInHindiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNameInHindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
