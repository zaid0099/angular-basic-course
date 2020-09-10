import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';
import { AddTodoComponent } from './components/todos/add-todo/add-todo.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FormsModule } from '@angular/forms';
import { DepartmentDetailComponent } from './components/pages/department-detail/department-detail.component';
import { DepartmentListComponent } from './components/pages/department-list/department-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    AddTodoComponent,
    HeaderComponent,
    routingComponents,
    DepartmentDetailComponent,
    DepartmentListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
