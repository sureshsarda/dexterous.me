import { TodoService } from './../../core/service/todo.service';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, Injectable, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { ArrayDataSource } from '@angular/cdk/collections';

interface TaskList {
    name: string;
    children?: TaskList[];
}

const MASTER_LISTS: TaskList[] = [
    {
        name: 'Inbox',
        children: [
            { name: 'All Tasks' },
            { name: 'Today' },
            { name: 'Tomorrow' },
            { name: 'This Week' },
            { name: 'Trash' },
        ]
    }, {
        name: 'Lists',
        children: [
            { name: 'Ideas' },
            { name: 'Personal' },
            { name: 'Pet Projects' },
            { name: 'Productivity Hacks' },
            { name: 'Shopping' },
        ]
    }, {
        name: 'Tags',
        children: [
            { name: 'Urgent' },
            { name: 'Work' },
            { name: 'Home' }
        ]
    },
];


@Component({
    selector: 'app-dash',
    templateUrl: './dash.component.html',
    styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

    database: TodoService;

    treeControl = new NestedTreeControl<TaskList>(node => node.children);
    dataSource = new ArrayDataSource(MASTER_LISTS);

    hasChild = (_: number, node: TaskList) => !!node.children && node.children.length > 0;

    constructor(private todo: TodoService) {
    }

    ngOnInit() {
    }

}
