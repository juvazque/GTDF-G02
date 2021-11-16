import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesAddComponent } from './components/categories/add/add.component';
import { CategoriesEditComponent } from './components/categories/edit/categories-edit.component';
import { CategoriesListComponent } from './components/categories/list/list.component';
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
  { path: "tasks/edit", component: EdittaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
