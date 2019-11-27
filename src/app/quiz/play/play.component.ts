import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Quiz} from '../../models/Quiz';
import {Question} from '../../models/Question';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {AnswerModalComponent} from '../../modals/answer-modal/answer-modal.component';
import {EndOfQuizModalComponent} from '../../modals/end-of-quiz-modal/end-of-quiz-modal.component';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.sass']
})
export class PlayComponent implements OnInit {

  baseUrl = environment.baseUrl;
  api = '/quiz/';
  qId;
  quiz: Quiz;
  questionArray: Array<Question>;
  c: Question;
  answerField = new FormControl('', Validators.required);
  nextQuestion = true;
  public points = 0;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.qId = params.id;
    });

    this.getQuestions().subscribe((r: Quiz) => {
      this.quiz = r;

      this.questionArray = r.question;
    }).add(() => {
      this.displayQuestion();
      }
    );
  }

  getQuestions(): Observable<Quiz> {
    return this.http.get<Quiz>(this.baseUrl + this.api + this.qId);
  }

  check() {
    if (this.answerField.value === this.c.answer[0].value) {
      this.dialog.open(AnswerModalComponent, {
        width: '400px',
        data: {answer: this.c.answer[0].value, result: 'Richtig'}
      });
      this.points += 1;
    } else {
      this.dialog.open(AnswerModalComponent, {
        width: '400px',
        data: {answer: this.c.answer[0].value, result: 'Falsch'}
      });
    }
    this.nextQuestion = true;
  }

  displayQuestion() {

    if (this.quiz.question.length === 0) {
      this.endOfQuiz();
    } else {
      const rand = Math.floor(Math.random() * this.questionArray.length);
      this.c = this.questionArray[rand];
      this.questionArray.splice(rand, 1);
      this.nextQuestion = false;
    }
  }

  endOfQuiz() {
    this.nextQuestion = false;
    this.dialog.open(EndOfQuizModalComponent, {
      data: {points: this.points}, disableClose: true
    });
  }
}
