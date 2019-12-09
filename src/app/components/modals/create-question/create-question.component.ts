import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';
import {QuestionType} from '../../models/QuestionType';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Outcome} from '../../models/Outcome';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuizService} from '../../service/quiz.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.sass']
})
export class CreateQuestionComponent implements OnInit {

  private baseUrl = environment.baseUrl;
  private apiAT = '/questiontype/';
  private apiOut = '/outcome/';
  private apiQuest = '/question';
  public questionTypes: QuestionType[];
  public outcomes: Outcome[];
  public questionForm: FormGroup;
  public answerCounter = 1;

  constructor(
    public dialogRef: MatDialogRef<CreateQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private fb: FormBuilder,
    private service: QuizService,
  ) { }

  ngOnInit() {
    this.getAnswerTypes().subscribe((r: QuestionType[]) => {
      this.questionTypes = r;
    });

    this.getOutcomes().subscribe((r: Outcome[]) => {
      this.outcomes = r;
    });

    this.questionForm = this.fb.group({
      question: ['', [Validators.required]],
      type: ['', [Validators.required]],
      answers: this.fb.array([
        this.answer
      ]),
    });
  }

  get answers(): FormArray {
    return this.questionForm.get('answers') as FormArray;
  }

  get answer(): FormGroup {
    return this.fb.group({
      answer: ['', [Validators.required]],
      outcome: ['', [Validators.required]]
    });
  }

  addAnswer() {
    this.answers.push(this.answer);
    this.answerCounter += 1;
  }

  removeAnswer(i: number) {
    this.answers.removeAt(i);
    this.answerCounter -= 1;
  }

  maxAnswers(): boolean {
    return this.answerCounter <= 3;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getAnswerTypes(): Observable<QuestionType[]> {
    return this.http.get<QuestionType[]>(this.baseUrl + this.apiAT);
  }

  getOutcomes(): Observable<Outcome[]> {
    return this.http.get<Outcome[]>(this.baseUrl + this.apiOut);
  }

  create() {
      this.http.post(this.baseUrl + this.apiQuest, {data: this.questionForm.value, id: this.data})
        .subscribe(
          data => {
            console.log('success', data);
          },
          error => console.log('oops', error)).add(() => {
        this.service.getQuiz(this.service.Quiz.id);
        this.onNoClick();
      });
  }
}
