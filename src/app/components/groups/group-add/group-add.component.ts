import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.css']
})
export class GroupAddComponent implements OnInit {
  profileForm = new FormGroup({
    description: new FormControl('')
  });

  constructor(private router: Router, private _groupService: GroupService) { }

  ngOnInit(): void {
  }

  createGroup() {
    var group: Group;
    group = { id_group: 1 };
    group.description = this.profileForm.controls['description'].value;
    this._groupService.postGroup(group).subscribe();
    this.router.navigate(['/groups/list'])
  }

}
