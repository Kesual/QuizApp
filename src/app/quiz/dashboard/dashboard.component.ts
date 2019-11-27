import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Quiz} from '../../models/Quiz';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AnswerModalComponent} from '../../modals/answer-modal/answer-modal.component';
import {EditQuizComponent} from '../../modals/edit-quiz/edit-quiz.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  baseUrl = environment.baseUrl;
  api = '/quiz/';
  qId;
  quiz: Quiz;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.qId = params.id;
    });

    this.getQuizbyId().subscribe((r: Quiz) => {
      this.quiz = r;
    });
  }

  getQuizbyId(): Observable<Quiz> {
    return this.http.get<Quiz>(this.baseUrl + this.api + this.qId);
  }

  openEditComponent() {
    this.dialog.open(EditQuizComponent, {width: '900px',
      autoFocus: true,
      data: {id: this.qId}});
  }

  startQuiz() {
    return this.quiz.question.length === 0;
  }
}
