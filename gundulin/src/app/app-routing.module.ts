import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MysticValeCounterComponent } from './mystic-vale-counter/mystic-vale-counter.component';

const routes: Routes = [
  { 
    path: 'mystic-vale-counter', component: MysticValeCounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
