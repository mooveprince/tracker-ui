import { Error } from "./Error"; 
import { SearchRequest } from "./SearchRequest";
import { StockTracker } from "./StockTracker";

export class SearchResponse {

    stockTrackerError: Error;
    searchRequest: SearchRequest;
    stockTracker: StockTracker[];

}