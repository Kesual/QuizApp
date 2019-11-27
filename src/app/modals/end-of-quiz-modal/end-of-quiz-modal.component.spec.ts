import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfQuizModalComponent } from './end-of-quiz-modal.component';

describe('EndOfQuizModalComponent', () => {
  let component: EndOfQuizModalComponent;
  let fixture: ComponentFixture<EndOfQuizModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndOfQuizModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOfQuizModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
