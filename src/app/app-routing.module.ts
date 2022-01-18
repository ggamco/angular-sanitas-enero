import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAComponent } from './navigation/view-a/view-a.component';
import { ViewBComponent } from './navigation/view-b/view-b.component';

const routes: Routes = [
  {path: 'view/a', component: ViewAComponent},
  {path: 'view/b', component: ViewBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
