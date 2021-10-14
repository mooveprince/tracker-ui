import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { SearchResponse } from 'src/app/models/SearchResponse';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  symbol: string;
  displaySpinner: boolean = false;
  searchResponse: SearchResponse;

  constructor(public searchService: SearchService) { }

  ngOnInit() {
    this.displaySpinner = false;
  }

   submitForm() {
    this.displaySpinner = true;

    this.searchService.getTracker(this.symbol).subscribe((searchResponse) => {
      this.displaySpinner = false;
      this.searchResponse = searchResponse;
    })

   }

}
