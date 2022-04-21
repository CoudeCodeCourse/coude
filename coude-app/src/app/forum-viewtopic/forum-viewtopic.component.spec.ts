import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumViewtopicComponent } from './forum-viewtopic.component';

describe('ForumViewtopicComponent', () => {
  let component: ForumViewtopicComponent;
  let fixture: ComponentFixture<ForumViewtopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumViewtopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumViewtopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
