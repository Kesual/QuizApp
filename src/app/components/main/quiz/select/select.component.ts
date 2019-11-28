import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {Quiz} from '../../../models/Quiz';
import {Observable} from 'rxjs';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent implements OnInit {

  baseUrl = environment.baseUrl;
  api = '/quiz';
  quiz: Quiz[];
  select = new FormControl('', Validators.required);

  constructor(
    private http: HttpClient,
) { }

  ngOnInit() {
    this.getQuizes().subscribe((r: Quiz[]) => {
      this.quiz = r;
    });
  }

  getQuizes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.baseUrl + this.api);
  }

  getErrorMessage() {
    return this.select.hasError('required') ? 'Du musst ein Quiz aussuchen' : '';
  }
}
