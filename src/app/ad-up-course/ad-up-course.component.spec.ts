import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdUpCourseComponent } from './ad-up-course.component';

describe('AdUpCourseComponent', () => {
  let component: AdUpCourseComponent;
  let fixture: ComponentFixture<AdUpCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdUpCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdUpCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
