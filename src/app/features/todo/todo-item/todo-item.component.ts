import {
  Component,
  ElementRef,
  inject,
  input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Todo } from '../../../models/todo.model';
import { AppState } from '../../../store/app.reducer';
import * as actions from '../../../store/todos/todo.actions';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent implements OnInit {
  @ViewChild('inputText') inputText!: ElementRef;

  todo = input.required<Todo>();
  checkCompleted!: FormControl;
  txtInput!: FormControl;
  editing: boolean = false;

  private store: Store<AppState> = inject(Store);

  ngOnInit(): void {
    this.initForm();
  }

  onEdit() {
    this.editing = !this.editing;
    this.txtInput.setValue(this.todo().text);

    setTimeout(() => {
      this.inputText.nativeElement.select();
    }, 1);
  }

  onFinishEditing() {
    this.editing = false;

    if (this.txtInput.invalid || this.txtInput.value === this.todo().text)
      return;

    this.store.dispatch(
      actions.editToDo({ id: this.todo().id, text: this.txtInput.value })
    );
  }

  onDelete() {
    this.store.dispatch(actions.deleteToDo({ id: this.todo().id }));
  }

  private initForm() {
    this.checkCompleted = new FormControl(this.todo().completed);
    this.txtInput = new FormControl(this.todo().text, Validators.required);

    this.checkCompleted.valueChanges.subscribe(() =>
      this.store.dispatch(actions.toggleToDo({ id: this.todo().id }))
    );
  }
}
