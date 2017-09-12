import { BrowserXhr } from "@angular/http";
import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class ProgressService {
    progressEventObservable: Subject<any> = new Subject();
    progressEvent$ = this.progressEventObservable.asObservable();
}

@Injectable()
export class CustomBrowserXhr extends BrowserXhr {

    constructor(private _service: ProgressService) {
        
        super();
        console.log('service', this._service)
    }

    build(): any {
        let xhr = super.build();
        let startTime = Date.now();
        xhr.upload.onprogress = (event) => {

            let timeElapsed = Date.now() - startTime;
            let uploadSpeed = event.loaded / (timeElapsed / 1000);
            let timeRemaining = Math.ceil(((event.total - event.loaded) / uploadSpeed));

            event.uploadTimeRemaining = timeRemaining;
            event.uploadSpeed = (uploadSpeed / 1024 / 1024).toFixed(2);
            event.percentCompleted = ((event.loaded / event.total) * 100).toFixed(0);
            console.log(event, "event inside browser override");

            this._service.progressEventObservable.next(event);
        };

        return <any>(xhr);
    }

}