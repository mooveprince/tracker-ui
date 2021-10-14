import { Error } from "./Error"; 
import { SearchRequest } from "./SearchRequest";
import { StockTracker } from "./StockTracker";

export class SearchResponse {

    error: Error;
    searchRequest: SearchRequest;
    stockTracker: StockTracker[];

}