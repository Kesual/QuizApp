import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-end-of-quiz-modal',
  templateUrl: './end-of-quiz-modal.component.html',
  styleUrls: ['./end-of-quiz-modal.component.sass']
})
export class EndOfQuizModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<EndOfQuizModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
