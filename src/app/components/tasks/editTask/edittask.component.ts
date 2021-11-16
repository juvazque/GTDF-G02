import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  private id: number = 0;

  profileForm = new FormGroup({
    title: new FormControl(''),
    comments: new FormControl('')
  });

  constructor(private router: Router, private route: ActivatedRoute, private _taskService: TaskService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }

  updateTask() {
    var task: Task;
    task = { id: 1 };
    this._taskService.getTask(this.id).subscribe(apiData => (task = apiData));
    task.title = this.profileForm.controls['title'].value;
    task.comments = this.profileForm.controls['comments'].value;
    this._taskService.putTask(this.id, task).subscribe();
    this.router.navigate(['/tasks/list'])
  }

}
