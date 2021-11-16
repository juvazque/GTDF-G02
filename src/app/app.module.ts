import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddtaskComponent } from './components/tasks/addTask/addtask.component';
import { EdittaskComponent } from './components/tasks/editTask/edittask.component';
import { ListtaskComponent } from './components/tasks/listTask/listtask.component';
import { ListComponent } from './components/users/list/list.component';
import { AddComponent } from './components/users/add/add.component';
import { EditComponent } from './components/users/edit/edit.component';
import { CategoriesListComponent } from './components/categories/list/list.component';
import { CategoriesAddComponent } from './components/categories/add/add.component';
import { CategoriesEditComponent } from './components/categories/edit/categories-edit.component';
import { FooterComponent } from './components/fragments/footer/footer.component';
import { HeadComponent } from './components/fragments/head/head.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/fragments/nav/nav.component';
import { GroupAddComponent } from './components/groups/group-add/group-add.component';
import { GroupEditComponent } from './components/groups/group-edit/group-edit.component';
import { GroupListComponent } from './components/groups/group-list/group-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    EdittaskComponent,
    ListtaskComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    FooterComponent,
    HeadComponent,
    NavComponent,
    CategoriesListComponent,
    CategoriesAddComponent,
    CategoriesEditComponent,
    GroupAddComponent,
    GroupEditComponent,
    GroupListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
