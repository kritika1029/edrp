import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridssComponent } from './gridss.component';

describe('GridssComponent', () => {
  let component: GridssComponent;
  let fixture: ComponentFixture<GridssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
