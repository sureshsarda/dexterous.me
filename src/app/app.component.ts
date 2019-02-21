import { TodoService } from './core/service/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'todo';

    constructor(private todo: TodoService) { }

    ngOnInit() {
        this.todo.lists('suresh')
        this.todo.addTask('suresh', 'today', 'Sample Task')
        this.todo.getLists('suresh')
    }

}
