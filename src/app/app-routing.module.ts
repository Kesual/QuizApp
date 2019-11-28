import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectComponent} from './components/main/quiz/select/select.component';
import {MainComponent} from './components/main/main.component';
import {DashboardComponent} from './components/main/quiz/dashboard/dashboard.component';
import {PlayComponent} from './components/main/quiz/play/play.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'select', component: SelectComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'play', component: PlayComponent },
  { path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
