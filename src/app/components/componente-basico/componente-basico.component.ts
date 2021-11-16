import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-componente-basico',
  templateUrl: './componente-basico.component.html',
  styleUrls: ['./componente-basico.component.css']
})
export class ComponenteBasicoComponent implements OnInit {
  public users: Array<User>;
  public user: User;
  public userGuardar: User
  public userActualizar: User

  constructor(private _userService: UserService) {
    this.users = [];
    this.user = {};
    this.userGuardar = {email:'email@guardado.com', admin:false, };
    this.userActualizar = {email:'email@actualizado.com'};
  }

  ngOnInit(): void {
    // this._userService.postUser(this.userGuardar).subscribe(); //bien
    // this._userService.putUser(2, this.userActualizar).subscribe(); //bien
    // this._userService.deleteUser(21).subscribe(); //bien
    // this._userService.blockUser(4).subscribe(); //bien
    this._userService.getUsers().subscribe(apiData => (this.users = apiData)); //bien
    this._userService.getUser(2).subscribe(apiData => (this.user = apiData)); //bien
  }

}
