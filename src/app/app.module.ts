import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddtaskComponent } from './components/tasks/addtask/addtask.component';
import { EdittaskComponent } from './components/tasks/editTask/edittask.component';
import { ListtaskComponent } from './components/tasks/listTask/listtask.component';
import { FooterComponent } from './components/fragments/footer/footer.component';
import { HeadComponent } from './components/fragments/head/head.component';
import { NavComponent } from './components/fragments/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    EdittaskComponent,
    ListtaskComponent,
    FooterComponent,
    HeadComponent,
    NavComponent
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
