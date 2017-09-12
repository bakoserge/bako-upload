import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserXhr, HttpModule, JsonpModule } from "@angular/http";
import { AppComponent } from './app.component';

import { WebService, FileUploadService, ProgressService, CustomBrowserXhr } from './services-barrel';
import { BakoUploadModule } from './bako-upload/bako-upload.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BakoUploadModule
  ],
  providers: [
    ProgressService,
    { provide: BrowserXhr, useClass: CustomBrowserXhr, deps: [ProgressService] },
    WebService,
    FileUploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
