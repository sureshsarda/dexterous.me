import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';


export class TaskList {
    id: string;
    subtasks: TaskList[];
    desc: string;
    type: any;
}

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    db: firebase.firestore.Firestore;

    taskLists = new BehaviorSubject<TaskList[]>([]);
    autoTaskLists = new BehaviorSubject<TaskList[]>([]);

    constructor() {
        this.db = firebase.firestore()
    }

    async getLists(userid: string) {
        const lists = await this.getUserRef(userid).collection('lists').get();

        lists.forEach(element => {
            console.log(element.id);
            console.log(element.data())
        });
    }

    async lists(userid: string) {

        const listSnaps = await this.db.collection('users/' + userid + '/lists').get();
        listSnaps.forEach((doc) => {
            console.log(doc)
        })

    }

    async addTask(userid: string, listid: string, task: string) {
        await this.getListRef(userid, listid).set(
            {
                'desc': task
            }
        )
    }

    private collector() {

    }

    private getListRef(userid: string, listid: string): firebase.firestore.DocumentReference {
        return this.db.collection('users').doc(userid).collection('lists').doc(listid)
    }

    private getUserRef(userid: string): firebase.firestore.DocumentReference {
        return this.db.collection('users').doc(userid)
    }

}
