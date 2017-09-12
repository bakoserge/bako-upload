// Angular Imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// This Module's Components
import { BakoUploadComponent } from './bako-upload.component';

@NgModule({
    imports: [
      FormsModule,
      BrowserModule
    ],
    declarations: [
        BakoUploadComponent,
    ],
    exports: [
        BakoUploadComponent,
    ]
})
export class BakoUploadModule {

}
