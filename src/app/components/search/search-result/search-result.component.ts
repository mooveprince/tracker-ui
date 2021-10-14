import { Component, OnInit, Input } from '@angular/core';
import { SearchResponse } from 'src/app/models/SearchResponse';
import { StockTracker } from 'src/app/models/StockTracker';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() searchResponse:SearchResponse;

  constructor() { }

  ngOnInit() {
  }

}
