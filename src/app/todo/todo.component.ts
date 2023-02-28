import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  title: string;
  todoItem: string = '';
  todoItems: Array<Item> = [];
  searchInput: string = '';
  searchOutput: Array<Item> = [];
  finishedItems: Array<Item> = [];

  constructor() {}

  ngOnInit() {
    this.title = 'Todo';
  }

  addTodo() {
    if (this.todoItem) {
      console.log('TODO is : ' + this.todoItem);
      this.todoItems.push( { description: this.todoItem, done:false });
      this.todoItem = '';
    }
  }
  removeTodo(todo: String) {
    console.log('Removed: ' + todo);
    this.todoItems = this.todoItems.filter((item) => item.description !== todo);
  }

  CompletelyRemoveTodo(todo: String) {
    console.log('Removed: ' + todo);
    this.finishedItems = this.finishedItems.filter((item) => item.description !== todo);
  }

  completeTodo(todo: string) {
    console.log('Finished: ' + todo);
    this.finishedItems.push( { description : todo, done:true } );

    this.todoItems = this.todoItems.filter((item) => item.description !== todo);
  }

  findTodo(todo: string): Item {
    return this.todoItems.find((item) => item.description === todo);
  }

  logMe(todo: String) {
    console.log('TODO is : ' + todo);
  }

  searchItem(): void {
    //let temp : Array<string> = ['', ''];

    this.searchOutput = this.todoItems.filter((item) =>
      item.description.toLocaleLowerCase().includes(this.searchInput)
    );

    console.log('Temp: ' + this.searchOutput);

    //return temp
  }
}
