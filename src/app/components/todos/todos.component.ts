import { Local } from './../../models/Local';
import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localy: Local[];

  constructor(private ts: TodoService) {}

  ngOnInit(): void {
    this.ts.getTodos().subscribe((todo) => {
      this.todos = todo;
    });
    this.ts.getLocaly().subscribe((data) => {
      this.localy = data;
      console.table(data);
    });
    // this.localy = this.ts.getLocaly();
  }
  // deleteTodo(todo: Todo): void {
  //   console.log(todo);
  // }

  deleteTodo(todo: Todo): void {
    // Remove From UI
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    // Remove From Server
    this.ts.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo): void {
    this.ts.addTodo(todo).subscribe((tod0) => {
      // const tod00 = {
      //   id: tod0.id + 1,
      //   title: tod0.title,
      //   completed: tod0.completed,
      // };
      this.todos.push(tod0);
      // console.table(tod0);
    });
  }
}
