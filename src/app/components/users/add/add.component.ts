import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl(''),
    login: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router, private _userService: UserService) { }

  ngOnInit(): void {
  }

  createUser() {
    var user: User;
    user = { id: 1 };
    user.email = this.profileForm.controls['email'].value;
    user.login = this.profileForm.controls['login'].value;
    user.password = this.profileForm.controls['password'].value;
    this._userService.postUser(user).subscribe();
    this.router.navigate(['/categories/list'])
  }

}
