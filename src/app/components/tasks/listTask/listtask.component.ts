import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-listtask',
  templateUrl: './listtask.component.html',
  styleUrls: ['./listtask.component.css']
})
export class ListtaskComponent implements OnInit {

  constructor(private _taskService: TaskService) { }

  taskList:any=[]

  ngOnInit(): void {
    this.refreshList();
  }

  deleteTask(task: Task) {
    this._taskService.deleteTask(task.id).subscribe();
    this.refreshList();

    window.location.reload();
  }

  refreshList() {

    this._taskService.getTasks().subscribe(data => this.taskList = data);
  }

}
