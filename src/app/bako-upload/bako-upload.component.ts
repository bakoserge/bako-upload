import { Component, OnInit,
  ViewChild, EventEmitter,
  Directive, ChangeDetectorRef } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { FileUploadService, ProgressService } from '../services-barrel';

@Component({
    moduleId: module.id,
    selector: 'bako-upload',
    templateUrl: 'bako-upload.component.html',
    styleUrls: ['bako-upload.component.scss']
})
export class BakoUploadComponent {
  uploadedFiles = [];
  uploadError;
  currentStatus: number;
  uploadFieldName = 'photos';
  filesAdded: any[] = [];
  progress: any;
  speed: any;
  timeRemaining: any;
  fileToUpload: any;

  readonly STATUS_INITIAL = 0;
  readonly STATUS_SAVING = 1;
  readonly STATUS_SUCCESS = 2;
  readonly STATUS_FAILED = 3;

  constructor(private _svc: FileUploadService,
      private _progressService: ProgressService,
      private cdr: ChangeDetectorRef,
  ) {
      this.reset(); // set initial state

      this._progressService.progressEvent$.subscribe((event) => {
          console.log('event progress', event)
          this.progress = event.percentCompleted;
          this.speed = event.uploadSpeed;
          this.timeRemaining = event.uploadTimeRemaining;
          this.update();
          this.cdr.detectChanges();
      });

  }

  ngOnInit() {

  }


  reset() {
      this.currentStatus = this.STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
  }

  //https://devblog.dymel.pl/2016/09/02/upload-file-image-angular2-aspnetcore/
  @ViewChild("photos") fileInput;

  update() {
      this.fileToUpload.progress = this.progress;
  }

  outputFiles: any = [];

  save(): void {

      let fi = this.fileInput.nativeElement;
      // upload data to the server
      this.currentStatus = this.STATUS_SAVING;
      if (fi.files && fi.files.length > 0) {

          //this.filesAdded =  fi.files;

          console.log('before outputFiles', this.outputFiles);
          console.log('fi.files', fi.files);

          if (this.outputFiles.length === 0) {
              this.outputFiles = Object.keys(fi.files).map(function (key) {
                  return fi.files[key]; //{ type: key, name: fi.files[key] };
              });
          }

          console.log('after outputFiles', this.outputFiles);

          this.fileToUpload = this.outputFiles.pop();
          this.fileToUpload.progress = 0;

          console.log('fileToUpload', this.fileToUpload);

          this.filesAdded.push(this.fileToUpload);

          this._svc.upload(this.fileToUpload)
              .subscribe(event => {
                  console.log('event', event);
                  this.uploadedFiles = [].concat(event);
                  this.currentStatus = this.STATUS_INITIAL;

              },
              error => {
                  console.log("Error saving");
                  this.currentStatus = this.STATUS_FAILED;
                  return Observable.throw(error);
              },
              () => {
                  console.log('complete');
                  if (this.outputFiles.length > 0) {
                      this.save();
                  }
                  else
                  {
                      this.outputFiles = [];
                      return;
                  }
              }
              );

          console.log('my files', this.filesAdded)
      }
  }
}
