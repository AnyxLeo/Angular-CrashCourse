import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './components/favorite.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [AppComponent, FavoriteComponent],
  providers: [],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }