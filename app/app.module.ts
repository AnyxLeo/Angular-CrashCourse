import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, AutoCompleteModule, CheckboxModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LikeComponent } from './components/like.component';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
//import { NotFoundComponent } from './Components/not-found.component';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpModule, routing, CalendarModule, AutoCompleteModule, BrowserAnimationsModule, CheckboxModule],
    declarations: [AppComponent, LikeComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' } ],
    bootstrap: [AppComponent]

})
export class AppModule { }

//providers: [{ provide: APP_BASE_HREF, useValue: '/' }],

