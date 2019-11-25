import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quiz} from '../../models/Quiz';
import {environment} from '../../../environments/environment';
import {CreateQuestionComponent} from '../create-question/create-question.component';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.sass']
})
export class EditQuizComponent implements OnInit {

  private baseUrl = environment.baseUrl;
  private api = '/quiz/';
  public quiz: Quiz;

  constructor(
    public dialogRef: MatDialogRef<EditQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getQuiz().subscribe((r: Quiz) => {
      this.quiz = r;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getQuiz(): Observable<Quiz> {
    return this.http.get<Quiz>(this.baseUrl + this.api + this.data.id);
  }

  openCreateQuestion() {
    this.dialog.open(CreateQuestionComponent, {width: '600px',
      autoFocus: false,
      data: {id: this.quiz.id}});
  }
}
