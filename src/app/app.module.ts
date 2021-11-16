import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddtaskComponent } from './components/tasks/addtask/addtask.component';
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
import { TasksAddComponent } from './components/tasks/tasks-add/tasks-add.component';
import { TasksEditComponent } from './components/tasks/tasks-edit/tasks-edit.component';
import { TasksListComponent } from './components/tasks/tasks-list/tasks-list.component';

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
    TasksAddComponent,
    TasksEditComponent,
    TasksListComponent
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
