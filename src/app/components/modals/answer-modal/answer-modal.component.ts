import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface ModalData {
  answer;
  result;
}

@Component({
  selector: 'app-answer-modal',
  templateUrl: './answer-modal.component.html',
  styleUrls: ['./answer-modal.component.sass']
})
export class AnswerModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AnswerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
