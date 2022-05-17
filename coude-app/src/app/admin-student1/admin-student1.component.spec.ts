import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudent1Component } from './admin-student1.component';

describe('AdminStudent1Component', () => {
  let component: AdminStudent1Component;
  let fixture: ComponentFixture<AdminStudent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStudent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
