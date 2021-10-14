import { InputRequest } from "./InputRequest";
import { Error } from "./Error"; 

export class AddResponse {

    inputRequest: InputRequest;
    addStockTrackerStatus: string;
    stockTrackerError: Error
    
}