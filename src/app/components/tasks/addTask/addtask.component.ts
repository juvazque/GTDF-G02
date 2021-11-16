import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  profileForm = new FormGroup({
    title: new FormControl(''),
    comments: new FormControl('')
  });

  constructor(private router: Router, private _taskService: TaskService) { }

  ngOnInit(): void {
  }

  createTask() {
    var task: Task;
    task = { id: 1 };
    task.title = this.profileForm.controls['title'].value;
    task.comments = this.profileForm.controls['comments'].value;
    this._taskService.postTask(task).subscribe();
    this.router.navigate(['/tasks/list'])
  }

}
