import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {
  private id: number = 0;

  profileForm = new FormGroup({
    description: new FormControl('')
  });

  constructor(private router: Router, private route: ActivatedRoute, private _groupService: GroupService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }

  updateGroup() {
    var group: Group;
    group = { id_group: 1 };
    this._groupService.getGroup(this.id).subscribe(apiData => (group = apiData));
    group.description = this.profileForm.controls['description'].value;
    this._groupService.putGroup(this.id, group).subscribe();
    this.router.navigate(['/groups/list'])
  }

}
