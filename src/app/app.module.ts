import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatGridListModule, MatInputModule, MatListModule, MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SelectComponent } from './quiz/select/select.component';
import { PlayComponent } from './quiz/play/play.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './quiz/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AnswerModalComponent } from './modals/answer-modal/answer-modal.component';
import { EditQuizComponent } from './modals/edit-quiz/edit-quiz.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CreateQuestionComponent } from './modals/create-question/create-question.component';


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
    CreateQuestionComponent
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
  ],
  entryComponents: [
    AnswerModalComponent,
    EditQuizComponent,
    CreateQuestionComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
