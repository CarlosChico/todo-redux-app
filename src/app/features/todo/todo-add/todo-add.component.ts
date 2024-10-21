import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
//NgRx
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import * as actions from '../../../store/todos/todo.actions';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss',
})
export class TodoAddComponent {
  textInput!: FormControl;

  private store: Store<AppState> = inject(Store);

  constructor() {
    this.initForm();
  }

  add() {
    if (this.textInput.invalid) return;

    this.store.dispatch(actions.createToDo({ text: this.textInput.value }));
    this.textInput.reset();
  }

  private initForm() {
    this.textInput = new FormControl('', Validators.required);
  }
}
