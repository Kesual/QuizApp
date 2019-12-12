import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material';
import {CreateQuestionComponent} from '../create-question/create-question.component';
import {DeleteQuizModalComponent} from '../delete-quiz-modal/delete-quiz-modal.component';
import {QuizService} from '../../service/quiz.service';
import {EditQuestionComponent} from '../edit-question/edit-question.component';
import {Question} from '../../models/Question';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.sass']
})
export class EditQuizComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public service: QuizService,
  ) {
  }

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  openCreateQuestion() {
    this.dialog.open(CreateQuestionComponent, {
      width: '600px',
      autoFocus: false,
      data: {
        quizId: this.service.Quiz.id
      },
    });
  }

  openDeleteQuiz() {
    this.dialog.open(DeleteQuizModalComponent, {
      width: '300px',
      autoFocus: false,
      data: this.service.Quiz.id,
    });
  }

  changeCol(n: number) {
    const div = document.getElementById(String(n));
    div.style.backgroundColor = 'rgb(98, 99, 99)';
  }

  changeBack(n: number) {
    const div = document.getElementById(String(n));
    div.style.backgroundColor = '';
  }

  openEditQuestion(q: Question) {
    this.dialog.open(CreateQuestionComponent, {
      width: '600px',
      autoFocus: false,
      data: {
        quizId: this.service.Quiz.id,
        question: q,
      }
    });
  }
}
