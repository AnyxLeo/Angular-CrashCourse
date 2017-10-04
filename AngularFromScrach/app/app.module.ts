import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LikeComponent } from './components/like.component';
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, LikeComponent],
  providers: [],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }