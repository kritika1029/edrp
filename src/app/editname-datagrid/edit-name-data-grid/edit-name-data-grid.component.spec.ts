import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNameDataGridComponent } from './edit-name-data-grid.component';

describe('EditNameDataGridComponent', () => {
  let component: EditNameDataGridComponent;
  let fixture: ComponentFixture<EditNameDataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNameDataGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNameDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
