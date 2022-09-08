import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

class Todo {
  constructor(public id: number, public description: string, public finished: boolean = false){}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'todo';
  newTodo = new FormControl('');
  todos: Todo[] = [];

  get unfinishedTodos() {
    return this.todos.filter(t => !t.finished);
  }

  get finishedTodos() {
    return this.todos.filter(t => t.finished);
  }
  
  onTodoSubmit = () => {
    this.todos.push(new Todo(this.todos.length, this.newTodo.value, false));
    this.newTodo.setValue('');
  }

  finishTodo = (todo: Todo) => {
    todo.finished = true;
  }
}
