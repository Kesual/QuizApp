import { Injectable } from '@angular/core';
import {Quiz} from '../models/Quiz';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  public spinner = false;
  private baseUrl = environment.baseUrl;
  private api = '/quiz';
  private quiz: Quiz;

  constructor(
    private http: HttpClient,
  ) { }

  get Quiz() {
    return this.quiz;
  }

  set Quiz(q: Quiz) {
    this.quiz = q;
  }

  getQuiz(qId: number) {
    this.spinner = true;
    this.http.get<Quiz>(this.baseUrl + this.api + '/' + qId)
      .subscribe((r: Quiz) => {
        this.Quiz = r;
      })
      .add(() => {
        this.spinner = false;
      });
  }
}
