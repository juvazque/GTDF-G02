import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private id: number = 0;

  profileForm = new FormGroup({
    email: new FormControl(''),
    login: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router, private route: ActivatedRoute, private _userService: UserService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }

  updateUser() {
    var user: User;
    user={id:1};
    this._userService.getUser(this.id).subscribe(apiData => (user = apiData));
    user.email=this.profileForm.controls['email'].value;
    user.login=this.profileForm.controls['login'].value;
    user.password=this.profileForm.controls['password'].value;
    this._userService.putUser(this.id, user).subscribe();
    this.router.navigate(['/users/list'])
  }

}
