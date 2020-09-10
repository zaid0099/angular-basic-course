import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { TodosComponent } from './components/todos/todos.component';
import { PageNotFoundComponent } from './components/layout/page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './components/pages/department-detail/department-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', component: TodosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'departments', component: TodosComponent },
  { path: 'departments/:id', component: DepartmentDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  TodosComponent,
  AboutComponent,
  PageNotFoundComponent,
  DepartmentDetailComponent,
];
