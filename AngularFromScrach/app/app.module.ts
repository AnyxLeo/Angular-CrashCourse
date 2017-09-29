import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './components/authors.component';
import { AuthorsService } from './services/authors.service';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [AppComponent, AuthorsComponent],
  providers: [AuthorsService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }