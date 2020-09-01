import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarLayoutComponent } from './menubar-layout.component';

describe('MenubarLayoutComponent', () => {
  let component: MenubarLayoutComponent;
  let fixture: ComponentFixture<MenubarLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenubarLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
