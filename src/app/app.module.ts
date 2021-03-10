import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {KindergartenListComponent} from './kindergarten-list/kindergarten-list.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SummaryComponent} from './summary/summary.component';
import {CommonModule} from '@angular/common';
import { VotesPipe } from './votes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KindergartenListComponent,
    SummaryComponent,
    VotesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
