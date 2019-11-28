import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-delete-quiz-modal',
  templateUrl: './delete-quiz-modal.component.html',
  styleUrls: ['./delete-quiz-modal.component.sass']
})
export class DeleteQuizModalComponent implements OnInit {

  private baseUrl = environment.baseUrl;
  private api = '/quiz';

  constructor(
    private dialogRef: MatDialogRef<DeleteQuizModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private allDialogs: MatDialog,
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete(): void {
    this.http.delete(this.baseUrl + this.api + '/' + this.data)
      .subscribe(
        data => {
          console.log('success', data);
        },
        error => console.log('oops', error)).add(() => {
      this.allDialogs.closeAll();
    });
  }
}
