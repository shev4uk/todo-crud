import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listTodo: Todo[];
  name;

  constructor(
    private data: TodoService
  ) { }

  ngOnInit() {
    this.data.getAllTodo().subscribe(
      (todo)=> {
        this.listTodo = todo;
      }
    )
  }

  addTodo(name) {
    if(name) {
      let newTodo: Todo = {
        name: name,
        complete: false
      }
      this.data.addTodo(newTodo).subscribe(
        (todo)=> {
          this.listTodo.push(todo);
          this.name = '';
        }
      );
    }
  }

  updateTodo(id, value) {
    this.data.updateTodo(id, value).subscribe()
  }

  deleteTodo(id) {
    this.data.deleteTodo(id).subscribe( _ => {
      this.listTodo = this.listTodo.filter((t) => t.id !== id);
    })
  }
}
