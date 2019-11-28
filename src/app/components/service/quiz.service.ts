import { Injectable } from '@angular/core';
import {Quiz} from '../models/Quiz';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  public spinner = false;
  private baseUrl = environment.baseUrl;
  private api = '/quiz';
  public quiz: Quiz;

  constructor(
    private http: HttpClient,
  ) { }

  getQuiz(qId: number): void {
    this.spinner = true;

    this.http.get<Quiz>(this.baseUrl + this.api + '/' + qId)
      .subscribe((result: Quiz) => {
        this.quiz = result;
      }).add(() => {
        this.spinner = false;
    });
  }
}
