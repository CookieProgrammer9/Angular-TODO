import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  title: string;
  todoItem: string = '';
  todoItems: Array<string> = [];
  searchInput: string = '';
  searchOutput: Array<string> = [];
  finishedItems: Array<string> = [];

  constructor() {}

  ngOnInit() {
    this.title = 'Todo';
  }

  addTodo() {
    if (this.todoItem) {
      console.log('TODO is : ' + this.todoItem);
      this.todoItems.push(this.todoItem);
      this.todoItem = '';
    }
  }
  removeTodo(todo: String) {
    console.log('Removed: ' + todo);
    this.todoItems = this.todoItems.filter((item) => item !== todo);
  }

  completeTodo(todo: string) {
    console.log('Finished: ' + todo);
    this.finishedItems.push(todo);
    this.todoItems = this.todoItems.filter((item) => item !== todo);
  }

  findTodo(todo: string): string {
    return this.todoItems.find((item) => item === todo);
  }

  logMe(todo: String) {
    console.log('TODO is : ' + todo);
  }

  searchItem(): void {
    //let temp : Array<string> = ['', ''];

    this.searchOutput = this.todoItems.filter((item) =>
      item.toLocaleLowerCase().includes(this.searchInput)
    );

    console.log('Temp: ' + this.searchOutput);

    //return temp
  }
}
