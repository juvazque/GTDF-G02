import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesAddComponent } from './components/categories/add/add.component';
import { CategoriesEditComponent } from './components/categories/edit/categories-edit.component';
import { CategoriesListComponent } from './components/categories/list/list.component';
import { GroupAddComponent } from './components/groups/group-add/group-add.component';
import { GroupEditComponent } from './components/groups/group-edit/group-edit.component';
import { GroupListComponent } from './components/groups/group-list/group-list.component';
import { AddtaskComponent } from './components/tasks/addTask/addtask.component';
import { EdittaskComponent } from './components/tasks/editTask/edittask.component';
import { ListtaskComponent } from './components/tasks/listTask/listtask.component';
import { AddComponent } from './components/users/add/add.component';
import { EditComponent } from './components/users/edit/edit.component';
import { ListComponent } from './components/users/list/list.component';

const routes: Routes = [
  { path: "users/list", component: ListComponent },
  { path: "users/add", component: AddComponent },
  { path: "users/edit", component: EditComponent },
  { path: "categories/list", component: CategoriesListComponent },
  { path: "categories/add", component: CategoriesAddComponent },
  { path: "categories/edit", component: CategoriesEditComponent },
  { path: "tasks/list", component: ListtaskComponent },
  { path: "tasks/add", component: AddtaskComponent },
  { path: "tasks/edit", component: EdittaskComponent },
  { path: "groups/list", component: GroupListComponent },
  { path: "groups/add", component: GroupAddComponent },
  { path: "groups/edit", component: GroupEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
