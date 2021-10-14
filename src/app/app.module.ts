import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddTrackerComponent } from './components/add-tracker/add-tracker.component';
import { UploadTrackerComponent } from './components/upload-tracker/upload-tracker.component';
import { SearchResultComponent } from './components/search/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AddTrackerComponent,
    UploadTrackerComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
