import { Component, OnInit } from '@angular/core';
import {Question} from '../../../models/Question';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {AnswerModalComponent} from '../../../modals/answer-modal/answer-modal.component';
import {EndOfQuizModalComponent} from '../../../modals/end-of-quiz-modal/end-of-quiz-modal.component';
import {QuizService} from '../../../service/quiz.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.sass']
})
export class PlayComponent implements OnInit {

  questionArray: Array<Question>;
  question: Question;
  answerField = new FormControl('', Validators.required);
  nextQuestion = true;
  public points = 0;

  constructor(
    public service: QuizService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.questionArray = this.service.quiz.question;
    this.displayQuestion();
  }

  check() {
    if (this.answerField.value === this.question.answer[0].value) {
      this.dialog.open(AnswerModalComponent, {
        width: '400px',
        data: {answer: this.question.answer[0].value, result: 'Richtig'}
      });
      this.points += 1;
    } else {
      this.dialog.open(AnswerModalComponent, {
        width: '400px',
        data: {answer: this.question.answer[0].value, result: 'Falsch'}
      });
    }
    this.nextQuestion = true;
  }

  displayQuestion() {

    if (this.service.quiz.question.length === 0) {
      this.endOfQuiz();
    } else {
      const rand = Math.floor(Math.random() * this.questionArray.length);
      this.question = this.questionArray[rand];
      this.questionArray.splice(rand, 1);
      this.nextQuestion = false;
    }
  }

  endOfQuiz() {
    this.nextQuestion = false;
    this.dialog.open(EndOfQuizModalComponent, {
      width: '500px',
      data: {points: this.points}, disableClose: true
    });
  }
}
