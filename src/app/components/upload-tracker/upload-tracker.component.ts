import { Component, OnInit } from '@angular/core';
import { UploadResponse } from 'src/app/models/UploadResponse';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload-tracker',
  templateUrl: './upload-tracker.component.html',
  styleUrls: ['./upload-tracker.component.css']
})
export class UploadTrackerComponent implements OnInit {

  displaySpinner: boolean = false;
  uploadResponse: UploadResponse;
  fileToUpload: File | null = null;

  constructor( public uploadService: UploadService) { }

  ngOnInit() {
    this.displaySpinner = false;
  }

  fileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  submitForm (){
    this.displaySpinner = true;

    this.uploadService.uploadTracker(this.fileToUpload).subscribe((response) => {
      this.displaySpinner = false;
      this.uploadResponse = response;
    })

  }

}
