import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './core/footer/footer.component';
import { TodoPageComponent } from './features/todo/todo-page/todo-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, TodoPageComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
