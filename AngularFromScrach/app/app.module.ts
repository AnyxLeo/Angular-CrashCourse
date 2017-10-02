import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleCasePipe } from './components/pipeTitleCase.pipe';
@NgModule({
    imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TitleCasePipe],
  providers: [],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }