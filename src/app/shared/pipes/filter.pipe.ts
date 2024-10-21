import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { Filter } from '../../types/filter.type';

@Pipe({
  name: 'filterTodo',
  standalone: true,
})
export class FilterTodoPipe implements PipeTransform {
  transform(todos: Todo[], filter: Filter): Todo[] {
    switch (filter) {
      case 'COMPLETED':
        return todos.filter((todo) => todo.completed);
      case 'PENDING':
        return todos.filter((todo) => !todo.completed);
      case 'ALL':
        return todos;
    }
  }
}
