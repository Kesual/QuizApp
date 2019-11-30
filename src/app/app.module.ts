import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule, MatTreeModule
} from '@angular/material';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectComponent } from './components/main/quiz/select/select.component';
import { PlayComponent } from './components/main/quiz/play/play.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/main/quiz/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AnswerModalComponent } from './components/modals/answer-modal/answer-modal.component';
import { EditQuizComponent } from './components/modals/edit-quiz/edit-quiz.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CreateQuestionComponent } from './components/modals/create-question/create-question.component';
import { EndOfQuizModalComponent } from './components/modals/end-of-quiz-modal/end-of-quiz-modal.component';
import { AddQuizModalComponent } from './components/modals/add-quiz-modal/add-quiz-modal.component';
import { DeleteQuizModalComponent } from './components/modals/delete-quiz-modal/delete-quiz-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SelectComponent,
    PlayComponent,
    MainComponent,
    DashboardComponent,
    AnswerModalComponent,
    EditQuizComponent,
    CreateQuestionComponent,
    EndOfQuizModalComponent,
    AddQuizModalComponent,
    DeleteQuizModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatTableModule,
    MatCardModule,
    MatSidenavModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    ScrollingModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTreeModule,
    MatIconModule,
  ],
  entryComponents: [
    AnswerModalComponent,
    EditQuizComponent,
    CreateQuestionComponent,
    EndOfQuizModalComponent,
    AddQuizModalComponent,
    DeleteQuizModalComponent,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
