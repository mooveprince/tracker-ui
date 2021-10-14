import { Error } from "./Error";

export class UploadResponse {

    fileName: string;
    fileSize: number;
    fileUploadStatus: string;
    stockTrackerError: Error   

}