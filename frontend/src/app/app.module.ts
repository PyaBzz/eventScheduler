import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { ApiService } from './services/api.service';
import { The } from './the.refs';
import { EntryService } from './services/entry.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent
  ],
  providers: [
    DatePipe,
    { provide: The.ApiService, useClass: ApiService },
    { provide: The.EntryService, useClass: EntryService }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }