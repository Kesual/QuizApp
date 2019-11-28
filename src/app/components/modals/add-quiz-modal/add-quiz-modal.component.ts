import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-add-quiz-modal',
  templateUrl: './add-quiz-modal.component.html',
  styleUrls: ['./add-quiz-modal.component.sass']
})
export class AddQuizModalComponent implements OnInit {

  public newQuizForm: FormGroup;
  private baseUrl = environment.baseUrl;
  private api = '/quiz';

  constructor(
    private dialogRef: MatDialogRef<AddQuizModalComponent>,
    private http: HttpClient,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.newQuizForm = this.fb.group({
      quiz: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.http.post(this.baseUrl + this.api, {data: this.newQuizForm.value})
      .subscribe(
        data => {
          console.log('success', data);
        },
        error => console.log('oops', error)).add(() => {
      this.onNoClick();
    });
  }
}
