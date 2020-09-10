import { Todo } from './../../../models/Todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() tod0: Todo;
  @Output() deleteTod0: EventEmitter<Todo> = new EventEmitter();
  selectedId: number;
  constructor(
    private ts: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line: radix
      const id = parseInt(params.get('id'));
      this.selectedId = id;
      console.log();
    });
  }

  // Set Dynamic Classes
  setClasses(): any {
    const classes = {
      todo: true,
      'is-complete': this.tod0.completed,
    };
    return classes;
  }

  // Toggle Todo
  onToggle(todo): void {
    todo.completed = !todo.completed;
    this.ts.toggleCompleted(todo).subscribe((todo0) => console.log(todo0));
  }
  onDelete(tod0): void {
    this.deleteTod0.emit(tod0);
  }

  onSelect(department): void {
    this.router.navigate(['/departments', department.id]);
    console.table(this.tod0);
  }

  isSelected(department): any {
    return department.id === this.selectedId;
  }
}
