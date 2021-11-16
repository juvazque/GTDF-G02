import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesAddComponent } from './components/categories/add/add.component';
import { CategoriesEditComponent } from './components/categories/edit/edit.component';
import { CategoriesListComponent } from './components/categories/list/list.component';
import { UsersAddComponent } from './components/users/add/add.component';
import { UsersEditComponent } from './components/users/edit/edit.component';
import { UsersListComponent } from './components/users/list/list.component';

const routes: Routes = [
  {path:"users/list", component:UsersListComponent},
  {path:"users/add", component:UsersAddComponent},
  {path:"users/edit", component:UsersEditComponent},
  {path:"categories/list", component:CategoriesListComponent},
  {path:"categories/add", component:CategoriesAddComponent},
  {path:"categories/edit", component:CategoriesEditComponent},
  /*{path:"tasks/list", component:TasksListComponent},
  {path:"tasks/add", component:TasksAddComponent},
  {path:"tasks/edit", component:TasksEditComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
