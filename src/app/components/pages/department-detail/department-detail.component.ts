import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss'],
})
export class DepartmentDetailComponent implements OnInit {
  todoId: number;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // // tslint:disable-next-line: radix
    // const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.todoId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line: radix
      const id = parseInt(params.get('id'));
      this.todoId = id;
    });
  }

  goPrevious(): any {
    const previousId: number = this.todoId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext(): any {
    const nextId: number = this.todoId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  goToDepartments(): any {
    const selectedId = this.todoId ? this.todoId : null;
    this.router.navigate(['/departments', { id: selectedId }]);
  }
}
