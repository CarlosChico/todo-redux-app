import { Component, inject } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { FooterComponent } from '../../../core/footer/footer.component';
import { TodoFooterComponent } from '../todo-footer/todo-footer.component';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import * as actions from '../../../store/todos/todo.actions';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [
    FooterComponent,
    TodoAddComponent,
    TodoFooterComponent,
    TodoListComponent,
  ],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent {
  completed = false;

  private store: Store<AppState> = inject(Store);

  onToggleAll() {
    this.completed = !this.completed;
    this.store.dispatch(actions.toggleAllToDos({ check: this.completed }));
  }
}
