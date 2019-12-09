import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EditQuizComponent} from '../../../modals/edit-quiz/edit-quiz.component';
import {MatDialog} from '@angular/material';
import {QuizService} from '../../../service/quiz.service';
import {Quiz} from '../../../models/Quiz';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public qId: number;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public service: QuizService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.qId = params.id;
    });

    this.service.getQuiz(this.qId)
      .subscribe((result: Quiz) => {
        this.service.Quiz = result;
      }).add(() => {
      this.service.spinner = false;
    });
  }

  openEditComponent() {
    this.dialog.open(EditQuizComponent, {width: '900px',
      autoFocus: true,
      data: this.qId
    });
  }

  startQuiz(): boolean {
    if (this.service.Quiz) {
      return this.service.Quiz.question.length !== 0;
    }
  }
}
