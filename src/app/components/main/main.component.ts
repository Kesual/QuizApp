import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddQuizModalComponent} from '../../modals/add-quiz-modal/add-quiz-modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openCreateModal() {
    this.dialog.open(AddQuizModalComponent, {
      width: '600px'
    });
  }

}
