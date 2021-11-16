import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/users/list/list.component';
import { AddComponent } from './components/users/add/add.component';
import { EditComponent } from './components/users/edit/edit.component';
import { FooterComponent } from './components/fragments/footer/footer.component';
import { HeadComponent } from './components/fragments/head/head.component';
import { NavComponent } from './components/fragments/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    FooterComponent,
    HeadComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
