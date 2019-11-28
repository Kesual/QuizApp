import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQuizModalComponent } from './delete-quiz-modal.component';

describe('DeleteQuizModalComponent', () => {
  let component: DeleteQuizModalComponent;
  let fixture: ComponentFixture<DeleteQuizModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteQuizModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQuizModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
