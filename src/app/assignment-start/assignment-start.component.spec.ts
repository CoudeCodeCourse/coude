import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentStartComponent } from './assignment-start.component';

describe('AssignmentStartComponent', () => {
  let component: AssignmentStartComponent;
  let fixture: ComponentFixture<AssignmentStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
