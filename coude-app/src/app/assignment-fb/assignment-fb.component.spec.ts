import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentFbComponent } from './assignment-fb.component';

describe('AssignmentFbComponent', () => {
  let component: AssignmentFbComponent;
  let fixture: ComponentFixture<AssignmentFbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentFbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
