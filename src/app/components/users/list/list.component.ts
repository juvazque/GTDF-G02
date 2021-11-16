import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: '<app-list>',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _userService: UserService) { }

  userList: any = [];

  ngOnInit(): void {
    this.refreshList();
  }

  deleteUser(user: User) {
    this._userService.deleteUser(user.id).subscribe();
    this.refreshList();

    window.location.reload();
  }

  refreshList() {

    this._userService.getUsers().subscribe(data => this.userList = data);
  }

}
