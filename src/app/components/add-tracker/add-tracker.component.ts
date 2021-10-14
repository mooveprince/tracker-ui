import { Component, OnInit } from '@angular/core';
import { AddResponse } from 'src/app/models/AddResponse';
import { StockTracker } from 'src/app/models/StockTracker';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-add-tracker',
  templateUrl: './add-tracker.component.html',
  styleUrls: ['./add-tracker.component.css']
})
export class AddTrackerComponent implements OnInit {

  displaySpinner: boolean = false;
  stockTracker: StockTracker = new StockTracker();
  addResponse: AddResponse;

  constructor( public addService: AddService ) { }

  ngOnInit() {
    this.displaySpinner = false;
  }

   submitForm() {
    this.displaySpinner = true;

    this.addService.addTracker(this.stockTracker).subscribe((response) => {
      this.displaySpinner = false;
      this.addResponse = response;
    })

  }

}
