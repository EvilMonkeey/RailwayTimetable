import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { SearchFormModule } from './searchForm';
import { TimetableModule } from './timetable';
import { SearchService } from './search.service';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact';
import { AboutComponent } from './about';
import { TrainsComponent } from './trains';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    TrainsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchFormModule,
    TimetableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
