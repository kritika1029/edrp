import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEvaluationLayoutComponent } from './course-evaluation-layout.component';

describe('CourseEvaluationLayoutComponent', () => {
  let component: CourseEvaluationLayoutComponent;
  let fixture: ComponentFixture<CourseEvaluationLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEvaluationLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEvaluationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
