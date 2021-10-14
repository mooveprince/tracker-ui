import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SearchComponent} from './components/search/search.component';
import {UploadTrackerComponent} from './components/upload-tracker/upload-tracker.component';
import { AddTrackerComponent } from './components/add-tracker/add-tracker.component';

const routes: Routes = [
    {path: 'search' , component: SearchComponent},
    {path: 'upload' , component: UploadTrackerComponent},
    {path: 'add' , component: AddTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  


}
