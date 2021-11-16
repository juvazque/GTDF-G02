import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  constructor(private _groupService: GroupService) { }

  groupsList: any = [];

  ngOnInit(): void {

    this.refreshList();
  }

  deleteGroup(group: Group) {
    this._groupService.deleteGroup(group.id_group).subscribe();
    this.refreshList();
    window.location.reload();

  }

  refreshList() {

    this._groupService.getGroups().subscribe(data => this.groupsList = data);
  }

}
